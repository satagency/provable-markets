<template>
  <ChartWrapper>
    <div class="chart-content">
      <h3 class="chart-title">OHLC Candlestick</h3>
      <div class="chart-display">
        <svg viewBox="0 0 400 200" class="chart-svg">
          <!-- Grid lines -->
          <line v-for="i in 5" :key="`h-${i}`" 
                :x1="0" :y1="i * 40" 
                :x2="400" :y2="i * 40" 
                stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          
          <!-- Candlesticks -->
          <g v-for="(candle, i) in candles" :key="i">
            <!-- Wick (high-low line) -->
            <line 
              :x1="candle.x" :y1="candle.highY" 
              :x2="candle.x" :y2="candle.lowY" 
              :stroke="candle.color" 
              stroke-width="1"/>
            <!-- Body (open-close rectangle) -->
            <rect 
              :x="candle.bodyX" 
              :y="candle.bodyY" 
              :width="candle.bodyWidth" 
              :height="candle.bodyHeight" 
              :fill="candle.color" 
              opacity="0.8"/>
          </g>
        </svg>
        <div class="chart-stats">
          <div class="stat">
            <span class="stat-label">Open:</span>
            <span class="stat-value">${{ lastCandle.o.toFixed(2) }}</span>
          </div>
          <div class="stat">
            <span class="stat-label">High:</span>
            <span class="stat-value">${{ lastCandle.h.toFixed(2) }}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Low:</span>
            <span class="stat-value">${{ lastCandle.l.toFixed(2) }}</span>
          </div>
          <div class="stat">
            <span class="stat-label">Close:</span>
            <span :class="['stat-value', lastCandle.c >= lastCandle.o ? 'positive' : 'negative']">
              ${{ lastCandle.c.toFixed(2) }}
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

interface CandleData {
  o: number  // open
  h: number  // high
  l: number  // low
  c: number  // close
}

const data = ref<CandleData[]>([])

const generateData = () => {
  const candles: CandleData[] = []
  let price = 150
  
  for (let i = 0; i < 20; i++) {
    const open = price + (Math.random() - 0.5) * 3
    const close = open + (Math.random() - 0.5) * 8
    const high = Math.max(open, close) + Math.random() * 4
    const low = Math.min(open, close) - Math.random() * 4
    
    candles.push({ o: open, h: high, l: low, c: close })
    price = close
  }
  
  return candles
}

const candles = computed(() => {
  if (!data.value.length) return []
  
  const allPrices = data.value.flatMap(d => [d.h, d.l])
  const min = Math.min(...allPrices)
  const max = Math.max(...allPrices)
  const range = max - min
  
  const candleWidth = 380 / data.value.length
  const bodyWidth = candleWidth * 0.7
  
  return data.value.map((d, i) => {
    const x = i * candleWidth + candleWidth / 2 + 10
    const highY = 190 - ((d.h - min) / range) * 180
    const lowY = 190 - ((d.l - min) / range) * 180
    const openY = 190 - ((d.o - min) / range) * 180
    const closeY = 190 - ((d.c - min) / range) * 180
    
    const color = d.c >= d.o ? '#04CF8B' : '#EF4444'
    const bodyY = Math.min(openY, closeY)
    const bodyHeight = Math.abs(closeY - openY) || 1
    
    return {
      x,
      highY,
      lowY,
      bodyX: x - bodyWidth / 2,
      bodyY,
      bodyWidth,
      bodyHeight,
      color
    }
  })
})

const lastCandle = computed(() => {
  return data.value[data.value.length - 1] || { o: 0, h: 0, l: 0, c: 0 }
})

onMounted(() => {
  data.value = generateData()
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
  gap: 16px;
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
  font-size: 11px;
  color: rgba(255, 255, 255, 0.6);
  text-transform: uppercase;
}

.stat-value {
  font-size: 14px;
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
