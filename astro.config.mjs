// @ts-check
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
// https://astro.build/config
export default defineConfig({
  site: "https://asazutaiga.github.io", // Your GitHub Pages URL
  base: "/resume", // Your repository name
  integrations: [mdx()],
});
