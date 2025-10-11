<template>
  <div class="chart-wrapper">
    <VisXYContainer :data="data" :height="height">
      <VisGroupedBar 
        :x="(d: DataRecord) => d.x" 
        :y="(d: DataRecord) => d.y"
        :color="(d: DataRecord) => d.color"
      />
      <VisAxis type="x" :numTicks="5" :tickFormat="formatTime" />
      <VisAxis type="y" :numTicks="6" :tickFormat="formatVolume" />
      <VisTooltip />
    </VisXYContainer>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VisXYContainer, VisGroupedBar, VisAxis, VisTooltip } from '@unovis/vue'

interface DataRecord {
  x: number
  y: number
  color: string
}

const height = 300

// Generate volume data
const generateData = (points: number = 30): DataRecord[] => {
  const now = Date.now()
  const data: DataRecord[] = []
  
  for (let i = points; i >= 0; i--) {
    const timestamp = now - i * 300000 // 5 minute intervals
    const volume = Math.floor(Math.random() * 50000) + 10000
    const isBuy = Math.random() > 0.5
    data.push({
      x: timestamp,
      y: volume,
      color: isBuy ? '#04CF8B' : '#ef4444'
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

const formatVolume = (value: number) => value.toLocaleString()
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
</style>
