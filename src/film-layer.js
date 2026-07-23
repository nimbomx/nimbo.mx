import {
  BufferAttribute,
  BufferGeometry,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
} from 'three';

const DEFAULT_SELECTOR = '[data-film-layer]';
const STATIC_CLASS = 'film-layer--static';
const ACTIVE_CLASS = 'film-layer--active';
const MAX_DEVICE_PIXEL_RATIO = 1.5;

const VERTEX_SHADER = /* glsl */ `
  varying vec2 vUv;

  void main() {
    vUv = uv;
    gl_Position = vec4(position.xy, 0.0, 1.0);
  }
`;

const FRAGMENT_SHADER = /* glsl */ `
  precision highp float;

  uniform float uTime;
  uniform vec2 uResolution;
  varying vec2 vUv;

  float hash21(vec2 point) {
    point = fract(point * vec2(123.34, 456.21));
    point += dot(point, point + 45.32);
    return fract(point.x * point.y);
  }

  void main() {
    vec2 resolution = max(uResolution, vec2(1.0));
    float filmFrame = floor(uTime * 18.0);

    // Less than one physical pixel of gate weave keeps the image alive without
    // making typography appear to move.
    vec2 gateWeave = vec2(
      sin(uTime * 1.73) * 0.62,
      cos(uTime * 1.19) * 0.38
    );
    vec2 pixel = floor(vUv * resolution + gateWeave);

    float grain = hash21(pixel + filmFrame * vec2(11.73, 7.91));
    float grainTone = step(0.5, grain);
    float flicker = 0.82 + hash21(vec2(filmFrame, 9.17)) * 0.18;
    float grainAlpha = (0.006 + abs(grain - 0.5) * 0.021) * flicker;

    // A single intermittent hairline emulates a damaged film strip. It changes
    // slowly, and most epochs deliberately contain no scratch.
    float scratchEpoch = floor(uTime * 0.52);
    float scratchX = hash21(vec2(scratchEpoch, 31.41)) * resolution.x;
    float scratchDistance = abs(pixel.x - scratchX);
    float scratchPresence = step(
      0.78,
      hash21(vec2(scratchEpoch, 73.19))
    );
    float scratchTexture = 0.38 + 0.62 * hash21(
      vec2(floor(pixel.y / 41.0), scratchEpoch)
    );
    float scratch = (1.0 - smoothstep(0.0, 1.15, scratchDistance))
      * scratchPresence
      * scratchTexture;

    float alpha = min(0.054, grainAlpha + scratch * 0.035);
    float tone = mix(grainTone, 1.0, step(0.001, scratch));

    gl_FragColor = vec4(vec3(tone), alpha);
  }
`;

const instances = new WeakMap();

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

function captureAttribute(element, name) {
  return {
    present: element.hasAttribute(name),
    value: element.getAttribute(name),
  };
}

function restoreAttribute(element, name, snapshot) {
  if (snapshot.present) {
    element.setAttribute(name, snapshot.value ?? '');
  } else {
    element.removeAttribute(name);
  }
}

function addEvent(target, type, handler, options) {
  if (!target?.addEventListener) {
    return () => {};
  }

  target.addEventListener(type, handler, options);
  return () => target.removeEventListener(type, handler, options);
}

function addMediaQueryListener(mediaQuery, handler) {
  if (mediaQuery?.addEventListener) {
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }

  if (mediaQuery?.addListener) {
    mediaQuery.addListener(handler);
    return () => mediaQuery.removeListener(handler);
  }

  return () => {};
}

function runSafely(callback) {
  try {
    callback?.();
  } catch {
    // Cleanup must remain best-effort so one lost WebGL resource cannot keep
    // the remaining observers, buffers, or canvas alive.
  }
}

function seededValue(index, salt) {
  const value = Math.sin(index * 91.713 + salt * 17.193) * 43758.5453;
  return value - Math.floor(value);
}

function isElement(value) {
  return Boolean(value && value.nodeType === 1 && value.ownerDocument);
}

