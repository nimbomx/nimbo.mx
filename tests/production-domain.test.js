import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");
const allowedProductionHosts = new Set(["nimbo.mx", "www.nimbo.mx"]);
const forbiddenDomain = ["nyx", "mx"].join(".");

const expectAllowedProductionUrl = (value) => {
  const url = new URL(value);
  expect(url.protocol).toBe("https:");
  expect(allowedProductionHosts.has(url.hostname), value).toBe(true);
};

describe("dominios productivos publicados", () => {
  test("canonical y og:url apuntan al dominio canónico aprobado", async () => {
    const html = await read("index.html");
    const canonical = html.match(
      /<link\b(?=[^>]*\brel="canonical")(?=[^>]*\bhref="([^"]+)")[^>]*>/
    )?.[1];
    const openGraphUrl = html.match(
      /<meta\b(?=[^>]*\bproperty="og:url")(?=[^>]*\bcontent="([^"]+)")[^>]*>/
    )?.[1];

    expect(canonical).toBe("https://nimbo.mx/");
    expect(openGraphUrl).toBe("https://nimbo.mx/");
    expectAllowedProductionUrl(canonical);
    expectAllowedProductionUrl(openGraphUrl);
  });

  test("robots.txt y sitemap.xml solo publican URLs de los hosts aprobados", async () => {
    const [robots, sitemap] = await Promise.all([
      read("robots.txt"),
      read("sitemap.xml")
    ]);
    const robotsUrls = robots.match(/https?:\/\/[^\s]+/g) ?? [];
    const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
      .map((match) => match[1]);

    expect(robotsUrls).toEqual(["https://nimbo.mx/sitemap.xml"]);
    expect(sitemapUrls).toContain("https://nimbo.mx/");
    expect(sitemapUrls.length).toBeGreaterThan(0);

    for (const url of [...robotsUrls, ...sitemapUrls]) {
      expectAllowedProductionUrl(url);
    }
  });

  test("la sección Producción documenta únicamente los dominios públicos aprobados", async () => {
    const readme = await read("README.md");
    const heading = readme.match(/^## Producción[^\S\r\n]*$/m);
    const afterHeading = heading
      ? readme.slice(heading.index + heading[0].length)
      : "";
    const nextHeading = afterHeading.search(/^## /m);
    const production = heading
      ? afterHeading.slice(0, nextHeading === -1 ? undefined : nextHeading)
      : undefined;
    const declaredDomains = production?.match(/(?:www\.)?nimbo\.mx/gi) ?? [];

    expect(production).toBeDefined();
    expect(new Set(declaredDomains.map((domain) => domain.toLowerCase()))).toEqual(
      allowedProductionHosts
    );
    expect(production.toLowerCase()).not.toContain(forbiddenDomain);
  });

  test("el sitio y su documentación no contienen el dominio rechazado", async () => {
    const publishedAndDocumentedFiles = [
      "404.html",
      "README.md",
      "index.html",
      "robots.txt",
      "sitemap.xml",
      "assets/favicon.svg",
      "assets/og-image.svg"
    ];

    for (const path of publishedAndDocumentedFiles) {
      const content = (await read(path)).toLowerCase();
      const declaredMexicanDomains = content.match(
        /\b(?:[a-z0-9-]+\.)+mx\b/g
      ) ?? [];

      expect(content, path).not.toContain(forbiddenDomain);
      for (const domain of declaredMexicanDomains) {
        expect(allowedProductionHosts.has(domain), `${path}: ${domain}`).toBe(true);
      }
    }
  });
});
