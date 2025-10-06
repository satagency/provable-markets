<template>
  <div class="submenu">
    <h3 class="submenu-title">Risk Management</h3>
    <ul class="submenu-list">
      <li>
        <NuxtLink to="/risk" class="submenu-item">
          <span class="submenu-label">Overview</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/risk/var-calculator" class="submenu-item">
          <span class="submenu-label">VaR Calculator</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/risk/stress-testing" class="submenu-item">
          <span class="submenu-label">Stress Testing</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/risk/correlation-analysis" class="submenu-item">
          <span class="submenu-label">Correlation Analysis</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/risk/alerts" class="submenu-item">
          <span class="submenu-label">Risk Alerts</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Risk management submenu logic
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
</style>
