<template>
  <ChartWrapper>
    <div class="chart-content">
      <h3 class="chart-title">Stock Price Trend</h3>
      <div ref="chartContainer" class="chart-container"></div>
    </div>
  </ChartWrapper>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import ChartWrapper from './ChartWrapper.vue'

const chartContainer = ref<HTMLElement>()
let chart: any = null

interface DataPoint {
  x: number
  y: number
}

const generateData = (): DataPoint[] => {
  const points: DataPoint[] = []
  const now = Date.now()
  let price = 150
  
  for (let i = 0; i < 30; i++) {
    price += (Math.random() - 0.5) * 10
    points.push({
      x: now - (30 - i) * 60000,
      y: price
    })
  }
  
  return points
}

onMounted(async () => {
  if (!chartContainer.value) return
  
  // Dynamically import Unovis only on client side
  const { VisXYContainer, VisLine, VisAxis } = await import('@unovis/ts')
  
  const data = generateData()
  
  chart = new VisXYContainer(chartContainer.value, {
    components: [
      new VisLine({
        x: (d: DataPoint) => d.x,
        y: (d: DataPoint) => d.y,
        color: '#04CF8B'
      })
    ],
    xAxis: new VisAxis({ type: 'x', numTicks: 5 }),
    yAxis: new VisAxis({ type: 'y', numTicks: 5 }),
    height: 280
  }, data)
})

onBeforeUnmount(() => {
  if (chart) {
    chart.destroy?.()
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

.chart-title {
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin: 0 0 16px 0;
}

.chart-container {
  flex: 1;
  min-height: 0;
}

.chart-container :deep(svg) {
  background: transparent;
}

.chart-container :deep(.unovis-axis line) {
  stroke: rgba(255, 255, 255, 0.1);
}

.chart-container :deep(.unovis-axis text) {
  fill: rgba(255, 255, 255, 0.7);
  font-size: 12px;
}
</style>
