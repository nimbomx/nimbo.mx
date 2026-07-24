import { autoStartFilmLayers } from "./film-layer.js";

autoStartFilmLayers({
  maxDpr: 1,
  minParticles: 48,
  maxParticles: 160,
  maxFps: 24,
  pixelsPerParticle: 9_000,
});
