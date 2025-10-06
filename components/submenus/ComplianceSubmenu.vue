<template>
  <div class="submenu">
    <h3 class="submenu-title">Compliance & Legal</h3>
    <ul class="submenu-list">
      <li>
        <NuxtLink to="/compliance/risk-disclosure" class="submenu-item">
          <span class="submenu-label">Risk Disclosure Statement</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/compliance/dtcc-settlement" class="submenu-item">
          <span class="submenu-label">DTCC/DTC Settlement Terms</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/compliance/order-handling" class="submenu-item">
          <span class="submenu-label">Order Handling</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/compliance/data-privacy" class="submenu-item">
          <span class="submenu-label">Data Usage & Privacy Policy</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Compliance submenu logic
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
