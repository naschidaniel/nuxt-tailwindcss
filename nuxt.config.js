import { defineNuxtConfig } from '@nuxt/bridge'

export default defineNuxtConfig({
    css: [
        '@/assets/css/main.css',
    ],
    build: {
        postcss: {
          plugins: {
            tailwindcss: {},
            autoprefixer: {},
          },
        },
    },
    buildModules: [
      '@nuxt/postcss8',
    ],
  })