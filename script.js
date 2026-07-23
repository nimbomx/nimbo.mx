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
  if (filmLayerRequested || root.dataset.motion !== "on") {
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
}

for (const year of document.querySelectorAll("[data-year]")) {
  year.textContent = String(new Date().getFullYear());
}
