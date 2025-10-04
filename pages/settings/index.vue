<template>
  <div class="space-y-6">
    <!-- Page Header -->
    <div class="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h1 class="text-2xl font-bold text-gray-900">Settings</h1>
      <p class="mt-2 text-gray-600">Configure your account and platform preferences</p>
    </div>

    <!-- Settings Sections -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <!-- Account Settings -->
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Account Settings</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
            <input type="text" class="input-field" value="John Doe" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
            <input type="email" class="input-field" value="john.doe@example.com" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Phone</label>
            <input type="tel" class="input-field" value="+1 (555) 123-4567" />
          </div>
          <button class="btn-primary">Update Profile</button>
        </div>
      </div>

      <!-- Security Settings -->
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Security</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Current Password</label>
            <input type="password" class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">New Password</label>
            <input type="password" class="input-field" />
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
            <input type="password" class="input-field" />
          </div>
          <button class="btn-primary">Change Password</button>
        </div>
      </div>

      <!-- Notification Settings -->
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Notifications</h3>
        <div class="space-y-4">
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-900">Email Notifications</p>
              <p class="text-sm text-gray-500">Receive updates via email</p>
            </div>
            <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" checked />
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-900">SMS Notifications</p>
              <p class="text-sm text-gray-500">Receive updates via SMS</p>
            </div>
            <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" />
          </div>
          <div class="flex items-center justify-between">
            <div>
              <p class="text-sm font-medium text-gray-900">Risk Alerts</p>
              <p class="text-sm text-gray-500">Get notified of risk events</p>
            </div>
            <input type="checkbox" class="rounded border-gray-300 text-blue-600 focus:ring-blue-500" checked />
          </div>
        </div>
      </div>

      <!-- Trading Preferences -->
      <div class="card">
        <h3 class="text-lg font-semibold text-gray-900 mb-4">Trading Preferences</h3>
        <div class="space-y-4">
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Default Currency</label>
            <select class="input-field">
              <option>USD</option>
              <option>EUR</option>
              <option>GBP</option>
              <option>JPY</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Risk Tolerance</label>
            <select class="input-field">
              <option>Conservative</option>
              <option>Moderate</option>
              <option>Aggressive</option>
            </select>
          </div>
          <div>
            <label class="block text-sm font-medium text-gray-700 mb-2">Max Position Size</label>
            <input type="number" class="input-field" placeholder="100000" />
          </div>
        </div>
      </div>
    </div>

    <!-- API Settings -->
    <div class="card">
      <h3 class="text-lg font-semibold text-gray-900 mb-4">API Configuration</h3>
      <div class="space-y-4">
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">API Key</label>
          <div class="flex space-x-2">
            <input type="text" class="input-field flex-1" value="sk-1234567890abcdef..." readonly />
            <button class="btn-secondary">Regenerate</button>
          </div>
        </div>
        <div>
          <label class="block text-sm font-medium text-gray-700 mb-2">Webhook URL</label>
          <input type="url" class="input-field" placeholder="https://your-domain.com/webhook" />
        </div>
        <div class="flex space-x-2">
          <button class="btn-primary">Save API Settings</button>
          <button class="btn-secondary">Test Connection</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Settings'
})
</script>
