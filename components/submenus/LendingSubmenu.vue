<template>
  <div class="submenu">
    <h3 class="submenu-title">Lending</h3>
    <ul class="submenu-list">
      <li>
        <NuxtLink to="/lending" class="submenu-item">
          <span class="submenu-label">Overview</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lending/active-loans" class="submenu-item">
          <span class="submenu-label">Active Loans</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lending/loan-history" class="submenu-item">
          <span class="submenu-label">Loan History</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lending/collateral" class="submenu-item">
          <span class="submenu-label">Collateral</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Lending submenu logic
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
