import { defineNuxtConfig } from "nuxt3";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  typescript: {
    shim: false,
  },
  css: ["~/assets/scss/index.scss", "~/assets/scss/_vars.scss"],
  styleResources: {
    vite: {
      css: {
        preprocessorOptions: {
          sass: {
            additionalData: '@import "~/assets/scss/_vars.sass"',
          },
        },
      },
    },
  },
});
