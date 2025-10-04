<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Global app configuration
useHead({
  titleTemplate: '%s - Provable Markets',
  meta: [
    { name: 'description', content: 'Professional securities lending platform with real-time analytics and risk management' }
  ]
})
</script>
