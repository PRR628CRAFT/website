// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  vite: {
      server: {
          allowedHosts: ["devbox"],
      }
  },

  redirects: {
      "/server": "/minecraft-server"
  },

  integrations: [mdx(), sitemap()]
});