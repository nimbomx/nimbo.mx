/**
 * Endpoint de contacto de nimbo.mx.
 *
 * Recibe el formulario como POST nativo, no por fetch: la CSP del sitio declara
 * `connect-src 'none'`, así que no hay XHR posible ni lo queremos. El formulario
 * funciona con JavaScript desactivado y responde con un 303 hacia una página de
 * acuse, que es el comportamiento correcto de un POST.
 *
 * Cada mensaje se escribe primero en disco y solo después se avisa. Si el aviso
 * falla, el mensaje ya está guardado: una caída de Telegram o de Resend nunca
 * puede perder a alguien que escribió.
 */

import { appendFile, mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const PUERTO = Number(process.env.PORT || 8080);
const ARCHIVO = process.env.ARCHIVO_MENSAJES || "/datos/mensajes.jsonl";
const ORIGEN = process.env.ORIGEN_PUBLICO || "https://nimbo.mx";

const LIMITES = {
  cuerpo: 16 * 1024, // 16 KiB: un mensaje de contacto no necesita más
  nombre: 120,
  correo: 254, // longitud máxima de una dirección según RFC 5321
  mensaje: 5000,
  porVentana: 5,
  ventanaMs: 10 * 60 * 1000
};

const CABECERAS_SEGURAS = {
  "Cache-Control": "no-store",
  "Content-Security-Policy": "default-src 'none'; frame-ancestors 'none'",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY"
};

// Ventana deslizante por IP. En memoria a propósito: un reinicio limpia el
// contador, que para un formulario de contacto es una consecuencia aceptable y
// evita arrastrar una dependencia solo para esto.
const intentos = new Map();

const dentroDelLimite = (ip, ahora) => {
  const recientes = (intentos.get(ip) || []).filter(
    (t) => ahora - t < LIMITES.ventanaMs
  );
  recientes.push(ahora);
  intentos.set(ip, recientes);

  if (intentos.size > 5000) {
    // Poda perezosa para que el mapa no crezca sin techo.
    for (const [clave, marcas] of intentos) {
      if (marcas.every((t) => ahora - t >= LIMITES.ventanaMs)) intentos.delete(clave);
    }
  }

  return recientes.length <= LIMITES.porVentana;
};

// Validación deliberadamente laxa: comprobar que hay una arroba con algo a cada
// lado y ningún espacio. Cualquier regex más estricta rechaza direcciones
// válidas, y la única prueba real de que un correo existe es escribirle.
const correoPlausible = (valor) =>
  valor.length <= LIMITES.correo && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);

// Cada desenlace tiene su propia URL en lugar de un parámetro que haya que leer
// con JavaScript. Así la página dice la verdad aunque el visitante lo tenga
// desactivado, y recargar no reenvía el formulario.
const DESTINOS = {
  recibido: "/gracias/",
  incompleto: "/gracias/no-enviado/",
  limite: "/gracias/no-enviado/",
  error: "/gracias/no-enviado/"
};

const acuse = (estado) =>
  new Response(null, {
    status: 303,
    headers: {
      ...CABECERAS_SEGURAS,
      Location: ORIGEN + (DESTINOS[estado] || DESTINOS.error)
    }
  });

/**
 * Aviso por Telegram, reutilizando el bot y el chat de bandeja que nimbo.pro
 * ya tiene en funcionamiento. Es el canal que hoy puede avisar de verdad: el
 * correo espera a que nimbo.pro esté verificado como dominio en Resend.
 *
 * El texto va SIN parse_mode a propósito. Lo escribe un desconocido, y cualquier
 * modo de formato convertiría su mensaje en marcado: un asterisco descolocado
 * rompería el envío, y un enlace disfrazado llegaría como enlace real.
 */
const enviarPorTelegram = async (mensaje) => {
  const token = process.env.TELEGRAM_BOT_TOKEN;
  const chat = process.env.TELEGRAM_CHAT_ID;
  if (!token || !chat) return { canal: "telegram", enviado: false, motivo: "no_configurado" };

  // El origen es configurable solo para que las pruebas puedan comprobar el
  // envío real contra un sustituto, en lugar de conformarse con leer el código.
  const origen = process.env.TELEGRAM_API_BASE || "https://api.telegram.org";

  try {
    const respuesta = await fetch(`${origen}/bot${token}/sendMessage`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      signal: AbortSignal.timeout(10_000),
      body: JSON.stringify({
        chat_id: chat,
        disable_web_page_preview: true,
        text:
          `nimbo.mx · formulario de contacto\n\n` +
          `${mensaje.nombre}\n${mensaje.correo}\n\n` +
          `${mensaje.mensaje}\n\n` +
          `Recibido ${mensaje.recibido}`
      })
    });

    if (respuesta.ok) return { canal: "telegram", enviado: true };

    const detalle = await respuesta.text();
    return {
      canal: "telegram",
      enviado: false,
      motivo: `telegram_${respuesta.status}`,
      // El token va en la URL, no en el cuerpo del error: es seguro conservarlo.
      detalle: detalle.slice(0, 300)
    };
  } catch (error) {
    return { canal: "telegram", enviado: false, motivo: error?.name || "error_de_red" };
  }
};

/**
 * Envío por Resend, que es una petición HTTPS y no necesita biblioteca.
 *
 * Se descartó SMTP: la cuenta de correo de nimbo.mx está en Google, que exige
 * contraseñas de aplicación y verificación en dos pasos para permitir un envío
 * automatizado. Una clave de API es menos superficie y no caduca sola.
 *
 * El remitente vive en nimbo.pro a propósito, para distinguir de un vistazo lo
 * que entra por el formulario de nimbo.mx. `replyTo` lleva la dirección de quien
 * escribió, así que responder desde el cliente de correo va directo a esa
 * persona sin pasar por el remitente técnico.
 */
