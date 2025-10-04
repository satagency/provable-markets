<template>
  <div class="min-h-screen bg-black flex flex-col">
    <!-- Header -->
    <div class="flex justify-between items-center p-6">
      <div class="flex items-center">
        <div class="w-8 h-8 bg-white rounded-full flex items-center justify-center mr-3">
          <span class="text-black font-bold text-sm">PM</span>
        </div>
        <span class="text-white text-xl font-medium">PROVABLE MARKETS</span>
      </div>
      <button class="px-4 py-2 border border-orange-400 rounded-lg text-white text-sm">
        Join Provable
      </button>
    </div>

    <!-- Main Content -->
    <div class="flex-1 flex items-center justify-center px-6">
      <div class="w-full max-w-md">
        <h1 class="text-white text-3xl font-serif text-center mb-8">
          Log in to Provable Markets
        </h1>
        
        <form @submit.prevent="handleLogin" class="space-y-4">
          <input
            type="email"
            placeholder="Email address"
            class="w-full px-4 py-3 bg-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            v-model="form.email"
          />
          
          <input
            type="password"
            placeholder="Password"
            class="w-full px-4 py-3 bg-gray-800 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400"
            v-model="form.password"
          />
          
          <button
            type="submit"
            class="w-full px-4 py-3 bg-gray-800 border border-orange-400 rounded-xl text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-orange-400"
            :disabled="isLoading"
          >
            {{ isLoading ? 'Logging in...' : 'Log in' }}
          </button>
        </form>
        
        <div class="text-center mt-4">
          <a href="#" class="text-gray-400 text-sm hover:text-white">
            Forgot password?
          </a>
        </div>
      </div>
    </div>

    <!-- Footer -->
    <div class="p-6">
      <p class="text-gray-400 text-xs mb-2">
        © 2025 Provable Markets LLC. All Rights Reserved.
      </p>
      <p class="text-gray-400 text-xs">
        Securities lending services are provided by Provable Markets LLC, a registered broker-dealer. 
        All investments involve risk. Past performance does not guarantee future results.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const form = ref({
  email: '',
  password: ''
})

const isLoading = ref(false)

const handleLogin = async () => {
  isLoading.value = true
  
  try {
    await new Promise(resolve => setTimeout(resolve, 500))
    await navigateTo('/dashboard')
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    isLoading.value = false
  }
}

useHead({
  title: 'Log in to Provable Markets'
})
</script>
