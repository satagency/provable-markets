<template>
  <div class="submenu">
    <h3 class="submenu-title">Dashboard</h3>
    <ul class="submenu-list">
      <li>
        <NuxtLink to="/dashboard" class="submenu-item">
          <span class="submenu-label">Overview</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard/performance" class="submenu-item">
          <span class="submenu-label">Performance</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard/positions" class="submenu-item">
          <span class="submenu-label">Positions</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/dashboard/alerts" class="submenu-item">
          <span class="submenu-label">Alerts</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Dashboard submenu logic
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
