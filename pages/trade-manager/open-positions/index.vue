<template>
  <div class="page-foundation">
    <!-- Open Positions Page -->
    <div class="page-content">
      <h1>Open Positions</h1>
      <p>Open Positions content will go here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
useHead({
  title: 'Open Positions'
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
