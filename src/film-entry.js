import { autoStartFilmLayers } from "./film-layer.js";

autoStartFilmLayers({
  maxDpr: 1.5,
  minParticles: 22,
  maxParticles: 120,
  maxFps: 30,
  pixelsPerParticle: 22_000,
});
