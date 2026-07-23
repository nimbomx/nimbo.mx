# nimbo.mx

Primera versión productiva del sitio profesional de Nimbo. Es un sitio estático en español, construido sin frameworks, dependencias de cliente, CDNs ni recursos externos.

## Desarrollo

Se necesita [Bun](https://bun.sh/) para las tareas locales. El sitio no requiere instalación de paquetes.

```bash
bunx serve .
```

Abre `http://localhost:3000` (o el puerto que reporte el servidor). También se puede usar cualquier servidor HTTP estático; abrir los archivos con `file://` no reproduce correctamente las rutas absolutas.

## Pruebas

La suite comprueba la estructura semántica, contenido esencial, metadata, enlaces internos, recursos locales, archivos operativos, configuración de seguridad y whitespace.

```bash
bun test
```

Las pruebas no tienen dependencias de terceros.

## Build

La imagen sirve los archivos con Nginx sin privilegios en el puerto 8080.

```bash
docker build -t nimbo-mx .
docker run --rm -p 8080:8080 nimbo-mx
```

Comprueba el servicio con `curl http://localhost:8080/health`; debe responder `ok`.

## Producción

El despliegue canónico se realiza en Dokploy. El contenedor HTTP escucha en el puerto `8080`, el endpoint de salud es `/health` y los dominios públicos son `nimbo.mx` y `www.nimbo.mx`.

## Despliegue

Publica la imagen en un servicio de contenedores que termine TLS para `nimbo.mx` y enrute el tráfico al puerto 8080. Configura el health check en `/health`. El sitio presupone HTTPS y su canonical es `https://nimbo.mx/`.

Antes de liberar una versión:

1. Ejecuta `bun test`.
2. Construye la imagen.
3. Verifica la portada, la navegación por teclado, la vista móvil y una URL inexistente.
4. Confirma que `/health`, `/robots.txt` y `/sitemap.xml` respondan correctamente.

No hay secretos ni variables de entorno requeridas. El despliegue no forma parte de este repositorio.
