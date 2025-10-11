<script setup lang="ts">
import { VisXYContainer, VisCandlestick, VisAxis } from '@unovis/vue'
import { candlestickData } from './data'
</script>

<template>
  <div class="chart-content">
    <h3 class="chart-title">OHLC Candlestick</h3>
    <VisXYContainer :height="300" :data="candlestickData">
      <VisCandlestick 
        :x="d => d.x" 
        :open="d => d.open"
        :high="d => d.high"
        :low="d => d.low"
        :close="d => d.close"
      />
      <VisAxis type="x" />
      <VisAxis type="y" />
    </VisXYContainer>
  </div>
</template>

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
</style>