function rectTouchesViewport(rect, view) {
  const viewportWidth =
    view.innerWidth || view.document?.documentElement?.clientWidth || 0;
  const viewportHeight =
    view.innerHeight || view.document?.documentElement?.clientHeight || 0;

  return (
    rect.width > 0 &&
    rect.height > 0 &&
    rect.bottom > 0 &&
    rect.right > 0 &&
    rect.top < viewportHeight &&
    rect.left < viewportWidth
  );
}

/**
 * Decorative, non-interactive film texture for a single host element.
 *
 * The constructor is intentionally tolerant: environmental failures become a
 * static CSS fallback instead of escaping as runtime errors.
 */
export class FilmLayer {
  constructor(host, options = {}) {
    if (!isElement(host)) {
      throw new TypeError('FilmLayer requires a DOM element.');
    }

    this.host = host;
    this.document = host.ownerDocument;
    this.view = this.document.defaultView;
    this.options = {
      maxDpr: clamp(
        Number.isFinite(options.maxDpr) ? options.maxDpr : MAX_DEVICE_PIXEL_RATIO,
        0.5,
        MAX_DEVICE_PIXEL_RATIO,
      ),
      minParticles: clamp(
        Math.round(
          Number.isFinite(options.minParticles) ? options.minParticles : 24,
        ),
        0,
        300,
      ),
      maxParticles: clamp(
        Math.round(
          Number.isFinite(options.maxParticles) ? options.maxParticles : 150,
        ),
        0,
        400,
      ),
      pixelsPerParticle: Math.max(
        8_000,
        Number.isFinite(options.pixelsPerParticle)
          ? options.pixelsPerParticle
          : 18_000,
      ),
      maxFps: clamp(
        Number.isFinite(options.maxFps) ? options.maxFps : 30,
        12,
        60,
      ),
    };
    this.options.maxParticles = Math.max(
      this.options.minParticles,
      this.options.maxParticles,
    );

    this.initialState = {
      activeClass: host.classList.contains(ACTIVE_CLASS),
      staticClass: host.classList.contains(STATIC_CLASS),
      layerState: captureAttribute(host, 'data-film-layer-state'),
      fallback: captureAttribute(host, 'data-film-layer-fallback'),
      inlinePosition: host.style.position,
    };

    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.canvas = null;
    this.filmGeometry = null;
    this.filmMaterial = null;
    this.dustGeometry = null;
    this.dustMaterial = null;
    this.dust = null;
    this.dustMotion = null;
    this.particleCount = 0;
    this.frameRequest = null;
    this.lastFrameTime = null;
    this.elapsedTime = 0;
    this.drawable = false;
    this.positionAdjusted = false;
    this.destroyed = false;
    this.permanentFallback = null;
    this.cleanups = [];
    this.rendererCleanups = [];

    this.pageVisible = this.document.visibilityState !== 'hidden';
    this.intersecting = this.view
      ? rectTouchesViewport(host.getBoundingClientRect(), this.view)
      : false;

    this.motionQuery = this.view?.matchMedia
      ? this.view.matchMedia('(prefers-reduced-motion: reduce)')
      : null;
    this.connection =
      this.view?.navigator?.connection ||
      this.view?.navigator?.mozConnection ||
      this.view?.navigator?.webkitConnection ||
      null;

    this.onFrame = this.onFrame.bind(this);
    this.onVisibilityChange = this.onVisibilityChange.bind(this);
    this.onPreferenceChange = this.onPreferenceChange.bind(this);
    this.onResize = this.onResize.bind(this);
    this.onContextLost = this.onContextLost.bind(this);

    this.installLifecycleObservers();
    this.evaluateEnvironment();
  }

  get isStatic() {
    return this.host.getAttribute('data-film-layer-state') === 'static';
  }

  get fallbackReason() {
    return this.host.getAttribute('data-film-layer-fallback');
  }

