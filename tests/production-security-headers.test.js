import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");

const expectedSecurityHeaders = {
  "Content-Security-Policy": "default-src 'self'; base-uri 'self'; connect-src 'none'; font-src 'self'; form-action 'self'; frame-ancestors 'none'; img-src 'self' data:; object-src 'none'; script-src 'self' 'sha256-DIIaeUpLj5UJvBTKA4gCCDLs6TVqt3Oiav4drB1XN78='; style-src 'self'; upgrade-insecure-requests",
  "Cross-Origin-Opener-Policy": "same-origin",
  "Cross-Origin-Resource-Policy": "same-origin",
  "Permissions-Policy": "camera=(), geolocation=(), microphone=(), payment=(), usb=()",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY"
};

describe("seguridad productiva de Nginx", () => {
  test("oculta la versión y conserva los headers de seguridad en todas las respuestas", async () => {
    const nginx = await read("nginx.conf");

    expect(nginx).toMatch(/^\s*server_tokens\s+off;\s*$/m);

    for (const [name, value] of Object.entries(expectedSecurityHeaders)) {
      const directives = [...nginx.matchAll(
        new RegExp(`^\\s*add_header\\s+${name}\\s+"([^"]*)"\\s+(\\S+);\\s*$`, "gm")
      )];

      expect(directives, name).toHaveLength(1);
      expect(directives[0][1], name).toBe(value);
      expect(directives[0][2], name).toBe("always");
    }
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
