<template>
  <div class="page-foundation">
    <!-- Settings Overview Page -->
    <div class="page-content">
      <h1>Settings</h1>
      <p>Settings content will go here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Settings overview page
useHead({
  title: 'Settings'
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