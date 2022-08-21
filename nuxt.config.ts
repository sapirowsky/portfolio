import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',

    css: ['@/assets/css/main.css'],
    modules: [
        '@nuxtjs/tailwindcss'
    ],
    vite: {
        define: {
          'process.env.DEBUG': false,
        },
    },
})
