import { afterAll, beforeAll, describe, expect, test } from "bun:test";
import { mkdtemp, readFile, rm } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");

/**
 * El endpoint de contacto se prueba arrancándolo de verdad y hablándole por
 * HTTP. Una prueba que solo lea el archivo no distingue entre un servidor que
 * valida y uno que dice que valida.
 */
let proceso;
let base;
let archivo;
let carpeta;

const enviar = (campos, cabeceras = {}) =>
  fetch(`${base}/api/contacto`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded", ...cabeceras },
    body: new URLSearchParams(campos).toString(),
    redirect: "manual"
  });

const guardados = async () => {
  try {
    const texto = await readFile(archivo, "utf8");
    return texto.trim() ? texto.trim().split("\n").map((l) => JSON.parse(l)) : [];
  } catch {
    return [];
  }
};

beforeAll(async () => {
  carpeta = await mkdtemp(join(tmpdir(), "contacto-"));
  archivo = join(carpeta, "mensajes.jsonl");
  const puerto = 8900 + Math.floor(Math.random() * 90);
  base = `http://127.0.0.1:${puerto}`;

  proceso = Bun.spawn(["bun", "run", "contacto/servidor.js"], {
    cwd: root,
    env: {
      ...process.env,
      PORT: String(puerto),
      ARCHIVO_MENSAJES: archivo,
      ORIGEN_PUBLICO: "https://nimbo.mx",
      SMTP_HOST: "" // sin correo: el mensaje debe guardarse igual
    },
    stdout: "pipe",
    stderr: "pipe"
  });

  for (let intento = 0; intento < 50; intento += 1) {
    try {
      const r = await fetch(`${base}/salud`);
      if (r.ok) return;
    } catch {
      /* todavía no levanta */
    }
    await Bun.sleep(100);
  }
  throw new Error("el servicio de contacto no arrancó");
});

afterAll(async () => {
  proceso?.kill();
  if (carpeta) await rm(carpeta, { recursive: true, force: true });
});

describe("endpoint de contacto", () => {
  test("guarda un mensaje válido y acusa recibo con 303", async () => {
    const antes = (await guardados()).length;
    const r = await enviar({
      nombre: "Ernesto Hernández",
      correo: "ernesto@nimbo.mx",
      mensaje: "Un mensaje con acentos y ñ."
    });

    expect(r.status).toBe(303);
    expect(r.headers.get("location")).toBe("https://nimbo.mx/gracias/");
    expect(r.headers.get("cache-control")).toBe("no-store");

    const ahora = await guardados();
    expect(ahora.length).toBe(antes + 1);

    const ultimo = ahora.at(-1);
    expect(ultimo.nombre).toBe("Ernesto Hernández");
    expect(ultimo.mensaje).toContain("ñ");
    expect(Date.parse(ultimo.recibido)).not.toBeNaN();
  });

  test("rechaza lo incompleto sin guardarlo", async () => {
    for (const campos of [
      { nombre: "", correo: "a@b.com", mensaje: "hola" },
      { nombre: "Ana", correo: "no-es-un-correo", mensaje: "hola" },
      { nombre: "Ana", correo: "a@b.com", mensaje: "" }
    ]) {
      const antes = (await guardados()).length;
      const r = await enviar(campos);
      expect(r.headers.get("location")).toBe("https://nimbo.mx/gracias/no-enviado/");
      expect((await guardados()).length).toBe(antes);
    }
  });

  test("la trampa no guarda nada y no delata que fue detectada", async () => {
    const antes = (await guardados()).length;
    const r = await enviar({
      nombre: "Robot",
      correo: "robot@spam.example",
      mensaje: "compra esto",
      empresa: "SpamCorp"
    });

    // Misma respuesta que un envío correcto: quien automatiza no obtiene señal.
    expect(r.headers.get("location")).toBe("https://nimbo.mx/gracias/");
    expect((await guardados()).length).toBe(antes);
  });

  test("solo acepta POST con formulario codificado", async () => {
    expect((await fetch(`${base}/api/contacto`)).status).toBe(405);

    const json = await fetch(`${base}/api/contacto`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: "{}"
    });
    expect(json.status).toBe(415);

    expect((await fetch(`${base}/otra-ruta`)).status).toBe(404);
  });

  test("corta a la sexta petición de la misma procedencia", async () => {
    const ip = "203.0.113.77"; // rango reservado para documentación
    const destinos = [];

    for (let i = 0; i < 6; i += 1) {
      const r = await enviar(
        { nombre: `Prueba ${i}`, correo: `p${i}@nimbo.mx`, mensaje: `mensaje ${i}` },
        { "X-Forwarded-For": ip }
      );
      destinos.push(r.headers.get("location"));
    }

    expect(destinos.slice(0, 5).every((d) => d.endsWith("/gracias/"))).toBe(true);
    expect(destinos[5]).toBe("https://nimbo.mx/gracias/no-enviado/");
  });
});

describe("formulario y páginas de acuse", () => {
  test("el formulario envía como POST nativo al endpoint", async () => {
    const html = await read("index.html");

    expect(html).toContain('action="/api/contacto"');
    expect(html).toContain('method="post"');
    // Sin fetch: la CSP declara connect-src 'none' y el formulario debe
    // funcionar con JavaScript desactivado.
    expect(html).not.toMatch(/fetch\(\s*["']\/api\/contacto/);

    for (const campo of ["nombre", "correo", "mensaje"]) {
      expect(html).toContain(`name="${campo}"`);
      expect(html).toContain(`for="${campo}"`);
    }
  });

  test("la trampa existe, está fuera del alcance y no se anuncia", async () => {
    const [html, css] = await Promise.all([read("index.html"), read("styles.css")]);

    expect(html).toContain('name="empresa"');
    expect(html).toContain('tabindex="-1"');
    expect(html).toContain('class="contact-trampa" aria-hidden="true"');

    // Ocultarla con display:none la delata: muchos rellenadores lo detectan.
    const regla = css.match(/\.contact-trampa\s*\{([^}]*)\}/)[1];
    expect(regla).not.toContain("display: none");
    expect(regla).toContain("left: -9999px");
  });

  test("existen las dos páginas de acuse y no se indexan", async () => {
    for (const ruta of ["gracias/index.html", "gracias/no-enviado/index.html"]) {
      const html = await read(ruta);
      expect(html).toContain('name="robots" content="noindex, follow"');
      expect(html).toContain('lang="es-MX"');
    }

    // La página de fallo debe ofrecer siempre la vía alterna.
    expect(await read("gracias/no-enviado/index.html")).toContain("mailto:contacto@nimbo.mx");
  });

  test("el botón de envío no hereda el gris de control del navegador", async () => {
    const css = await read("styles.css");
    // :root declara color-scheme: dark, así que un <button> sin fondo propio se
    // pinta gris y la tinta encima cae a 3.53:1.
    const regla = css.match(/\.contact-envio button\s*\{([^}]*)\}/)[1];
    expect(regla).toContain("background: transparent");
  });

  test("la imagen del servicio se fija por digest y corre sin root", async () => {
    const dockerfile = await read("contacto/Dockerfile");

    expect(dockerfile).toMatch(/^FROM oven\/bun:[\d.]+-alpine@sha256:[a-f0-9]{64}$/m);
    expect(dockerfile).toMatch(/^USER bun$/m);
    expect(dockerfile).toMatch(/^HEALTHCHECK/m);
  });
});
