import {
  BufferAttribute,
  BufferGeometry,
  Mesh,
  OrthographicCamera,
  PlaneGeometry,
  Points,
  Scene,
  ShaderMaterial,
  Vector2,
  WebGLRenderer,
} from 'three';

const DEFAULT_SELECTOR = '[data-film-layer]';
const STATIC_CLASS = 'film-layer--static';
const ACTIVE_CLASS = 'film-layer--active';
const MAX_DEVICE_PIXEL_RATIO = 1.5;
const FRAME_TIME_EPSILON_MS = 0.000001;

export const FILM_EVENT_TIMING = Object.freeze({
  slipCycle: 5.8,
  slipOffsetMinimum: 0.22,
  slipOffsetRange: 0.44,
  slipEnvelopeHalfWidth: 0.06,
  slipMinimumPixels: 1.1,
  slipAmplitudePixels: 2.4,
  scratchCycle: 5.4,
  scratchVisibleBy: 0.34,
  scratchFullUntil: 1.35,
  chemicalCycle: 7.6,
  chemicalOffsetMinimum: 0.24,
  chemicalOffsetRange: 0.26,
  chemicalWindowHalfWidth: 0.085,
});

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
  uniform vec2 uPointer;
  uniform float uPointerEnergy;
  uniform float uScrollImpulse;
  uniform float uScrollSettle;
  uniform float uScrollDirection;
  varying vec2 vUv;

  float hash21(vec2 point) {
    point = fract(point * vec2(123.34, 456.21));
    point += dot(point, point + 45.32);
    return fract(point.x * point.y);
  }

  float valueNoise(vec2 point) {
    vec2 cell = floor(point);
    vec2 blend = fract(point);
    blend = blend * blend * (3.0 - 2.0 * blend);

    float a = hash21(cell);
    float b = hash21(cell + vec2(1.0, 0.0));
    float c = hash21(cell + vec2(0.0, 1.0));
    float d = hash21(cell + vec2(1.0, 1.0));

    return mix(mix(a, b, blend.x), mix(c, d, blend.x), blend.y);
  }

  void main() {
    vec2 resolution = max(uResolution, vec2(1.0));
    float filmFrame = floor(uTime * 18.0);
    float aspect = resolution.x / resolution.y;

    // Pointer movement bends only the virtual emulsion. Live text and
    // interface controls remain geometrically stable underneath the canvas.
    vec2 pointerVector = vUv - uPointer;
    pointerVector.x *= aspect;
    float pointerDistance = length(pointerVector);
    float pointerFalloff = exp(
      -pointerDistance * pointerDistance * 20.0
    );
    float pointerWave = sin(
      pointerDistance * 46.0 - uTime * 12.0
    ) * uPointerEnergy * pointerFalloff;
    vec2 pointerDirection = pointerVector / max(0.001, pointerDistance);
    pointerDirection.x /= aspect;

    // Scroll start creates broken horizontal registration bands; scroll end
    // adds a shorter elastic recoil. Both impulses decay in JavaScript.
    float scrollStrength = max(
      uScrollImpulse,
      uScrollSettle * 0.78
    );
    float scrollRow = floor(vUv.y * 18.0);
    float scrollRowNoise = hash21(vec2(
      scrollRow,
      floor(uTime * 20.0)
    ));
    float scrollTearMask = smoothstep(
      0.48,
      0.90,
      scrollRowNoise
    ) * scrollStrength;
    float scrollRecoil = sin(
      vUv.y * 92.0 + uTime * 28.0
    ) * uScrollSettle * 0.014;

    vec2 emulsionUv = vUv;
    emulsionUv += pointerDirection * pointerWave * 0.010;
    emulsionUv.x += uScrollDirection * (
      scrollTearMask * (0.012 + uScrollImpulse * 0.024)
      + scrollRecoil
    );
    emulsionUv.y += sin(
      vUv.x * 37.0 - uTime * 19.0
    ) * scrollStrength * 0.006;

    // The emulsion moves while the document stays perfectly still. A short
    // gate slip is guaranteed in every cycle so the projection reads as
    // motion without ever displacing or blurring live typography.
    float slipCycle = ${FILM_EVENT_TIMING.slipCycle};
    float slipEpoch = floor(uTime / slipCycle);
    float slipPhase = fract(uTime / slipCycle);
    float slipOffset = (
      ${FILM_EVENT_TIMING.slipOffsetMinimum}
      + ${FILM_EVENT_TIMING.slipOffsetRange}
      * hash21(vec2(slipEpoch, 34.17))
    );
    float slipEnvelope = (1.0 - smoothstep(
      0.0,
      ${FILM_EVENT_TIMING.slipEnvelopeHalfWidth},
      abs(slipPhase - slipOffset)
    )) * smoothstep(0.6, 1.2, uTime);
    float slipSign = (
      step(0.5, hash21(vec2(slipEpoch, 51.83))) * 2.0 - 1.0
    );
    float slipMagnitude = mix(
      ${FILM_EVENT_TIMING.slipMinimumPixels},
      ${FILM_EVENT_TIMING.slipAmplitudePixels},
      hash21(vec2(slipEpoch, 67.29))
    );
    float slipPixels = slipSign * slipMagnitude * slipEnvelope;

    vec2 gateWeave = vec2(
      sin(uTime * 1.73) * 1.25,
      cos(uTime * 1.19) * 0.82 + slipPixels
    );
    vec2 pixel = floor(emulsionUv * resolution + gateWeave);

    // Fine silver grains are modulated by a softer density field. Combining
    // both scales avoids the uniform digital-static look.
    float fineGrain = hash21(pixel + filmFrame * vec2(11.73, 7.91));
    float clumpedGrain = valueNoise(
      pixel * 0.17 + uTime * vec2(1.91, -1.37)
    );
    float coarseGrain = hash21(
      floor(pixel / 3.0) + filmFrame * vec2(3.17, 5.83)
    );
    float coarseSpark = smoothstep(0.86, 0.99, coarseGrain);
    float grainThreshold = 0.5 + (clumpedGrain - 0.5) * 0.20;
    float grainTone = step(grainThreshold, fineGrain);
    grainTone = mix(
      grainTone,
      step(0.5, coarseGrain),
      coarseSpark * 0.58
    );
    float flicker = 0.88 + hash21(vec2(filmFrame, 9.17)) * 0.12;
    float grainAlpha = (
      0.014
      + abs(fineGrain - 0.5) * 0.052
      + abs(clumpedGrain - 0.5) * 0.026
      + coarseSpark * 0.035
    ) * flicker;

    // A drifting hairline appears early and then returns every few seconds.
    // Its broken texture keeps it photographic instead of looking like UI.
    float scratchCycle = ${FILM_EVENT_TIMING.scratchCycle};
    float scratchEpoch = floor(uTime / scratchCycle);
    float scratchLocal = mod(uTime, scratchCycle);
    float scratchX = hash21(vec2(scratchEpoch, 31.41)) * resolution.x;
    float scratchDistance = abs(pixel.x - scratchX);
    float scratchLife = smoothstep(
      0.18,
      ${FILM_EVENT_TIMING.scratchVisibleBy},
      scratchLocal
    ) * (
      1.0 - smoothstep(
        ${FILM_EVENT_TIMING.scratchFullUntil},
        1.85,
        scratchLocal
      )
    );
    float scratchTexture = 0.38 + 0.62 * hash21(
      vec2(floor(pixel.y / 41.0), scratchEpoch)
    );
    float scratch = (1.0 - smoothstep(0.0, 1.60, scratchDistance))
      * scratchLife
      * scratchTexture;

    // The registration slip leaves one restrained splice line in the
    // emulsion. It never offsets the DOM itself.
    float spliceY = hash21(vec2(slipEpoch, 82.31)) * resolution.y;
    float spliceDistance = abs(pixel.y - spliceY);
    float splice = (
      1.0 - smoothstep(0.0, 1.35, spliceDistance)
    ) * slipEnvelope;

    // A local chemical halo is guaranteed within the first four seconds and
    // then moves to a new position each cycle. It never becomes a full-screen
    // flash.
    float chemicalCycle = ${FILM_EVENT_TIMING.chemicalCycle};
    float chemicalEpoch = floor(uTime / chemicalCycle);
    float chemicalPhase = fract(uTime / chemicalCycle);
    float chemicalOffset = (
      ${FILM_EVENT_TIMING.chemicalOffsetMinimum}
      + ${FILM_EVENT_TIMING.chemicalOffsetRange}
      * hash21(vec2(chemicalEpoch, 13.91))
    );
    float chemicalWindow = 1.0 - smoothstep(
      0.0,
      ${FILM_EVENT_TIMING.chemicalWindowHalfWidth},
      abs(chemicalPhase - chemicalOffset)
    );
    vec2 chemicalCenter = vec2(
      0.12 + hash21(vec2(chemicalEpoch, 27.17)) * 0.76,
      0.12 + hash21(vec2(chemicalEpoch, 64.73)) * 0.76
    );
    vec2 chemicalUv = (emulsionUv - chemicalCenter) * vec2(
      resolution.x / resolution.y,
      1.0
    );
    float chemicalAngle = atan(chemicalUv.y, chemicalUv.x);
    float chemicalSector = floor(
      (chemicalAngle + 3.14159265) * 5.1
    );
    float chemicalWobble = (
      hash21(vec2(chemicalSector, chemicalEpoch)) - 0.5
    ) * 0.012;
    float chemicalRadius = (
      0.028
      + hash21(vec2(chemicalEpoch, 42.23)) * 0.060
      + chemicalWobble
    );
    float chemicalDistance = length(chemicalUv);
    float chemicalRing = smoothstep(
      chemicalRadius * 0.56,
      chemicalRadius * 0.76,
      chemicalDistance
    ) * (
      1.0 - smoothstep(
        chemicalRadius,
        chemicalRadius + 0.014,
        chemicalDistance
      )
    );
    float chemicalCore = 1.0 - smoothstep(
      chemicalRadius * 0.12,
      chemicalRadius * 0.58,
      chemicalDistance
    );
    float chemicalEvent = chemicalWindow;

    float defectAlpha = (
      scratch * 0.075
      + splice * 0.045
      + chemicalRing * chemicalEvent * 0.070
      + chemicalCore * chemicalEvent * 0.025
    );

    // Frame-to-frame exposure variation and a slow travelling projector band
    // make the animation legible even between local defects.
    float exposureFrame = floor(uTime * 9.0);
    float exposureSignal = (
      hash21(vec2(exposureFrame, 47.13)) * 2.0 - 1.0
    );
    float exposureAlpha = 0.006 + abs(exposureSignal) * 0.012;
    float exposureTone = step(0.0, exposureSignal);
    float rollCenter = fract(uTime * 0.085);
    float rollRawDistance = abs(vUv.y - rollCenter);
    float rollDistance = min(rollRawDistance, 1.0 - rollRawDistance);
    float rollBand = (
      1.0 - smoothstep(0.025, 0.160, rollDistance)
    ) * 0.014;
    float pointerHalo = (
      1.0 - smoothstep(0.035, 0.220, pointerDistance)
    ) * uPointerEnergy * 0.032;
    float scrollAlpha = (
      scrollTearMask * 0.085
      + abs(scrollRecoil) * 2.20
    );
    float scrollTone = step(0.69, scrollRowNoise);

    float baseAlpha = grainAlpha + defectAlpha;
    float projectionAlpha = (
      exposureAlpha
      + rollBand
      + pointerHalo
      + scrollAlpha
    );
    float combinedAlpha = max(0.0001, baseAlpha + projectionAlpha);
    float baseTone = mix(
      grainTone,
      1.0,
      clamp(scratch + splice + chemicalRing * chemicalEvent, 0.0, 1.0)
    );
    baseTone = mix(
      baseTone,
      0.0,
      chemicalCore * chemicalEvent * 0.72
    );
    float projectionTone = (
      exposureTone * exposureAlpha
      + rollBand
      + pointerHalo
      + scrollTone * scrollAlpha
    ) / max(0.0001, projectionAlpha);
    float tone = (
      baseTone * baseAlpha + projectionTone * projectionAlpha
    ) / combinedAlpha;
    float interactionAlphaLimit = (
      0.140
      + scrollStrength * 0.040
      + uPointerEnergy * 0.010
    );
    float alpha = min(interactionAlphaLimit, combinedAlpha);

    gl_FragColor = vec4(vec3(tone), alpha);
  }
