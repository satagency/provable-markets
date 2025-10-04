<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Watchlists</h1>
          <p class="mt-2 text-gray-600">Monitor securities of interest for lending opportunities</p>
        </div>
        <button class="btn-primary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          New Watchlist
        </button>
      </div>
    </div>

    <!-- Watchlist Tabs -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="border-b border-gray-200">
        <nav class="-mb-px flex space-x-8 px-6">
          <button class="border-blue-500 text-blue-600 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            All Watchlists
          </button>
          <button class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            High Priority
          </button>
          <button class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            Technology
          </button>
          <button class="border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm">
            Financial
          </button>
        </nav>
      </div>

      <!-- Watchlists Grid -->
      <div class="p-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <!-- Watchlist Card 1 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">High Priority Stocks</h3>
                <p class="text-sm text-gray-500">12 securities</p>
              </div>
              <div class="flex space-x-2">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
                <button class="text-gray-400 hover:text-red-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div class="flex items-center">
                  <div class="w-6 h-6 rounded bg-blue-100 flex items-center justify-center mr-3">
                    <span class="text-xs font-medium text-blue-600">AAPL</span>
                  </div>
                  <span class="text-sm font-medium text-gray-900">Apple Inc.</span>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">$150.25</div>
                  <div class="text-xs text-green-600">+2.1%</div>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div class="flex items-center">
                  <div class="w-6 h-6 rounded bg-green-100 flex items-center justify-center mr-3">
                    <span class="text-xs font-medium text-green-600">MSFT</span>
                  </div>
                  <span class="text-sm font-medium text-gray-900">Microsoft Corp.</span>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">$420.80</div>
                  <div class="text-xs text-red-600">-1.2%</div>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div class="flex items-center">
                  <div class="w-6 h-6 rounded bg-purple-100 flex items-center justify-center mr-3">
                    <span class="text-xs font-medium text-purple-600">TSLA</span>
                  </div>
                  <span class="text-sm font-medium text-gray-900">Tesla Inc.</span>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">$245.80</div>
                  <div class="text-xs text-green-600">+5.3%</div>
                </div>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-200">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Avg. Rate:</span>
                <span class="font-medium text-gray-900">3.2%</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Available:</span>
                <span class="font-medium text-green-600">8/12</span>
              </div>
            </div>
          </div>

          <!-- Watchlist Card 2 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Technology Sector</h3>
                <p class="text-sm text-gray-500">8 securities</p>
              </div>
              <div class="flex space-x-2">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
                <button class="text-gray-400 hover:text-red-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div class="flex items-center">
                  <div class="w-6 h-6 rounded bg-blue-100 flex items-center justify-center mr-3">
                    <span class="text-xs font-medium text-blue-600">NVDA</span>
                  </div>
                  <span class="text-sm font-medium text-gray-900">NVIDIA Corp.</span>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">$485.20</div>
                  <div class="text-xs text-green-600">+8.2%</div>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div class="flex items-center">
                  <div class="w-6 h-6 rounded bg-green-100 flex items-center justify-center mr-3">
                    <span class="text-xs font-medium text-green-600">AMD</span>
                  </div>
                  <span class="text-sm font-medium text-gray-900">Advanced Micro Devices</span>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">$125.40</div>
                  <div class="text-xs text-green-600">+3.7%</div>
                </div>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-200">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Avg. Rate:</span>
                <span class="font-medium text-gray-900">4.1%</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Available:</span>
                <span class="font-medium text-green-600">6/8</span>
              </div>
            </div>
          </div>

          <!-- Watchlist Card 3 -->
          <div class="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
            <div class="flex justify-between items-start mb-4">
              <div>
                <h3 class="text-lg font-semibold text-gray-900">Financial Sector</h3>
                <p class="text-sm text-gray-500">6 securities</p>
              </div>
              <div class="flex space-x-2">
                <button class="text-gray-400 hover:text-gray-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                  </svg>
                </button>
                <button class="text-gray-400 hover:text-red-600">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            <div class="space-y-3">
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div class="flex items-center">
                  <div class="w-6 h-6 rounded bg-blue-100 flex items-center justify-center mr-3">
                    <span class="text-xs font-medium text-blue-600">JPM</span>
                  </div>
                  <span class="text-sm font-medium text-gray-900">JPMorgan Chase</span>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">$185.30</div>
                  <div class="text-xs text-red-600">-0.8%</div>
                </div>
              </div>
              
              <div class="flex items-center justify-between p-2 bg-gray-50 rounded">
                <div class="flex items-center">
                  <div class="w-6 h-6 rounded bg-green-100 flex items-center justify-center mr-3">
                    <span class="text-xs font-medium text-green-600">BAC</span>
                  </div>
                  <span class="text-sm font-medium text-gray-900">Bank of America</span>
                </div>
                <div class="text-right">
                  <div class="text-sm font-medium text-gray-900">$32.15</div>
                  <div class="text-xs text-green-600">+1.2%</div>
                </div>
              </div>
            </div>
            
            <div class="mt-4 pt-4 border-t border-gray-200">
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Avg. Rate:</span>
                <span class="font-medium text-gray-900">2.8%</span>
              </div>
              <div class="flex justify-between text-sm">
                <span class="text-gray-500">Available:</span>
                <span class="font-medium text-green-600">4/6</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Watchlist Statistics -->
    <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Watchlists</p>
            <p class="text-2xl font-bold text-gray-900">8</p>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Monitored Securities</p>
            <p class="text-2xl font-bold text-gray-900">26</p>
          </div>
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Available for Lending</p>
            <p class="text-2xl font-bold text-green-600">18</p>
          </div>
          <div class="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Watchlists'
})
</script>
