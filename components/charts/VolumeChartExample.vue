<template>
  <ChartWrapper>
    <div class="chart-content">
      <h3 class="chart-title">Trading Volume</h3>
      <div class="chart-display">
        <svg viewBox="0 0 400 200" class="chart-svg">
          <!-- Grid lines -->
          <line v-for="i in 5" :key="`h-${i}`" 
                :x1="0" :y1="i * 40" 
                :x2="400" :y2="i * 40" 
                stroke="rgba(255,255,255,0.1)" stroke-width="1"/>
          
          <!-- Bars -->
          <g v-for="(bar, i) in bars" :key="i">
            <!-- Buy volume (green) -->
            <rect 
              :x="bar.x" 
              :y="bar.buyY" 
              :width="bar.width" 
              :height="bar.buyHeight" 
              fill="#04CF8B" 
              opacity="0.8"/>
            <!-- Sell volume (red) -->
            <rect 
              :x="bar.x" 
              :y="bar.sellY" 
              :width="bar.width" 
              :height="bar.sellHeight" 
              fill="#EF4444" 
              opacity="0.8"/>
          </g>
        </svg>
        <div class="chart-legend">
          <div class="legend-item">
            <div class="legend-color" style="background: #04CF8B;"></div>
            <span>Buy Volume</span>
          </div>
          <div class="legend-item">
            <div class="legend-color" style="background: #EF4444;"></div>
            <span>Sell Volume</span>
          </div>
        </div>
      </div>
    </div>
  </ChartWrapper>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import ChartWrapper from './ChartWrapper.vue'

interface VolumeData {
  buy: number
  sell: number
}

const data = ref<VolumeData[]>([])

const generateData = () => {
  const points: VolumeData[] = []
  
  for (let i = 0; i < 20; i++) {
    points.push({
      buy: Math.random() * 100000 + 10000,
      sell: Math.random() * 100000 + 10000
    })
  }
  
  return points
}

const bars = computed(() => {
  if (!data.value.length) return []
  
  const maxVolume = Math.max(...data.value.flatMap(d => [d.buy, d.sell]))
  const barWidth = 380 / data.value.length
  const barSpacing = 2
  const actualBarWidth = barWidth - barSpacing
  
  return data.value.map((d, i) => {
    const buyHeight = (d.buy / maxVolume) * 90
    const sellHeight = (d.sell / maxVolume) * 90
    
    return {
      x: i * barWidth + 10,
      width: actualBarWidth,
      buyY: 190 - buyHeight - sellHeight,
      buyHeight: buyHeight,
      sellY: 190 - sellHeight,
      sellHeight: sellHeight
    }
  })
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

.chart-legend {
  display: flex;
  gap: 24px;
  padding: 12px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 4px;
  justify-content: center;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.8);
}

.legend-color {
  width: 16px;
  height: 16px;
  border-radius: 2px;
}
</style>
