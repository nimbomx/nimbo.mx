# nimbo.mx

Sitio editorial de Nimbo: trayectoria, práctica profesional y un Laboratorio abierto
que documenta proyectos, decisiones y aprendizajes mientras siguen en construcción.

La portada usa el lenguaje visual **Cámara oscura** y el Laboratorio funciona como una
**Sala de montaje**. Las fotografías y la textura de película son assets originales.
La capa decorativa WebGL usa Three.js a 24 fps para combinar grano orgánico,
polvo flotante, variaciones de exposición, rayas, microdesfase de registro y
halos químicos breves sin mover el contenido del documento. La proyección
entra en movimiento desde la carga y presenta sus defectos principales durante
los primeros cuatro segundos. El cursor curva localmente la emulsión; al
arrancar y terminar un scroll aparecen desgarres horizontales y un rebote de
registro. Se desactiva cuando el sistema solicita movimiento reducido, el
navegador activa ahorro de datos o WebGL 2 no está disponible.
La procedencia y los prompts exactos de los assets están en
[`IMAGEGEN.md`](IMAGEGEN.md).

## Desarrollo

Se necesita [Bun](https://bun.sh/). Instala las dependencias y genera el bundle local:

```bash
bun install --frozen-lockfile
bun run build:assets
bun run dev
```

Abre la URL que reporte el servidor. El sitio es estático y no requiere secretos ni
variables de entorno.

## Estructura

- `/`: manifiesto, trayectoria, Laboratorio y práctica.
- `/laboratorio/`: índice de expedientes.
- `/laboratorio/nimbo-pro/`: primera bitácora serial.
- `src/film-layer.js`: textura animada, partículas y fallbacks.
- `assets/images/`: fotografía y textura optimizadas para web.

## Pruebas

La suite verifica estructura semántica, contenido, metadata, navegación, rutas,
recursos locales, movimiento reducido, seguridad y contrato productivo:

```bash
bun run check
```

## Build

La imagen sirve los archivos con Nginx sin privilegios en el puerto 8080:

```bash
bun run build
docker run --rm -p 8080:8080 nimbo-mx
```

Comprueba el servicio con `curl http://localhost:8080/health`; debe responder `ok`.

## Producción

El despliegue canónico se realiza en Dokploy. El contenedor HTTP escucha en el puerto
`8080`, el endpoint de salud es `/health` y los únicos dominios públicos son
`nimbo.mx` y `www.nimbo.mx`.

## Despliegue

Antes de liberar una versión:

1. Ejecuta `bun run check`.
2. Construye la imagen.
3. Verifica portada, Laboratorio, expediente, navegación por teclado y vista móvil.
4. Confirma el modo de movimiento reducido y la ausencia de errores WebGL.
5. Comprueba `/health`, `/robots.txt`, `/sitemap.xml` y una URL inexistente.

El sitio presupone HTTPS y su canonical es `https://nimbo.mx/`.
