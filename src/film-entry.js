import { autoStartFilmLayers } from "./film-layer.js";

autoStartFilmLayers({
  maxDpr: 1.25,
  minParticles: 24,
  maxParticles: 110,
  maxFps: 24,
  pixelsPerParticle: 17_000,
});
