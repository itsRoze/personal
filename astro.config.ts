import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import remarkSmartypants from "remark-smartypants";
import { remarkReadingTime } from "./plugins/remark-reading-time.mjs";

import expressiveCode from "astro-expressive-code";

import cloudflare from "@astrojs/cloudflare";

// https://astro.build/config
export default defineConfig({
  site: "https://roze.dev",
  output: "static",
  integrations: [expressiveCode()],

  vite: {
    plugins: [tailwindcss()],
  },

  markdown: {
    remarkPlugins: [remarkSmartypants, remarkReadingTime],
  },

  adapter: cloudflare(),
});