`;

const DUST_VERTEX_SHADER = /* glsl */ `
  precision highp float;

  attribute float aSize;
  attribute float aOpacity;
  attribute float aSpeed;
  attribute float aDrift;
  attribute float aPhase;
  attribute float aTone;
  uniform float uTime;
  uniform float uPixelRatio;
  uniform vec2 uPointer;
  uniform float uPointerEnergy;
  uniform float uScrollImpulse;
  uniform float uScrollSettle;
  uniform float uScrollDirection;
  varying float vOpacity;
  varying float vTone;

  void main() {
    vec3 animated = position;
    float travel = position.y - uTime * aSpeed;
    animated.y = mod(travel + 1.06, 2.12) - 1.06;
    animated.x += sin(
      uTime * (0.55 + abs(aSpeed) * 3.0) + aPhase
    ) * aDrift;

    vec2 pointerNdc = uPointer * 2.0 - 1.0;
    vec2 pointerDelta = animated.xy - pointerNdc;
    float pointerDistance = length(pointerDelta);
    float pointerInfluence = (
      1.0 - smoothstep(0.04, 0.58, pointerDistance)
    ) * uPointerEnergy;
    vec2 pointerTangent = vec2(
      -pointerDelta.y,
      pointerDelta.x
    ) / max(0.001, pointerDistance);
    animated.xy += pointerTangent * pointerInfluence * 0.034;
    animated.x += sin(
      animated.y * 22.0 + uTime * 18.0
    ) * uScrollImpulse * 0.030;
    animated.y += uScrollDirection * (
      uScrollImpulse - uScrollSettle * 0.60
    ) * 0.020;

    vec4 modelViewPosition = modelViewMatrix * vec4(animated, 1.0);
    gl_Position = projectionMatrix * modelViewPosition;

    float breathing = 0.80 + 0.20 * sin(uTime * 1.10 + aPhase);
    gl_PointSize = max(1.0, aSize * uPixelRatio * breathing);
    vOpacity = aOpacity * (
      0.78 + 0.22 * sin(uTime * 0.83 + aPhase * 1.71)
    );
    vTone = aTone;
  }
