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
    const [source, entry, bundle] = await Promise.all([
      read("src/film-layer.js"),
      read("src/film-entry.js"),
      readBinary("assets/film-layer.js")
    ]);

    expect(source).toContain("from 'three'");
    expect(source).toContain("new ShaderMaterial");
    expect(source).toContain("new PointsMaterial");
    expect(source).toContain("new Points");
    expect(source).toContain("MAX_DEVICE_PIXEL_RATIO = 1.5");
    expect(source).toContain("maxFps");
    expect(source).toContain("visibilitychange");
    expect(source).toContain("IntersectionObserver");
    expect(source).toContain("requestAnimationFrame");
    expect(source).toContain("dispose()");
    expect(entry).toContain("autoStartFilmLayers");
    expect(bundle.byteLength).toBeGreaterThan(100_000);
    expect(bundle.byteLength).toBeLessThan(650_000);
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
