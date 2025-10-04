<template>
  <div style="background-color: #121212; min-height: 100vh;">
    <!-- Use dashboard layout for dashboard pages, simple for others -->
    <NuxtLayout :name="layoutName">
      <slot />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
// Determine layout based on route
const route = useRoute()
const layoutName = computed(() => {
  // Use dashboard layout for dashboard-related pages
  if (route.path.startsWith('/dashboard') || 
      route.path.startsWith('/lending') || 
      route.path.startsWith('/analytics') || 
      route.path.startsWith('/risk') || 
      route.path.startsWith('/marketplace') || 
      route.path.startsWith('/trade-manager') || 
      route.path.startsWith('/swaps') || 
      route.path.startsWith('/admin')) {
    return 'dashboard'
  }
  return 'simple'
})
</script>
