# El índice deja de ser Laboratorio y pasa a ser Archivo — Producción

- **Cambio:** `/laboratorio/` adopta el marco de la portada. Cierra el pendiente
  que quedó declarado en `2026-07-28-galeria-y-tesis.md`.
- **Objetivo de Producción:** [nimbo.mx/laboratorio/](https://nimbo.mx/laboratorio/)
- **Validación local:** 48 pruebas aprobadas, cero incumplimientos de contraste.

## Por qué

Al reorientar la portada quedó una contradicción entre páginas. La portada
pasaba a mostrar obra construida y el índice seguía diciendo *"Nada aquí está
inmóvil"* y *"no es una vitrina de casos terminados"*: la misma negación que
acabábamos de retirar, un clic más adentro.

## Qué cambió

- **Título de página:** `Laboratorio — Nimbo` → `Archivo — Nimbo`.
- **H1:** `Nada aquí está inmóvil.` → `El archivo, expediente por expediente.`
- **Entradilla:** describe qué registra cada expediente en lugar de enumerar
  categorías abstractas.
- **Cuatro marcas:** las descripciones ahora usan el mismo lenguaje que la
  portada — qué no funcionaba, qué se decidió, cómo se supo, qué se rehízo.
- **Cierre:** `Cada actualización agrega una toma. / No una versión definitiva`
  → `Cada proyecto entra cuando tiene algo que contar.`, nombrando WorkLife y
  Efficax como los que vienen.
- La nota editorial sobre qué **no** significan los estados se conserva: ahí la
  negación es precisión, no evasión.

## Navegación

El enlace `Laboratorio` de la navegación se llamaba distinto que la sección
`Galería` de la portada y apuntaba a otro sitio. Ahora se llama `Galería` en
las tres páginas y siempre lleva al archivo completo; el ancla `#galeria` queda
para el botón del hero, que sí está en la misma página.

Se retiraron además los `og:image:alt` y `twitter:image:alt` que seguían citando
`construir también es investigar`, una tesis que ya no existe en el sitio.

## Pendiente

- Las historias de WorkLife y Efficax: qué no funcionaba, qué decisión no obvia
  se tomó, qué hubo que rehacer.
- El formulario de contacto y su endpoint.
