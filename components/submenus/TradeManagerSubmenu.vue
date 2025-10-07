<template>
  <div class="submenu">
    <h3 class="submenu-title">Trade Manager</h3>
    <ul class="submenu-list">
      <li>
        <NuxtLink to="/trade-manager" class="submenu-item">
          <span class="submenu-label">Overview</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/trade-manager/positions-overview" class="submenu-item">
          <span class="submenu-label">Positions Overview</span>
        </NuxtLink>
      </li>
      
      <!-- Open Positions with Dropdown -->
      <li>
        <SubmenuDropdown label="Open Positions">
          <template #label>
            <span>Open Positions</span>
            <div class="activity-dot"></div>
          </template>
          <NuxtLink to="/trade-manager/open-positions" class="submenu-item">
            <span class="submenu-label">All Positions</span>
          </NuxtLink>
          <NuxtLink to="/trade-manager/open-positions/returns" class="submenu-item submenu-dropdown">
            <span class="submenu-label">Returns</span>
            <span class="submenu-badge red-badge" v-if="returnsCount > 0">{{ returnsCount }}</span>
          </NuxtLink>
          <NuxtLink to="/trade-manager/open-positions/recalls" class="submenu-item submenu-dropdown">
            <span class="submenu-label">Recalls</span>
            <span class="submenu-badge red-badge" v-if="recallsCount > 0">{{ recallsCount }}</span>
          </NuxtLink>
          <NuxtLink to="/trade-manager/open-positions/rerates" class="submenu-item submenu-dropdown">
            <span class="submenu-label">Rerates</span>
            <span class="submenu-badge red-badge" v-if="reratesCount > 0">{{ reratesCount }}</span>
          </NuxtLink>
        </SubmenuDropdown>
      </li>
      
      <li>
        <NuxtLink to="/trade-manager/loans-history" class="submenu-item">
          <span class="submenu-label">Loans History</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/trade-manager/manual-loans" class="submenu-item">
          <span class="submenu-label">Manual Loans</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/trade-manager/pre-established-loans" class="submenu-item">
          <span class="submenu-label">Pre-established Loans</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import SubmenuDropdown from '~/components/ui/SubmenuDropdown.vue'

// Mock data for count badges - replace with real data
const returnsCount = ref(3)
const recallsCount = ref(1)
const reratesCount = ref(7)
</script>

<style scoped>
.submenu {
  padding: 0;
}

.submenu-title {
  font-size: 16px;
  font-weight: 500;
  color: white;
  margin: 0 0 1rem 0;
  padding: 0 0.5rem;
}

.submenu-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.submenu-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 0.5rem;
  color: rgba(255, 255, 255, 0.7); /* 70% opacity to match main nav */
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  margin-bottom: 0.25rem;
  font-size: 0.813rem;
  font-weight: 400;
}

.submenu-item:hover {
  background-color: #2a2a2a;
  color: rgba(255, 255, 255, 1);
}

.submenu-item.router-link-active {
  background-color: #2a2a2a;
  color: rgba(255, 255, 255, 1);
  font-weight: 500;
}


.submenu-label {
  font-size: 0.813rem;
  font-weight: 400;
}

/* Dropdown items specific styling */
.submenu-dropdown .submenu-label {
  font-family: 'JetBrains Mono', monospace;
  text-transform: uppercase;
  font-size: 0.813rem;
  font-weight: 400;
}

.submenu-badge {
  background-color: #ea5f3c;
  color: black;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
  padding: 0 12px;
  border-radius: 4px;
  height: 15px;
  min-width: 15px;
  text-align: center;
  line-height: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.submenu-badge.red-badge {
  background-color: rgba(239, 68, 68, 0.5);
  color: white;
  border: 1px solid #ef4444;
}

.activity-dot {
  width: 6px;
  height: 6px;
  background-color: #ef4444;
  border-radius: 50%;
  margin-left: 8px;
  display: inline-block;
}
</style>
