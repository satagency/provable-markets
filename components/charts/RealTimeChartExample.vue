<template>
  <div class="chart-content">
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
        <span class="stat-item live-indicator">
          <span class="live-dot"></span>
          <span class="stat-label">LIVE</span>
        </span>
      </div>
    </div>
    <ClientOnly>
      <VisXYContainer :data="data" :height="300">
        <VisArea 
          :x="(d: any) => d.date" 
          :y="(d: any) => d.price"
          :color="'#04CF8B'"
          :opacity="0.3"
        />
        <VisLine 
          :x="(d: any) => d.date" 
          :y="(d: any) => d.price"
          :color="'#04CF8B'"
          :stroke-width="2"
        />
        <VisAxis type="x" :tick-format="(d: Date) => d.toLocaleTimeString()" />
        <VisAxis type="y" :tick-format="(d: number) => `$${d.toFixed(2)}`" />
        <VisTooltip />
      </VisXYContainer>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

interface DataPoint {
  date: Date
  price: number
}

const data = ref<DataPoint[]>([])
const lastPrice = ref(175.50)
const lastChange = ref(0)
let updateInterval: NodeJS.Timeout | null = null

function generateTimeSeriesData(points: number): DataPoint[] {
  const generatedData: DataPoint[] = []
  let currentPrice = 175.50
  const now = new Date()

  for (let i = 0; i < points; i++) {
    const date = new Date(now.getTime() - (points - 1 - i) * 1000)
    currentPrice += (Math.random() - 0.5) * 0.5
    generatedData.push({ date, price: currentPrice })
  }
  return generatedData
}

function updateRealTimeData() {
  const lastDataPoint = data.value[data.value.length - 1]
  const newPrice = lastDataPoint.price + (Math.random() - 0.5) * 0.5
  const newDate = new Date(lastDataPoint.date.getTime() + 1000)

  const previousPrice = lastPrice.value
  lastPrice.value = newPrice
  lastChange.value = ((newPrice - previousPrice) / previousPrice) * 100

  data.value.push({ date: newDate, price: newPrice })
  if (data.value.length > 50) {
    data.value.shift()
  }
}

onMounted(() => {
  data.value = generateTimeSeriesData(50)
  lastPrice.value = data.value[data.value.length - 1].price
  updateInterval = setInterval(updateRealTimeData, 500)
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

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
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
  align-items: center;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.stat-value {
  font-size: 16px;
  font-weight: bold;
}

.positive {
  color: #04CF8B;
}

.negative {
  color: #EF4444;
}

.live-indicator {
  display: flex;
  align-items: center;
  gap: 5px;
}

.live-dot {
  width: 8px;
  height: 8px;
  background-color: #04CF8B;
  border-radius: 50%;
  animation: pulse 1.5s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(4, 207, 139, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(4, 207, 139, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(4, 207, 139, 0);
  }
}
</style>