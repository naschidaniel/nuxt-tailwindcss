export default {
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
      "@nuxtjs/composition-api/module"
    ],
  }