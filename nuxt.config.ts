// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  css: [
    '~/assets/css/main.css',
    '~/assets/scss/variables.scss',
  ],
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      'defineStore',
      ['defineStore', 'definePiniaStore'],
    ],
  },
  modules: ["@nuxtjs/tailwindcss"],
})
