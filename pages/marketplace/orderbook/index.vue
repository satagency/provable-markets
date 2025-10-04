<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Orderbook</h1>
          <p class="mt-2 text-gray-600">Real-time securities lending orderbook with live pricing</p>
        </div>
        <div class="flex space-x-3">
          <button class="btn-secondary">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
            </svg>
            Refresh
          </button>
          <button class="btn-primary">
            <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
            </svg>
            New Order
          </button>
        </div>
      </div>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Security</label>
          <input type="text" class="input-field" placeholder="Search by symbol or name" />
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Sector</label>
          <select class="input-field">
            <option>All Sectors</option>
            <option>Technology</option>
            <option>Financial</option>
            <option>Healthcare</option>
            <option>Energy</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Rate Range</label>
          <select class="input-field">
            <option>All Rates</option>
            <option>0-2%</option>
            <option>2-5%</option>
            <option>5-10%</option>
            <option>10%+</option>
          </select>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Availability</label>
          <select class="input-field">
            <option>All</option>
            <option>Available</option>
            <option>Limited</option>
            <option>Unavailable</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Orderbook Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <h3 class="text-lg font-semibold text-gray-900">Live Orderbook</h3>
        <p class="text-sm text-gray-500">Real-time securities lending opportunities</p>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Security</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Current Price</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Lending Rate</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Available Qty</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Min Term</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Collateral</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span class="text-sm font-medium text-blue-600">AAPL</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">Apple Inc.</div>
                    <div class="text-sm text-gray-500">NASDAQ:AAPL</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$150.25</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">3.2%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">50,000 shares</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 day</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">102%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">View</button>
                <button class="text-green-600 hover:text-green-900">Lend</button>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span class="text-sm font-medium text-green-600">MSFT</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">Microsoft Corp.</div>
                    <div class="text-sm text-gray-500">NASDAQ:MSFT</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$420.80</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">2.8%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">25,000 shares</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3 days</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">105%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">View</button>
                <button class="text-green-600 hover:text-green-900">Lend</button>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <div class="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                      <span class="text-sm font-medium text-purple-600">TSLA</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">Tesla Inc.</div>
                    <div class="text-sm text-gray-500">NASDAQ:TSLA</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">$245.80</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-yellow-600 font-medium">4.1%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15,000 shares</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 day</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">110%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">View</button>
                <button class="text-green-600 hover:text-green-900">Lend</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Market Summary -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Market Overview</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Total Securities</span>
            <span class="font-medium text-gray-900">1,247</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Available for Lending</span>
            <span class="font-medium text-green-600">892</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Average Rate</span>
            <span class="font-medium text-gray-900">3.2%</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Top Sectors</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Technology</span>
            <span class="font-medium text-gray-900">45%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Financial</span>
            <span class="font-medium text-gray-900">23%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Healthcare</span>
            <span class="font-medium text-gray-900">18%</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Rate Distribution</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">0-2%</span>
            <span class="font-medium text-gray-900">156</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">2-5%</span>
            <span class="font-medium text-gray-900">634</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">5%+</span>
            <span class="font-medium text-gray-900">102</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Orderbook'
})
</script>
