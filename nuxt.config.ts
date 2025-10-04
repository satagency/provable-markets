// Nuxt 3 Configuration
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
      'JetBrains Mono': [400, 500]
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
      apiBase: process.env.API_BASE_URL || 'http://localhost:3001/api'
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
      ]
    }
  },
  
  // Build Configuration
  build: {
    transpile: ['chart.js']
  }
})
