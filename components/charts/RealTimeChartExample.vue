<template>
  <div class="chart-content">
    <h3 class="chart-title">Real-Time Market Feed</h3>
    <div class="chart-container">
      <Chart
        type="line"
        :data="chartData"
        :options="chartOptions"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'

const chartData = ref({
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
  datasets: [{
    label: 'Price',
    data: [175, 176, 174, 178, 177, 179, 180, 181, 179, 182],
    borderColor: '#04CF8B',
    backgroundColor: 'rgba(4, 207, 139, 0.1)',
    tension: 0.4,
    fill: true
  }]
})

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false
    }
  },
  scales: {
    x: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    },
    y: {
      grid: {
        color: 'rgba(255, 255, 255, 0.1)'
      },
      ticks: {
        color: 'rgba(255, 255, 255, 0.7)'
      }
    }
  }
}

let updateInterval: NodeJS.Timeout | null = null

onMounted(() => {
  // Update chart every second
  updateInterval = setInterval(() => {
    const newValue = chartData.value.datasets[0].data[chartData.value.datasets[0].data.length - 1] + (Math.random() - 0.5) * 2
    chartData.value.datasets[0].data.push(newValue)
    chartData.value.labels?.push((chartData.value.labels.length + 1).toString())
    
    if (chartData.value.datasets[0].data.length > 20) {
      chartData.value.datasets[0].data.shift()
      chartData.value.labels?.shift()
    }
  }, 1000)
})

onBeforeUnmount(() => {
  if (updateInterval) {
    clearInterval(updateInterval)
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
  position: relative;
  height: 300px;
}
</style>