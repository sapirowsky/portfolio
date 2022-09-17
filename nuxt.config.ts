import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    target: 'static',

    css: ['@/assets/css/main.css'],
    image: {
        presets: {
            blog: {
                modifiers: {
                    format: 'webp',
                    fit: 'cover',
                    quality: '80'
                }
            }
        }
    },
    modules: [
        '@nuxtjs/tailwindcss',
        '@nuxt/image-edge',
        '@averjs/nuxt-compression'
    ],
    vite: {
        define: {
          'process.env.DEBUG': false,
        },
    },
})
