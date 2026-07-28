const root = document.documentElement;
const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
const motionStorageKey = "nimbo-motion";

const readMotionChoice = () => {
  try {
    return window.localStorage.getItem(motionStorageKey);
  } catch {
    return null;
  }
};

const writeMotionChoice = (value) => {
  try {
    window.localStorage.setItem(motionStorageKey, value);
  } catch {
    // The preference remains valid for this page even when storage is blocked.
  }
};

let motionChoice = readMotionChoice();
let filmLayerRequested = false;

const requestFilmLayer = () => {
  const saveDataEnabled = navigator.connection?.saveData === true;
  if (filmLayerRequested || root.dataset.motion !== "on" || saveDataEnabled) {
    return;
  }

  filmLayerRequested = true;
  const script = document.createElement("script");
  script.src = "/assets/film-layer.js";
  script.async = true;
  script.dataset.filmLayerBundle = "";
  script.addEventListener(
    "error",
    () => {
      filmLayerRequested = false;
      script.remove();
    },
    { once: true }
  );
  document.head.append(script);
};

const updateMotion = () => {
  const reducedBySystem = motionQuery.matches;
  const enabled = !reducedBySystem && motionChoice !== "off";
  root.dataset.motion = enabled ? "on" : "off";

  for (const toggle of document.querySelectorAll("[data-motion-toggle]")) {
    const state = toggle.querySelector("[data-motion-state]");
    toggle.setAttribute("aria-pressed", String(enabled));
    // Cuando el sistema pide movimiento reducido el control no puede cambiar
    // nada: la preferencia del sistema gana siempre. Sin aria-disabled se
    // anunciaba como un botón normal y al pulsarlo no ocurría nada.
    toggle.setAttribute("aria-disabled", String(reducedBySystem));
    toggle.setAttribute(
      "aria-label",
      reducedBySystem
        ? "Movimiento reducido por la configuración del sistema"
        : enabled
          ? "Desactivar movimiento"
          : "Activar movimiento"
    );
    if (state) {
      state.textContent = reducedBySystem ? "Sistema" : enabled ? "Activo" : "Quieto";
    }
  }

  document.dispatchEvent(
    new CustomEvent("nimbo:motionchange", { detail: { enabled, reducedBySystem } })
  );

  if (enabled) {
    requestFilmLayer();
  }
};

for (const toggle of document.querySelectorAll("[data-motion-toggle]")) {
  toggle.addEventListener("click", () => {
    if (motionQuery.matches) {
      updateMotion();
      return;
    }
    motionChoice = root.dataset.motion === "on" ? "off" : "on";
    writeMotionChoice(motionChoice);
    updateMotion();
  });
}

if (typeof motionQuery.addEventListener === "function") {
  motionQuery.addEventListener("change", updateMotion);
} else {
  motionQuery.addListener(updateMotion);
}

updateMotion();

const navToggle = document.querySelector(".nav-toggle");
const nav = document.querySelector("#nav-list");

if (navToggle && nav) {
  const closeMenu = (restoreFocus = false) => {
    navToggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
    if (restoreFocus) {
      navToggle.focus();
    }
  };

  navToggle.addEventListener("click", () => {
    const isOpen = navToggle.getAttribute("aria-expanded") === "true";
    navToggle.setAttribute("aria-expanded", String(!isOpen));
    nav.classList.toggle("is-open", !isOpen);
  });

  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
      closeMenu(true);
    }
  });

  // El menú es un panel desplegable sobre el resto de la página: quedaba
  // abierto al tocar fuera de él o al salir de sus enlaces con el tabulador,
  // tapando contenido que el visitante ya estaba intentando leer. Escape era
  // la única forma de cerrarlo sin elegir un destino.
  const closeIfOutside = (target) => {
    if (navToggle.getAttribute("aria-expanded") !== "true") {
      return;
    }
    // El propio botón se excluye: cierra aquí y su handler de click volvería
    // a abrirlo, dejándolo insensible al toque.
    if (nav.contains(target) || navToggle.contains(target)) {
      return;
    }
    closeMenu();
  };

  document.addEventListener("pointerdown", (event) => closeIfOutside(event.target));
  document.addEventListener("focusin", (event) => closeIfOutside(event.target));
}

for (const year of document.querySelectorAll("[data-year]")) {
  year.textContent = String(new Date().getFullYear());
}

/**
 * Carrete: scrollytelling con el panel de imagen fijo mientras el texto avanza.
 *
 * El paso activo se decide por IntersectionObserver contra una banda estrecha
 * en el centro del viewport, no por la posición del scroll: así el cambio de
 * toma ocurre cuando el texto correspondiente está realmente leyéndose, y no
 * depende de la altura de cada bloque.
 *
 * Sin JavaScript el carrete sigue siendo legible: las tomas se apilan y el CSS
 * las muestra todas en secuencia. Lo que este código añade es la sincronía.
 */
for (const carrete of document.querySelectorAll("[data-carrete]")) {
  const pasos = [...carrete.querySelectorAll("[data-paso]")];
  const tomas = [...carrete.querySelectorAll("[data-toma]")];
  const etapa = carrete.querySelector("[data-etapa]");
  const avance = carrete.querySelector("[data-avance]");

  if (!pasos.length || !tomas.length) {
    continue;
  }

  // Con el guion ya sincronizable, el CSS puede ocultar las tomas inactivas.
  carrete.dataset.carrete = "activo";

  let actual = -1;

  const mostrar = (indice) => {
    if (indice === actual) {
      return;
    }
    actual = indice;

    for (const toma of tomas) {
      toma.classList.toggle("es-actual", toma.dataset.toma === String(indice));
    }

    const paso = pasos[indice];
    if (etapa && paso) {
      etapa.querySelector("b").textContent = String(indice + 1).padStart(2, "0");
      etapa.querySelector("span").textContent = paso.dataset.etapa || "";
    }
    if (avance) {
      avance.style.setProperty("--avance", `${((indice + 1) / pasos.length) * 100}%`);
      avance.setAttribute("aria-valuenow", String(indice + 1));
    }
  };

  const observador = new IntersectionObserver(
    (entradas) => {
      // Puede haber varios pasos dentro de la banda; gana el más cercano a su centro.
      const visibles = entradas
        .filter((entrada) => entrada.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

      if (visibles.length) {
        mostrar(pasos.indexOf(visibles[0].target));
      }
    },
    { rootMargin: "-45% 0px -45% 0px", threshold: [0, 0.25, 0.5, 1] }
  );

  for (const paso of pasos) {
    observador.observe(paso);
  }

  mostrar(0);
}
