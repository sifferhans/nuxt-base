// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: ["nuxt-seo-kit"],
  modules: ["@nuxt/devtools", "@unocss/nuxt", "nuxt-icon"],
  css: ["@unocss/reset/tailwind.css"],
});
