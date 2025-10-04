<template>
  <div class="space-y-6">
    <!-- Hero Section -->
    <div class="bg-gradient-to-r from-blue-600 to-blue-800 rounded-lg text-white p-8">
      <h1 class="text-4xl font-bold mb-4">Provable Markets</h1>
      <p class="text-xl mb-6">Professional Securities Lending Platform</p>
      <p class="text-blue-100 mb-8">Advanced analytics, risk management, and portfolio optimization for institutional securities lending</p>
      <div class="flex space-x-4">
        <button class="bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors">
          Get Started
        </button>
        <button class="border border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-blue-600 transition-colors">
          Learn More
        </button>
      </div>
    </div>

    <!-- Features Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div class="card">
        <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Real-time Analytics</h3>
        <p class="text-gray-600">Comprehensive analytics and reporting with real-time market data and performance metrics.</p>
      </div>

      <div class="card">
        <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Risk Management</h3>
        <p class="text-gray-600">Advanced risk controls with VaR calculations, stress testing, and automated risk monitoring.</p>
      </div>

      <div class="card">
        <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
          <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
          </svg>
        </div>
        <h3 class="text-lg font-semibold text-gray-900 mb-2">Portfolio Optimization</h3>
        <p class="text-gray-600">Intelligent portfolio management with automated rebalancing and optimization algorithms.</p>
      </div>
    </div>

    <!-- Stats Section -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 class="text-2xl font-bold text-gray-900 mb-6 text-center">Platform Statistics</h2>
      <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div class="text-center">
          <p class="text-3xl font-bold text-blue-600">$2.4B</p>
          <p class="text-sm text-gray-600">Assets Under Management</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-green-600">15,000+</p>
          <p class="text-sm text-gray-600">Active Positions</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-yellow-600">99.9%</p>
          <p class="text-sm text-gray-600">Uptime</p>
        </div>
        <div class="text-center">
          <p class="text-3xl font-bold text-purple-600">500+</p>
          <p class="text-sm text-gray-600">Institutional Clients</p>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="bg-gray-900 rounded-lg text-white p-8 text-center">
      <h2 class="text-2xl font-bold mb-4">Ready to Get Started?</h2>
      <p class="text-gray-300 mb-6">Join leading institutions in optimizing their securities lending operations</p>
      <button class="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
        Request Demo
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Home'
})
</script>
