<template>
  <div class="chart-content">
    <h3 class="chart-title">Trading Volume</h3>
    <div class="chart-container">
      <BarChart
        :data="chartData"
        :categories="chartCategories"
        :height="300"
        :yAxis="yAxisConfig"
        xLabel="Time"
        yLabel="Volume"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const chartData = [
  { time: '1', volume: 100 },
  { time: '2', volume: 150 },
  { time: '3', volume: 120 },
  { time: '4', volume: 200 },
  { time: '5', volume: 180 },
  { time: '6', volume: 160 },
  { time: '7', volume: 220 },
  { time: '8', volume: 190 },
  { time: '9', volume: 250 },
  { time: '10', volume: 210 }
]

const chartCategories = {
  volume: { name: 'Volume', color: '#04CF8B' }
}

const yAxisConfig = {
  title: {
    text: 'Volume'
  },
  labels: {
    formatter: function() {
      return this.value
    }
  }
}
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
  position: relative;
  height: 300px;
}
</style>