  installLifecycleObservers() {
    this.cleanups.push(
      addEvent(
        this.document,
        'visibilitychange',
        this.onVisibilityChange,
      ),
      addEvent(
        this.document,
        'nimbo:motionchange',
        this.onPreferenceChange,
      ),
      addMediaQueryListener(this.motionQuery, this.onPreferenceChange),
    );

    if (this.connection) {
      this.cleanups.push(
        addEvent(this.connection, 'change', this.onPreferenceChange),
      );
    }

    const ResizeObserverClass = this.view?.ResizeObserver;
    if (ResizeObserverClass) {
      this.resizeObserver = new ResizeObserverClass(this.onResize);
      this.resizeObserver.observe(this.host);
      this.cleanups.push(() => this.resizeObserver?.disconnect());
    } else if (this.view) {
      this.cleanups.push(addEvent(this.view, 'resize', this.onResize));
    }

    const IntersectionObserverClass = this.view?.IntersectionObserver;
    if (IntersectionObserverClass) {
      this.intersectionObserver = new IntersectionObserverClass(
        (entries) => {
          const entry = entries.find(({ target }) => target === this.host);
          if (!entry) {
            return;
          }

          this.intersecting = entry.isIntersecting && entry.intersectionRatio > 0;
          this.syncAnimationLoop();
        },
        { threshold: 0 },
      );
      this.intersectionObserver.observe(this.host);
      this.cleanups.push(() => this.intersectionObserver?.disconnect());
    } else if (this.view) {
      const updateIntersection = () => {
        this.intersecting = rectTouchesViewport(
          this.host.getBoundingClientRect(),
          this.view,
        );
        this.syncAnimationLoop();
      };
      this.cleanups.push(
        addEvent(this.view, 'scroll', updateIntersection, { passive: true }),
      );
    }
  }

  currentPreferenceFallback() {
    if (this.document.documentElement?.dataset.motion === 'off') {
      return 'motion-disabled';
    }

    if (this.motionQuery?.matches) {
      return 'reduced-motion';
    }

    if (this.connection?.saveData === true) {
      return 'data-saver';
    }

    return null;
  }

  evaluateEnvironment() {
    if (this.destroyed) {
      return;
    }

    const fallback =
      this.currentPreferenceFallback() || this.permanentFallback;

    if (fallback) {
      this.activateStaticFallback(fallback);
      return;
    }

    if (!this.renderer) {
      this.mountRenderer();
    } else {
      this.markActive();
      this.onResize();
      this.syncAnimationLoop();
    }
  }

  mountRenderer() {
    if (!this.view || !this.document?.createElement) {
      this.permanentFallback = 'webgl-unavailable';
      this.activateStaticFallback(this.permanentFallback);
      return;
    }

    const canvas = this.document.createElement('canvas');
    canvas.setAttribute('aria-hidden', 'true');
    canvas.setAttribute('data-film-layer-canvas', '');
    canvas.tabIndex = -1;
    Object.assign(canvas.style, {
      position: 'absolute',
      inset: '0',
      width: '100%',
      height: '100%',
      display: 'block',
      pointerEvents: 'none',
      userSelect: 'none',
    });

    const contextAttributes = {
      alpha: true,
      antialias: false,
      depth: false,
      stencil: false,
      premultipliedAlpha: true,
      preserveDrawingBuffer: false,
      powerPreference: 'low-power',
    };

    let context = null;
    try {
      context =
        canvas.getContext('webgl2', contextAttributes) ||
        canvas.getContext('webgl', contextAttributes);
    } catch {
      context = null;
    }

    if (!context) {
      this.permanentFallback = 'webgl-unavailable';
      this.activateStaticFallback(this.permanentFallback);
      return;
    }

    try {
      this.renderer = new WebGLRenderer({
        canvas,
        context,
        alpha: true,
        antialias: false,
        powerPreference: 'low-power',
        premultipliedAlpha: true,
      });
      this.renderer.setClearColor(0x000000, 0);
      this.renderer.setPixelRatio(
        Math.min(
          this.view.devicePixelRatio || 1,
          this.options.maxDpr,
          MAX_DEVICE_PIXEL_RATIO,
        ),
      );

      this.scene = new Scene();
      this.camera = new OrthographicCamera(-1, 1, 1, -1, 0.1, 10);
      this.camera.position.z = 1;

      this.filmGeometry = new PlaneGeometry(2, 2);
      this.filmMaterial = new ShaderMaterial({
        vertexShader: VERTEX_SHADER,
        fragmentShader: FRAGMENT_SHADER,
        uniforms: {
          uTime: { value: 0 },
          uResolution: { value: new Vector2(1, 1) },
        },
        transparent: true,
        depthTest: false,
        depthWrite: false,
        toneMapped: false,
      });
      const film = new Mesh(this.filmGeometry, this.filmMaterial);
      film.frustumCulled = false;
      film.renderOrder = 0;
      this.scene.add(film);

      this.canvas = canvas;
      this.ensurePositionedHost();
      this.host.append(canvas);
      this.rendererCleanups.push(
        addEvent(canvas, 'webglcontextlost', this.onContextLost),
      );

      this.markActive();
      this.onResize();
      this.syncAnimationLoop();
    } catch {
      this.permanentFallback = 'renderer-error';
      this.activateStaticFallback(this.permanentFallback);
    }
  }

