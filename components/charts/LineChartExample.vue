<template>
  <ChartWrapper>
    <div class="chart-content">
      <h3 class="chart-title">Stock Price Trend</h3>
      <div class="chart-display">
        <svg viewBox="0 0 400 200" class="chart-svg">
          <!-- Grid lines -->
          <line v-for="i in 5" :key="`h-${i}`" 
                :x1="0" :y1="i * 40" 
                :x2="400" :y2="i * 40" 
                stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          <line v-for="i in 10" :key="`v-${i}`" 
                :x1="i * 40" :y1="0" 
                :x2="i * 40" :y2="200" 
                stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          
          <!-- Price line -->
          <polyline 
            :points="linePoints" 
            fill="none" 
            stroke="#04CF8B" 
            stroke-width="2"/>
          
          <!-- Data points -->
          <circle v-for="(point, i) in dataPoints" :key="i"
                  :cx="point.x" :cy="point.y" r="3" 
                  fill="#04CF8B"/>
        </svg>
        <div class="chart-stats">
          <div class="stat">
            <span class="stat-label">Current:</span>
            <span class="stat-value">${{ currentPrice.toFixed(2) }}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Change:</span>
            <span :class="['stat-value', priceChange >= 0 ? 'positive' : 'negative']">
              {{ priceChange >= 0 ? '+' : '' }}{{ priceChange.toFixed(2) }}%
            </span>
          </div>
        </div>
      </div>
    </div>
  </ChartWrapper>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ChartWrapper from './ChartWrapper.vue'

interface DataPoint {
  value: number
  x: number
  y: number
}

const data = ref<number[]>([])
const currentPrice = ref(150)
const priceChange = ref(0)

const generateData = () => {
  const points: number[] = []
  let price = 150
  
  for (let i = 0; i < 30; i++) {
    price += (Math.random() - 0.5) * 5
    points.push(price)
  }
  
  return points
}

const dataPoints = computed(() => {
  if (!data.value.length) return []
  
  const min = Math.min(...data.value)
  const max = Math.max(...data.value)
  const range = max - min
  
  return data.value.map((value, i) => ({
    value,
    x: (i / (data.value.length - 1)) * 400,
    y: 200 - ((value - min) / range) * 180 - 10
  }))
})

const linePoints = computed(() => {
  return dataPoints.value.map(p => `${p.x},${p.y}`).join(' ')
})

onMounted(() => {
  data.value = generateData()
  currentPrice.value = data.value[data.value.length - 1]
  const startPrice = data.value[0]
  priceChange.value = ((currentPrice.value - startPrice) / startPrice) * 100
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
