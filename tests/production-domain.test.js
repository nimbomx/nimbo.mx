import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");
const allowedProductionHosts = new Set(["nimbo.mx", "www.nimbo.mx"]);
const forbiddenDomain = ["nyx", "mx"].join(".");

const publicPages = [
  ["index.html", "https://nimbo.mx/"],
  ["laboratorio/index.html", "https://nimbo.mx/laboratorio/"],
  [
    "laboratorio/nimbo-pro/index.html",
    "https://nimbo.mx/laboratorio/nimbo-pro/"
  ]
];

const expectAllowedProductionUrl = (value) => {
  const url = new URL(value);
  expect(url.protocol).toBe("https:");
  expect(allowedProductionHosts.has(url.hostname), value).toBe(true);
};

describe("dominios productivos publicados", () => {
  test("canonical y og:url de cada página apuntan a nimbo.mx", async () => {
    for (const [file, expectedUrl] of publicPages) {
      const html = await read(file);
      const canonical = html.match(
        /<link\b(?=[^>]*\brel="canonical")(?=[^>]*\bhref="([^"]+)")[^>]*>/
      )?.[1];
      const openGraphUrl = html.match(
        /<meta\b(?=[^>]*\bproperty="og:url")(?=[^>]*\bcontent="([^"]+)")[^>]*>/
      )?.[1];

      expect(canonical, file).toBe(expectedUrl);
      expect(openGraphUrl, file).toBe(expectedUrl);
      expectAllowedProductionUrl(canonical);
      expectAllowedProductionUrl(openGraphUrl);
    }
  });

  test("las tarjetas sociales usan exclusivamente el asset canónico de nimbo.mx", async () => {
    for (const [file] of publicPages) {
      const html = await read(file);
      const image = html.match(
        /<meta\b(?=[^>]*\bproperty="og:image")(?=[^>]*\bcontent="([^"]+)")[^>]*>/
      )?.[1];

      expect(image, file).toBe("https://nimbo.mx/assets/og-image.png");
      expectAllowedProductionUrl(image);
    }
  });

  test("robots y sitemap publican solo las tres URLs canónicas aprobadas", async () => {
    const [robots, sitemap] = await Promise.all([
      read("robots.txt"),
      read("sitemap.xml")
    ]);
    const robotsUrls = robots.match(/https?:\/\/[^\s]+/g) ?? [];
    const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map(
      (match) => match[1]
    );

    expect(robotsUrls).toEqual(["https://nimbo.mx/sitemap.xml"]);
    expect(sitemapUrls).toEqual(publicPages.map(([, url]) => url));
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

  test("los archivos publicados y documentados no mencionan el dominio rechazado", async () => {
    const publishedAndDocumentedFiles = [
      "404.html",
      "README.md",
      "index.html",
      "laboratorio/index.html",
      "laboratorio/nimbo-pro/index.html",
      "robots.txt",
      "sitemap.xml",
      "assets/favicon.svg"
    ];

    for (const path of publishedAndDocumentedFiles) {
      const content = (await read(path)).toLowerCase();
      const declaredMexicanDomains =
        content.match(/\b(?:[a-z0-9-]+\.)+mx\b/g) ?? [];

      expect(content, path).not.toContain(forbiddenDomain);
      for (const domain of declaredMexicanDomains) {
        expect(allowedProductionHosts.has(domain), `${path}: ${domain}`).toBe(true);
      }
    }
  });
});
