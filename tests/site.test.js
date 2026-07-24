import { describe, expect, test } from "bun:test";
import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");
const readBinary = (path) => readFile(join(root, path));
const exists = async (path) => {
  try {
    await stat(join(root, path));
    return true;
  } catch {
    return false;
  }
};

const publicPages = [
  { file: "index.html", route: "/", canonical: "https://nimbo.mx/" },
  {
    file: "laboratorio/index.html",
    route: "/laboratorio/",
    canonical: "https://nimbo.mx/laboratorio/"
  },
  {
    file: "laboratorio/nimbo-pro/index.html",
    route: "/laboratorio/nimbo-pro/",
    canonical: "https://nimbo.mx/laboratorio/nimbo-pro/"
  }
];

const routeToFile = (pathname) => {
  if (pathname === "/") return "index.html";
  if (pathname.endsWith("/")) return `${pathname.slice(1)}index.html`;
  return pathname.slice(1);
};

const attributeValues = (html, tag, attribute) => [
  ...html.matchAll(
    new RegExp(`<${tag}\\b[^>]*\\s${attribute}="([^"]+)"[^>]*>`, "gi")
  )
].map((match) => match[1]);

describe("estructura editorial", () => {
  test("las tres páginas públicas conservan idioma, landmarks y un título principal", async () => {
    for (const { file } of publicPages) {
      const html = await read(file);
      expect(html, file).toContain('<html lang="es-MX"');
      expect(html, file).toMatch(/<header(?:\s|>)/);
      expect(html, file).toMatch(/<main(?:\s|>)/);
      expect(html, file).toMatch(/<footer(?:\s|>)/);
      expect(html.match(/<h1(?:\s|>)/g), file).toHaveLength(1);
      expect(html, file).toContain('class="skip-link"');
      expect(html, file).toContain('href="#contenido"');
      expect(html, file).toContain('id="contenido"');
    }
  });

  test("la portada implementa Cámara oscura y abre el recorrido hacia el Laboratorio", async () => {
    const html = await read("index.html");

    expect(html).toContain("Construir");
    expect(html).toContain("también es");
    expect(html).toContain("investigar.");
    for (const id of ["manifiesto", "trayectoria", "practica", "contacto"]) {
      expect(html).toContain(`id="${id}"`);
    }
    expect(html).toContain('class="cinema-hero"');
    expect(html).toContain('class="hero-still"');
    expect(html).toContain('class="cinema-title__brand">Nimbo</span>');
    expect(html).toContain(
      'class="cinema-title__statement">Construir también es investigar.</span>'
    );
    expect(html).toContain('fetchpriority="high"');
    expect(html).toContain('decoding="async"');
    expect(html).not.toContain('class="hero-beam"');
    expect(html.indexOf('id="hero-title"')).toBeLessThan(
      html.indexOf('class="hero-still"')
    );
    expect(html).toContain('href="/laboratorio/"');
    expect(html).toContain('href="/laboratorio/nimbo-pro/"');
    expect(html).toContain("contacto@nimbo.mx");
    expect(html).not.toMatch(/<h1[^>]*>[^<]*(?:consultor|freelance)/i);
  });

  test("el Laboratorio funciona como índice y el expediente conserva estados verificables", async () => {
    const [laboratory, dossier] = await Promise.all([
      read("laboratorio/index.html"),
      read("laboratorio/nimbo-pro/index.html")
    ]);

    expect(laboratory).toContain("Nada aquí está inmóvil.");
    expect(laboratory).toContain("Expediente 001 · En curso");
    expect(laboratory).toContain("Telegram · en trabajo");
    expect(laboratory).toContain("WhatsApp · siguiente");
    for (const mark of ["Contexto", "Decisión", "Prueba", "Hallazgo"]) {
      expect(laboratory).toContain(`<h3>${mark}</h3>`);
    }

    for (const id of [
      "contexto",
      "hipotesis",
      "arquitectura",
      "telegram",
      "montaje",
      "cronologia"
    ]) {
      expect(dossier).toContain(`id="${id}"`);
    }
    expect(dossier).toContain("Telegram es el canal actualmente en trabajo.");
    expect(dossier).toContain("WhatsApp está previsto como siguiente etapa");
    expect(dossier).toContain("<em>Hipótesis en diseño</em>");
    expect(dossier).toContain("Aún no hay un resultado medido que publicar.");
    expect(dossier).not.toMatch(/WhatsApp (?:ya )?(?:está )?disponible/i);
    expect(dossier).toContain(
      "No afirmamos que el asistente “aprende automáticamente”."
    );
  });

  test("incluye una página 404 útil y excluida del índice", async () => {
    const html = await read("404.html");
    expect(html).toContain('lang="es-MX"');
    expect(html).toContain('content="noindex, follow"');
    expect(html).toContain("Fotograma perdido");
    expect(html).toContain("<h1>");
    expect(html).toContain('href="/"');
  });
});

