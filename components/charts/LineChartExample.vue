<template>
  <div class="chart-wrapper">
    <VisXYContainer :data="data" :height="height">
      <VisLine :x="(d: DataRecord) => d.x" :y="(d: DataRecord) => d.y" :color="lineColor" />
      <VisAxis type="x" :numTicks="5" :tickFormat="formatTime" />
      <VisAxis type="y" :numTicks="6" :tickFormat="formatPrice" />
      <VisTooltip />
    </VisXYContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VisXYContainer, VisLine, VisAxis, VisTooltip } from '@unovis/vue'

interface DataRecord {
  x: number
  y: number
}

const lineColor = '#04CF8B'
const height = 300

// Generate time series data
const generateData = (points: number = 50): DataRecord[] => {
  const now = Date.now()
  const data: DataRecord[] = []
  let price = 150 + Math.random() * 50
  
  for (let i = points; i >= 0; i--) {
    const timestamp = now - i * 60000 // 1 minute intervals
    const change = (Math.random() - 0.48) * 2
    price = Math.max(100, price + change)
    data.push({
      x: timestamp,
      y: parseFloat(price.toFixed(2))
    })
  }
  
  return data
}

const data = ref<DataRecord[]>(generateData())

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

/* Unovis dark theme overrides */
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
</style>
