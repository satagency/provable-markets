<template>
  <div class="chart-window">
    <AreaChart
      :data="LineChartData"
      :height="300"
      :categories="categories"
      :y-grid-line="true"
      :x-formatter="xFormatter"
      :legend-position="LegendPosition.Top"
      :hide-legend="false"
    />
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

interface LineChartItem {
  date: string
  desktop: number
  mobile: number
  tablet: number
}

const categories = computed(() => ({
  desktop: {
    name: 'Desktop',
    color: '#3b82f6',
  },
  mobile: {
    name: 'Mobile',
    color: '#22c55e',
  },
  tablet: {
    name: 'Tablet',
    color: '#f59e0b',
  },
}))

const LineChartData: LineChartItem[] = [
  { date: '2024-04-01', desktop: 222, mobile: 150, tablet: 80 },
  { date: '2024-04-02', desktop: 180, mobile: 97, tablet: 120 },
  { date: '2024-04-03', desktop: 167, mobile: 120, tablet: 95 },
  { date: '2024-04-04', desktop: 260, mobile: 240, tablet: 140 },
  { date: '2024-04-05', desktop: 240, mobile: 290, tablet: 110 },
]

const xFormatter = (tick: number): string => {
  return `${LineChartData[tick]?.date}`
}
</script>

<style scoped>
.chart-window {
  padding: 20px;
}

.chart-window :deep(.unovis-axis-grid-line) {
  stroke: #333 !important;
}
</style>