`;

const DUST_FRAGMENT_SHADER = /* glsl */ `
  precision mediump float;

  varying float vOpacity;
  varying float vTone;

  void main() {
    float moteDistance = length(gl_PointCoord - vec2(0.5));
    float halo = 1.0 - smoothstep(0.18, 0.50, moteDistance);
    float core = 1.0 - smoothstep(0.06, 0.22, moteDistance);
    float moteAlpha = (halo * 0.72 + core * 0.28) * vOpacity;

    gl_FragColor = vec4(vec3(vTone), moteAlpha);
  }
`;

const instances = new WeakMap();

function clamp(value, minimum, maximum) {
  return Math.min(maximum, Math.max(minimum, value));
}

export function calculateFilmParticleCount({
  width,
  height,
  viewportWidth,
  viewportHeight,
  pixelsPerParticle,
  minParticles,
  maxParticles,
}) {
  const viewportArea = Math.max(1, viewportWidth * viewportHeight);
  const effectiveArea = Math.min(width * height, viewportArea * 1.5);
  const desiredParticles = Math.round(
    effectiveArea / pixelsPerParticle,
  );

  return Math.round(
    clamp(desiredParticles, minParticles, maxParticles),
  );
}

export function shouldRenderFilmFrame(elapsedMilliseconds, maxFps) {
  if (!Number.isFinite(elapsedMilliseconds) || elapsedMilliseconds < 0) {
    return false;
  }

  const safeMaxFps = clamp(
    Number.isFinite(maxFps) ? maxFps : 30,
    12,
    60,
  );
  return (
    elapsedMilliseconds + FRAME_TIME_EPSILON_MS >=
    1_000 / safeMaxFps
  );
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
    this.particleCount = 0;
    this.frameRequest = null;
    this.lastFrameTime = null;
    this.frameAccumulator = 0;
    this.elapsedTime = 0;
    this.pointerTarget = new Vector2(0.5, 0.5);
    this.pointerCurrent = new Vector2(0.5, 0.5);
    this.pointerEnergy = 0;
    this.scrollImpulse = 0;
    this.scrollSettle = 0;
    this.scrollDirection = 1;
    this.scrollActive = false;
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
      // Three.js r185 requires WebGL 2. Attempting WebGL 1 as a fallback only
      // produces a noisy renderer failure, so older hardware stays static.
      context = canvas.getContext('webgl2', contextAttributes);
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
          uPointer: { value: new Vector2(0.5, 0.5) },
          uPointerEnergy: { value: 0 },
          uScrollImpulse: { value: 0 },
          uScrollSettle: { value: 0 },
          uScrollDirection: { value: 1 },
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
      this.installInteractionListeners();

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

  installInteractionListeners() {
    if (!this.view || !this.canvas) {
      return;
    }

    let lastScrollY =
      this.view.scrollY || this.view.pageYOffset || 0;
    let scrollEndTimer = null;

    const clearScrollEndTimer = () => {
      if (scrollEndTimer !== null && this.view?.clearTimeout) {
        this.view.clearTimeout(scrollEndTimer);
      }
      scrollEndTimer = null;
    };

    const markInteraction = (value) => {
      if (
        this.canvas &&
        this.canvas.dataset.filmInteraction !== value
      ) {
        this.canvas.dataset.filmInteraction = value;
      }
    };

    const onPointerMove = (event) => {
      if (event.pointerType === 'touch') {
        return;
      }

      const width = Math.max(1, this.view.innerWidth || 1);
      const height = Math.max(1, this.view.innerHeight || 1);
      const nextX = clamp(event.clientX / width, 0, 1);
      const nextY = clamp(1 - event.clientY / height, 0, 1);
      const distance = Math.hypot(
        nextX - this.pointerTarget.x,
        nextY - this.pointerTarget.y,
      );

      this.pointerTarget.set(nextX, nextY);
      this.pointerEnergy = Math.min(
        1,
        Math.max(this.pointerEnergy, 0.16 + distance * 8),
      );
      markInteraction('pointer');
    };

    const onPointerLeave = () => {
      this.pointerTarget.set(0.5, 0.5);
      this.pointerEnergy = Math.max(this.pointerEnergy, 0.28);
    };

    const onScrollEnd = () => {
      if (!this.scrollActive) {
        return;
      }

      clearScrollEndTimer();
      scrollEndTimer = null;
      this.scrollActive = false;
      this.scrollImpulse = Math.max(this.scrollImpulse, 0.34);
      this.scrollSettle = 1;
      markInteraction('scroll-settle');
    };

    const onScroll = () => {
      const nextScrollY =
        this.view.scrollY || this.view.pageYOffset || 0;
      const delta = nextScrollY - lastScrollY;
      lastScrollY = nextScrollY;

      if (delta === 0) {
        return;
      }

      this.scrollDirection = Math.sign(delta);

      if (!this.scrollActive) {
        this.scrollImpulse = 1;
        markInteraction('scroll-start');
      } else {
        this.scrollImpulse = Math.max(
          this.scrollImpulse,
          clamp(Math.abs(delta) / 120, 0.36, 1),
        );
        markInteraction('scrolling');
      }

      this.scrollActive = true;
      clearScrollEndTimer();
      if (this.view.setTimeout) {
        scrollEndTimer = this.view.setTimeout(() => {
          scrollEndTimer = null;
          onScrollEnd();
        }, 120);
      }
    };

    this.rendererCleanups.push(
      addEvent(this.view, 'pointermove', onPointerMove, { passive: true }),
      addEvent(this.view, 'pointerleave', onPointerLeave, { passive: true }),
      addEvent(this.view, 'scroll', onScroll, { passive: true }),
      addEvent(this.view, 'scrollend', onScrollEnd, { passive: true }),
      () => {
        clearScrollEndTimer();
        this.pointerTarget.set(0.5, 0.5);
        this.pointerCurrent.set(0.5, 0.5);
        this.pointerEnergy = 0;
        this.scrollImpulse = 0;
        this.scrollSettle = 0;
        this.scrollDirection = 1;
        this.scrollActive = false;
      },
    );
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
    if (!this.pageVisible) {
      this.pointerTarget.set(0.5, 0.5);
      this.pointerCurrent.set(0.5, 0.5);
      this.pointerEnergy = 0;
      this.scrollImpulse = 0;
      this.scrollSettle = 0;
      this.scrollDirection = 1;
      this.scrollActive = false;
      if (this.canvas) {
        this.canvas.dataset.filmInteraction = 'idle';
      }
    }
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
      if (this.dustMaterial?.uniforms.uPixelRatio) {
        this.dustMaterial.uniforms.uPixelRatio.value = devicePixelRatio;
      }

      const particleCount = calculateFilmParticleCount({
        width,
        height,
        viewportWidth: this.view?.innerWidth || width,
        viewportHeight: this.view?.innerHeight || height,
        pixelsPerParticle: this.options.pixelsPerParticle,
        minParticles: this.options.minParticles,
        maxParticles: this.options.maxParticles,
      });

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
    const sizes = new Float32Array(count);
    const opacities = new Float32Array(count);
    const speeds = new Float32Array(count);
    const drifts = new Float32Array(count);
    const phases = new Float32Array(count);
    const tones = new Float32Array(count);

    for (let index = 0; index < count; index += 1) {
      const offset = index * 3;
      positions[offset] = seededValue(index, 1.17) * 2.0 - 1.0;
      positions[offset + 1] = seededValue(index, 2.31) * 2.0 - 1.0;
      positions[offset + 2] = 0.1;
      const focusScale =
        seededValue(index, 10.33) > 0.88 ? 2.0 : 1.0;
      sizes[index] = (
        2.00 + seededValue(index, 3.91) * 4.00
      ) * focusScale;
      opacities[index] = 0.18 + seededValue(index, 4.73) * 0.34;

      const direction = seededValue(index, 5.87) < 0.14 ? -1 : 1;
      speeds[index] =
        direction * (0.018 + seededValue(index, 6.43) * 0.037);
      drifts[index] = 0.010 + seededValue(index, 8.19) * 0.025;
      phases[index] = seededValue(index, 9.71) * Math.PI * 2;
      tones[index] = seededValue(index, 11.57) < 0.46 ? 0.14 : 0.94;
    }

    this.dustGeometry = new BufferGeometry();
    this.dustGeometry.setAttribute(
      'position',
      new BufferAttribute(positions, 3),
    );
    this.dustGeometry.setAttribute('aSize', new BufferAttribute(sizes, 1));
    this.dustGeometry.setAttribute(
      'aOpacity',
      new BufferAttribute(opacities, 1),
    );
    this.dustGeometry.setAttribute('aSpeed', new BufferAttribute(speeds, 1));
    this.dustGeometry.setAttribute('aDrift', new BufferAttribute(drifts, 1));
    this.dustGeometry.setAttribute('aPhase', new BufferAttribute(phases, 1));
    this.dustGeometry.setAttribute('aTone', new BufferAttribute(tones, 1));

    this.dustMaterial = new ShaderMaterial({
      vertexShader: DUST_VERTEX_SHADER,
      fragmentShader: DUST_FRAGMENT_SHADER,
      uniforms: {
        uTime: { value: this.elapsedTime },
        uPixelRatio: {
          value: Math.min(
            this.view?.devicePixelRatio || 1,
            this.options.maxDpr,
            MAX_DEVICE_PIXEL_RATIO,
          ),
        },
        uPointer: { value: new Vector2(0.5, 0.5) },
        uPointerEnergy: { value: 0 },
        uScrollImpulse: { value: 0 },
        uScrollSettle: { value: 0 },
        uScrollDirection: { value: 1 },
      },
      transparent: true,
      depthTest: false,
      depthWrite: false,
      toneMapped: false,
    });
    this.dust = new Points(this.dustGeometry, this.dustMaterial);
    this.dust.frustumCulled = false;
    this.dust.renderOrder = 1;
    this.scene.add(this.dust);
    this.particleCount = count;
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
    this.frameAccumulator = 0;
  }

  onFrame(timestamp) {
    this.frameRequest = null;
    if (!this.shouldAnimate()) {
      return;
    }

    let delta = 0;
    if (this.lastFrameTime === null) {
      this.lastFrameTime = timestamp;
    } else {
      const frameElapsed = Math.max(0, timestamp - this.lastFrameTime);
      const minimumFrameDuration = 1_000 / this.options.maxFps;
      this.lastFrameTime = timestamp;
      this.frameAccumulator += frameElapsed;

      if (
        !shouldRenderFilmFrame(
          this.frameAccumulator,
          this.options.maxFps,
        )
      ) {
        this.frameRequest = this.view.requestAnimationFrame(this.onFrame);
        return;
      }

      const elapsedFrameCount = Math.floor(
        (
          this.frameAccumulator + FRAME_TIME_EPSILON_MS
        ) / minimumFrameDuration,
      );
      const consumedFrameTime =
        elapsedFrameCount * minimumFrameDuration;
      this.frameAccumulator = Math.max(
        0,
        this.frameAccumulator - consumedFrameTime,
      );
      delta = Math.min(0.08, consumedFrameTime / 1_000);
    }

    this.elapsedTime += delta;
    const filmUniforms = this.filmMaterial.uniforms;
    filmUniforms.uTime.value = this.elapsedTime;
    const pointerResponse = 1 - Math.exp(-delta * 14);
    this.pointerCurrent.lerp(this.pointerTarget, pointerResponse);
    filmUniforms.uPointer?.value.copy(this.pointerCurrent);
    if (filmUniforms.uPointerEnergy) {
      filmUniforms.uPointerEnergy.value = this.pointerEnergy;
    }
    if (filmUniforms.uScrollImpulse) {
      filmUniforms.uScrollImpulse.value = this.scrollImpulse;
    }
    if (filmUniforms.uScrollSettle) {
      filmUniforms.uScrollSettle.value = this.scrollSettle;
    }
    if (filmUniforms.uScrollDirection) {
      filmUniforms.uScrollDirection.value = this.scrollDirection;
    }
    const dustUniforms = this.dustMaterial?.uniforms;
    if (dustUniforms?.uTime) {
      dustUniforms.uTime.value = this.elapsedTime;
      dustUniforms.uPointer?.value.copy(this.pointerCurrent);
      if (dustUniforms.uPointerEnergy) {
        dustUniforms.uPointerEnergy.value = this.pointerEnergy;
      }
      if (dustUniforms.uScrollImpulse) {
        dustUniforms.uScrollImpulse.value = this.scrollImpulse;
      }
      if (dustUniforms.uScrollSettle) {
        dustUniforms.uScrollSettle.value = this.scrollSettle;
      }
      if (dustUniforms.uScrollDirection) {
        dustUniforms.uScrollDirection.value = this.scrollDirection;
      }
    }

    try {
      this.renderer.render(this.scene, this.camera);
    } catch {
      this.permanentFallback = 'renderer-error';
      this.activateStaticFallback(this.permanentFallback);
      return;
    }

    this.pointerEnergy *= Math.exp(-delta * 3.2);
    this.scrollImpulse *= Math.exp(-delta * 8.5);
    this.scrollSettle *= Math.exp(-delta * 4.8);
    if (
      !this.scrollActive &&
      this.pointerEnergy < 0.015 &&
      this.scrollImpulse < 0.015 &&
      this.scrollSettle < 0.015 &&
      this.canvas
    ) {
      this.canvas.dataset.filmInteraction = 'idle';
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
