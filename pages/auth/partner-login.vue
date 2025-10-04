<template>
  <div class="min-h-screen bg-black flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <!-- Partner Logo Area -->
      <div class="flex justify-center mb-6">
        <div class="w-16 h-16 bg-gray-800 rounded-lg flex items-center justify-center border border-gray-700">
          <div v-if="partnerLogo" class="w-12 h-12">
            <img :src="partnerLogo" :alt="partnerName + ' Logo'" class="w-full h-full object-contain" />
          </div>
          <div v-else class="text-gray-400 text-sm text-center">
            Partner<br/>Logo
          </div>
        </div>
      </div>
      
      <h2 class="text-center text-3xl font-bold text-white">
        {{ partnerName || 'Partner Portal' }}
      </h2>
      <p class="mt-2 text-center text-sm text-gray-400">
        Securities Lending Platform
      </p>
    </div>

    <div class="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div class="bg-gray-900 py-8 px-4 shadow sm:rounded-lg sm:px-10">
        <form class="space-y-6" @submit.prevent="handleLogin">
          <div>
            <label for="email" class="block text-sm font-medium text-gray-300">
              Email Address
            </label>
            <div class="mt-1">
              <input
                id="email"
                name="email"
                type="email"
                autocomplete="email"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md placeholder-gray-400 bg-gray-800 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your corporate email"
                v-model="form.email"
              />
            </div>
          </div>

          <div>
            <label for="password" class="block text-sm font-medium text-gray-300">
              Password
            </label>
            <div class="mt-1">
              <input
                id="password"
                name="password"
                type="password"
                autocomplete="current-password"
                required
                class="appearance-none block w-full px-3 py-2 border border-gray-600 rounded-md placeholder-gray-400 bg-gray-800 text-white focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your password"
                v-model="form.password"
              />
            </div>
          </div>

          <div class="flex items-center justify-between">
            <div class="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                class="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-600 rounded bg-gray-800"
                v-model="form.rememberMe"
              />
              <label for="remember-me" class="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </div>

            <div class="text-sm">
              <a href="#" class="font-medium text-blue-400 hover:text-blue-300">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              class="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
              :disabled="isLoading"
            >
              <span v-if="!isLoading">Access Platform</span>
              <span v-else>Authenticating...</span>
            </button>
          </div>
        </form>

        <div class="mt-6">
          <div class="relative">
            <div class="absolute inset-0 flex items-center">
              <div class="w-full border-t border-gray-600" />
            </div>
            <div class="relative flex justify-center text-sm">
              <span class="px-2 bg-gray-900 text-gray-400">Secure Connection</span>
            </div>
          </div>
        </div>

        <!-- Legal Language Section -->
        <div class="mt-6 p-4 bg-gray-800 rounded-lg border border-gray-700">
          <h3 class="text-sm font-medium text-gray-300 mb-2">Legal Notice</h3>
          <div class="text-xs text-gray-400 space-y-2">
            <p>
              <strong>COPY TEAM NOTICE:</strong> This section requires legal review and custom language for partner agreements.
            </p>
            <p>
              By accessing this platform, you acknowledge that you are an authorized representative of your organization and agree to comply with all applicable securities lending regulations and terms of service.
            </p>
            <p>
              All transactions are subject to regulatory oversight and may be monitored for compliance purposes.
            </p>
            <p>
              <strong>Action Required:</strong> Legal team must review and customize this language based on specific partner agreements and regulatory requirements.
            </p>
          </div>
        </div>

        <div class="mt-6 text-center">
          <p class="text-xs text-gray-500">
            Powered by Provable Markets • Enterprise Securities Lending Platform
          </p>
          <div class="mt-2 p-2 bg-yellow-900 border border-yellow-700 rounded">
            <p class="text-xs text-yellow-300 font-medium">
              PROTOTYPE MODE: No authentication required for testing
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const form = ref({
  email: '',
  password: '',
  rememberMe: false
})

const isLoading = ref(false)

// Partner configuration - these would typically come from environment variables or API
const partnerConfig = ref({
  name: 'Barclays Capital',
  logo: null, // URL to partner logo
  domain: 'barclays.com'
})

const partnerName = computed(() => partnerConfig.value.name)
const partnerLogo = computed(() => partnerConfig.value.logo)

const handleLogin = async () => {
  isLoading.value = true
  
  try {
    // Prototype: No authentication required
    await new Promise(resolve => setTimeout(resolve, 500))
    
    // Redirect to dashboard
    await navigateTo('/dashboard')
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: `${partnerName.value} - Partner Portal`
})
</script>
