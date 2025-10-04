<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Securities Lending</h1>
          <p class="mt-2 text-gray-600">Manage your lending positions and create new opportunities</p>
        </div>
        <button class="btn-primary">
          New Lending Position
        </button>
      </div>
    </div>

    <!-- Lending Overview -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Available Securities</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p class="font-medium text-gray-900">AAPL</p>
              <p class="text-sm text-gray-500">Apple Inc.</p>
            </div>
            <div class="text-right">
              <p class="font-medium text-gray-900">$150.25</p>
              <p class="text-sm text-green-600">+2.1%</p>
            </div>
          </div>
          <div class="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
            <div>
              <p class="font-medium text-gray-900">TSLA</p>
              <p class="text-sm text-gray-500">Tesla Inc.</p>
            </div>
            <div class="text-right">
              <p class="font-medium text-gray-900">$245.80</p>
              <p class="text-sm text-red-600">-1.5%</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Active Positions</h3>
        <div class="space-y-3">
          <div class="p-3 border border-gray-200 rounded-lg">
            <div class="flex justify-between items-start mb-2">
              <div>
                <p class="font-medium text-gray-900">MSFT</p>
                <p class="text-sm text-gray-500">Microsoft Corp.</p>
              </div>
              <span class="status-active">Active</span>
            </div>
            <div class="text-sm text-gray-600">
              <p>Value: $75,000</p>
              <p>Rate: 2.8%</p>
              <p>Days: 15</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Market Rates</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Equity Average</span>
            <span class="font-medium text-gray-900">3.2%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Bond Average</span>
            <span class="font-medium text-gray-900">2.1%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">ETF Average</span>
            <span class="font-medium text-gray-900">1.8%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Lending Positions Table -->
    <div class="card">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-900">All Lending Positions</h3>
        <div class="flex space-x-2">
          <button class="btn-secondary text-sm">Export</button>
          <button class="btn-secondary text-sm">Filter</button>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Security</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Borrower</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Quantity</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Start Date</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr>
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
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-900">Goldman Sachs</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500 shares</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$75,125</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.2%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15</td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="status-active">Active</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">View</button>
                <button class="text-red-600 hover:text-red-900">Close</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Securities Lending'
})
</script>
