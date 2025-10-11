<template>
  <div class="charts-page">
    <h1>Charts</h1>
    <div class="chart-container">
      <LineChart
        :data="chartData"
        :categories="categories"
        :height="400"
        xLabel="Time"
        yLabel="Price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { LineChart } from 'nuxt-charts'

definePageMeta({
  layout: 'dashboard'
})

const chartData = [
  { time: 'Jan', price: 100 },
  { time: 'Feb', price: 120 },
  { time: 'Mar', price: 110 },
  { time: 'Apr', price: 130 },
  { time: 'May', price: 125 }
]

const categories = {
  price: {
    name: 'Price',
    color: '#04CF8B'
  }
}
</script>

<style scoped>
.charts-page {
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
