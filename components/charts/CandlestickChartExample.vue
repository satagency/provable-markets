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

// Custom candlestick chart using Chart.js bar chart
const chartCanvas = ref<HTMLCanvasElement | null>(null)
let chart: Chart | null = null
let updateInterval: NodeJS.Timeout | null = null

interface CandlestickData {
  x: Date
  o: number // open
  h: number // high
  l: number // low
  c: number // close
}

// Generate OHLC candlestick data
const generateCandlestickData = (points: number = 20): CandlestickData[] => {
  const now = new Date()
  const data: CandlestickData[] = []
  let price = 150 + Math.random() * 50
  
  for (let i = points; i >= 0; i--) {
    const timestamp = new Date(now.getTime() - i * 900000) // 15 minute intervals
    const open = price
    const change = (Math.random() - 0.5) * 10
    const close = Math.max(100, open + change)
    const high = Math.max(open, close) + Math.random() * 5
    const low = Math.min(open, close) - Math.random() * 5
    
    data.push({
      x: timestamp,
      o: parseFloat(open.toFixed(2)),
      h: parseFloat(high.toFixed(2)),
      l: parseFloat(low.toFixed(2)),
      c: parseFloat(close.toFixed(2))
    })
    
    price = close
  }
  
  return data
}

const createChart = () => {
  if (!chartCanvas.value) return

  const ctx = chartCanvas.value.getContext('2d')
  if (!ctx) return

  const candleData = generateCandlestickData()

  // Transform candlestick data for rendering
  const bodyData = candleData.map(d => ({
    x: d.x,
    y: [Math.min(d.o, d.c), Math.max(d.o, d.c)]
  }))

  const wickData = candleData.map(d => ({
    x: d.x,
    y: [d.l, d.h]
  }))

  const colors = candleData.map(d => 
    d.c >= d.o ? 'rgba(4, 207, 139, 0.8)' : 'rgba(239, 68, 68, 0.8)'
  )

  chart = new Chart(ctx, {
    type: 'bar',
    data: {
      datasets: [
        {
          label: 'Wick',
          data: wickData as any,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1,
          barPercentage: 0.1,
          categoryPercentage: 1.0,
          order: 2
        },
        {
          label: 'Body',
          data: bodyData as any,
          backgroundColor: colors,
          borderColor: colors,
          borderWidth: 1,
          barPercentage: 0.6,
          categoryPercentage: 1.0,
          order: 1
        }
      ]
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
            filter: (item) => item.text !== 'Wick' // Hide wick from legend
          }
        },
        tooltip: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          titleColor: '#ffffff',
          bodyColor: '#ffffff',
          borderColor: 'rgba(255, 255, 255, 0.2)',
          borderWidth: 1,
          padding: 12,
          displayColors: false,
          callbacks: {
            title: (context) => {
              const date = new Date(context[0].parsed.x)
              return date.toLocaleTimeString('en-US', { 
                hour: '2-digit', 
                minute: '2-digit'
              })
            },
            label: (context) => {
              const candle = candleData[context.dataIndex]
              if (!candle) return ''
              return [
                `Open: $${candle.o.toFixed(2)}`,
                `High: $${candle.h.toFixed(2)}`,
                `Low: $${candle.l.toFixed(2)}`,
                `Close: $${candle.c.toFixed(2)}`
              ]
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
              return '$' + value
            }
          }
        }
      }
    }
  })

  // Simulate real-time updates
  updateInterval = setInterval(() => {
    if (!chart || !candleData.length) return

    const lastCandle = candleData[candleData.length - 1]
    const open = lastCandle.c
    const change = (Math.random() - 0.5) * 10
    const close = Math.max(100, open + change)
    const high = Math.max(open, close) + Math.random() * 5
    const low = Math.min(open, close) - Math.random() * 5

    const newCandle: CandlestickData = {
      x: new Date(),
      o: parseFloat(open.toFixed(2)),
      h: parseFloat(high.toFixed(2)),
      l: parseFloat(low.toFixed(2)),
      c: parseFloat(close.toFixed(2))
    }

    candleData.push(newCandle)

    const color = newCandle.c >= newCandle.o ? 'rgba(4, 207, 139, 0.8)' : 'rgba(239, 68, 68, 0.8)'

    // Update datasets
    chart.data.datasets[0].data.push({
      x: newCandle.x,
      y: [newCandle.l, newCandle.h]
    } as any);

    chart.data.datasets[1].data.push({
      x: newCandle.x,
      y: [Math.min(newCandle.o, newCandle.c), Math.max(newCandle.o, newCandle.c)]
    } as any);

    (chart.data.datasets[0].backgroundColor as string[]).push(color);
    (chart.data.datasets[1].backgroundColor as string[]).push(color);

    // Remove old candles (keep last 20)
    if (candleData.length > 20) {
      candleData.shift()
      chart.data.datasets[0].data.shift()
      chart.data.datasets[1].data.shift()
      ;(chart.data.datasets[0].backgroundColor as string[]).shift()
      ;(chart.data.datasets[1].backgroundColor as string[]).shift()
    }

    chart.update('none')
  }, 15000) // Update every 15 seconds
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

