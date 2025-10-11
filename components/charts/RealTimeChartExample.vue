<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <h3 class="chart-title">Real-Time Market Feed</h3>
      <div class="stats">
        <span class="stat-item">
          <span class="stat-label">Last:</span>
          <span class="stat-value" :class="{ 'positive': lastChange >= 0, 'negative': lastChange < 0 }">
            ${{ lastPrice.toFixed(2) }}
          </span>
        </span>
        <span class="stat-item">
          <span class="stat-label">Change:</span>
          <span class="stat-value" :class="{ 'positive': lastChange >= 0, 'negative': lastChange < 0 }">
            {{ lastChange >= 0 ? '+' : '' }}{{ lastChange.toFixed(2) }}
          </span>
        </span>
      </div>
    </div>
    <VisXYContainer :data="data" :height="height">
      <VisArea :x="(d: DataRecord) => d.x" :y="(d: DataRecord) => d.y" :color="areaColor" :opacity="0.2" />
      <VisLine :x="(d: DataRecord) => d.x" :y="(d: DataRecord) => d.y" :color="lineColor" />
      <VisAxis type="x" :numTicks="5" :tickFormat="formatTime" />
      <VisAxis type="y" :numTicks="6" :tickFormat="formatPrice" position="right" />
    </VisXYContainer>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { VisXYContainer, VisLine, VisArea, VisAxis } from '@unovis/vue'

interface DataRecord {
  x: number
  y: number
}

const lineColor = '#04CF8B'
const areaColor = '#04CF8B'
const height = 250
const lastPrice = ref(175.50)
const lastChange = ref(0)
let updateInterval: NodeJS.Timeout | null = null

// Generate initial tick data
const generateData = (points: number = 100): DataRecord[] => {
  const now = Date.now()
  const result: DataRecord[] = []
  let price = 175 + Math.random() * 10
  
  for (let i = points; i >= 0; i--) {
    const timestamp = now - i * 1000 // 1 second intervals
    const change = (Math.random() - 0.5) * 0.5
    price = Math.max(150, Math.min(200, price + change))
    result.push({
      x: timestamp,
      y: parseFloat(price.toFixed(2))
    })
  }
  
  lastPrice.value = result[result.length - 1].y
  return result
}

const data = ref<DataRecord[]>(generateData())

// Real-time updates
onMounted(() => {
  updateInterval = setInterval(() => {
    const lastPoint = data.value[data.value.length - 1]
    const prevPrice = lastPoint.y
    const change = (Math.random() - 0.5) * 0.5
    const newPrice = Math.max(150, Math.min(200, prevPrice + change))
    
    lastChange.value = newPrice - prevPrice
    lastPrice.value = newPrice
    
    data.value.push({
      x: Date.now(),
      y: parseFloat(newPrice.toFixed(2))
    })
    
    // Keep last 100 points
    if (data.value.length > 100) {
      data.value.shift()
    }
  }, 500)
})

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval)
  }
})

// Format functions
const formatTime = (value: number) => {
  const date = new Date(value)
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit' })
}

const formatPrice = (value: number) => `$${value.toFixed(2)}`
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
  padding: 16px;
  background: #1a1a1a;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.chart-title {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Roboto Mono', monospace;
}

.stat-label {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 13px;
  font-weight: 600;
  transition: color 0.3s ease;
}

.stat-value.positive {
  color: #04CF8B;
}

.stat-value.negative {
  color: #ef4444;
}

.chart-wrapper :deep(.unovis-xy-container) {
  background: transparent;
}

.chart-wrapper :deep(.unovis-axis) {
  color: rgba(255, 255, 255, 0.4);
}

.chart-wrapper :deep(.unovis-axis line) {
  stroke: rgba(255, 255, 255, 0.05);
}

.chart-wrapper :deep(.unovis-axis text) {
  fill: rgba(255, 255, 255, 0.4);
  font-size: 10px;
}
</style>