  ensurePositionedHost() {
    if (!this.view?.getComputedStyle) {
      return;
    }

    const position = this.view.getComputedStyle(this.host).position;
    if (position === 'static') {
      this.host.style.position = 'relative';
      this.positionAdjusted = true;
    }
  }

  markActive() {
    this.host.classList.add(ACTIVE_CLASS);
    this.host.classList.remove(STATIC_CLASS);
    this.host.setAttribute('data-film-layer-state', 'active');
    this.host.removeAttribute('data-film-layer-fallback');
  }

  activateStaticFallback(reason) {
    this.stopAnimationLoop();
    this.releaseRenderer();
    this.host.classList.remove(ACTIVE_CLASS);
    this.host.classList.add(STATIC_CLASS);
    this.host.setAttribute('data-film-layer-state', 'static');
    this.host.setAttribute('data-film-layer-fallback', reason);
  }

  onVisibilityChange() {
    this.pageVisible = this.document.visibilityState !== 'hidden';
    this.syncAnimationLoop();
  }

  onPreferenceChange() {
    this.evaluateEnvironment();
  }

  onContextLost(event) {
    event.preventDefault?.();
    this.permanentFallback = 'webgl-context-lost';
    this.activateStaticFallback(this.permanentFallback);
  }

  onResize() {
    if (this.destroyed || !this.renderer || !this.canvas) {
      return;
    }

    try {
      const rect = this.host.getBoundingClientRect();
      const width = Math.max(0, Math.round(rect.width || this.host.clientWidth));
      const height = Math.max(
        0,
        Math.round(rect.height || this.host.clientHeight),
      );
      this.drawable = width > 1 && height > 1;

      if (!this.drawable) {
        this.syncAnimationLoop();
        return;
      }

      const devicePixelRatio = Math.min(
        this.view?.devicePixelRatio || 1,
        this.options.maxDpr,
        MAX_DEVICE_PIXEL_RATIO,
      );
      this.renderer.setPixelRatio(devicePixelRatio);
      this.renderer.setSize(width, height, false);
      this.filmMaterial?.uniforms.uResolution.value.set(
        Math.max(1, Math.round(width * devicePixelRatio)),
        Math.max(1, Math.round(height * devicePixelRatio)),
      );

      const viewportArea = Math.max(
        1,
        (this.view?.innerWidth || width) * (this.view?.innerHeight || height),
      );
      const effectiveArea = Math.min(width * height, viewportArea * 1.5);
      const desiredParticles = Math.round(
        effectiveArea / this.options.pixelsPerParticle,
      );
      const particleCount = Math.round(
        clamp(
          desiredParticles,
          this.options.minParticles,
          this.options.maxParticles,
        ),
      );

      if (particleCount !== this.particleCount) {
        this.rebuildDust(particleCount);
      }

      this.syncAnimationLoop();
    } catch {
      this.permanentFallback = 'renderer-error';
      this.activateStaticFallback(this.permanentFallback);
    }
  }

