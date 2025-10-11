<template>
  <div class="dashboard-container">
    <!-- Grid Container for Windows -->
    <div 
      class="grid-container"
      :style="{ gridTemplateColumns: gridTemplate }"
    >
      <!-- Dynamic Windows -->
      <div 
        v-for="window in windows"
        :key="window.id"
        class="grid-window"
        :style="{ gridArea: window.gridArea, zIndex: window.zIndex }"
        @mousedown="startDrag(window.id, $event)"
      >
        <!-- Window Header with Controls -->
        <div class="window-header">
          <div class="window-title-section">
            <span class="window-title">{{ window.title }}</span>
          </div>
          <div class="window-controls">
            <button 
              v-if="windows.length > 1"
              @click="removeWindow(window.id)"
              class="close-btn"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      
        <!-- Window Content -->
        <div class="window-content">
          <component v-if="window.component" :is="window.component" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import LineChartExample from '~/components/charts/LineChartExample.vue'
import VolumeChartExample from '~/components/charts/VolumeChartExample.vue'
import CandlestickChartExample from '~/components/charts/CandlestickChartExample.vue'
import RealTimeChartExample from '~/components/charts/RealTimeChartExample.vue'

// Define layout metadata
definePageMeta({
  layout: 'dashboard'
})

// Grid system state
const gridColumns = ref(2)
const gridRows = ref(2)

// Window configurations
const windows = ref([
  {
    id: 1,
    title: 'Price Trend',
    component: LineChartExample,
    gridArea: '1 / 1 / 2 / 2',
    zIndex: 1
  },
  {
    id: 2,
    title: 'Trading Volume',
    component: VolumeChartExample,
    gridArea: '1 / 2 / 2 / 3',
    zIndex: 1
  },
  {
    id: 3,
    title: 'OHLC Candlestick',
    component: CandlestickChartExample,
    gridArea: '2 / 1 / 3 / 2',
    zIndex: 1
  },
  {
    id: 4,
    title: 'Real-Time Feed',
    component: RealTimeChartExample,
    gridArea: '2 / 2 / 3 / 3',
    zIndex: 1
  }
])

// Drag state
const isDragging = ref(false)
const dragWindowId = ref(0)
const dragStart = ref({ x: 0, y: 0 })

// Computed grid template based on window count
const gridTemplate = ref('')

// Update grid template
function updateGridTemplate() {
  const windowCount = windows.value.length
  
  if (windowCount === 1) {
    gridTemplate.value = '1fr / 1fr'
    gridColumns.value = 1
    gridRows.value = 1
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
  } else if (windowCount === 2) {
    gridTemplate.value = '1fr / 1fr 1fr'
    gridColumns.value = 2
    gridRows.value = 1
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
    windows.value[1].gridArea = '1 / 2 / 2 / 3'
  } else if (windowCount === 3) {
    gridTemplate.value = '1fr / 1fr 1fr 1fr'
    gridColumns.value = 3
    gridRows.value = 1
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
    windows.value[1].gridArea = '1 / 2 / 2 / 3'
    windows.value[2].gridArea = '1 / 3 / 2 / 4'
  } else if (windowCount === 4) {
    gridTemplate.value = '1fr 1fr / 1fr 1fr'
    gridColumns.value = 2
    gridRows.value = 2
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
    windows.value[1].gridArea = '1 / 2 / 2 / 3'
    windows.value[2].gridArea = '2 / 1 / 3 / 2'
    windows.value[3].gridArea = '2 / 2 / 3 / 3'
  }
}

// Start drag
function startDrag(windowId: number, e: MouseEvent) {
  if (!(e.target as HTMLElement).closest('.window-header')) {
    return
  }
  
  e.preventDefault()
  e.stopPropagation()
  
  isDragging.value = true
  dragWindowId.value = windowId
  dragStart.value = {
    x: e.clientX,
    y: e.clientY
  }
  
  // Bring window to front
  windows.value.forEach(window => {
    if (window.id === windowId) {
      window.zIndex = 10
    } else {
      window.zIndex = 1
    }
  })
}

// Mouse move handler
function handleMouseMove(e: MouseEvent) {
  if (isDragging.value) {
    const deltaX = e.clientX - dragStart.value.x
    const deltaY = e.clientY - dragStart.value.y
    
    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      const containerRect = document.querySelector('.grid-container')?.getBoundingClientRect()
      if (containerRect) {
        const relativeX = e.clientX - containerRect.left
        const relativeY = e.clientY - containerRect.top
        
        const newPosition = calculateGridPosition(relativeX, relativeY, containerRect)
        
        if (newPosition) {
          const currentWindow = windows.value.find(w => w.id === dragWindowId.value)
          if (currentWindow && currentWindow.gridArea !== newPosition) {
            moveWindow(dragWindowId.value, newPosition)
          }
        }
      }
    }
  }
}

// Calculate grid position based on mouse coordinates
function calculateGridPosition(x: number, y: number, containerRect: DOMRect) {
  const containerWidth = containerRect.width
  const containerHeight = containerRect.height
  
  const rowHeight = containerHeight / gridRows.value
  let targetRow = Math.min(Math.floor(y / rowHeight) + 1, gridRows.value)
  
  const colWidth = containerWidth / gridColumns.value
  let targetCol = Math.min(Math.floor(x / colWidth) + 1, gridColumns.value)
  
  return `${targetRow} / ${targetCol} / ${targetRow + 1} / ${targetCol + 1}`
}

// Mouse up handler
function handleMouseUp() {
  isDragging.value = false
  dragWindowId.value = 0
}

// Move window to different position
function moveWindow(windowId: number, newPosition: string) {
  const window = windows.value.find(w => w.id === windowId)
  if (window) {
    window.gridArea = newPosition
  }
}

// Remove window
function removeWindow(windowId: number) {
  windows.value = windows.value.filter(w => w.id !== windowId)
  updateGridTemplate()
}

// Event listeners
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  updateGridTemplate()
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<style scoped>
.dashboard-container {
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(circle, rgba(85, 85, 85, 0.15) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  height: calc(100vh - 50px - 24px);
  padding: 2px;
  box-sizing: border-box;
}

/* Grid Windows */
.grid-window {
  border: 1px solid #404040;
  border-radius: 6px;
  overflow: hidden;
  background: #1a1a1a;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.grid-window:hover {
  border-color: rgba(4, 207, 139, 0.5);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.grid-window:active {
  border-color: rgba(4, 207, 139, 0.8);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.4);
}

/* Window Header */
.window-header {
  height: 40px;
  background: #2a2a2a;
  border-bottom: 1px solid #404040;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  cursor: move;
  user-select: none;
  transition: background-color 0.2s ease;
}

.window-header:hover {
  background: #333;
}

.grid-window:active .window-header {
  background: #444;
}

.window-title-section {
  display: flex;
  align-items: center;
  gap: 16px;
}

.window-title {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
}

.window-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
}

.close-btn {
  background: transparent;
  border: none;
  color: #ffffff;
  width: 24px;
  height: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: color 0.2s ease;
}

.close-btn:hover {
  color: #ff4444;
}

/* Window Content */
.window-content {
  flex: 1;
  overflow: hidden;
}

.w-4 {
  width: 1rem;
}

.h-4 {
  height: 1rem;
}
</style>
