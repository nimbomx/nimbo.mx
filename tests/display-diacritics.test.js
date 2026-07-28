import { describe, expect, test } from "bun:test";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

const root = join(import.meta.dir, "..");
const read = (path) => readFile(join(root, path), "utf8");

/**
 * En var(--condensed) la tinta de una mayúscula acentuada sube 0.885em sobre la
 * línea base, contra 0.688em de una mayúscula sin tilde. Medido en el navegador
 * con TextMetrics.actualBoundingBoxAscent sobre "Á" a 144px.
 *
 * La medida es de Archivo, que el sitio sirve desde assets/fonts/. Antes era
 * 0.91 y describía "Arial Narrow", una fuente del sistema del visitante: el
 * umbral cambiaba según quién abriera la página y no había forma de fijarlo.
 * Si algún día se cambia la familia condensada hay que volver a medir.
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
const ASCENSO_MAYUSCULA_ACENTUADA = 0.885;

// Único titular exento: una sola palabra, sin tildes, imposible de partir en
// dos líneas y por lo tanto incapaz de colisionar consigo mismo.
const EXENTOS = new Set([".cinema-title__brand"]);

/**
 * Recorre el CSS contando llaves en lugar de buscarlas con una expresión
 * regular. Una regex plana no distingue un bloque anidado —@media, @keyframes,
 * @supports— del final de una regla, así que en cuanto aparece uno desalinea
 * todo lo que viene después y empieza a devolver comentarios como si fueran
 * selectores. Esta versión desciende dentro de las reglas @ y solo emite las
 * hojas, que son las que declaran interlineado y tracking.
 */
const reglas = (css) => {
  const limpio = css.replace(/\/\*[\s\S]*?\*\//g, "");
  const encontradas = [];

  const recorrer = (texto) => {
    let inicio = 0;

    for (let i = 0; i < texto.length; i += 1) {
      if (texto[i] !== "{") continue;

      const selector = texto.slice(inicio, i).trim();
      let profundidad = 1;
      let j = i + 1;

      while (j < texto.length && profundidad > 0) {
        if (texto[j] === "{") profundidad += 1;
        else if (texto[j] === "}") profundidad -= 1;
        j += 1;
      }

      const cuerpo = texto.slice(i + 1, j - 1);

      if (selector.startsWith("@")) {
        // Las reglas @ agrupan otras reglas: lo interesante está dentro.
        if (/\{/.test(cuerpo)) recorrer(cuerpo);
      } else if (selector) {
        encontradas.push({ selector, cuerpo });
      }

      inicio = j;
      i = j - 1;
    }
  };

  recorrer(limpio);
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
    expect(laboratorio).toContain("El archivo, expediente por expediente.");
    expect(home).toContain("Cada uno resolvía algo que nadie más iba a resolver.");
  });
});
