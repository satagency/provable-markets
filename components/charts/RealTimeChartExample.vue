<template>
  <div class="chart-content">
    <h3 class="chart-title">Real-Time Market Feed</h3>
    <div class="chart-container">
      <LineChart
        :data="chartData"
        :categories="chartCategories"
        :height="300"
        xLabel="Time"
        yLabel="Price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const chartData = ref([
  { time: '1', price: 175 },
  { time: '2', price: 176 },
  { time: '3', price: 174 },
  { time: '4', price: 178 },
  { time: '5', price: 177 },
  { time: '6', price: 179 },
  { time: '7', price: 180 },
  { time: '8', price: 181 },
  { time: '9', price: 179 },
  { time: '10', price: 182 }
])

const chartCategories = {
  price: { name: 'Price', color: '#04CF8B' }
}

let updateInterval: NodeJS.Timeout | null = null

onMounted(() => {
  // Update chart every second
  updateInterval = setInterval(() => {
    const newValue = chartData.value[chartData.value.length - 1].price + (Math.random() - 0.5) * 2
    chartData.value.push({ time: (chartData.value.length + 1).toString(), price: newValue })
    
    if (chartData.value.length > 20) {
      chartData.value.shift()
    }
  }, 1000)
})

onBeforeUnmount(() => {
  if (updateInterval) {
    clearInterval(updateInterval)
  }
})
</script>

<style scoped>
.chart-content {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #1a1a1a;
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;
}

.chart-container {
  flex: 1;
  position: relative;
  height: 300px;
}
</style>