describe("metadata, imágenes y descubrimiento", () => {
  test("cada página pública declara canonical, Open Graph y la tarjeta PNG", async () => {
    for (const { file, canonical } of publicPages) {
      const html = await read(file);
      expect(html, file).toContain("<title>");
      expect(html, file).toContain('name="description"');
      expect(html, file).toContain(`rel="canonical" href="${canonical}"`);
      expect(html, file).toContain(`property="og:url" content="${canonical}"`);
      expect(html, file).toContain(
        'property="og:image" content="https://nimbo.mx/assets/og-image.png"'
      );
      expect(html, file).toContain('name="twitter:card" content="summary_large_image"');
    }

    const home = await read("index.html");
    expect(home).toContain('property="og:image:type" content="image/png"');
    expect(home).toContain('property="og:image:width" content="1200"');
    expect(home).toContain('property="og:image:height" content="630"');
    expect(home).toContain('property="og:image:alt"');
    expect(home).toContain('type="application/ld+json"');
    expect(home).toContain('"@type": "ProfessionalService"');
    expect(home).not.toContain('"@type": "Person"');
  });

  test("la tarjeta social es un PNG real de 1200 por 630", async () => {
    const image = await readBinary("assets/og-image.png");
    expect(image.subarray(0, 8)).toEqual(
      Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
    );
    expect(image.readUInt32BE(16)).toBe(1200);
    expect(image.readUInt32BE(20)).toBe(630);
    expect(image.byteLength).toBeGreaterThan(50_000);
  });

  test("el favicon usa la marca N monocromática y no la nube anterior", async () => {
    const favicon = await read("assets/favicon.svg");

    expect(favicon).toContain("<title>Nimbo</title>");
    expect(favicon).toContain('fill="#050505"');
    expect(favicon).toContain('fill="#f1ede3"');
    expect(favicon).toContain("<polygon");
    expect(favicon).not.toContain("#142927");
    expect(favicon).not.toContain("#c9ff46");
    expect(favicon).not.toContain("<path");
  });

  test("las fotografías publicadas son WebP locales, optimizadas y con dimensiones intrínsecas", async () => {
    const imagePaths = [
      "assets/images/hero-projection.webp",
      "assets/images/lab-wiring.webp",
      "assets/images/lab-terminal.webp",
      "assets/images/film-texture.webp"
    ];

    for (const path of imagePaths) {
      const image = await readBinary(path);
      expect(image.subarray(0, 4).toString("ascii"), path).toBe("RIFF");
      expect(image.subarray(8, 12).toString("ascii"), path).toBe("WEBP");
      expect(image.byteLength, path).toBeGreaterThan(30_000);
      expect(image.byteLength, path).toBeLessThan(600_000);
    }

    for (const { file } of publicPages) {
      const html = await read(file);
      for (const imageTag of html.match(/<img\b[^>]*>/gi) ?? []) {
        expect(imageTag, `${file}: ${imageTag}`).toMatch(/\ssrc="[^"]+\.webp"/);
        expect(imageTag, `${file}: ${imageTag}`).toMatch(/\swidth="\d+"/);
        expect(imageTag, `${file}: ${imageTag}`).toMatch(/\sheight="\d+"/);
      }
    }

    const css = await read("styles.css");
    expect(css).toContain('url("/assets/images/film-texture.webp")');
  });

  test("robots y sitemap publican exactamente el archivo editorial vigente", async () => {
    const [robots, sitemap] = await Promise.all([
      read("robots.txt"),
      read("sitemap.xml")
    ]);
    const locations = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      (match) => match[1]
    );

    expect(robots).toContain("Sitemap: https://nimbo.mx/sitemap.xml");
    expect(locations).toEqual(publicPages.map(({ canonical }) => canonical));
    expect(await exists("assets/favicon.svg")).toBe(true);
  });
});