  rebuildDust(count) {
    if (!this.scene) {
      return;
    }

    if (this.dust) {
      this.scene.remove(this.dust);
    }
    this.dustGeometry?.dispose();
    this.dustMaterial?.dispose();

    const positions = new Float32Array(count * 3);
    const motion = new Float32Array(count * 2);

    for (let index = 0; index < count; index += 1) {
      const offset = index * 3;
      positions[offset] = seededValue(index, 1.17) * 2.0 - 1.0;
      positions[offset + 1] = seededValue(index, 2.31) * 2.0 - 1.0;
      positions[offset + 2] = 0.1;
      motion[index * 2] = 0.012 + seededValue(index, 4.73) * 0.032;
      motion[index * 2 + 1] =
        (seededValue(index, 8.19) - 0.5) * 0.006;
    }

    this.dustGeometry = new BufferGeometry();
    this.dustGeometry.setAttribute(
      'position',
      new BufferAttribute(positions, 3),
    );
    this.dustMaterial = new PointsMaterial({
      color: 0xf1eee6,
      size: 1.2,
      transparent: true,
      opacity: 0.16,
      depthTest: false,
      depthWrite: false,
      sizeAttenuation: false,
      toneMapped: false,
    });
    this.dust = new Points(this.dustGeometry, this.dustMaterial);
    this.dust.frustumCulled = false;
    this.dust.renderOrder = 1;
    this.scene.add(this.dust);
    this.dustMotion = motion;
    this.particleCount = count;
  }

  updateDust(delta, elapsed) {
    const positions = this.dustGeometry?.attributes.position;
    if (!positions || !this.dustMotion || !this.dust) {
      return;
    }

    const values = positions.array;
    for (let index = 0; index < this.particleCount; index += 1) {
      const offset = index * 3;
      const speed = this.dustMotion[index * 2];
      const drift = this.dustMotion[index * 2 + 1];

      values[offset] +=
        Math.sin(elapsed * 0.27 + index * 1.73) * drift * delta;
      values[offset + 1] -= speed * delta;

      if (values[offset + 1] < -1.04) {
        values[offset] = seededValue(index, elapsed + 13.7) * 2.0 - 1.0;
        values[offset + 1] = 1.04;
      }
      if (values[offset] < -1.04) {
        values[offset] = 1.04;
      } else if (values[offset] > 1.04) {
        values[offset] = -1.04;
      }
    }

    positions.needsUpdate = true;
    this.dust.position.set(
      Math.sin(elapsed * 1.73) * 0.0018,
      Math.cos(elapsed * 1.19) * 0.0012,
      0,
    );
  }

  shouldAnimate() {
    return Boolean(
      !this.destroyed &&
        this.renderer &&
        this.drawable &&
        this.pageVisible &&
        this.intersecting &&
        typeof this.view?.requestAnimationFrame === 'function' &&
        !this.currentPreferenceFallback() &&
        !this.permanentFallback,
    );
  }

  syncAnimationLoop() {
    if (this.shouldAnimate()) {
      if (this.frameRequest === null) {
        this.lastFrameTime = null;
        this.frameRequest = this.view.requestAnimationFrame(this.onFrame);
      }
      return;
    }

    this.stopAnimationLoop();
  }

  stopAnimationLoop() {
    if (this.frameRequest !== null && this.view?.cancelAnimationFrame) {
      this.view.cancelAnimationFrame(this.frameRequest);
    }
    this.frameRequest = null;
    this.lastFrameTime = null;
  }

  onFrame(timestamp) {
    this.frameRequest = null;
    if (!this.shouldAnimate()) {
      return;
    }

    const minimumFrameDuration = 1_000 / this.options.maxFps;
    if (
      this.lastFrameTime !== null &&
      timestamp - this.lastFrameTime < minimumFrameDuration
    ) {
      this.frameRequest = this.view.requestAnimationFrame(this.onFrame);
      return;
    }

    const delta =
      this.lastFrameTime === null
        ? 0
        : Math.min(0.08, (timestamp - this.lastFrameTime) / 1_000);
    this.lastFrameTime = timestamp;
    this.elapsedTime += delta;
    this.filmMaterial.uniforms.uTime.value = this.elapsedTime;
    this.updateDust(delta, this.elapsedTime);

    try {
      this.renderer.render(this.scene, this.camera);
    } catch {
      this.permanentFallback = 'renderer-error';
      this.activateStaticFallback(this.permanentFallback);
      return;
    }

    this.frameRequest = this.view.requestAnimationFrame(this.onFrame);
  }