const RESEND = "https://api.resend.com/emails";

const enviarPorCorreo = async (mensaje) => {
  const clave = process.env.RESEND_API_KEY;
  if (!clave) return { canal: "correo", enviado: false, motivo: "no_configurado" };

  const control = AbortSignal.timeout(10_000);

  try {
    const respuesta = await fetch(RESEND, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${clave}`,
        "Content-Type": "application/json"
      },
      signal: control,
      body: JSON.stringify({
        from: process.env.CORREO_REMITENTE || "Nimbo.mx <contacto.nimbomx@nimbo.pro>",
        to: [process.env.CORREO_DESTINO || "contacto@nimbo.mx"],
        reply_to: `${mensaje.nombre} <${mensaje.correo}>`,
        subject: `nimbo.mx · ${mensaje.nombre}`,
        text: `${mensaje.mensaje}\n\n—\n${mensaje.nombre} <${mensaje.correo}>\nRecibido: ${mensaje.recibido}`
      })
    });

    if (respuesta.ok) return { canal: "correo", enviado: true };

    // El cuerpo del error de Resend es descriptivo y no trae credenciales:
    // conservarlo es lo que permite distinguir un dominio sin verificar de una
    // clave revocada sin tener que reproducir el fallo.
    const detalle = await respuesta.text();
    return {
      canal: "correo",
      enviado: false,
      motivo: `resend_${respuesta.status}`,
      detalle: detalle.slice(0, 300)
    };
  } catch (error) {
    return { canal: "correo", enviado: false, motivo: error?.name || "error_de_red" };
  }
};

/**
 * Se avisa por todos los canales configurados, no por el primero que funcione:
 * si mañana se añade el correo, empieza a llegar por los dos sin tocar código.
 * Los avisos corren en paralelo y ninguno puede tumbar la respuesta —el mensaje
 * ya está guardado antes de llegar aquí—, así que sus fallos solo se registran.
 */
const avisar = async (mensaje) => {
  const resultados = await Promise.all([
    enviarPorTelegram(mensaje),
    enviarPorCorreo(mensaje)
  ]);

  const entregados = resultados.filter((r) => r.enviado).map((r) => r.canal);
  if (entregados.length === 0) {
    console.warn(
      "mensaje guardado sin avisar:",
      resultados.map((r) => `${r.canal}=${r.motivo}${r.detalle ? ` (${r.detalle})` : ""}`).join(" ")
    );
  } else {
    console.log("aviso entregado por:", entregados.join(", "));
  }

  return resultados;
};

// Append de una sola línea, sin leer lo ya escrito. Reescribir el archivo
// entero sería O(n) y, con dos envíos simultáneos, el segundo sobrescribiría al
// primero: el mensaje de alguien desaparecería sin dejar rastro.
const guardar = async (mensaje) => {
  await appendFile(ARCHIVO, JSON.stringify(mensaje) + "\n", "utf8");
};

// El volumen puede venir vacío en el primer arranque.
await mkdir(dirname(ARCHIVO), { recursive: true });

const servidor = Bun.serve({
  port: PUERTO,
  idleTimeout: 30,

  async fetch(peticion, server) {
    const url = new URL(peticion.url);

    if (url.pathname === "/salud") {
      return new Response("ok\n", { headers: CABECERAS_SEGURAS });
    }

    if (url.pathname !== "/api/contacto") {
      return new Response(null, { status: 404, headers: CABECERAS_SEGURAS });
    }

    if (peticion.method !== "POST") {
      return new Response(null, {
        status: 405,
        headers: { ...CABECERAS_SEGURAS, Allow: "POST" }
      });
    }

    // El límite se comprueba antes de leer el cuerpo, no después.
    const declarado = Number(peticion.headers.get("content-length") || 0);
    if (declarado > LIMITES.cuerpo) {
      return new Response(null, { status: 413, headers: CABECERAS_SEGURAS });
    }

    const tipo = peticion.headers.get("content-type") || "";
    if (!tipo.startsWith("application/x-www-form-urlencoded")) {
      return new Response(null, { status: 415, headers: CABECERAS_SEGURAS });
    }

    const ip =
      peticion.headers.get("x-forwarded-for")?.split(",")[0].trim() ||
      server.requestIP(peticion)?.address ||
      "desconocida";

    if (!dentroDelLimite(ip, Date.now())) {
      return acuse("limite");
    }

    let campos;
    try {
      campos = new URLSearchParams(await peticion.text());
    } catch {
      return acuse("error");
    }

    // Trampa para robots: un campo que ninguna persona ve ni rellena. Si viene
    // con contenido se acepta la petición con normalidad y no se guarda nada,
    // para no darle al emisor ninguna señal de que fue detectado.
    if ((campos.get("empresa") || "").trim() !== "") {
      return acuse("recibido");
    }

    const nombre = (campos.get("nombre") || "").trim().slice(0, LIMITES.nombre);
    const correo = (campos.get("correo") || "").trim().slice(0, LIMITES.correo);
    const mensaje = (campos.get("mensaje") || "").trim().slice(0, LIMITES.mensaje);

    if (!nombre || !mensaje || !correoPlausible(correo)) {
      return acuse("incompleto");
    }

    const registro = {
      recibido: new Date().toISOString(),
      nombre,
      correo,
      mensaje
    };

    try {
      await guardar(registro);
    } catch (error) {
      console.error("no se pudo guardar el mensaje:", error?.name || "error");
      return acuse("error");
    }

    await avisar(registro);

    return acuse("recibido");
  }
});

console.log(`contacto escuchando en :${servidor.port}`);
