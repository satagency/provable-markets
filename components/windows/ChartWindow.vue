<template>
  <div class="chart-window" ref="container">
    <AreaChart
      :data="data"
      :height="400"
      :categories="categories"
      :y-grid-line="true"
      :x-formatter="xFormatter"
      :legend-position="LegendPosition.Top"
      :hide-legend="false"
    />
  </div>
</template>

<script setup lang="ts">
interface AreaChartItem {
  date: string
  desktop: number
  mobile: number
}

const categories: Record<string, BulletLegendItemInterface> = {
  desktop: {
    name: 'Desktop',
    color: '#3b82f6',
  },
  mobile: {
    name: 'Mobile',
    color: '#22c55e',
  },
}

const data: AreaChartItem[] = [
  { date: '2024-04-01', desktop: 222, mobile: 150 },
  { date: '2024-04-02', desktop: 180, mobile: 97 },
  { date: '2024-04-03', desktop: 167, mobile: 120 },
  { date: '2024-04-04', desktop: 260, mobile: 240 },
  { date: '2024-04-05', desktop: 240, mobile: 290 },
]

const xFormatter = (tick: number): string => {
  return `${data[tick]?.date}`
}
</script>

<style scoped>
.chart-window {
  padding: 10px;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
}

.chart-window :deep(svg) {
  width: 100% !important;
  height: 100% !important;
  max-width: 100%;
  max-height: 100%;
}
</style>
