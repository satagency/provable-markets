<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div class="flex justify-between items-center">
        <div>
          <h1 class="text-2xl font-bold text-gray-900">Users</h1>
          <p class="mt-2 text-gray-600">Manage user accounts and permissions</p>
        </div>
        <button class="btn-primary">
          <svg class="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
          </svg>
          Add User
        </button>
      </div>
    </div>

    <!-- User Statistics -->
    <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Total Users</p>
            <p class="text-2xl font-bold text-gray-900">47</p>
            <p class="text-sm text-green-600">+3 this month</p>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Active Users</p>
            <p class="text-2xl font-bold text-green-600">42</p>
            <p class="text-sm text-green-600">89% active</p>
          </div>
          <div class="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Admins</p>
            <p class="text-2xl font-bold text-purple-600">5</p>
            <p class="text-sm text-gray-500">Administrators</p>
          </div>
          <div class="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div class="metric-card">
        <div class="flex items-center justify-between">
          <div>
            <p class="text-sm font-medium text-gray-600">Traders</p>
            <p class="text-2xl font-bold text-blue-600">37</p>
            <p class="text-sm text-gray-500">Trading users</p>
          </div>
          <div class="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
            <svg class="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
            </svg>
          </div>
        </div>
      </div>
    </div>

    <!-- Users Table -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200">
      <div class="px-6 py-4 border-b border-gray-200">
        <div class="flex justify-between items-center">
          <div>
            <h3 class="text-lg font-semibold text-gray-900">User Management</h3>
            <p class="text-sm text-gray-500">Manage user accounts, roles, and permissions</p>
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
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">User</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Login</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Permissions</th>
              <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200">
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <div class="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                      <span class="text-sm font-medium text-blue-600">JD</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">John Doe</div>
                    <div class="text-sm text-gray-500">john.doe@company.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-purple-100 text-purple-800">
                  Admin
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="status-active">Active</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15 14:30</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Full Access</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">Edit</button>
                  <button class="text-yellow-600 hover:text-yellow-900">Permissions</button>
                  <button class="text-red-600 hover:text-red-900">Deactivate</button>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <div class="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                      <span class="text-sm font-medium text-green-600">JS</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">Jane Smith</div>
                    <div class="text-sm text-gray-500">jane.smith@company.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  Trader
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="status-active">Active</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-15 12:15</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Trading Only</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">Edit</button>
                  <button class="text-yellow-600 hover:text-yellow-900">Permissions</button>
                  <button class="text-red-600 hover:text-red-900">Deactivate</button>
                </div>
              </td>
            </tr>
            <tr class="hover:bg-gray-50">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="flex-shrink-0 h-10 w-10">
                    <div class="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center">
                      <span class="text-sm font-medium text-gray-600">MJ</span>
                    </div>
                  </div>
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">Mike Johnson</div>
                    <div class="text-sm text-gray-500">mike.johnson@company.com</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                  Trader
                </span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <span class="status-pending">Inactive</span>
              </td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2024-01-10 09:45</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Trading Only</td>
              <td class="px-6 py-4 whitespace-nowrap text-sm font-medium">
                <div class="flex space-x-2">
                  <button class="text-blue-600 hover:text-blue-900">Edit</button>
                  <button class="text-yellow-600 hover:text-yellow-900">Permissions</button>
                  <button class="text-green-600 hover:text-green-900">Activate</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- User Activity -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Recent User Activity</h3>
        <div class="space-y-3">
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="flex-shrink-0">
              <div class="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                <span class="text-xs font-medium text-blue-600">JD</span>
              </div>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">John Doe logged in</p>
              <p class="text-sm text-gray-500">2 minutes ago</p>
            </div>
          </div>
          
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="flex-shrink-0">
              <div class="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                <span class="text-xs font-medium text-green-600">JS</span>
              </div>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Jane Smith created new order</p>
              <p class="text-sm text-gray-500">15 minutes ago</p>
            </div>
          </div>
          
          <div class="flex items-center p-3 bg-gray-50 rounded-lg">
            <div class="flex-shrink-0">
              <div class="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                <span class="text-xs font-medium text-purple-600">AB</span>
              </div>
            </div>
            <div class="ml-3">
              <p class="text-sm font-medium text-gray-900">Alice Brown updated permissions</p>
              <p class="text-sm text-gray-500">1 hour ago</p>
            </div>
          </div>
        </div>
      </div>

      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">User Roles Distribution</h3>
        <div class="space-y-3">
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Administrators</span>
            <div class="flex items-center space-x-2">
              <div class="w-20 bg-gray-200 rounded-full h-2">
                <div class="bg-purple-600 h-2 rounded-full" style="width: 10%"></div>
              </div>
              <span class="text-sm font-medium text-gray-900">5</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Traders</span>
            <div class="flex items-center space-x-2">
              <div class="w-20 bg-gray-200 rounded-full h-2">
                <div class="bg-blue-600 h-2 rounded-full" style="width: 80%"></div>
              </div>
              <span class="text-sm font-medium text-gray-900">37</span>
            </div>
          </div>
          <div class="flex justify-between items-center">
            <span class="text-sm text-gray-600">Viewers</span>
            <div class="flex items-center space-x-2">
              <div class="w-20 bg-gray-200 rounded-full h-2">
                <div class="bg-gray-600 h-2 rounded-full" style="width: 10%"></div>
              </div>
              <span class="text-sm font-medium text-gray-900">5</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Users'
})
</script>
