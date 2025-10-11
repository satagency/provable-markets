<template>
  <div class="chart-wrapper">
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'
import 'chartjs-adapter-date-fns'

// Register Chart.js components once
if (!Chart.defaults.color || Chart.defaults.color === '#666') {
  Chart.register(...registerables)
  // Set global chart defaults for dark theme
  Chart.defaults.color = '#ffffff'
  Chart.defaults.borderColor = 'rgba(255, 255, 255, 0.1)'
}

const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null
let updateInterval: NodeJS.Timeout | null = null

// Generate volume data
const generateVolumeData = (points: number = 30) => {
  const now = new Date()
  const data = []
  
  for (let i = points; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 300000) // 5 minute intervals
    const volume = Math.floor(Math.random() * 50000) + 10000
    const color = Math.random() > 0.5 ? 'rgba(4, 207, 139, 0.8)' : 'rgba(239, 68, 68, 0.8)'
    data.push({
      x: timestamp,
      y: volume,
      backgroundColor: color
    })
  }
  
  return data
}

const createChart = () => {
  if (!chartCanvas.value) return

  const ctx = chartCanvas.value.getContext('2d')
  if (!ctx) return

  const data = generateVolumeData()

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [{
        label: 'Volume',
        data: data,
        backgroundColor: data.map(d => d.backgroundColor),
        borderWidth: 0,
        barPercentage: 0.9,
        categoryPercentage: 1.0
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 500,
        easing: 'easeOutQuart'
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
            padding: 15,
            generateLabels: () => [
              {
                text: 'Buy Volume',
                fillStyle: 'rgba(4, 207, 139, 0.8)',
                strokeStyle: 'rgba(4, 207, 139, 0.8)',
                fontColor: 'rgba(255, 255, 255, 0.8)',
                lineWidth: 0,
                hidden: false
              },
              {
                text: 'Sell Volume',
                fillStyle: 'rgba(239, 68, 68, 0.8)',
                strokeStyle: 'rgba(239, 68, 68, 0.8)',
                fontColor: 'rgba(255, 255, 255, 0.8)',
                lineWidth: 0,
                hidden: false
              }
            ]
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1,
          padding: 12,
          displayColors: true,
          callbacks: {
            title: (context) => {
              const date = new Date(context[0].parsed.x)
              return date.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit'
              })
            },
            label: (context) => {
              return `Volume: ${context.parsed.y.toLocaleString()}`
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
            display: false,
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
              return (value as number).toLocaleString()
            }
          }
        }
      }
    }
  })

  // Simulate real-time updates
  updateInterval = setInterval(() => {
    if (!chart) return

    const volume = Math.floor(Math.random() * 50000) + 10000
    const isGreen = Math.random() > 0.5
    const color = isGreen ? 'rgba(4, 207, 139, 0.8)' : 'rgba(239, 68, 68, 0.8)'

    // Add new bar
    const newData = {
      x: new Date(),
      y: volume,
      backgroundColor: color
    }

    chart.data.datasets[0].data.push(newData as any)
    
    // Update colors array
    const bgColors = chart.data.datasets[0].backgroundColor as string[]
    bgColors.push(color)

    // Remove old bars (keep last 30)
    if (chart.data.datasets[0].data.length > 30) {
      chart.data.datasets[0].data.shift()
      bgColors.shift()
    }

    chart.update('none')
  }, 5000) // Update every 5 seconds
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

