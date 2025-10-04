<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h1 class="text-2xl font-bold text-gray-900">Analytics & Reporting</h1>
      <p class="mt-2 text-gray-600">Comprehensive analytics for your securities lending portfolio</p>
    </div>

    <!-- Analytics Overview -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Performance Analytics</h3>
        <div class="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
          <p class="text-gray-500">Performance chart will be implemented with Figma MCP</p>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Risk Analytics</h3>
        <div class="h-80 bg-gray-50 rounded-lg flex items-center justify-center">
          <p class="text-gray-500">Risk analytics chart will be implemented with Figma MCP</p>
        </div>
      </div>
    </div>

    <!-- Detailed Analytics -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Top Performing Securities</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <div>
              <p class="font-medium text-gray-900">NVDA</p>
              <p class="text-sm text-gray-500">NVIDIA Corp.</p>
            </div>
            <div class="text-right">
              <p class="font-medium text-green-600">+15.2%</p>
              <p class="text-sm text-gray-500">$2.1M volume</p>
            </div>
          </div>
          <div class="flex justify-between items-center p-3 bg-green-50 rounded-lg">
            <div>
              <p class="font-medium text-gray-900">AMD</p>
              <p class="text-sm text-gray-500">Advanced Micro Devices</p>
            </div>
            <div class="text-right">
              <p class="font-medium text-green-600">+12.8%</p>
              <p class="text-sm text-gray-500">$1.8M volume</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Borrower Analysis</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Institutional</span>
            <span class="font-medium text-gray-900">68%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Hedge Funds</span>
            <span class="font-medium text-gray-900">22%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Retail</span>
            <span class="font-medium text-gray-900">10%</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Fee Analysis</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Lending Fees</span>
            <span class="font-medium text-gray-900">$45,200</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Management Fees</span>
            <span class="font-medium text-gray-900">$12,800</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Performance Fees</span>
            <span class="font-medium text-gray-900">$8,400</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Analytics'
})
</script>
