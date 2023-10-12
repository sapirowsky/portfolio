// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/image-edge",
    "@averjs/nuxt-compression",
  ],
  image: {
    presets: {
      highq: {
        modifiers: {
          format: "webp",
          fit: "cover",
          quality: "100",
        },
      },
    },
  },
})
