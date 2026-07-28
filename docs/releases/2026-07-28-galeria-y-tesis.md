# Galería, trayectoria y tesis nueva — Producción

- **Cambio:** reorientación del contenido de la portada. El sitio dejaba de ser
  un manifiesto sobre el proceso para pasar a ser una galería de trabajo hecho.
- **Objetivo de Producción:** [nimbo.mx](https://nimbo.mx)
- **Validación local:** 48 pruebas aprobadas, cero incumplimientos de contraste.

## Por qué

El texto anterior estaba construido sobre negaciones. Decía qué no era Nimbo en
cada sección —*"no es una vitrina de casos terminados"*, *"una práctica, no una
biografía"*, *"nada aquí está inmóvil"*— y nunca afirmaba nada. El marco excluía
por definición el contenido que el sitio debía alojar: una galería de proyectos
terminados y una trayectoria de veinte años.

Además duplicaba a nimbo.pro. El titular *"Aquí se ve cómo se construye"* existía
palabra por palabra en las dos propiedades, pero solo en `.pro` iba seguido de
historias reales. El único expediente de `.mx` trataba sobre `.pro`.

La división queda así: **nimbo.pro** ofrece lo que se puede hacer por un cliente;
**nimbo.mx** muestra lo que ya se construyó.

## Qué cambió

- **Tesis:** `Construir también es investigar.` → `Construimos lo que no venía
  hecho.` La anterior posicionaba la casa como investigadora; la nueva afirma
  trabajo a medida, que es lo que se vende.
- **Manifiesto:** retirado. Era la sección que más sonaba y menos describía.
- **Trayectoria:** deja de negarse a contar el recorrido. Ahora declara más de
  veinte años en producto y nube, y entre seis y ocho en automatización,
  diciendo cuál es el tramo con menos kilómetros en lugar de igualarlos todos.
- **Laboratorio → Galería:** la sección pasa a presentar obra, con dos
  expedientes en preparación (WorkLife y Efficax) declarados como tales.
- **Contacto:** se explica que no hay chat ni respuesta automática y por qué.
- **Numeración:** la Práctica pasa de `Escena 04` a `Escena 03` al desaparecer
  el manifiesto.

## Accesibilidad

Se corrigieron tres fallos de contraste, uno de ellos preexistente: el `eyebrow`
de la sección de contacto usaba el tono claro sobre fondo papel y quedaba en
**1.45:1**, muy por debajo del 4.5:1 que exige WCAG AA. Se añadió `--silver-ink`
(5.69:1) para texto secundario sobre papel, porque `--silver-dark` solo alcanza
3.81:1 y también incumplía.

## Pendiente

- Las historias de WorkLife y Efficax necesitan, por proyecto: qué no
  funcionaba, qué decisión no obvia se tomó y qué hubo que rehacer.
- El formulario de contacto requiere un endpoint que reciba el POST. Hoy el
  sitio es estático y su CSP declara `connect-src 'none'` y `form-action 'self'`.
- `/laboratorio/` conserva el marco anterior (*"Nada aquí está inmóvil"*,
  *"no es una vitrina de casos terminados"*) y habrá que alinearlo.
