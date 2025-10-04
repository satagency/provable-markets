<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h1 class="text-2xl font-bold text-gray-900">Portfolio Management</h1>
      <p class="mt-2 text-gray-600">Overview and management of your securities lending portfolio</p>
    </div>

    <!-- Portfolio Summary -->
    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Portfolio Summary</h3>
        <div class="space-y-4">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Total Value</span>
            <span class="font-bold text-gray-900">$2.4M</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Total Return</span>
            <span class="font-bold text-green-600">+$180,000</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Return %</span>
            <span class="font-bold text-green-600">+7.5%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Active Positions</span>
            <span class="font-bold text-gray-900">47</span>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Asset Allocation</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Equities</span>
            <div class="flex items-center space-x-2">
              <div class="w-20 bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 65%"></div>
              </div>
              <span class="text-sm font-medium text-gray-900">65%</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Bonds</span>
            <div class="flex items-center space-x-2">
              <div class="w-20 bg-gray-200 rounded-full h-2">
                <div class="bg-green-600 h-2 rounded-full" style="width: 25%"></div>
              </div>
              <span class="text-sm font-medium text-gray-900">25%</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">ETFs</span>
            <div class="flex items-center space-x-2">
              <div class="w-20 bg-gray-200 rounded-full h-2">
                <div class="bg-yellow-600 h-2 rounded-full" style="width: 10%"></div>
              </div>
              <span class="text-sm font-medium text-gray-900">10%</span>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Performance Metrics</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Sharpe Ratio</span>
            <span class="font-medium text-gray-900">1.85</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Max Drawdown</span>
            <span class="font-medium text-gray-900">-8.2%</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Beta</span>
            <span class="font-medium text-gray-900">0.92</span>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Alpha</span>
            <span class="font-medium text-green-600">+2.1%</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Portfolio Chart -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">Portfolio Performance</h3>
      <div class="h-96 bg-gray-50 rounded-lg flex items-center justify-center">
        <p class="text-gray-500">Portfolio performance chart will be implemented with Figma MCP</p>
      </div>
    </div>

    <!-- Holdings Table -->
    <div class="card">
      <div class="flex justify-between items-center mb-4">
        <h3 class="text-lg font-semibold text-gray-900">Holdings</h3>
        <div class="flex space-x-2">
          <button class="btn-secondary text-sm">Export</button>
          <button class="btn-secondary text-sm">Rebalance</button>
        </div>
      </div>
      
      <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
            <tr>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Security</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shares</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Value</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Weight</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Return</th>
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
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">500</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$150.25</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$75,125</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">3.1%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600">+12.5%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">View</button>
                <button class="text-gray-600 hover:text-gray-900">Trade</button>
              </td>
            </tr>
            <tr>
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
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">300</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$420.80</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">$126,240</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">5.3%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-green-600">+8.2%</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <button class="text-blue-600 hover:text-blue-900 mr-3">View</button>
                <button class="text-gray-600 hover:text-gray-900">Trade</button>
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
  title: 'Portfolio'
})
</script>
