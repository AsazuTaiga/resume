// @ts-check
import { defineConfig, sharpImageService } from "astro/config";
import mdx from "@astrojs/mdx";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://asazutaiga.github.io", // Your GitHub Pages URL
  base: "/", // Your repository name
  integrations: [mdx(), tailwind()],
  image: {
    service: sharpImageService(),
  },
});
