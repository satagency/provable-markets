<template>
  <div class="chart-content">
    <h3 class="chart-title">Real-Time Market Feed</h3>
    <div class="chart-container">
      <canvas ref="chartCanvas"></canvas>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null
let updateInterval: NodeJS.Timeout | null = null

onMounted(() => {
  if (chartCanvas.value) {
    chart = new Chart(chartCanvas.value, {
      type: 'line',
      data: {
        labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'],
        datasets: [{
          label: 'Price',
          data: [175, 176, 174, 178, 177, 179, 180, 181, 179, 182],
          borderColor: '#04CF8B',
          backgroundColor: 'rgba(4, 207, 139, 0.1)',
          tension: 0.4,
          fill: true
        }]
      },
      options: {
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
    })

    // Update chart every second
    updateInterval = setInterval(() => {
      if (chart) {
        const newValue = chart.data.datasets[0].data[chart.data.datasets[0].data.length - 1] as number + (Math.random() - 0.5) * 2
        chart.data.datasets[0].data.push(newValue)
        chart.data.labels?.push((chart.data.labels.length + 1).toString())
        
        if (chart.data.datasets[0].data.length > 20) {
          chart.data.datasets[0].data.shift()
          chart.data.labels?.shift()
        }
        
        chart.update('none')
      }
    }, 1000)
  }
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