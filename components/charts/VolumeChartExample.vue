<template>
  <div class="chart-wrapper">
    <h3 class="chart-title">Trading Volume</h3>
    <div class="chart-container">
      <VisXYContainer 
        :data="data" 
        :height="280"
      >
        <VisStackedBar 
          :x="(d) => d.x" 
          :y="[(d) => d.buy, (d) => d.sell]"
          :color="['#04CF8B', '#FF4444']"
        />
        <VisAxis type="x" label="Time" />
        <VisAxis type="y" label="Volume" />
        <VisTooltip />
      </VisXYContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { VisXYContainer, VisStackedBar, VisAxis, VisTooltip } from '@unovis/vue'

interface VolumeData {
  x: number
  buy: number
  sell: number
}

// Generate volume data
const generateData = (): VolumeData[] => {
  const points: VolumeData[] = []
  const now = Date.now()
  
  for (let i = 0; i < 30; i++) {
    points.push({
      x: now - (30 - i) * 60000,
      buy: Math.floor(Math.random() * 100000) + 50000,
      sell: Math.floor(Math.random() * 100000) + 50000
    })
  }
  
  return points
}

const data = ref<VolumeData[]>(generateData())
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
