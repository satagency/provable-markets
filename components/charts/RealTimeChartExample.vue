<template>
  <div class="chart-wrapper">
    <div class="chart-header">
      <h3 class="chart-title">Real-Time Market Feed</h3>
      <div class="stats">
        <span class="stat-item">
          <span class="stat-label">Last:</span>
          <span class="stat-value" :class="{ 'positive': lastChange >= 0, 'negative': lastChange < 0 }">
            ${{ lastPrice.toFixed(2) }}
          </span>
        </span>
        <span class="stat-item">
          <span class="stat-label">Change:</span>
          <span class="stat-value" :class="{ 'positive': lastChange >= 0, 'negative': lastChange < 0 }">
            {{ lastChange >= 0 ? '+' : '' }}{{ lastChange.toFixed(2) }}
          </span>
        </span>
      </div>
    </div>
    <canvas ref="chartCanvas"></canvas>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)

const chartCanvas = ref<HTMLCanvasElement | null>(null)
const lastPrice = ref(175.50)
const lastChange = ref(0)
let chart: Chart | null = null
let updateInterval: NodeJS.Timeout | null = null

// Generate high-frequency tick data
const generateTickData = (points: number = 100) => {
  const now = new Date()
  const data = []
  let price = 175 + Math.random() * 10
  
  for (let i = points; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 1000) // 1 second intervals
    const change = (Math.random() - 0.5) * 0.5
    price = Math.max(150, Math.min(200, price + change))
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

  const data = generateTickData()
  lastPrice.value = data[data.length - 1].y

  chart = new Chart(ctx, {
    type: 'line',
    data: {
      datasets: [{
        label: 'Price',
        data: data,
        borderColor: '#04CF8B',
        backgroundColor: 'rgba(4, 207, 139, 0.05)',
        borderWidth: 1.5,
        fill: true,
        tension: 0.2,
        pointRadius: 0,
        pointHoverRadius: 4,
        pointHoverBackgroundColor: '#04CF8B',
        pointHoverBorderColor: '#ffffff',
        pointHoverBorderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: false, // Disable animation for real-time feel
      interaction: {
        intersect: false,
        mode: 'index'
      },
      plugins: {
        legend: {
          display: false
        },
        tooltip: {
          enabled: false // Disable tooltip for speed
        }
      },
      scales: {
        x: {
          type: 'time',
          time: {
            unit: 'second',
            displayFormats: {
              second: 'HH:mm:ss'
            }
          },
          grid: {
            color: 'rgba(255, 255, 255, 0.03)',
            drawBorder: false
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.4)',
            font: {
              family: 'Roboto Mono',
              size: 9
            },
            maxRotation: 0,
            autoSkipPadding: 30
          }
        },
        y: {
          position: 'right',
          grid: {
            color: 'rgba(255, 255, 255, 0.03)',
            drawBorder: false
          },
          ticks: {
            color: 'rgba(255, 255, 255, 0.4)',
            font: {
              family: 'Roboto Mono',
              size: 9
            },
            callback: function(value) {
              return '$' + (value as number).toFixed(2)
            }
          }
        }
      }
    }
  })

  // High-frequency real-time updates (every 500ms)
  updateInterval = setInterval(() => {
    if (!chart) return

    const lastPoint = chart.data.datasets[0].data[chart.data.datasets[0].data.length - 1] as any
    const prevPrice = lastPoint.y
    const change = (Math.random() - 0.5) * 0.5
    const newPrice = Math.max(150, Math.min(200, prevPrice + change))

    // Update reactive values
    lastChange.value = newPrice - prevPrice
    lastPrice.value = newPrice

    // Add new point
    chart.data.datasets[0].data.push({
      x: new Date(),
      y: parseFloat(newPrice.toFixed(2))
    } as any)

    // Remove old points (keep last 100)
    if (chart.data.datasets[0].data.length > 100) {
      chart.data.datasets[0].data.shift()
    }

    chart.update('none') // Update without animation for real-time
  }, 500) // Update twice per second for real-time feel
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
  background: linear-gradient(135deg, #0a0a0a 0%, #000000 100%);
  border-radius: 6px;
  display: flex;
  flex-direction: column;
}

.chart-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.chart-title {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.9);
  margin: 0;
}

.stats {
  display: flex;
  gap: 20px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Roboto Mono', monospace;
}

.stat-label {
  font-size: 10px;
  color: rgba(255, 255, 255, 0.4);
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.stat-value {
  font-size: 13px;
  font-weight: 600;
  transition: color 0.3s ease;
}

.stat-value.positive {
  color: #04CF8B;
}

.stat-value.negative {
  color: #ef4444;
}

canvas {
  flex: 1;
  width: 100% !important;
  height: auto !important;
}
</style>

