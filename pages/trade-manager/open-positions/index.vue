<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Open Positions</h1>
          <p class="mt-2 text-gray-600">Manage your active securities lending positions</p>
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
            New Position
          </button>
        </div>
      </div>
    </div>

    <!-- Action Buttons -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <div class="flex flex-wrap gap-3">
        <button class="btn-secondary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"></path>
          </svg>
          Rerate (5)
        </button>
        <button class="btn-secondary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.207A1 1 0 013 6.5V4z"></path>
          </svg>
          Recall (0)
        </button>
        <button class="btn-secondary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"></path>
          </svg>
          Return (1)
        </button>
        <button class="btn-secondary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          Bulk Actions
        </button>
      </div>
    </div>

    <!-- Open Positions Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-lg font-semibold text-gray-900">Active Positions</h3>
            <p class="text-sm text-gray-500">Currently open securities lending positions</p>
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
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position ID</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Security</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Side</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Days Open</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">PnL</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#POS-001</td>
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
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Lend</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1,000 shares</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">3.2%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">15 days</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">+$1,250</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">View</button>
                  <button class="text-yellow-600 hover:text-yellow-900">Rerate</button>
                  <button class="text-red-600 hover:text-red-900">Close</button>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#POS-002</td>
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
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Borrow</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500 shares</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">2.8%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">8 days</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-red-600 font-medium">-$420</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">View</button>
                  <button class="text-yellow-600 hover:text-yellow-900">Rerate</button>
                  <button class="text-red-600 hover:text-red-900">Close</button>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">#POS-003</td>
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
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Lend</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2,000 shares</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">4.1%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">22 days</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600 font-medium">+$3,680</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">View</button>
                  <button class="text-yellow-600 hover:text-yellow-900">Rerate</button>
                  <button class="text-red-600 hover:text-red-900">Close</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Position Summary -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Position Summary</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Total Positions</span>
            <span class="font-medium text-gray-900">32</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Total Value</span>
            <span class="font-medium text-gray-900">$2.4M</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Average Rate</span>
            <span class="font-medium text-gray-900">3.2%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Total PnL</span>
            <span class="font-medium text-green-600">+$4,510</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Side Distribution</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Lending</span>
            <div class="flex items-center space-x-2">
              <div class="w-20 bg-gray-200 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full" style="width: 75%"></div>
              </div>
              <span class="text-sm font-medium text-gray-900">24</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Borrowing</span>
            <div class="flex items-center space-x-2">
              <div class="w-20 bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 25%"></div>
              </div>
              <span class="text-sm font-medium text-gray-900">8</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Risk Metrics</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Max Exposure</span>
            <span class="font-medium text-gray-900">$2.4M</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Concentration Risk</span>
            <span class="font-medium text-yellow-600">Medium</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Avg. Days Open</span>
            <span class="font-medium text-gray-900">15 days</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Open Positions'
})
</script>
