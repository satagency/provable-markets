<template>
  <div class="chart-content">
    <h3 class="chart-title">Trading Volume</h3>
    <div class="chart-legend">
      <span class="legend-item"><span class="legend-color buy"></span>Buy Volume</span>
      <span class="legend-item"><span class="legend-color sell"></span>Sell Volume</span>
    </div>
    <ClientOnly>
      <VisXYContainer :data="data" :height="300">
        <VisGroupedBar 
          :x="(d: any) => d.date" 
          :y="[(d: any) => d.buyVolume, (d: any) => d.sellVolume]"
          :colors="['#04CF8B', '#EF4444']"
        />
        <VisAxis type="x" :tick-format="(d: Date) => d.toLocaleDateString()" />
        <VisAxis type="y" :tick-format="(d: number) => d.toLocaleString()" />
        <VisTooltip />
      </VisXYContainer>
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

interface VolumeData {
  date: Date
  buyVolume: number
  sellVolume: number
}

const data = ref<VolumeData[]>([])

function generateVolumeData(points: number): VolumeData[] {
  const generatedData: VolumeData[] = []
  const now = new Date()

  for (let i = 0; i < points; i++) {
    const date = new Date(now.getTime() - (points - 1 - i) * 3600 * 1000)
    const buyVolume = Math.floor(Math.random() * 100000) + 10000
    const sellVolume = Math.floor(Math.random() * 100000) + 10000
    generatedData.push({ date, buyVolume, sellVolume })
  }
  return generatedData
}

onMounted(() => {
  data.value = generateVolumeData(30)
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

.chart-legend {
  display: flex;
  gap: 20px;
  margin-bottom: 16px;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 8px;
}

.legend-color {
  width: 12px;
  height: 12px;
  border-radius: 3px;
}

.legend-color.buy {
  background-color: #04CF8B;
}

.legend-color.sell {
  background-color: #EF4444;
}
</style>