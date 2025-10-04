<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Swaps</h1>
          <p class="mt-2 text-gray-600">Securities lending swap transactions and management</p>
        </div>
        <button class="btn-primary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
          </svg>
          New Swap
        </button>
      </div>
    </div>

    <!-- Swap Summary -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Active Swaps</p>
            <p class="text-2xl font-bold text-gray-900">12</p>
            <p class="text-sm text-green-600">+2 this week</p>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Notional</p>
            <p class="text-2xl font-bold text-gray-900">$5.2M</p>
            <p class="text-sm text-green-600">+15.3% from last month</p>
          </div>
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Average Spread</p>
            <p class="text-2xl font-bold text-gray-900">45 bps</p>
            <p class="text-sm text-blue-600">+2 bps from last week</p>
          </div>
          <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">PnL Today</p>
            <p class="text-2xl font-bold text-green-600">+$12,500</p>
            <p class="text-sm text-green-600">Positive</p>
          </div>
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Swaps Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Active Swaps</h3>
            <p class="text-sm text-gray-500">Current securities lending swap positions</p>
          </div>
          <div class="flex space-x-2">
            <button class="btn-secondary text-sm">Filter</button>
            <button class="btn-secondary text-sm">Sort</button>
            <button class="btn-secondary text-sm">Export</button>
          </div>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Swap ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Counterparty</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Security</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notional</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Spread</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Maturity</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PnL</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#SWAP-001</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Goldman Sachs</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-8 w-8">
                    <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                      <span class="text-xs font-medium text-blue-600">AAPL</span>
                    </div>
                  </div>
                  <div class="ml-3">
                    <div class="text-sm font-medium text-gray-900">Apple Inc.</div>
                    <div class="text-sm text-gray-500">NASDAQ:AAPL</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$1,000,000</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">50 bps</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-03-15</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">+$2,500</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">View</button>
                  <button class="text-yellow-600 hover:text-yellow-900">Modify</button>
                  <button class="text-red-600 hover:text-red-900">Close</button>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#SWAP-002</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Morgan Stanley</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-8 w-8">
                    <div class="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                      <span class="text-xs font-medium text-green-600">MSFT</span>
                    </div>
                  </div>
                  <div class="ml-3">
                    <div class="text-sm font-medium text-gray-900">Microsoft Corp.</div>
                    <div class="text-sm text-gray-500">NASDAQ:MSFT</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$750,000</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">40 bps</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-04-20</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">+$1,800</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">View</button>
                  <button class="text-yellow-600 hover:text-yellow-900">Modify</button>
                  <button class="text-red-600 hover:text-red-900">Close</button>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#SWAP-003</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">JP Morgan</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-8 w-8">
                    <div class="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                      <span class="text-xs font-medium text-purple-600">TSLA</span>
                    </div>
                  </div>
                  <div class="ml-3">
                    <div class="text-sm font-medium text-gray-900">Tesla Inc.</div>
                    <div class="text-sm text-gray-500">NASDAQ:TSLA</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$500,000</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">60 bps</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-02-28</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">+$3,200</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">View</button>
                  <button class="text-yellow-600 hover:text-yellow-900">Modify</button>
                  <button class="text-red-600 hover:text-red-900">Close</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Swap Analytics -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Swap PnL Trend</h3>
        <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p class="text-gray-500">PnL trend chart will be implemented with Figma MCP</p>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Counterparty Exposure</h3>
        <div class="h-64 bg-gray-50 rounded-lg flex items-center justify-center">
          <p class="text-gray-500">Counterparty exposure chart will be implemented with Figma MCP</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Swaps'
})
</script>
