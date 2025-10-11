<script setup lang="ts">
import { VisXYContainer, VisArea, VisAxis } from '@unovis/vue'
import { realtimeData } from './data'
</script>

<template>
  <div class="chart-content">
    <h3 class="chart-title">Real-Time Market Feed</h3>
    <VisXYContainer :height="300" :data="realtimeData">
      <VisArea :x="d => d.x" :y="d => d.y" />
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