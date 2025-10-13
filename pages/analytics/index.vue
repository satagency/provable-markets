<template>
  <div class="page-foundation">
    <!-- Analytics Overview Page -->
    <div class="page-content">
      <h1>Analytics</h1>
      <p>Analytics content will go here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Analytics'
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
