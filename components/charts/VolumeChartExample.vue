<template>
  <ChartWrapper>
    <div class="chart-content">
      <h3 class="chart-title">Trading Volume</h3>
      <div class="placeholder">
        <p>Volume Chart (Unovis integration pending)</p>
      </div>
    </div>
  </ChartWrapper>
</template>

<script setup lang="ts">
import ChartWrapper from './ChartWrapper.vue'
// Placeholder until Unovis SSR is resolved
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

.placeholder {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(255, 255, 255, 0.5);
}
</style>
