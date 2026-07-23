const bundleUrl = new URL("../assets/film-layer.js", import.meta.url);
const source = await Bun.file(bundleUrl).text();
const normalized = source
  .replace(/[ \t]+$/gm, "")
  .replace(/^ +(?=\t)/gm, "");

if (normalized !== source) {
  await Bun.write(bundleUrl, normalized);
}
