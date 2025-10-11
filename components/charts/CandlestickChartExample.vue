<template>
  <div class="chart-wrapper">
    <h3 class="chart-title">OHLC Candlestick</h3>
    <div class="chart-container">
      <VisXYContainer 
        :data="data" 
        :height="280"
      >
        <VisLine 
          :x="(d) => d.x" 
          :y="(d) => d.close"
          color="#04CF8B"
          :lineWidth="2"
        />
        <VisAxis type="x" label="Time" />
        <VisAxis type="y" label="Price ($)" />
        <VisTooltip />
      </VisXYContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VisXYContainer, VisLine, VisAxis, VisTooltip } from '@unovis/vue'

interface CandlestickData {
  x: number
  open: number
  high: number
  low: number
  close: number
}

// Generate OHLC data
const generateData = (): CandlestickData[] => {
  const points: CandlestickData[] = []
  const now = Date.now()
  let price = 150
  
  for (let i = 0; i < 30; i++) {
    const open = price
    const change = (Math.random() - 0.5) * 10
    const close = open + change
    const high = Math.max(open, close) + Math.random() * 5
    const low = Math.min(open, close) - Math.random() * 5
    
    points.push({
      x: now - (30 - i) * 60000,
      open,
      high,
      low,
      close
    })
    
    price = close
  }
  
  return points
}

const data = ref<CandlestickData[]>(generateData())
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

.chart-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 16px;
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
