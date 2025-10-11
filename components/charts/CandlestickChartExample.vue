<template>
  <div class="chart-wrapper">
    <VisXYContainer :data="data" :height="height">
      <VisCrosshair :template="crosshairTemplate" />
      <VisGroupedBar 
        :x="(d: DataRecord) => d.x"
        :y="[(d: DataRecord) => [d.low, d.high]]"
        :color="(d: DataRecord) => d.color"
        :barWidth="1"
      />
      <VisGroupedBar 
        :x="(d: DataRecord) => d.x"
        :y="[(d: DataRecord) => [d.open, d.close]]"
        :color="(d: DataRecord) => d.color"
        :barWidth="8"
      />
      <VisAxis type="x" :numTicks="5" :tickFormat="formatTime" />
      <VisAxis type="y" :numTicks="6" :tickFormat="formatPrice" />
      <VisTooltip />
    </VisXYContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VisXYContainer, VisGroupedBar, VisAxis, VisTooltip, VisCrosshair } from '@unovis/vue'

interface DataRecord {
  x: number
  open: number
  high: number
  low: number
  close: number
  color: string
}

const height = 300

// Generate OHLC data
const generateData = (points: number = 20): DataRecord[] => {
  const now = Date.now()
  const data: DataRecord[] = []
  let price = 150 + Math.random() * 50
  
  for (let i = points; i >= 0; i--) {
    const timestamp = now - i * 900000 // 15 minute intervals
    const open = price
    const change = (Math.random() - 0.5) * 10
    const close = Math.max(100, open + change)
    const high = Math.max(open, close) + Math.random() * 5
    const low = Math.min(open, close) - Math.random() * 5
    const color = close >= open ? '#04CF8B' : '#ef4444'
    
    data.push({
      x: timestamp,
      open: parseFloat(open.toFixed(2)),
      high: parseFloat(high.toFixed(2)),
      low: parseFloat(low.toFixed(2)),
      close: parseFloat(close.toFixed(2)),
      color
    })
    
    price = close
  }
  
  return data
}

const data = ref<DataRecord[]>(generateData())

const crosshairTemplate = (d: DataRecord) => {
  return `
    <div style="padding: 8px;">
      <div>O: $${d.open.toFixed(2)}</div>
      <div>H: $${d.high.toFixed(2)}</div>
      <div>L: $${d.low.toFixed(2)}</div>
      <div>C: $${d.close.toFixed(2)}</div>
    </div>
  `
}

// Format functions
const formatTime = (value: number) => {
  const date = new Date(value)
  return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' })
}

const formatPrice = (value: number) => `$${value.toFixed(0)}`
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
  padding: 16px;
  background: #1a1a1a;
  box-sizing: border-box;
}

.chart-wrapper :deep(.unovis-xy-container) {
  background: transparent;
}

.chart-wrapper :deep(.unovis-axis) {
  color: rgba(255, 255, 255, 0.6);
}

.chart-wrapper :deep(.unovis-axis line) {
  stroke: rgba(255, 255, 255, 0.1);
}

.chart-wrapper :deep(.unovis-axis text) {
  fill: rgba(255, 255, 255, 0.6);
  font-size: 11px;
}

.chart-wrapper :deep(.unovis-tooltip) {
  background: rgba(0, 0, 0, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  color: #ffffff;
  border-radius: 4px;
  padding: 8px 12px;
  font-size: 12px;
}

.chart-wrapper :deep(.unovis-crosshair-line) {
  stroke: rgba(255, 255, 255, 0.3);
  stroke-width: 1px;
}
</style>
