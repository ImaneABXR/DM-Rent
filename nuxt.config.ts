// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: process.env.NUXT_PUBLIC_API_BASE
    }
  },
  devtools: { enabled: true },
  
  modules: [
    '@nuxtjs/tailwindcss', 'nuxt-icons',  '@pinia/nuxt',
  ],
  // vite: {
  //   server: {
  //     proxy: {
  //       '/api': {
  //         target: 'https://dm-assignment-commonshare.koyeb.app/api',
  //         changeOrigin: true,
  //         // rewrite: (path) => path.replace(/^\/api/, '')
  //       }
  //     },
  //   }
  // },
})
