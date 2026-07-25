import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");

/**
 * En var(--condensed) la tinta de una mayúscula acentuada sube 0.91em sobre la
 * línea base, contra 0.72em de una mayúscula sin tilde. Medido en el navegador
 * con TextMetrics.actualBoundingBoxAscent sobre "Á" a 144px.
 *
 * Con un interlineado menor, la tilde de una línea entra en el cuerpo de las
 * letras de la línea anterior y se vuelve invisible: tinta sobre tinta. No es
 * un recorte, es una colisión, y por eso no la detecta ninguna prueba de
 * contrato, cabeceras o dominio: el HTML es correcto y el CSS es válido.
 *
 * El bug real que originó esta prueba: "Nada aquí está inmóvil." se leía
 * "NADA AQUÍ ESTA INMOVIL." en /laboratorio/, y "Aquí se ve cómo se construye."
 * perdía la tilde de CÓMO en móvil, donde la palabra cae a la segunda línea.
 */
const ASCENSO_MAYUSCULA_ACENTUADA = 0.91;

// Único titular exento: una sola palabra, sin tildes, imposible de partir en
// dos líneas y por lo tanto incapaz de colisionar consigo mismo.
const EXENTOS = new Set([".cinema-title__brand"]);

const reglas = (css) => {
  const encontradas = [];
  const patron = /(^|\})\s*([^{}]+?)\s*\{([^}]*)\}/g;
  let match;
  while ((match = patron.exec(css)) !== null) {
    encontradas.push({ selector: match[2].trim(), cuerpo: match[3] });
  }
  return encontradas;
};

const interlineado = (cuerpo) => {
  const abreviado = cuerpo.match(/font:\s*[^;]*?\/\s*([^\s;]+)/);
  if (abreviado) return abreviado[1];
  const propio = cuerpo.match(/line-height:\s*([^;]+)/);
  return propio ? propio[1].trim() : null;
};

describe("diacríticos en titulares de versalitas", () => {
  test("declara un interlineado mínimo que deja pasar la tilde", async () => {
    const css = await read("styles.css");

    const declaracion = css.match(/--display-leading:\s*([0-9.]+)\s*;/);
    expect(declaracion).not.toBeNull();

    const valor = Number(declaracion[1]);
    expect(valor).toBeGreaterThanOrEqual(ASCENSO_MAYUSCULA_ACENTUADA);
  });

  test("ningún titular en mayúsculas aplasta la tilde de la línea siguiente", async () => {
    const css = await read("styles.css");

    const infractores = reglas(css)
      .filter(({ selector, cuerpo }) => {
        if (EXENTOS.has(selector)) return false;
        if (!/text-transform:\s*uppercase/.test(cuerpo)) return false;

        const valor = interlineado(cuerpo);
        if (valor === null) return false;
        if (valor.includes("var(--display-leading)")) return false;

        const numero = Number.parseFloat(valor);
        return Number.isFinite(numero) && numero < ASCENSO_MAYUSCULA_ACENTUADA;
      })
      .map(({ selector, cuerpo }) => `${selector} → ${interlineado(cuerpo)}`);

    expect(infractores).toEqual([]);
  });

  test("compensa el espacio entre palabras que se come el tracking negativo", async () => {
    const css = await read("styles.css");

    // letter-spacing negativo también encoge el glifo de espacio: sin
    // compensar, "NADA AQUÍ" se lee "NADAAQUÍ".
    const sinCompensar = reglas(css)
      .filter(({ selector, cuerpo }) => {
        if (EXENTOS.has(selector)) return false;
        if (!/text-transform:\s*uppercase/.test(cuerpo)) return false;

        const tracking = cuerpo.match(/letter-spacing:\s*(-[0-9.]+)em/);
        if (!tracking) return false;
        if (Number(tracking[1]) > -0.05) return false;

        return !/word-spacing:/.test(cuerpo);
      })
      .map(({ selector }) => selector);

    expect(sinCompensar).toEqual([]);
  });

  test("mantiene las tildes en el texto fuente, no en el CSS", async () => {
    const [home, laboratorio] = await Promise.all([
      read("index.html"),
      read("laboratorio/index.html")
    ]);

    // Las mayúsculas son presentación; el contenido se escribe en minúsculas
    // acentuadas para que lectores de pantalla y buscadores reciban español.
    expect(laboratorio).toContain("Nada aquí está inmóvil.");
    expect(home).toContain("Aquí se ve cómo se construye.");
  });
});
