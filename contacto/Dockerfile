# Servicio de contacto. Vive en el mismo repositorio que el sitio —un push
# mueve a los dos— pero se construye con `contacto/` como contexto, para que la
# imagen del sitio y la suya no compartan archivos ni se estorben.
FROM oven/bun:1.3.14-alpine@sha256:5acc90a93e91ff07bf72aa90a7c9f0fa189765aec90b47bdbf2152d2196383c0

WORKDIR /app

# nodemailer solo se necesita si hay SMTP configurado; el import es dinámico y
# el servicio arranca igual sin él.
COPY package.json bun.lock* ./
RUN bun install --frozen-lockfile --production || bun install --production

COPY servidor.js ./

# Sin privilegios: la imagen de Bun trae el usuario `bun` sin root.
RUN mkdir -p /datos && chown -R bun:bun /datos /app
USER bun

ENV PORT=8080
EXPOSE 8080

HEALTHCHECK --interval=30s --timeout=5s --start-period=5s --retries=3 \
  CMD wget --spider -q http://127.0.0.1:8080/salud || exit 1

CMD ["bun", "run", "servidor.js"]
