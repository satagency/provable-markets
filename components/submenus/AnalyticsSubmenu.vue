<template>
  <div class="submenu">
    <h3 class="submenu-title">Analytics</h3>
    <ul class="submenu-list">
      <li>
        <NuxtLink to="/analytics" class="submenu-item">
          <span class="submenu-label">Overview</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/analytics/performance" class="submenu-item">
          <span class="submenu-label">Performance</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/analytics/market-analysis" class="submenu-item">
          <span class="submenu-label">Market Analysis</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/analytics/fee-analysis" class="submenu-item">
          <span class="submenu-label">Fee Analysis</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/analytics/reports" class="submenu-item">
          <span class="submenu-label">Reports</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Analytics submenu logic
</script>

<style scoped>
.submenu {
  padding: 0;
}

.submenu-title {
  font-size: 16px;
  font-weight: 600;
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
  padding: 0.75rem 0.5rem;
  color: rgba(255, 255, 255, 0.8);
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
  font-weight: 600;
}


.submenu-label {
  font-size: 0.813rem;
  font-weight: 400;
}
</style>
