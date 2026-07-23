import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");

describe("contrato productivo de Nginx", () => {
  test("mantiene la imagen, el puerto y el endpoint de salud aprobados", async () => {
    const [dockerfile, nginx] = await Promise.all([
      read("Dockerfile"),
      read("nginx.conf")
    ]);

    expect(dockerfile).toMatch(
      /^FROM nginxinc\/nginx-unprivileged:1\.30\.4-alpine@sha256:44e36330f74d4f3a1d4e222acca9e23b401fb87811a7597024502bb759c4dd49$/m
    );
    expect(dockerfile).toMatch(/^EXPOSE 8080$/m);

    const healthcheck = dockerfile.match(
      /^HEALTHCHECK[^\n]*\\\n[^\n]*$/m
    )?.[0];
    expect(healthcheck).toBeDefined();
    expect(healthcheck).toContain("http://127.0.0.1:8080/health");

    expect(nginx).toMatch(/^\s*listen 8080;$/m);
    expect(nginx).toMatch(/^\s*listen \[::\]:8080;$/m);

    const healthLocation = nginx.match(
      /location\s*=\s*\/health\s*\{([\s\S]*?)\}/
    )?.[1];
    expect(healthLocation).toBeDefined();
    expect(healthLocation).toMatch(/return\s+200\s+"ok\\n";/);
  });
});
