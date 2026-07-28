# Tipografías propias y diacríticos visibles — Producción

- **Commit base:** `254e48bf3a9bd4c0a1e1b6f1e5a3a2f7c9d8e0b1`
- **Pull request:** ninguno; ambos cambios se commitearon directo a `main`.
- **Cambio 1 (`1afc6ca`):** los titulares en versalitas aplastaban sus propias
  tildes. `Nada aquí está inmóvil.` se leía `NADA AQUÍ ESTA INMOVIL.` en
  `/laboratorio/`, y `Aquí se ve cómo se construye.` perdía la tilde de `CÓMO`
  en móvil, donde esa palabra cae a la segunda línea. No era un recorte sino una
  colisión: con el interlineado anterior la tilde entraba en el cuerpo de las
  letras de la línea de arriba.
- **Cambio 2 (`254e48b`):** el sitio no servía ninguna tipografía. Pedía
  `Arial Narrow` e `Iowan Old Style`, ambas de Apple, así que en Windows la
  serif caía a Times New Roman y en Android no existía ninguna de las dos. Ahora
  viajan con el sitio Archivo, Newsreader y JetBrains Mono desde
  `assets/fonts/`, 144 kB en total, las tres bajo SIL Open Font License.
- **Efecto visible:** el eje de ancho de Archivo fijado en 72% calca la medida
  de `Arial Narrow` al pixel, así que la composición no se mueve; lo que cambia
  es que ahora se ve igual en cualquier sistema operativo.
- **Validación local:** 48 pruebas y 675 expectativas aprobadas.
- **Objetivo de Producción:** [nimbo.mx](https://nimbo.mx)

A diferencia de releases anteriores, este cambio **sí modifica el runtime**:
entran tres archivos `woff2`, cambian las familias declaradas en `styles.css`,
las cuatro páginas precargan la condensada y `nginx.conf` suma `woff2` a los
formatos servidos, con caché inmutable de un año.

## Cómo se publicó

Este es el primer despliegue disparado por el webhook de GitHub hacia Dokploy
(`push` sobre `main`). Hasta hoy el repositorio no tenía ningún webhook, pese a
que la aplicación en Dokploy llevaba desde el 23 de julio con `autoDeploy`
activado: la casilla estaba marcada pero no había nada conectado a ella. Por eso
cada publicación anterior fue o un run de Cortex o un clic manual en el panel, y
por eso los commits del 24 y 25 de julio nunca llegaron a producción.
