<template>
  <div class="test-page">
    <h1>Unovis Test Page</h1>
    <div class="chart-container">
      <div ref="chartContainer" style="width: 100%; height: 400px;"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

const chartContainer = ref<HTMLElement>()

onMounted(() => {
  console.log('Test page mounted')
  console.log('Chart container:', chartContainer.value)
})
</script>

<style scoped>
.test-page {
  padding: 20px;
  background: #1a1a1a;
  min-height: 100vh;
}

h1 {
  color: white;
  margin-bottom: 20px;
}

.chart-container {
  background: #2a2a2a;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #404040;
}
</style>
