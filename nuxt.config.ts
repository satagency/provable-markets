// Nuxt 3 Configuration
import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  devtools: { enabled: true },
  
  // CSS Framework
  css: ['~/assets/css/main.css'],
  
  // Modules
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/google-fonts'
  ],
  
  // Google Fonts
  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
      'JetBrains Mono': [400, 500],
      'Haffer Mono': [400, 500, 600]
    }
  },
  
  // Tailwind CSS
  tailwindcss: {
    configPath: '~/tailwind.config.js'
  },
  
  // TypeScript
  typescript: {
    strict: false,
    typeCheck: false
  },
  
  // Runtime Config
  runtimeConfig: {
    public: {
      apiBase: 'http://localhost:3001/api'
    }
  },
  
  // App Configuration
  app: {
    head: {
      title: 'Provable Markets - Securities Lending Platform',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Professional securities lending platform with real-time analytics and risk management' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],
      script: [
        { src: 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/gsap.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/CustomEase.min.js' },
        { src: 'https://cdn.jsdelivr.net/npm/gsap@3.13.0/dist/SplitText.min.js' }
      ]
    }
  },
  
  // Build Configuration
  build: {
    transpile: ['chart.js']
  }
})
