<template>
  <div class="test-page">
    <h1>Nuxt Charts Test Page</h1>
    <div class="chart-container">
      <AreaChart
        :data="data"
        :height="300"
        :categories="categories"
        :y-grid-line="true"
        :x-formatter="xFormatter"
        :legend-position="LegendPosition.Top"
        :hide-legend="false"
      />
    </div>
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
.test-page {
  padding: 20px;
  background: #1a1a1a;
  min-height: 100vh;
}

h1 {
  color: white;
  margin-bottom: 20px;
}

.chart-container {
  background: #2a2a2a;
  padding: 20px;
  border-radius: 8px;
  border: 1px solid #404040;
  width: 100%;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
