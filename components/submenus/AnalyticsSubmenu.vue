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
      <li>
        <NuxtLink to="/analytics/var-calculator" class="submenu-item">
          <span class="submenu-label">VaR Calculator</span>
          <div class="submenu-icon">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-svg">
              <path d="M2 12H14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
              <path d="M2 10V12" stroke="currentColor" stroke-width="1.5"/>
              <path d="M6 10V12" stroke="currentColor" stroke-width="1.5"/>
              <path d="M10 10V12" stroke="currentColor" stroke-width="1.5"/>
              <path d="M14 10V12" stroke="currentColor" stroke-width="1.5"/>
            </svg>
          </div>
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
  font-weight: 600;
}


.submenu-label {
  font-size: 0.813rem;
  font-weight: 400;
}

.submenu-icon {
  margin-left: auto;
  display: flex;
  align-items: center;
}

.icon-svg {
  width: 16px;
  height: 16px;
  opacity: 0.7;
  transition: opacity 0.2s ease, filter 0.2s ease 0.1s;
}

.submenu-item:hover .icon-svg {
  opacity: 1;
  filter: brightness(0) saturate(100%) invert(58%) sepia(68%) saturate(1000%) hue-rotate(75deg) brightness(95%) contrast(95%);
}
</style>
