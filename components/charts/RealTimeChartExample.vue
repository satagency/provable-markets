<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <h3 class="chart-title">Real-Time Market Feed</h3>
      <div class="stats">
        <span class="stat-item">
          <span class="stat-label">Last:</span>
          <span class="stat-value" :class="{ positive: lastChange >= 0, negative: lastChange < 0 }">
            ${{ lastPrice.toFixed(2) }}
          </span>
        </span>
        <span class="stat-item">
          <span class="stat-label">Change:</span>
          <span class="stat-value" :class="{ positive: lastChange >= 0, negative: lastChange < 0 }">
            {{ lastChange >= 0 ? '+' : '' }}{{ lastChange.toFixed(2) }}%
          </span>
        </span>
      </div>
    </div>
    <div class="chart-container">
      <VisXYContainer 
        :data="data" 
        :height="260"
      >
        <VisArea 
          :x="(d) => d.x" 
          :y="(d) => d.y"
          color="#04CF8B"
          :opacity="0.2"
        />
        <VisLine 
          :x="(d) => d.x" 
          :y="(d) => d.y"
          color="#04CF8B"
          :lineWidth="2"
        />
        <VisAxis type="x" label="Time" />
        <VisAxis type="y" label="Price ($)" />
      </VisXYContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { VisXYContainer, VisArea, VisLine, VisAxis } from '@unovis/vue'

interface DataPoint {
  x: number
  y: number
}

let updateInterval: NodeJS.Timeout | null = null

// Initialize data
const data = ref<DataPoint[]>([])
const lastPrice = ref(150)
const lastChange = ref(0)

const generateInitialData = (): DataPoint[] => {
  const points: DataPoint[] = []
  const now = Date.now()
  let price = 150
  
  for (let i = 0; i < 50; i++) {
    price += (Math.random() - 0.5) * 2
    points.push({
      x: now - (50 - i) * 1000,
      y: price
    })
  }
  
  lastPrice.value = price
  return points
}

const updateData = () => {
  const lastPoint = data.value[data.value.length - 1]
  const previousPrice = lastPrice.value
  const newPrice = lastPoint.y + (Math.random() - 0.5) * 2
  
  lastPrice.value = newPrice
  lastChange.value = ((newPrice - previousPrice) / previousPrice) * 100
  
  data.value.push({
    x: lastPoint.x + 1000,
    y: newPrice
  })
  
  if (data.value.length > 50) {
    data.value.shift()
  }
}

onMounted(() => {
  data.value = generateInitialData()
  updateInterval = setInterval(updateData, 1000)
})

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval)
  }
})
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 20px;
  background: #1a1a1a;
  box-sizing: border-box;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.chart-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;
}

.stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  display: flex;
  gap: 8px;
  align-items: center;
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.stat-value {
  font-size: 14px;
  font-weight: 600;
}

.stat-value.positive {
  color: #04CF8B;
}

.stat-value.negative {
  color: #FF4444;
}

.chart-container {
  flex: 1;
  min-height: 0;
}

/* Unovis dark theme styling */
.chart-wrapper :deep(svg) {
  background: transparent;
}

.chart-wrapper :deep(.unovis-axis line) {
  stroke: rgba(255, 255, 255, 0.1);
}

.chart-wrapper :deep(.unovis-axis text) {
  fill: rgba(255, 255, 255, 0.7);
  font-size: 12px;
}
</style>
