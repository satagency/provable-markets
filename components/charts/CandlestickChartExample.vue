<template>
  <div class="chart-content">
    <h3 class="chart-title">OHLC Candlestick</h3>
    <div class="chart-stats">
      <span class="stat-item">
        <span class="stat-label">Open:</span>
        <span class="stat-value">${{ lastOHLC.o.toFixed(2) }}</span>
      </span>
      <span class="stat-item">
        <span class="stat-label">High:</span>
        <span class="stat-value">${{ lastOHLC.h.toFixed(2) }}</span>
      </span>
      <span class="stat-item">
        <span class="stat-label">Low:</span>
        <span class="stat-value">${{ lastOHLC.l.toFixed(2) }}</span>
      </span>
      <span class="stat-item">
        <span class="stat-label">Close:</span>
        <span class="stat-value" :class="{ positive: lastOHLC.c >= lastOHLC.o, negative: lastOHLC.c < lastOHLC.o }">
          ${{ lastOHLC.c.toFixed(2) }}
        </span>
      </span>
    </div>
    <ClientOnly>
      <VisXYContainer :data="data" :height="300">
        <VisCandlestick 
          :x="(d: any) => d.date" 
          :open="(d: any) => d.o"
          :high="(d: any) => d.h"
          :low="(d: any) => d.l"
          :close="(d: any) => d.c"
        />
        <VisAxis type="x" :tick-format="(d: Date) => d.toLocaleDateString()" />
        <VisAxis type="y" :tick-format="(d: number) => `$${d.toFixed(2)}`" />
        <VisTooltip />
      </VisXYContainer>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface CandlestickData {
  date: Date
  o: number
  h: number
  l: number
  c: number
}

const data = ref<CandlestickData[]>([])
const lastOHLC = ref({ o: 150.25, h: 以上の152.80, l: 149.50, c: 151.75 })

function generateCandlestickData(points: number): CandlestickData[] {
  const now = new Date()
  const generatedData: CandlestickData[] = []
  let lastClose = 100

  for (let i = 0; i < points; i++) {
    const date = new Date(now.getTime() - (points - 1 - i) * 3600 * 1000)
    const open = lastClose + (Math.random() - 0.5) * 5
    const close = open + (Math.random() - 0.5) * 10
    const high = Math.max(open, close) + Math.random() * 5
    const low = Math.min(open, close) - Math.random() * 5
    generatedData.push({ date, o: open, h: high, l: low, c: close })
    lastClose = close
  }
  return generatedData
}

onMounted(() => {
  data.value = generateCandlestickData(30)
  lastOHLC.value = data.value[data.value.length - 1]
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

.chart-stats {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
}

.stat-item {
  display: flex;
  align-items: center;
  gap: 5px;
}

.stat-label {
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.stat-value {
  font-size: 16px;
  font-weight: bold;
}

.positive {
  color: #04CF8B;
}

.negative {
  color: #EF4444;
}
</style>