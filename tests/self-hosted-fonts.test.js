import { describe, expect, test } from "bun:test";
import { readFile, stat } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");
const pesa = async (path) => (await stat(join(root, path))).size;

/**
 * El sitio pedía "Arial Narrow" e "Iowan Old Style" sin servir ningún archivo.
 * Las dos son fuentes de Apple: en Windows la serif caía a Times New Roman y en
 * Android no existía ninguna de las dos, así que la identidad tipográfica
 * completa dependía del sistema operativo del visitante. Ninguna prueba podía
 * detectarlo porque el CSS era válido y el HTML correcto.
 *
 * Estas pruebas fijan lo único que lo impide: que cada familia empiece por una
 * fuente que viaja con el repositorio.
 */
const FAMILIAS = [
  { variable: "--condensed", propia: "Archivo Cond" },
  { variable: "--serif", propia: "Newsreader" },
  { variable: "--mono", propia: "JetBrains Mono" },
  { variable: "--sans", propia: "Archivo" }
];

const ARCHIVOS = [
  "assets/fonts/archivo-variable.woff2",
  "assets/fonts/newsreader-400.woff2",
  "assets/fonts/jetbrainsmono-variable.woff2"
];

// SIL Open Font License: redistribuir exige acompañar el texto de la licencia.
const LICENCIAS = [
  "assets/fonts/OFL-Archivo.txt",
  "assets/fonts/OFL-Newsreader.txt",
  "assets/fonts/OFL-JetBrainsMono.txt"
];

const PAGINAS = [
  "index.html",
  "laboratorio/index.html",
  "laboratorio/nimbo-pro/index.html",
  "404.html"
];

describe("tipografías propias", () => {
  test("cada familia empieza por una fuente servida por el sitio", async () => {
    const css = await read("styles.css");

    for (const { variable, propia } of FAMILIAS) {
      const declaracion = css.match(
        new RegExp(`${variable}:\\s*([^;]+);`)
      );
      expect(declaracion).not.toBeNull();

      const primera = declaracion[1].split(",")[0].trim().replace(/["']/g, "");
      expect(primera).toBe(propia);
    }
  });

  test("declara un @font-face por cada familia propia", async () => {
    const css = await read("styles.css");

    for (const { propia } of FAMILIAS) {
      const cara = css.match(
        new RegExp(`@font-face\\s*\\{[^}]*font-family:\\s*"${propia}"[^}]*\\}`)
      );
      expect(cara).not.toBeNull();
      expect(cara[0]).toContain("format(\"woff2\")");
      // swap: el texto se lee con la fuente de respaldo mientras llega la propia,
      // en lugar de quedar invisible.
      expect(cara[0]).toContain("font-display: swap");
    }
  });

  test("la condensada fija el eje de ancho que calca la composición anterior", async () => {
    const css = await read("styles.css");

    const cara = css.match(
      /@font-face\s*\{[^}]*font-family:\s*"Archivo Cond"[^}]*\}/
    )[0];

    // 72% iguala el ancho de "Arial Narrow" al pixel sobre el titular real.
    // Sin este valor fijo la familia sale al ancho normal y desborda.
    expect(cara).toMatch(/font-stretch:\s*72%/);
  });

  test("los archivos existen y no engordan la página de más", async () => {
    const pesos = await Promise.all(ARCHIVOS.map(pesa));
    for (const peso of pesos) expect(peso).toBeGreaterThan(0);

    const total = pesos.reduce((suma, peso) => suma + peso, 0);
    expect(total).toBeLessThan(200 * 1024);
  });

  test("acompaña el texto de la licencia de cada tipografía", async () => {
    for (const licencia of LICENCIAS) {
      const texto = await read(licencia);
      expect(texto).toContain("SIL OPEN FONT LICENSE");
    }
  });

  test("cada página precarga la condensada, que aparece sobre el pliegue", async () => {
    for (const pagina of PAGINAS) {
      const html = await read(pagina);
      const preload = html.match(/<link rel="preload"[^>]*>/);

      expect(preload).not.toBeNull();
      expect(preload[0]).toContain("/assets/fonts/archivo-variable.woff2");
      expect(preload[0]).toContain('as="font"');
      expect(preload[0]).toContain('type="font/woff2"');
      // Sin crossorigin el navegador descarga la fuente dos veces: la precarga
      // se hace sin CORS y la petición real del CSS siempre la hace con CORS.
      expect(preload[0]).toContain("crossorigin");
    }
  });

  test("nginx sirve woff2 y lo cachea como inmutable", async () => {
    const nginx = await read("nginx.conf");

    expect(nginx).toMatch(/location ~\* \\\.\(\?:[^)]*woff2[^)]*\)\$/);
    expect(nginx).toMatch(/~\*\\\.woff2\$\s+"public, max-age=31536000, immutable"/);
    // woff2 ya viene comprimido: volver a comprimirlo solo gasta CPU.
    const gzip = nginx.match(/gzip_types([^;]+);/)[1];
    expect(gzip).not.toContain("woff2");
  });

  test("la CSP sigue permitiendo solo tipografías del propio dominio", async () => {
    const nginx = await read("nginx.conf");
    expect(nginx).toContain("font-src 'self'");
  });

  test("la imagen de producción incluye las tipografías", async () => {
    const dockerfile = await read("Dockerfile");
    const ignore = await read(".dockerignore");

    expect(dockerfile).toMatch(/^COPY[^\n]*assets\/ /m);
    expect(ignore).not.toContain("woff2");
    expect(ignore).not.toMatch(/^assets\/fonts/m);
  });
});
