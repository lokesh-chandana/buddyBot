// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  runtimeConfig: {
    MONGO_URI: process.env.MONGO_URI, // private
    MONGO_DB_NAME: process.env.MONGO_DB_NAME
  }
})
