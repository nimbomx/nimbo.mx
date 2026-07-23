import { describe, expect, test } from "bun:test";
import { createHash } from "node:crypto";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");

const fixedSecurityHeaders = {
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY"
};

const headerDirectives = (nginx, name) => [
  ...nginx.matchAll(
    new RegExp(`^\\s*add_header\\s+${name}\\s+"([^"]*)"\\s+(\\S+);\\s*$`, "gm")
  )
];

describe("seguridad productiva de Nginx", () => {
  test("oculta la versión y conserva los headers fijos en todas las respuestas", async () => {
    const nginx = await read("nginx.conf");
    expect(nginx).toMatch(/^\s*server_tokens\s+off;\s*$/m);

    for (const [name, value] of Object.entries(fixedSecurityHeaders)) {
      const directives = headerDirectives(nginx, name);
      expect(directives, name).toHaveLength(1);
      expect(directives[0][1], name).toBe(value);
      expect(directives[0][2], name).toBe("always");
    }
  });

  test("CSP incorpora dinámicamente el hash exacto del JSON-LD vigente", async () => {
    const [html, nginx] = await Promise.all([
      read("index.html"),
      read("nginx.conf")
    ]);
    const jsonLd = html.match(
      /<script type="application\/ld\+json">([\s\S]*?)<\/script>/
    )?.[1];
    expect(jsonLd).toBeDefined();

    const hash = createHash("sha256").update(jsonLd).digest("base64");
    const expected = [
      "default-src 'self'",
      "base-uri 'self'",
      "connect-src 'none'",
      "font-src 'self'",
      "form-action 'self'",
      "frame-ancestors 'none'",
      "img-src 'self' data:",
      "object-src 'none'",
      `script-src 'self' 'sha256-${hash}'`,
      "style-src 'self'",
      "upgrade-insecure-requests"
    ].join("; ");
    const directives = headerDirectives(nginx, "Content-Security-Policy");

    expect(directives).toHaveLength(1);
    expect(directives[0][1]).toBe(expected);
    expect(directives[0][2]).toBe("always");
    expect(directives[0][1]).not.toContain("'unsafe-inline'");
    expect(directives[0][1]).not.toContain("'unsafe-eval'");
  });

  test("mantiene /health fuera del access log y responde 200", async () => {
    const nginx = await read("nginx.conf");
    const healthLocation = nginx.match(
      /location\s*=\s*\/health\s*\{([\s\S]*?)\}/
    )?.[1];

    expect(healthLocation).toBeDefined();
    expect(healthLocation).toMatch(/^\s*access_log\s+off;\s*$/m);
    expect(healthLocation).toMatch(/^\s*return\s+200(?:\s|;)/m);
  });
});
