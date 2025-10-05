<template>
  <div>
    <h1>Logo Reveal Loader Test</h1>
    <p>This page demonstrates the Aurora Review logo reveal loader.</p>
    
    <button @click="showLoader" class="test-button">
      Show Loader
    </button>
    
    <UiLogoRevealLoader v-if="isLoaderVisible" />
  </div>
</template>

<script setup lang="ts">
const isLoaderVisible = ref(false)

function showLoader() {
  isLoaderVisible.value = true
  
  // Hide loader after animation completes (about 3 seconds)
  setTimeout(() => {
    isLoaderVisible.value = false
  }, 3000)
}
</script>

<style scoped>
.test-button {
  background: #04CF8B;
  color: white;
  border: none;
  padding: 12px 24px;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
}

.test-button:hover {
  background: #03b875;
}
</style>