  releaseRenderer() {
    this.stopAnimationLoop();
    this.rendererCleanups
      .splice(0)
      .forEach((cleanup) => runSafely(cleanup));

    if (this.dust && this.scene) {
      runSafely(() => this.scene.remove(this.dust));
    }
    runSafely(() => this.dustGeometry?.dispose());
    runSafely(() => this.dustMaterial?.dispose());
    runSafely(() => this.filmGeometry?.dispose());
    runSafely(() => this.filmMaterial?.dispose());
    runSafely(() => this.renderer?.dispose());
    runSafely(() => this.canvas?.remove());

    this.renderer = null;
    this.scene = null;
    this.camera = null;
    this.canvas = null;
    this.filmGeometry = null;
    this.filmMaterial = null;
    this.dustGeometry = null;
    this.dustMaterial = null;
    this.dust = null;
    this.dustMotion = null;
    this.particleCount = 0;
    this.drawable = false;

    if (this.positionAdjusted) {
      this.host.style.position = this.initialState.inlinePosition;
      this.positionAdjusted = false;
    }
  }

  destroy() {
    if (this.destroyed) {
      return;
    }

    this.destroyed = true;
    this.stopAnimationLoop();
    this.cleanups.splice(0).forEach((cleanup) => runSafely(cleanup));
    this.releaseRenderer();

    this.host.classList.toggle(ACTIVE_CLASS, this.initialState.activeClass);
    this.host.classList.toggle(STATIC_CLASS, this.initialState.staticClass);
    restoreAttribute(
      this.host,
      'data-film-layer-state',
      this.initialState.layerState,
    );
    restoreAttribute(
      this.host,
      'data-film-layer-fallback',
      this.initialState.fallback,
    );
    instances.delete(this.host);
  }
}

export function createFilmLayer(host, options = {}) {
  const existing = instances.get(host);
  if (existing && !existing.destroyed) {
    return existing;
  }

  const layer = new FilmLayer(host, options);
  instances.set(host, layer);
  return layer;
}

export function initFilmLayers(options = {}, root = globalThis.document) {
  if (!root?.querySelectorAll) {
    return [];
  }

  const selector = options.selector || DEFAULT_SELECTOR;
  const hosts = [];

  if (root.nodeType === 1 && root.matches?.(selector)) {
    hosts.push(root);
  }
  hosts.push(...root.querySelectorAll(selector));

  return [...new Set(hosts)].map((host) => createFilmLayer(host, options));
}

/**
 * Optional auto-start helper. Importing this module never starts rendering by
 * itself; callers opt in, and initialization waits until the DOM is ready.
 */
export function autoStartFilmLayers(options = {}, documentRef = globalThis.document) {
  let layers = [];
  let cancelled = false;

  const start = () => {
    if (!cancelled) {
      layers = initFilmLayers(options, documentRef);
    }
  };

  if (!documentRef) {
    return {
      get layers() {
        return layers;
      },
      destroy() {},
    };
  }

  if (documentRef.readyState === 'loading') {
    documentRef.addEventListener('DOMContentLoaded', start, { once: true });
  } else {
    const queue = documentRef.defaultView?.queueMicrotask;
    if (queue) {
      queue.call(documentRef.defaultView, start);
    } else {
      Promise.resolve().then(start);
    }
  }

  return {
    get layers() {
      return layers;
    },
    destroy() {
      cancelled = true;
      documentRef.removeEventListener('DOMContentLoaded', start);
      layers.splice(0).forEach((layer) => layer.destroy());
    },
  };
}
