import { describe, expect, test } from "bun:test";
import { createHash } from "node:crypto";
import { readdir, readFile, stat } from "node:fs/promises";
import { extname, join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");
const exists = async (path) => {
  try {
    await stat(join(root, path));
    return true;
  } catch {
    return false;
  }
};

describe("estructura del sitio", () => {
  test("incluye la estructura semántica y las secciones requeridas", async () => {
    const html = await read("index.html");
    for (const element of ["header", "nav", "main", "section", "article", "footer"]) {
      expect(html).toMatch(new RegExp(`<${element}(?:\\s|>)`));
    }
    for (const id of ["trayectoria", "practica", "colaboracion", "contacto"]) {
      expect(html).toContain(`id="${id}"`);
    }
    for (const topic of ["Producto digital", "Nube e infraestructura", "IA, agentes y automatización", "Estrategia tecnológica"]) {
      expect(html).toContain(topic);
    }
    expect(html).toContain("contacto@nimbo.mx");
    expect(html).not.toMatch(/<h1[^>]*>[^<]*(?:consultor|freelance)/i);
  });

  test("incluye una página 404 útil y accesible", async () => {
    const html = await read("404.html");
    expect(html).toContain("<h1>");
    expect(html).toContain('href="/"');
    expect(html).toContain('content="noindex, follow"');
    expect(html).toContain('lang="es-MX"');
  });
});

describe("metadata y descubrimiento", () => {
  test("declara SEO, Open Graph y datos estructurados", async () => {
    const html = await read("index.html");
    expect(html).toContain("<title>");
    expect(html).toContain('name="description"');
    expect(html).toContain('rel="canonical" href="https://nimbo.mx/"');
    expect(html).toContain('property="og:title"');
    expect(html).toContain('property="og:description"');
    expect(html).toContain('property="og:image"');
    expect(html).toContain('property="og:image:type" content="image/svg+xml"');
    expect(html).toContain('property="og:image:width" content="1200"');
    expect(html).toContain('property="og:image:height" content="630"');
    expect(html).toContain('property="og:image:alt" content="Nimbo: tecnología útil, construida con criterio"');
    expect(html).toContain('name="twitter:card"');
    expect(html).toContain('name="twitter:image:alt" content="Nimbo: tecnología útil, construida con criterio"');
    expect(html).toContain('type="application/ld+json"');
    expect(html).toContain('"@type": "ProfessionalService"');
    expect(html).not.toContain('"@type": "Person"');
  });

  test("publica robots, sitemap e íconos locales", async () => {
    const [robots, sitemap] = await Promise.all([read("robots.txt"), read("sitemap.xml")]);
    expect(robots).toContain("Sitemap: https://nimbo.mx/sitemap.xml");
    expect(sitemap).toContain("<loc>https://nimbo.mx/</loc>");
    expect(await exists("assets/favicon.svg")).toBe(true);
    expect(await exists("assets/og-image.svg")).toBe(true);
  });
});

describe("enlaces y recursos", () => {
  test("todos los enlaces internos y fragmentos apuntan a destinos válidos", async () => {
    for (const page of ["index.html", "404.html"]) {
      const html = await read(page);
      const ids = new Set([...html.matchAll(/\sid="([^"]+)"/g)].map((match) => match[1]));
      const hrefs = [...html.matchAll(/\shref="([^"]+)"/g)].map((match) => match[1]);

      for (const href of hrefs) {
        if (href.startsWith("#")) {
          expect(ids.has(href.slice(1))).toBe(true);
        } else if (href.startsWith("/") && href !== "/") {
          expect(await exists(href.slice(1))).toBe(true);
        }
      }
    }
  });

  test("no carga recursos desde servicios externos", async () => {
    for (const page of ["index.html", "404.html"]) {
      const html = await read(page);
      const resourceUrls = [
        ...html.matchAll(/<(?:script|img|source)\b[^>]*\ssrc="([^"]+)"/gi),
        ...html.matchAll(/<link\b(?=[^>]*\srel="(?:stylesheet|icon)")[^>]*\shref="([^"]+)"/gi)
      ].map((match) => match[1]);
      for (const url of resourceUrls) {
        expect(url).not.toMatch(/^https?:\/\//);
        expect(url).not.toMatch(/^\/\//);
      }
    }

    const css = await read("styles.css");
    expect(css).not.toMatch(/@import\s/i);
    expect(css).not.toMatch(/url\(\s*["']?https?:\/\//i);
  });
});

describe("operación", () => {
  test("fija la imagen actualizada de nginx al digest multi-arquitectura aprobado", async () => {
    const dockerfile = await read("Dockerfile");
    expect(dockerfile).toMatch(
      /^FROM nginxinc\/nginx-unprivileged:1\.30\.4-alpine@sha256:44e36330f74d4f3a1d4e222acca9e23b401fb87811a7597024502bb759c4dd49$/m
    );
    expect(dockerfile).not.toContain("nginx-unprivileged:1.27-alpine");
    expect(dockerfile).toContain("USER nginx");
    expect(dockerfile).toContain("HEALTHCHECK");
  });

  test("usa caché corta y revalidable para recursos sin versión", async () => {
    const nginx = await read("nginx.conf");
    const assetPolicy = nginx
      .split("\n")
      .find((line) => line.includes("(?:css|js|svg)"));

    expect(assetPolicy).toBeDefined();
    expect(assetPolicy).toContain("must-revalidate");
    expect(assetPolicy).not.toContain("immutable");
    const maxAge = Number(assetPolicy.match(/max-age=(\d+)/)?.[1]);
    expect(maxAge).toBeGreaterThan(0);
    expect(maxAge).toBeLessThanOrEqual(3600);
    expect(nginx).not.toContain("31536000");
    expect(nginx).not.toContain("immutable");
    expect(nginx).toContain('"no-cache"');
  });

  test("autoriza solo el JSON-LD inline mediante su hash exacto", async () => {
    const [html, nginx] = await Promise.all([read("index.html"), read("nginx.conf")]);
    const jsonLd = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)?.[1];
    const csp = nginx.match(/add_header Content-Security-Policy "([^"]+)" always;/)?.[1];

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
    for (const directive of [
      "default-src 'self'",
      "base-uri 'self'",
      "connect-src 'none'",
      "font-src 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "img-src 'self' data:",
      "object-src 'none'",
      "style-src 'self'",
      "upgrade-insecure-requests"
    ]) {
      expect(csp).toContain(directive);
    }
  });

  test("sirve el 404 propio al solicitar el directorio de assets", async () => {
    const nginx = await read("nginx.conf");
    expect(nginx).toContain("location = /health");
    expect(nginx).toContain("X-Content-Type-Options");
    expect(nginx).toMatch(/location = \/assets\/\s*{\s*return 404;\s*}/);
    expect(nginx).toContain("error_page 404 /404.html");
    expect(nginx).toMatch(/location = \/404\.html\s*{\s*internal;\s*}/);
  });

  test("incluye la documentación y scripts del proyecto", async () => {
    const packageJson = JSON.parse(await read("package.json"));
    const readme = await read("README.md");
    expect(packageJson.scripts.test).toBe("bun test");
    for (const heading of ["Desarrollo", "Pruebas", "Build", "Despliegue"]) {
      expect(readme).toContain(`## ${heading}`);
    }
  });
});

describe("accesibilidad", () => {
  const relativeLuminance = (hex) => {
    const normalized = hex.replace("#", "");
    const expanded = normalized.length === 3
      ? normalized.split("").map((character) => character.repeat(2)).join("")
      : normalized;
    const channels = expanded.match(/.{2}/g).map((channel) => {
      const value = Number.parseInt(channel, 16) / 255;
      return value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
    });
    return 0.2126 * channels[0] + 0.7152 * channels[1] + 0.0722 * channels[2];
  };

  const contrast = (first, second) => {
    const luminances = [relativeLuminance(first), relativeLuminance(second)].sort((a, b) => b - a);
    return (luminances[0] + 0.05) / (luminances[1] + 0.05);
  };

  test("el enlace de contacto conserva contraste AA y muestra un foco visible", async () => {
    const css = await read("styles.css");
    const blue = css.match(/--blue:\s*(#[\da-f]{6})/i)?.[1];
    const hover = css.match(/\.contact-link:hover\s*{([^}]*)}/)?.[1];
    const focus = css.match(/\.contact-link:focus-visible\s*{([^}]*)}/)?.[1];

    expect(blue).toBeDefined();
    expect(hover).toMatch(/color:\s*#fff;/);
    expect(focus).toMatch(/color:\s*#fff;/);
    expect(contrast("#fff", blue)).toBeGreaterThanOrEqual(4.5);
    expect(focus).toMatch(/outline:\s*3px solid #fff;/);
    expect(focus).toMatch(/outline-offset:\s*6px;/);
  });

  test("los controles móviles declaran objetivos táctiles mínimos de 44 por 44 px", async () => {
    const css = await read("styles.css");
    const mobileStart = css.indexOf("@media (max-width: 800px)");
    const mobileEnd = css.indexOf("@media (max-width: 520px)");
    const mobile = css.slice(mobileStart, mobileEnd);
    const targetRule = mobile.match(
      /\.brand,\s*\.nav-toggle,\s*\.nav-list a,\s*\.text-link,\s*\.contact-link,\s*\.error-link\s*{([^}]*)}/
    )?.[1];

    expect(mobileStart).toBeGreaterThanOrEqual(0);
    expect(targetRule).toBeDefined();
    expect(targetRule).toMatch(/min-width:\s*44px;/);
    expect(targetRule).toMatch(/min-height:\s*44px;/);
    expect(mobile).toMatch(/\.text-link\s*{[^}]*display:\s*inline-flex;/);
  });
  test("usa azul oscuro con contraste AA real en todas las etiquetas pequeñas sobre papel", async () => {
    const css = await read("styles.css");
    const blue = css.match(/--blue:\s*(#[\da-f]{6})/i)?.[1];
    const blueText = css.match(/--blue-text:\s*(#[\da-f]{6})/i)?.[1];
    const paper = css.match(/--paper:\s*(#[\da-f]{6})/i)?.[1];
    const paperDeep = css.match(/--paper-deep:\s*(#[\da-f]{6})/i)?.[1];
    const sectionLabel = css.match(/\.section-label span\s*{([^}]*)}/)?.[1];
    const problemLabel = css.match(/\.problem-grid span\s*{([^}]*)}/)?.[1];
    const modeType = css.match(/\.mode-type\s*{([^}]*)}/g)?.at(-1);

    expect(blue).toBe("#615cff");
    expect(blueText).toBe("#504adf");
    expect(sectionLabel).toMatch(/color:\s*var\(--blue-text\);/);
    expect(problemLabel).toMatch(/color:\s*var\(--blue-text\);/);
    expect(problemLabel).toMatch(/border:\s*1px solid var\(--blue\);/);
    expect(modeType).toMatch(/color:\s*var\(--blue-text\);/);
    expect(css).toMatch(/\.contact\s*{[^}]*background:\s*var\(--blue\);/s);

    const labelPairs = [
      ["numeración de sección", blueText, paper],
      ["letras de problemas", blueText, paper],
      ["numeración de colaboración", blueText, paperDeep],
      ["tipos de colaboración", blueText, paperDeep]
    ];

    for (const [label, foreground, background] of labelPairs) {
      expect(contrast(foreground, background), label).toBeGreaterThanOrEqual(4.5);
    }
  });

  test("Escape cierra el menú abierto, sincroniza su estado y devuelve el foco", async () => {
    const script = await read("script.js");
    const makeElement = () => {
      const listeners = {};
      const classes = new Set();
      return {
        attributes: new Map(),
        focusCalls: 0,
        listeners,
        addEventListener(type, listener) {
          listeners[type] = listener;
        },
        getAttribute(name) {
          return this.attributes.get(name) ?? null;
        },
        setAttribute(name, value) {
          this.attributes.set(name, value);
        },
        focus() {
          this.focusCalls += 1;
        },
        classList: {
          contains(name) {
            return classes.has(name);
          },
          remove(name) {
            classes.delete(name);
          },
          toggle(name, force) {
            if (force) classes.add(name);
            else classes.delete(name);
          }
        }
      };
    };

    const toggle = makeElement();
    const nav = makeElement();
    const documentListeners = {};
    toggle.setAttribute("aria-expanded", "false");
    const fakeDocument = {
      querySelector(selector) {
        if (selector === ".nav-toggle") return toggle;
        if (selector === "#nav-list") return nav;
        return null;
      },
      addEventListener(type, listener) {
        documentListeners[type] = listener;
      }
    };

    new Function("document", script)(fakeDocument);

    toggle.listeners.click();
    expect(toggle.getAttribute("aria-expanded")).toBe("true");
    expect(nav.classList.contains("is-open")).toBe(true);

    documentListeners.keydown({ key: "Escape" });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(nav.classList.contains("is-open")).toBe(false);
    expect(toggle.focusCalls).toBe(1);

    toggle.listeners.click();
    nav.listeners.click({ target: { closest: (selector) => selector === "a" } });
    expect(toggle.getAttribute("aria-expanded")).toBe("false");
    expect(nav.classList.contains("is-open")).toBe(false);
    expect(toggle.focusCalls).toBe(1);
  });

  test("el salto de línea del encabezado de contacto conserva separación textual", async () => {
    const html = await read("index.html");
    const heading = html.match(/<h2 id="contact-title">([\s\S]*?)<\/h2>/)?.[1];

    expect(heading).toBeDefined();
    expect(heading).toMatch(/lo que\s+<br>\s+quieres/);
    const accessibleText = heading
      .replace(/<br\s*\/?>/gi, " ")
      .replace(/<[^>]+>/g, "")
      .replace(/\s+/g, " ")
      .trim();
    expect(accessibleText).toBe("Hablemos de lo que quieres hacer posible.");
  });

});

describe("higiene de archivos", () => {
  test("ningún archivo de texto termina líneas con espacios", async () => {
    const ignoredDirectories = new Set([".git", "node_modules"]);
    const textExtensions = new Set([".html", ".css", ".js", ".json", ".md", ".txt", ".xml", ".conf", ".svg"]);
    const files = [];

    const walk = async (directory) => {
      for (const entry of await readdir(directory, { withFileTypes: true })) {
        if (ignoredDirectories.has(entry.name)) continue;
        const path = join(directory, entry.name);
        if (entry.isDirectory()) {
          await walk(path);
        } else if (textExtensions.has(extname(entry.name)) || entry.name === "Dockerfile" || entry.name === ".dockerignore") {
          files.push(path);
        }
      }
    };

    await walk(root);

    for (const file of files) {
      const content = await readFile(file, "utf8");
      expect(content, file).not.toMatch(/[ \t]+$/m);
    }
  });
});
