<template>
  <div class="chart-content">
    <h3 class="chart-title">Stock Price Trend</h3>
    <div class="chart-stats">
      <span class="stat-item">
        <span class="stat-label">Last:</span>
        <span class="stat-value" :class="{ positive: lastChange >= 0, negative: lastChange < 0 }">
          ${{ lastPrice.toFixed(2) }}
        </span>
      </span>
      <span class="stat-item">
        <span class="stat-label">Change:</span>
        <span class="stat-value" :class="{ positive: lastChange >= 0, negative: lastChange < 0 }">
          {{ lastChange >= 0 ? '+' : '' }}{{ lastChange.toFixed(2) }}%
        </span>
      </span>
    </div>
    <ClientOnly>
      <VisXYContainer :data="data" :height="300">
        <VisLine 
          :x="(d: any) => d.date" 
          :y="(d: any) => d.price"
          :color="'#04CF8B'"
          :stroke-width="2"
        />
        <VisAxis type="x" :tick-format="(d: Date) => d.toLocaleTimeString()" />
        <VisAxis type="y" :tick-format="(d: number) => `$${d.toFixed(2)}`" />
        <VisTooltip />
      </VisXYContainer>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface DataPoint {
  date: Date
  price: number
}

const data = ref<DataPoint[]>([])
const lastPrice = ref(175.50)
const lastChange = ref(2.34)

function generateTimeSeriesData(points: number): DataPoint[] {
  const generatedData: DataPoint[] = []
  let currentPrice = 175.50
  const now = new Date()

  for (let i = 0; i < points; i++) {
    const date = new Date(now.getTime() - (points - 1 - i) * 1000 * 3600 / 50)
    currentPrice += (Math.random() - 0.5) * 0.5
    generatedData.push({ date, price: currentPrice })
  }
  return generatedData
}

onMounted(() => {
  data.value = generateTimeSeriesData(50)
  lastPrice.value = data.value[data.value.length - 1].price
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