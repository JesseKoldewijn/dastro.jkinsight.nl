import { defineConfig } from "astro/config";

// Integrations
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import sitemap from "@astrojs/sitemap";
import compress from "astro-compress";
import robotsTxt from "astro-robots-txt";

import deno from "@astrojs/deno";

// https://astro.build/config
export default defineConfig({
  site: "https://flash-jkinsight.vercel.app",
  output: "server",
  adapter: deno(),
  integrations: [
    tailwind(),
    solidJs(),
    compress({
      path: "./.vercel/output/static",
    }),
    sitemap(),
    robotsTxt({
      sitemap: true,
    }),
  ],
});
