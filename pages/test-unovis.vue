<template>
  <div class="test-page">
    <h1>Unovis Test Page</h1>
    <div class="chart-container">
      <VisXYContainer :data="data" :height="400">
        <VisLine :x="x" :y="y" />
        <VisAxis type="x" />
        <VisAxis type="y" />
      </VisXYContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { VisXYContainer, VisLine, VisAxis } from '@unovis/vue'

// Simple static data - no real-time logic
const data = [
  { x: 1, y: 10 },
  { x: 2, y: 20 },
  { x: 3, y: 15 },
  { x: 4, y: 25 },
  { x: 5, y: 30 }
]

const x = (d: any) => d.x
const y = (d: any) => d.y
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
