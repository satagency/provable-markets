<template>
  <div class="chart-wrapper">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import 'chartjs-adapter-date-fns'

Chart.register(...registerables)

const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null
let updateInterval: NodeJS.Timeout | null = null

// Generate initial time series data for stock price
const generateTimeSeriesData = (points: number = 50) => {
  const now = new Date()
  const data = []
  let price = 150 + Math.random() * 50 // Start price between 150-200
  
  for (let i = points; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 60000) // 1 minute intervals
    const change = (Math.random() - 0.48) * 2 // Slight upward bias
    price = Math.max(100, price + change)
    data.push({
      x: timestamp,
      y: parseFloat(price.toFixed(2))
    })
  }
  
  return data
}

const createChart = () => {
  if (!chartCanvas.value) return

  const ctx = chartCanvas.value.getContext('2d')
  if (!ctx) return

  const data = generateTimeSeriesData()

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Price',
        data: data,
        borderColor: '#04CF8B',
        backgroundColor: 'rgba(4, 207, 139, 0.1)',
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        pointHoverRadius: 6,
        pointHoverBackgroundColor: '#04CF8B',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 2
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 750,
        easing: 'easeInOutQuart'
      },
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: {
          display: true,
          position: 'top',
          labels: {
            color: 'rgba(255, 255, 255, 0.8)',
            font: {
              family: 'Roboto',
              size: 12
            },
            padding: 15
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#04CF8B',
          borderColor: 'rgba(4, 207, 139, 0.3)',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            title: (context) => {
              const date = new Date(context[0].parsed.x)
              return date.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit',
                second: '2-digit'
              })
            },
            label: (context) => {
              return `$${context.parsed.y.toFixed(2)}`
            }
          }
        }
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'minute',
            displayFormats: {
              minute: 'HH:mm'
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.6)',
            font: {
              family: 'Roboto',
              size: 10
            },
            maxRotation: 0,
            autoSkipPadding: 20
          }
        },
        y: {
          grid: {
            color: 'rgba(255, 255, 255, 0.05)',
            drawBorder: false
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.6)',
            font: {
              family: 'Roboto',
              size: 10
            },
            callback: function(value) {
              return '$' + value
            }
          }
        }
      }
    }
  })

  // Simulate real-time updates
  updateInterval = setInterval(() => {
    if (!chart) return

    const lastPoint = chart.data.datasets[0].data[chart.data.datasets[0].data.length - 1] as any
    const lastPrice = lastPoint.y
    const change = (Math.random() - 0.48) * 2
    const newPrice = Math.max(100, lastPrice + change)

    // Add new point
    chart.data.datasets[0].data.push({
      x: new Date(),
      y: parseFloat(newPrice.toFixed(2))
    } as any)

    // Remove old points (keep last 50)
    if (chart.data.datasets[0].data.length > 50) {
      chart.data.datasets[0].data.shift()
    }

    chart.update('none') // Update without animation for smooth real-time feel
  }, 2000) // Update every 2 seconds
}

onMounted(() => {
  createChart()
})

onUnmounted(() => {
  if (updateInterval) {
    clearInterval(updateInterval)
  }
  if (chart) {
    chart.destroy()
  }
})
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
  padding: 16px;
  background: #1a1a1a;
  box-sizing: border-box;
}

canvas {
  width: 100% !important;
  height: 100% !important;
}
</style>

