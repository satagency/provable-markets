<template>
  <div class="page-foundation">
    <!-- Marketplace Overview Page -->
    <div class="page-content">
      <h1>Marketplace</h1>
      <p>Marketplace content will go here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Marketplace overview page
useHead({
  title: 'Marketplace'
})
</script>

<style scoped>
.page-content {
  padding: 2rem;
  color: white;
}

.page-content h1 {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.page-content p {
  color: rgba(255, 255, 255, 0.7);
}
</style>