describe("enlaces y recursos", () => {
  test("todos los enlaces internos y fragmentos resuelven a un archivo o sección real", async () => {
    for (const { file, route } of [...publicPages, { file: "404.html", route: "/404.html" }]) {
      const html = await read(file);
      for (const href of attributeValues(html, "a", "href")) {
        if (/^(?:mailto:|https?:\/\/)/.test(href)) continue;

        const target = new URL(href, `https://nimbo.mx${route}`);
        const targetFile = routeToFile(target.pathname);
        expect(await exists(targetFile), `${file}: ${href} -> ${targetFile}`).toBe(true);

        if (target.hash) {
          const targetHtml = await read(targetFile);
          expect(
            targetHtml.includes(`id="${decodeURIComponent(target.hash.slice(1))}"`),
            `${file}: ${href}`
          ).toBe(true);
        }
      }
    }
  });

  test("todos los recursos de interfaz son locales y existen", async () => {
    for (const { file } of [...publicPages, { file: "404.html" }]) {
      const html = await read(file);
      const resources = [
        ...attributeValues(html, "script", "src"),
        ...attributeValues(html, "img", "src"),
        ...[...html.matchAll(
          /<link\b(?=[^>]*\srel="(?:stylesheet|icon)")(?=[^>]*\shref="([^"]+)")[^>]*>/gi
        )].map((match) => match[1])
      ];

      for (const resource of resources) {
        expect(resource, `${file}: ${resource}`).not.toMatch(/^https?:\/\//);
        expect(resource, `${file}: ${resource}`).not.toMatch(/^\/\//);
        expect(
          await exists(resource.replace(/^\//, "")),
          `${file}: ${resource}`
        ).toBe(true);
      }
    }

    const [css, script] = await Promise.all([read("styles.css"), read("script.js")]);
    expect(css).not.toMatch(/@import\s/i);
    expect(css).not.toMatch(/url\(\s*["']?https?:\/\//i);
    expect(script).not.toMatch(/\b(?:fetch|XMLHttpRequest|WebSocket)\b/);
  });
});

describe("película, interacción y accesibilidad", () => {
  test("la capa Three.js combina shader, partículas y límites de rendimiento", async () => {
    const [source, entry, bundle, css] = await Promise.all([
      read("src/film-layer.js"),
      read("src/film-entry.js"),
      readBinary("assets/film-layer.js"),
      read("styles.css")
    ]);

    expect(source).toContain("from 'three'");
    expect(source).toContain("new ShaderMaterial");
    expect(source).toContain("DUST_VERTEX_SHADER");
    expect(source).toContain("DUST_FRAGMENT_SHADER");
    expect(source).toContain("new Points");
    expect(source).toContain("gl_PointCoord");
    for (const attribute of [
      "aSize",
      "aOpacity",
      "aSpeed",
      "aDrift",
      "aPhase",
      "aTone"
    ]) {
      expect(source).toContain(`'${attribute}'`);
    }
    expect(source).toContain("MAX_DEVICE_PIXEL_RATIO = 1.5");
    expect(source).toContain("getContext('webgl2'");
    expect(source).not.toContain("getContext('webgl',");
    expect(source).toContain("maxFps");
    expect(source).toContain("frameAccumulator");
    expect(source).toContain("visibilitychange");
    expect(source).toContain("IntersectionObserver");
    expect(source).toContain("requestAnimationFrame");
    expect(source).toContain("dispose()");
    expect(entry).toContain("autoStartFilmLayers");
    expect(entry).toContain("maxDpr: 1");
    expect(entry).toContain("maxFps: 24");
    expect(entry).toContain("minParticles: 48");
    expect(entry).toContain("maxParticles: 160");
    expect(entry).toContain("pixelsPerParticle: 9_000");
    expect(css).toMatch(/\.film-layer canvas\s*\{[^}]*opacity:\s*0\.86;/);
    expect(bundle.byteLength).toBeGreaterThan(100_000);
    expect(bundle.byteLength).toBeLessThan(650_000);
  });

  test("la proyección se mueve desde el inicio sin desplazar el documento", async () => {
    const source = await read("src/film-layer.js");
    const { FILM_EVENT_TIMING } = await import("../src/film-layer.js");

    const latestSlip =
      FILM_EVENT_TIMING.slipCycle *
      (
        FILM_EVENT_TIMING.slipOffsetMinimum +
        FILM_EVENT_TIMING.slipOffsetRange
      );
    const latestChemical =
      FILM_EVENT_TIMING.chemicalCycle *
      (
        FILM_EVENT_TIMING.chemicalOffsetMinimum +
        FILM_EVENT_TIMING.chemicalOffsetRange
      );

    expect(FILM_EVENT_TIMING.scratchVisibleBy).toBeLessThan(0.5);
    expect(FILM_EVENT_TIMING.scratchFullUntil).toBeGreaterThan(1);
    expect(latestSlip).toBeLessThan(4);
    expect(FILM_EVENT_TIMING.slipMinimumPixels).toBeGreaterThanOrEqual(1);
    expect(FILM_EVENT_TIMING.slipAmplitudePixels).toBeGreaterThanOrEqual(2);
    expect(
      FILM_EVENT_TIMING.slipCycle *
      FILM_EVENT_TIMING.slipEnvelopeHalfWidth
    ).toBeGreaterThan(0.3);
    expect(latestChemical).toBeLessThanOrEqual(3.8);
    expect(
      FILM_EVENT_TIMING.chemicalCycle *
      FILM_EVENT_TIMING.chemicalWindowHalfWidth
    ).toBeGreaterThan(0.6);
    expect(source).toContain("float slipCycle = ${FILM_EVENT_TIMING.slipCycle};");
    expect(source).toContain("float scratchCycle = ${FILM_EVENT_TIMING.scratchCycle};");
    expect(source).toContain("float chemicalCycle = ${FILM_EVENT_TIMING.chemicalCycle};");
    expect(source).not.toContain("chemicalPresence");
    expect(source).not.toContain("scratchPresence");
    expect(source).toContain("float exposureFrame = floor(uTime * 9.0);");
    expect(source).toContain("float rollCenter = fract(uTime * 0.085);");
    expect(source).toContain("0.140");
    expect(source).toContain("+ scrollStrength * 0.040");
    expect(source).toContain("+ uPointerEnergy * 0.010");
    expect(source).toContain("min(interactionAlphaLimit, combinedAlpha)");
    expect(source).toContain("uniform vec2 uPointer;");
    for (const uniform of [
      "uPointerEnergy",
      "uScrollImpulse",
      "uScrollSettle",
      "uScrollDirection"
    ]) {
      expect(source).toContain(`uniform float ${uniform};`);
    }
    expect(source).toContain("chemicalRadius");
    expect(source).toContain("chemicalRing");
    expect(source).toContain("chemicalCore");
    expect(source).toContain("slipEnvelope");
    expect(source).toContain("splice");
    expect(source).not.toContain("host.style.transform");
    expect(source).not.toContain("canvas.style.transform");
  });

  test("el polvo GPU conserva un perfil visible y de bajo costo", async () => {
    const {
      FilmLayer,
      calculateFilmParticleCount
    } = await import("../src/film-layer.js");
    const scene = {
      add() {},
      remove() {}
    };
    const layer = {
      scene,
      dust: null,
      dustGeometry: null,
      dustMaterial: null,
      elapsedTime: 0,
      view: { devicePixelRatio: 2 },
      options: { maxDpr: 1 }
    };

    FilmLayer.prototype.rebuildDust.call(layer, 96);

    const readAttribute = (name) => [
      ...layer.dustGeometry.getAttribute(name).array
    ];
    const sizes = readAttribute("aSize");
    const opacities = readAttribute("aOpacity");
    const speeds = readAttribute("aSpeed").map(Math.abs);
    const drifts = readAttribute("aDrift");
    const tones = readAttribute("aTone");

    for (const values of [sizes, opacities, speeds, drifts, tones]) {
      expect(values).toHaveLength(96);
    }
    expect(Math.min(...sizes)).toBeGreaterThanOrEqual(2);
    expect(Math.max(...sizes)).toBeLessThan(12);
    expect(Math.min(...opacities)).toBeGreaterThanOrEqual(0.18);
    expect(Math.max(...opacities)).toBeLessThan(0.52);
    expect(Math.min(...speeds)).toBeGreaterThanOrEqual(0.018);
    expect(Math.max(...speeds)).toBeLessThan(0.055);
    expect(Math.min(...drifts)).toBeGreaterThanOrEqual(0.01);
    expect(Math.max(...drifts)).toBeLessThan(0.035);
    expect(new Set(tones)).toEqual(new Set([
      Math.fround(0.14),
      Math.fround(0.94)
    ]));
    expect(layer.dustMaterial.uniforms.uPixelRatio.value).toBe(1);
    expect(layer.dustMaterial.uniforms.uPointer.value.toArray()).toEqual([
      0.5,
      0.5
    ]);
    expect(layer.dustMaterial.uniforms.uPointerEnergy.value).toBe(0);
    expect(layer.dustMaterial.uniforms.uScrollImpulse.value).toBe(0);
    expect(layer.dustMaterial.uniforms.uScrollSettle.value).toBe(0);
    expect(layer.dustMaterial.uniforms.uScrollDirection.value).toBe(1);

    const profile = {
      pixelsPerParticle: 9_000,
      minParticles: 48,
      maxParticles: 160
    };
    for (const [width, height, expected] of [
      [390, 844, 48],
      [683, 994, 75],
      [1440, 900, 144],
      [1920, 1080, 160]
    ]) {
      expect(calculateFilmParticleCount({
        width,
        height,
        viewportWidth: width,
        viewportHeight: height,
        ...profile
      })).toBe(expected);
    }

    layer.dustGeometry.dispose();
    layer.dustMaterial.dispose();
  });

  test("cursor y scroll producen impulsos reactivos reversibles", async () => {
    const { FilmLayer } = await import("../src/film-layer.js");
    const { Vector2 } = await import("three");
    const listeners = new Map();
    const removed = [];
    const clearedTimers = [];
    let timerCallback = null;
    let timerDelay = null;

    const view = {
      innerWidth: 1000,
      innerHeight: 500,
      scrollY: 0,
      pageYOffset: 0,
      addEventListener(type, handler, options) {
        listeners.set(type, { handler, options });
      },
      removeEventListener(type) {
        removed.push(type);
      },
      setTimeout(callback, delay) {
        timerCallback = callback;
        timerDelay = delay;
        return 7;
      },
      clearTimeout(id) {
        clearedTimers.push(id);
      }
    };
    const layer = {
      view,
      canvas: { dataset: {} },
      rendererCleanups: [],
      pointerTarget: new Vector2(0.5, 0.5),
      pointerCurrent: new Vector2(0.5, 0.5),
      pointerEnergy: 0,
      scrollImpulse: 0,
      scrollSettle: 0,
      scrollDirection: 1,
      scrollActive: false
    };

    FilmLayer.prototype.installInteractionListeners.call(layer);

    for (const type of [
      "pointermove",
      "pointerleave",
      "scroll",
      "scrollend"
    ]) {
      expect(listeners.get(type)?.options).toEqual({ passive: true });
    }

    listeners.get("pointermove").handler({
      clientX: 0,
      clientY: 0,
      pointerType: "touch"
    });
    expect(layer.pointerEnergy).toBe(0);

    listeners.get("pointermove").handler({
      clientX: 800,
      clientY: 100,
      pointerType: "mouse"
    });
    expect(layer.pointerTarget.x).toBe(0.8);
    expect(layer.pointerTarget.y).toBe(0.8);
    expect(layer.pointerEnergy).toBeGreaterThan(0.16);
    expect(layer.canvas.dataset.filmInteraction).toBe("pointer");

    view.scrollY = 120;
    listeners.get("scroll").handler();
    expect(layer.scrollImpulse).toBe(1);
    expect(layer.scrollDirection).toBe(1);
    expect(layer.canvas.dataset.filmInteraction).toBe("scroll-start");
    expect(timerDelay).toBe(120);

    view.scrollY = 160;
    listeners.get("scroll").handler();
    expect(layer.canvas.dataset.filmInteraction).toBe("scrolling");
    expect(clearedTimers).toEqual([7]);

    timerCallback();
    expect(layer.scrollActive).toBe(false);
    expect(layer.scrollSettle).toBe(1);
    expect(layer.canvas.dataset.filmInteraction).toBe("scroll-settle");

    layer.scrollSettle = 0.5;
    listeners.get("scrollend").handler();
    expect(layer.scrollSettle).toBe(0.5);

    view.scrollY = 200;
    listeners.get("scroll").handler();
    layer.rendererCleanups.splice(0).forEach((cleanup) => cleanup());
    expect(removed.sort()).toEqual([
      "pointerleave",
      "pointermove",
      "scroll",
      "scrollend"
    ]);
    expect(clearedTimers).toEqual([7, 7]);
    expect(layer.pointerEnergy).toBe(0);
    expect(layer.scrollImpulse).toBe(0);
    expect(layer.scrollSettle).toBe(0);
  });

  test("los uniforms siguen la interacción y sus impulsos se extinguen", async () => {
    const { FilmLayer } = await import("../src/film-layer.js");
    const { Vector2 } = await import("three");
    const reactiveUniforms = () => ({
      uTime: { value: 0 },
      uPointer: { value: new Vector2(0.5, 0.5) },
      uPointerEnergy: { value: 0 },
      uScrollImpulse: { value: 0 },
      uScrollSettle: { value: 0 },
      uScrollDirection: { value: 1 }
    });
    const layer = {
      frameRequest: null,
      lastFrameTime: null,
      frameAccumulator: 0,
      elapsedTime: 0,
      pointerTarget: new Vector2(0.8, 0.2),
      pointerCurrent: new Vector2(0.5, 0.5),
      pointerEnergy: 1,
      scrollImpulse: 1,
      scrollSettle: 1,
      scrollDirection: -1,
      scrollActive: false,
      options: { maxFps: 24 },
      filmMaterial: { uniforms: reactiveUniforms() },
      dustMaterial: { uniforms: reactiveUniforms() },
      renderer: { render() {} },
      scene: {},
      camera: {},
      canvas: { dataset: { filmInteraction: "scroll-settle" } },
      shouldAnimate: () => true,
      activateStaticFallback() {
        throw new Error("la interacción simulada no debe activar fallback");
      },
      view: {
        requestAnimationFrame() {
          return 1;
        }
      }
    };
    layer.onFrame = FilmLayer.prototype.onFrame.bind(layer);

    layer.onFrame(0);
    layer.onFrame(1_000 / 24);

    expect(layer.filmMaterial.uniforms.uPointer.value.x).toBeGreaterThan(0.5);
    expect(layer.filmMaterial.uniforms.uPointer.value.y).toBeLessThan(0.5);
    expect(layer.filmMaterial.uniforms.uPointerEnergy.value).toBe(1);
    expect(layer.filmMaterial.uniforms.uScrollImpulse.value).toBe(1);
    expect(layer.filmMaterial.uniforms.uScrollSettle.value).toBe(1);
    expect(layer.filmMaterial.uniforms.uScrollDirection.value).toBe(-1);
    expect(layer.dustMaterial.uniforms.uPointer.value.toArray()).toEqual(
      layer.filmMaterial.uniforms.uPointer.value.toArray()
    );
    expect(layer.pointerEnergy).toBeGreaterThan(0);
    expect(layer.pointerEnergy).toBeLessThan(1);
    expect(layer.scrollImpulse).toBeGreaterThan(0);
    expect(layer.scrollImpulse).toBeLessThan(1);

    for (let frame = 2; frame <= 60; frame += 1) {
      layer.onFrame((frame * 1_000) / 24);
    }

    expect(layer.pointerEnergy).toBeLessThan(0.015);
    expect(layer.scrollImpulse).toBeLessThan(0.015);
    expect(layer.scrollSettle).toBeLessThan(0.015);
    expect(layer.canvas.dataset.filmInteraction).toBe("idle");
  });

  test("el reloj real conserva 24 fps y no deriva entre 24 y 144 Hz", async () => {
    const { FilmLayer } = await import("../src/film-layer.js");
    const durationSeconds = 60;
    const targetFps = 24;

    const simulateLayerClock = (refreshRate) => {
      let renders = 0;
      const layer = {
        frameRequest: null,
        lastFrameTime: null,
        frameAccumulator: 0,
        elapsedTime: 0,
        pointerTarget: {
          x: 0.5,
          y: 0.5
        },
        pointerCurrent: {
          lerp() {
            return this;
          }
        },
        pointerEnergy: 0,
        scrollImpulse: 0,
        scrollSettle: 0,
        scrollDirection: 1,
        scrollActive: false,
        options: { maxFps: targetFps },
        filmMaterial: { uniforms: { uTime: { value: 0 } } },
        dustMaterial: { uniforms: { uTime: { value: 0 } } },
        renderer: {
          render() {
            renders += 1;
          }
        },
        scene: {},
        camera: {},
        shouldAnimate: () => true,
        activateStaticFallback() {
          throw new Error("el render simulado no debe activar fallback");
        },
        view: {
          requestAnimationFrame() {
            return 1;
          }
        }
      };
      layer.onFrame = FilmLayer.prototype.onFrame.bind(layer);

      const frameCount = durationSeconds * refreshRate;
      for (let frame = 0; frame <= frameCount; frame += 1) {
        layer.onFrame((frame * 1_000) / refreshRate);
      }

      return {
        renders,
        elapsedTime: layer.elapsedTime,
        filmTime: layer.filmMaterial.uniforms.uTime.value,
        dustTime: layer.dustMaterial.uniforms.uTime.value
      };
    };

    for (const refreshRate of [24, 60, 120, 144]) {
      const result = simulateLayerClock(refreshRate);
      expect(result.renders).toBeGreaterThanOrEqual(
        targetFps * durationSeconds - 1
      );
      expect(result.renders).toBeLessThanOrEqual(
        targetFps * durationSeconds + 1
      );
      expect(Math.abs(result.elapsedTime - durationSeconds)).toBeLessThanOrEqual(
        1 / targetFps
      );
      expect(result.filmTime).toBe(result.elapsedTime);
      expect(result.dustTime).toBe(result.elapsedTime);
    }
  });

  test("movimiento reducido, ahorro de datos y control manual usan fallback estático", async () => {
    const [source, script, css] = await Promise.all([
      read("src/film-layer.js"),
      read("script.js"),
      read("styles.css")
    ]);

    expect(source).toContain("(prefers-reduced-motion: reduce)");
    expect(source).toContain("saveData === true");
    expect(source).toContain("'nimbo:motionchange'");
    expect(source).toContain("dataset.motion === 'off'");
    expect(source).toContain("activateStaticFallback");

    expect(script).toContain('const motionStorageKey = "nimbo-motion"');
    expect(script).toContain("window.localStorage");
    expect(script).toContain('root.dataset.motion = enabled ? "on" : "off"');
    expect(script).toContain('new CustomEvent("nimbo:motionchange"');
    expect(script).toContain('toggle.setAttribute("aria-pressed", String(enabled))');
    expect(script).toContain('root.dataset.motion !== "on"');
    expect(script).toContain("navigator.connection?.saveData === true");
    expect(script).toContain('script.src = "/assets/film-layer.js"');

    for (const { file } of publicPages) {
      expect(await read(file), file).not.toContain(
        '<script src="/assets/film-layer.js"'
      );
    }

    expect(css).toContain("@media (prefers-reduced-motion: reduce)");
    expect(css).toContain('html[data-motion="off"] .film-layer');
    expect(css).toMatch(/@media \(prefers-reduced-motion: reduce\)[\s\S]*?\.film-layer\s*\{[^}]*display:\s*none;/);
  });

  test("la navegación móvil y los controles conservan teclado y objetivos táctiles", async () => {
    const [script, css] = await Promise.all([read("script.js"), read("styles.css")]);

    expect(script).toContain('event.key === "Escape"');
    expect(script).toContain("closeMenu(true)");
    expect(script).toContain('aria-expanded');
    expect(css).toContain(":focus-visible");

    const controlRule = css.match(
      /\.nav-list a,\s*\.nav-toggle,\s*\.motion-toggle\s*\{([\s\S]*?)\}/
    )?.[1];
    expect(controlRule).toBeDefined();
    expect(controlRule).toMatch(/min-height:\s*44px;/);
    expect(css).toMatch(/\.motion-toggle\s*\{[\s\S]*?min-width:\s*9\.5rem;/);
  });
});

describe("operación y seguridad", () => {
  test("Docker publica portada, Laboratorio y assets con Nginx sin privilegios", async () => {
    const dockerfile = await read("Dockerfile");
    expect(dockerfile).toMatch(
      /^FROM nginxinc\/nginx-unprivileged:1\.30\.4-alpine@sha256:44e36330f74d4f3a1d4e222acca9e23b401fb87811a7597024502bb759c4dd49$/m
    );
    expect(dockerfile).toContain("COPY --chown=nginx:nginx laboratorio/");
    expect(dockerfile).toContain("COPY --chown=nginx:nginx assets/");
    expect(dockerfile).toContain("USER nginx");
    expect(dockerfile).toContain("HEALTHCHECK");
    expect(dockerfile).toContain("EXPOSE 8080");
  });

  test("Nginx sirve WebP y PNG con caché corta y documentos con revalidación", async () => {
    const nginx = await read("nginx.conf");
    const assetPolicy = nginx
      .split("\n")
      .find((line) => line.includes("(?:css|js|svg|png|webp)"));

    expect(assetPolicy).toBeDefined();
    expect(assetPolicy).toContain("must-revalidate");
    expect(assetPolicy).not.toContain("immutable");
    expect(Number(assetPolicy.match(/max-age=(\d+)/)?.[1])).toBeLessThanOrEqual(3600);
    expect(nginx).toContain('"no-cache"');
    expect(nginx).toMatch(/^\s*gzip\s+on;$/m);
    expect(nginx).toContain("application/javascript");
    expect(nginx).toMatch(/location ~\* \\\.\(\?:css\|js\|svg\|png\|webp\)\$/);
  });

  test("CSP autoriza solo scripts locales y el JSON-LD mediante su hash exacto", async () => {
    const [html, nginx] = await Promise.all([read("index.html"), read("nginx.conf")]);
    const jsonLd = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
    )?.[1];
    const csp = nginx.match(
      /add_header Content-Security-Policy "([^"]+)" always;/
    )?.[1];

    expect(jsonLd).toBeDefined();
    expect(csp).toBeDefined();
    const hash = createHash("sha256").update(jsonLd).digest("base64");
    const scriptSources = csp
      .split(";")
      .map((directive) => directive.trim())
      .find((directive) => directive.startsWith("script-src"))
      ?.split(/\s+/)
      .slice(1);

    expect(scriptSources).toEqual(["'self'", `'sha256-${hash}'`]);
    expect(csp).not.toContain("'unsafe-inline'");
    expect(csp).toContain("connect-src 'none'");
    expect(csp).toContain("img-src 'self' data:");
    expect(csp).toContain("frame-ancestors 'none'");
  });

  test("los scripts de proyecto regeneran el bundle y documentan el flujo", async () => {
    const packageJson = JSON.parse(await read("package.json"));
    const readme = await read("README.md");

    expect(packageJson.dependencies.three).toBe("0.185.1");
    expect(packageJson.scripts.test).toBe("bun test");
    expect(packageJson.scripts["build:assets"]).toContain("src/film-entry.js");
    expect(packageJson.scripts.check).toContain("bun run build:assets");
    for (const heading of [
      "Desarrollo",
      "Estructura",
      "Pruebas",
      "Build",
      "Producción",
      "Despliegue"
    ]) {
      expect(readme).toContain(`## ${heading}`);
    }
  });
});

describe("higiene del repositorio", () => {
  test("los archivos fuente de texto no contienen espacios finales", async () => {
    const ignoredDirectories = new Set([".git", "node_modules"]);
    const ignoredFiles = new Set(["assets/film-layer.js"]);
    const textExtensions = new Set([
      ".css",
      ".html",
      ".js",
      ".json",
      ".md",
      ".txt",
      ".xml",
      ".conf"
    ]);

    const walk = async (directory = "") => {
      const entries = await readdir(join(root, directory), { withFileTypes: true });
      const files = [];
      for (const entry of entries) {
        const path = join(directory, entry.name);
        if (entry.isDirectory()) {
          if (!ignoredDirectories.has(entry.name)) files.push(...await walk(path));
        } else if (
          textExtensions.has(extname(entry.name)) &&
          !ignoredFiles.has(path)
        ) {
          files.push(path);
        }
      }
      return files;
    };

    for (const path of await walk()) {
      const content = await read(path);
      expect(content, path).not.toMatch(/[ \t]+$/m);
    }
  });
});
