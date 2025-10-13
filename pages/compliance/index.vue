<template>
  <div class="page-foundation">
    <!-- Compliance Overview Page -->
    <div class="page-content">
      <h1>Compliance & Legal</h1>
      <p>Compliance content will go here</p>
    </div>
  </div>
</template>

<script setup lang="ts">
// Compliance overview page
useHead({
  title: 'Compliance & Legal'
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
