<template>
  <ChartWrapper>
    <div class="chart-content">
      <div class="chart-header">
        <h3 class="chart-title">Real-Time Market Feed</h3>
        <div class="live-indicator">
          <span class="pulse-dot"></span>
          <span class="live-text">LIVE</span>
        </div>
      </div>
      <div class="chart-display">
        <svg viewBox="0 0 400 200" class="chart-svg">
          <!-- Grid lines -->
          <line v-for="i in 5" :key="`h-${i}`" 
                :x1="0" :y1="i * 40" 
                :x2="400" :y2="i * 40" 
                stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          
          <!-- Area fill -->
          <path 
            :d="areaPath" 
            fill="url(#gradient)" 
            opacity="0.3"/>
          
          <!-- Price line -->
          <polyline 
            :points="linePoints" 
            fill="none" 
            stroke="#04CF8B" 
            stroke-width="2"/>
          
          <!-- Gradient definition -->
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" style="stop-color:#04CF8B;stop-opacity:1" />
              <stop offset="100%" style="stop-color:#04CF8B;stop-opacity:0" />
            </linearGradient>
          </defs>
        </svg>
        <div class="chart-stats">
          <div class="stat">
            <span class="stat-label">Price:</span>
            <span class="stat-value">${{ currentPrice.toFixed(2) }}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Change:</span>
            <span :class="['stat-value', priceChange >= 0 ? 'positive' : 'negative']">
              {{ priceChange >= 0 ? '+' : '' }}{{ priceChange.toFixed(2) }}%
            </span>
          </div>
          <div class="stat">
            <span class="stat-label">Updates:</span>
            <span class="stat-value">{{ updateCount }}</span>
          </div>
        </div>
      </div>
    </div>
  </ChartWrapper>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import ChartWrapper from './ChartWrapper.vue'

const data = ref<number[]>([])
const currentPrice = ref(175.50)
const priceChange = ref(0)
const updateCount = ref(0)
let updateInterval: NodeJS.Timeout | null = null

const maxDataPoints = 50

const generateInitialData = () => {
  const points: number[] = []
  let price = 175.50
  
  for (let i = 0; i < maxDataPoints; i++) {
    price += (Math.random() - 0.5) * 0.5
    points.push(price)
  }
  
  return points
}

const updateData = () => {
  const lastPrice = data.value[data.value.length - 1]
  const newPrice = lastPrice + (Math.random() - 0.5) * 1
  
  data.value = [...data.value.slice(1), newPrice]
  currentPrice.value = newPrice
  
  const startPrice = data.value[0]
  priceChange.value = ((newPrice - startPrice) / startPrice) * 100
  updateCount.value++
}

const dataPoints = computed(() => {
  if (!data.value.length) return []
  
  const min = Math.min(...data.value)
  const max = Math.max(...data.value)
  const range = max - min || 1
  
  return data.value.map((value, i) => ({
    x: (i / (data.value.length - 1)) * 400,
    y: 190 - ((value - min) / range) * 180
  }))
})

const linePoints = computed(() => {
  return dataPoints.value.map(p => `${p.x},${p.y}`).join(' ')
})

const areaPath = computed(() => {
  if (!dataPoints.value.length) return ''
  
  const points = dataPoints.value
  let path = `M 0,200 L ${points[0].x},${points[0].y}`
  
  for (let i = 1; i < points.length; i++) {
    path += ` L ${points[i].x},${points[i].y}`
  }
  
  path += ` L 400,200 Z`
  return path
})

onMounted(() => {
  data.value = generateInitialData()
  currentPrice.value = data.value[data.value.length - 1]
  
  // Update every 500ms
  updateInterval = setInterval(updateData, 500)
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

.live-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 12px;
  background: rgba(4, 207, 139, 0.1);
  border-radius: 12px;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background: #04CF8B;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.3;
  }
}

.live-text {
  font-size: 11px;
  font-weight: 600;
  color: #04CF8B;
  letter-spacing: 0.5px;
}

.chart-display {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.chart-svg {
  flex: 1;
  width: 100%;
  min-height: 0;
}

.chart-stats {
  display: flex;
  gap: 24px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 4px;
  justify-content: space-around;
}

.stat {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.stat-label {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.stat-value {
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
}

.stat-value.positive {
  color: #04CF8B;
}

.stat-value.negative {
  color: #EF4444;
}
</style>
