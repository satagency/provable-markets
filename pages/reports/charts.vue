<template>
  <div class="charts-page">
    <!-- Page Header -->
    <div class="page-header">
      <div class="header-left">
        <h1 class="page-title">Financial Charts Explorer</h1>
        <p class="page-subtitle">Real-time market data visualization with drag & resize windows</p>
      </div>
      <div class="header-right">
        <button @click="resetLayout" class="reset-btn">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          Reset Layout
        </button>
      </div>
    </div>

    <!-- Grid Container with Windows -->
    <div class="grid-wrapper">
      <GridContainer
        :windows="windows"
        :grid-size="20"
        :show-grid="false"
        :auto-arrange="false"
        @window-move="handleWindowMove"
        @window-resize="handleWindowResize"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, shallowRef } from 'vue'
import GridContainer from '~/components/ui/GridContainer.vue'
import LineChartWindow from '~/components/windows/LineChartWindow.vue'
import VolumeChartWindow from '~/components/windows/VolumeChartWindow.vue'
import CandlestickChartWindow from '~/components/windows/CandlestickChartWindow.vue'
import RealTimeChartWindow from '~/components/windows/RealTimeChartWindow.vue'

// Define layout metadata
definePageMeta({
  layout: 'dashboard'
})

// Window configurations - use shallowRef to prevent deep reactivity
const windows = shallowRef([
  {
    id: 'line-chart',
    x: 40,
    y: 40,
    width: 600,
    height: 400,
    component: LineChartWindow,
    minWidth: 400,
    minHeight: 300,
    zIndex: 1
  },
  {
    id: 'volume-chart',
    x: 680,
    y: 40,
    width: 600,
    height: 400,
    component: VolumeChartWindow,
    minWidth: 400,
    minHeight: 300,
    zIndex: 2
  },
  {
    id: 'candlestick-chart',
    x: 40,
    y: 480,
    width: 600,
    height: 400,
    component: CandlestickChartWindow,
    minWidth: 400,
    minHeight: 300,
    zIndex: 3
  },
  {
    id: 'realtime-chart',
    x: 680,
    y: 480,
    width: 600,
    height: 400,
    component: RealTimeChartWindow,
    minWidth: 400,
    minHeight: 300,
    zIndex: 4
  }
])

// Store initial layout
const initialLayout = [
  {
    id: 'line-chart',
    x: 40,
    y: 40,
    width: 600,
    height: 400,
    component: LineChartWindow,
    minWidth: 400,
    minHeight: 300,
    zIndex: 1
  },
  {
    id: 'volume-chart',
    x: 680,
    y: 40,
    width: 600,
    height: 400,
    component: VolumeChartWindow,
    minWidth: 400,
    minHeight: 300,
    zIndex: 2
  },
  {
    id: 'candlestick-chart',
    x: 40,
    y: 480,
    width: 600,
    height: 400,
    component: CandlestickChartWindow,
    minWidth: 400,
    minHeight: 300,
    zIndex: 3
  },
  {
    id: 'realtime-chart',
    x: 680,
    y: 480,
    width: 600,
    height: 400,
    component: RealTimeChartWindow,
    minWidth: 400,
    minHeight: 300,
    zIndex: 4
  }
]

// Event handlers
const handleWindowMove = (id: string, x: number, y: number) => {
  const updatedWindows = windows.value.map(w => 
    w.id === id ? { ...w, x, y } : w
  )
  windows.value = updatedWindows
}

const handleWindowResize = (id: string, x: number, y: number, width: number, height: number) => {
  const updatedWindows = windows.value.map(w => 
    w.id === id ? { ...w, x, y, width, height } : w
  )
  windows.value = updatedWindows
}

const resetLayout = () => {
  windows.value = [...initialLayout]
}

onMounted(() => {
  console.log('Charts page mounted with windows:', windows.value.length)
})
</script>

<style scoped>
.charts-page {
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #0a0a0a;
  overflow: hidden;
}

/* Page Header */
.page-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 32px;
  background: linear-gradient(180deg, #1a1a1a 0%, #0f0f0f 100%);
  border-bottom: 1px solid rgba(255, 255, 255, 0.08);
  z-index: 10;
}

.header-left {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.page-title {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.95);
  margin: 0;
  letter-spacing: -0.3px;
}

.page-subtitle {
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: rgba(255, 255, 255, 0.5);
  margin: 0;
}

.header-right {
  display: flex;
  gap: 12px;
}

.reset-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.8);
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.reset-btn:hover {
  background: rgba(255, 255, 255, 0.08);
  border-color: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.95);
}

.reset-btn svg {
  width: 16px;
  height: 16px;
}

/* Grid Wrapper */
.grid-wrapper {
  flex: 1;
  position: relative;
  overflow: hidden;
  background: #121212;
}

/* Utility classes */
.w-4 {
  width: 1rem;
}

.h-4 {
  height: 1rem;
}
</style>

