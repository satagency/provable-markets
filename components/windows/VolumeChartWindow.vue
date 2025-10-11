<template>
  <div class="chart-window">
    <div class="window-header">
      <h3 class="window-title">Trading Volume</h3>
      <span class="window-subtitle">Buy/Sell volume distribution</span>
    </div>
    <div class="window-body">
      <VolumeChartExample />
    </div>
  </div>
</template>

<script setup lang="ts">
import VolumeChartExample from '~/components/charts/VolumeChartExample.vue'
</script>

<style scoped>
.chart-window {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  background: #0d0d0d;
  border-radius: 6px;
  overflow: hidden;
}

.window-header {
  padding: 12px 16px;
  background: linear-gradient(180deg, #1a1a1a 0%, #141414 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.window-title {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
}

.window-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
  color: rgba(255, 255, 255, 0.5);
}

.window-body {
  flex: 1;
  overflow: hidden;
  padding: 0;
}
</style>

