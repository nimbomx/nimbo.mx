import { describe, expect, test } from "bun:test";
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
    expect(html).toContain('name="twitter:card"');
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
  test("incluye contenedor, healthcheck y configuración segura", async () => {
    const [dockerfile, nginx] = await Promise.all([read("Dockerfile"), read("nginx.conf")]);
    expect(dockerfile).toContain("nginx-unprivileged");
    expect(dockerfile).toContain("USER nginx");
    expect(dockerfile).toContain("HEALTHCHECK");
    expect(nginx).toContain("location = /health");
    expect(nginx).toContain("Content-Security-Policy");
    expect(nginx).toContain("X-Content-Type-Options");
    expect(nginx).toContain('error_page 404 /404.html');
    expect(nginx).toContain("immutable");
    expect(nginx).toContain('"no-cache"');
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
