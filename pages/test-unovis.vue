<template>
  <div class="test-page">
    <h1>Nuxt Charts Test Page</h1>
    <div class="chart-container">
      <LineChart
        :data="data"
        :categories="categories"
        :height="300"
        :xFormatter="xFormatter"
        xLabel="Month"
        yLabel="Amount"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const data = [
  { month: 'Jan', sales: 100, profit: 50 },
  { month: 'Feb', sales: 120, profit: 55 },
  { month: 'Mar', sales: 180, profit: 80 },
  { month: 'Apr', sales: 110, profit: 40 },
  { month: 'May', sales: 90, profit: 30 },
]

const categories = {
  sales: {
    name: 'Sales',
    color: '#3b82f6',
  },
  profit: {
    name: 'Profit',
    color: '#10b981',
  },
}

const xFormatter = (i: number) => data[i].month
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
