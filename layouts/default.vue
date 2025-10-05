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
  // Use dashboard layout for all main application pages
  // Only use simple layout for auth pages
  if (route.path.startsWith('/auth')) {
    return 'simple'
  }
  // Everything else uses dashboard layout
  return 'dashboard'
})
</script>
