<template>
  <div class="submenu">
    <h3 class="submenu-title">Securities Lending</h3>
    <ul class="submenu-list">
      <li>
        <NuxtLink to="/lending" class="submenu-item">
          <span class="submenu-label">Overview</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lending/positions" class="submenu-item">
          <span class="submenu-label">Active Positions</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lending/opportunities" class="submenu-item">
          <span class="submenu-label">Opportunities</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lending/collateral" class="submenu-item">
          <span class="submenu-label">Collateral</span>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/lending/borrowers" class="submenu-item">
          <span class="submenu-label">Borrowers</span>
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
// Securities lending submenu logic
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
