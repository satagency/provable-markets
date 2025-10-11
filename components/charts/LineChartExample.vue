<template>
  <div class="chart-content">
    <h3 class="chart-title">Stock Price Trend</h3>
    <div class="chart-container">
      <LineChart
        :data="data"
        :categories="categories"
        :height="300"
        :xFormatter="xFormatter"
        :yAxis="yAxis"
        xLabel="Time"
        yLabel="Price"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const data = [
  { time: '1', price: 10 },
  { time: '2', price: 20 },
  { time: '3', price: 15 },
  { time: '4', price: 25 },
  { time: '5', price: 30 },
  { time: '6', price: 22 },
  { time: '7', price: 35 },
  { time: '8', price: 28 },
  { time: '9', price: 40 },
  { time: '10', price: 32 }
]

const categories = {
  price: {
    name: 'Price',
    color: '#04CF8B'
  }
}

const xFormatter = (i: number) => data[i].time

const yAxis = {
  title: {
    text: 'Price'
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