<template>
  <div class="page-foundation">
    <!-- Trade Manager Overview Page -->
    <div class="page-content">
      <h1>Trade Manager</h1>
      <p>Trade Manager content will go here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Trade Manager overview page
useHead({
  title: 'Trade Manager'
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
