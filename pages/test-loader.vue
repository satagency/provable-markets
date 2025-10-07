<template>
  <div>
    <h1>Logo Effects Test</h1>
    <p>This page demonstrates the Aurora Review logo effects.</p>
    
    <div class="test-section">
      <h2>1. Logo Reveal Loader</h2>
      <button @click="showLoader" class="test-button">
        Show Loader
      </button>
      <UiLogoRevealLoader v-if="isLoaderVisible" />
    </div>
    
    <div class="test-section">
      <h2>2. Sidebar Logo</h2>
      <p>The sidebar now uses the 100% SVG version of the Aurora Review logo.</p>
      <p>Navigate to any dashboard page to see the clean SVG logo in the sidebar.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const isLoaderVisible = ref(false)

function showLoader() {
  isLoaderVisible.value = true
  
  // Hide loader after animation completes (about 4 seconds)
  setTimeout(() => {
    isLoaderVisible.value = false
  }, 4000)
}
</script>

<style scoped>
.test-section {
  margin: 30px 0;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #f9f9f9;
}

.test-section h2 {
  color: #04CF8B;
  margin-bottom: 15px;
}

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

p {
  margin: 10px 0;
  color: #666;
}
</style>