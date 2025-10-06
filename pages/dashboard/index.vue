<template>
  <div class="dashboard-container">
    <!-- Debug info -->
    <div style="position: fixed; top: 10px; right: 10px; background: red; color: white; padding: 10px; z-index: 10000;">
      Windows: {{ windows.length }}
              </div>

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
          <span class="window-title">{{ window.title }}</span>
          <div class="window-controls">
            <select 
              @change="moveWindow(window.id, $event.target.value)"
              :value="window.gridArea"
              class="position-select"
            >
              <option 
                v-for="pos in getAvailablePositions(window.id)"
                :key="pos.id"
                :value="pos.area"
              >
                {{ pos.name }}
              </option>
            </select>
            <button 
              v-if="windows.length > 1"
              @click="removeWindow(window.id)"
              class="close-btn"
            >
              ×
            </button>
        </div>
      </div>
      
        <!-- Window Content -->
        <div class="window-content">
          <component v-if="window.component" :is="window.component" />
          <div v-else class="window-placeholder">
            <h3>{{ window.title }}</h3>
            <p>Future window content goes here</p>
          </div>
        </div>
      </div>
      
      <!-- Add Window Button -->
      <div 
        v-if="windows.length < 3"
        class="add-window-btn"
        @click="addWindow('New Window', null)"
      >
        <span>+ Add Window</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import OrdersWindow from '~/components/windows/OrdersWindow.vue'

// Grid system state
const gridColumns = ref(2)
const gridRows = ref(1)
const gridGap = ref(8)

// Window configurations
const windows = ref([
  {
    id: 1,
    title: 'Orders',
    component: OrdersWindow,
    gridArea: '1 / 1 / 2 / 2', // row-start / col-start / row-end / col-end
    zIndex: 1
  },
  {
    id: 2,
    title: 'Window 2',
    component: null,
    gridArea: '2 / 1 / 3 / 2',
    zIndex: 1
  }
])

// Available grid positions - flexible row-based layout
const gridPositions = ref([
  // Row 1 positions
  { id: 1, area: '1 / 1 / 2 / 2', name: 'Row 1 - Full Width' },
  { id: 2, area: '1 / 1 / 2 / 2', name: 'Row 1 - Left Half' },
  { id: 3, area: '1 / 2 / 2 / 3', name: 'Row 1 - Right Half' },
  
  // Row 2 positions
  { id: 4, area: '2 / 1 / 3 / 2', name: 'Row 2 - Full Width' },
  { id: 5, area: '2 / 1 / 3 / 2', name: 'Row 2 - Left Half' },
  { id: 6, area: '2 / 2 / 3 / 3', name: 'Row 2 - Right Half' },
  
  // Row 3 positions
  { id: 7, area: '3 / 1 / 4 / 2', name: 'Row 3 - Full Width' },
  { id: 8, area: '3 / 1 / 4 / 2', name: 'Row 3 - Left Half' },
  { id: 9, area: '3 / 2 / 4 / 3', name: 'Row 3 - Right Half' }
])

// Drag state
const isDragging = ref(false)
const dragWindowId = ref(0)
const dragStart = ref({ x: 0, y: 0 })

// Window styles computed from grid areas
const window1Style = ref({
  gridArea: windows.value[0].gridArea,
  zIndex: windows.value[0].zIndex
})

const window2Style = ref({
  gridArea: windows.value[1].gridArea,
  zIndex: windows.value[1].zIndex
})

// Start drag
function startDrag(windowId: number, e: MouseEvent) {
  // Only allow dragging from window header
  if (!(e.target as HTMLElement).closest('.window-header')) {
    return
  }
  
  console.log('Start drag window:', windowId)
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
  
  updateWindowStyles()
}

// Mouse move handler
function handleMouseMove(e: MouseEvent) {
  if (isDragging.value) {
    const deltaX = e.clientX - dragStart.value.x
    const deltaY = e.clientY - dragStart.value.y
    
    // Only update position if mouse has moved significantly
    if (Math.abs(deltaX) > 10 || Math.abs(deltaY) > 10) {
      // Calculate which grid position the mouse is over
      const containerRect = document.querySelector('.grid-container')?.getBoundingClientRect()
      if (containerRect) {
        const relativeX = e.clientX - containerRect.left
        const relativeY = e.clientY - containerRect.top
        
        // Determine grid position based on mouse position
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
  
  // Simple row detection based on mouse Y position
  const rowHeight = containerHeight / 3 // Assume max 3 rows
  let targetRow = 1
  
  if (y < rowHeight) {
    targetRow = 1
  } else if (y < rowHeight * 2) {
    targetRow = 2
  } else {
    targetRow = 3
  }
  
  // Simple column detection based on mouse X position
  const colWidth = containerWidth / 2
  let targetCol = 1
  
  if (x < colWidth) {
    targetCol = 1
  } else {
    targetCol = 2
  }
  
  // Return valid grid area
  if (targetCol === 1) {
    return `${targetRow} / 1 / ${targetRow + 1} / 2`
  } else {
    return `${targetRow} / 2 / ${targetRow + 1} / 3`
  }
}

// Mouse up handler
function handleMouseUp() {
  isDragging.value = false
  dragWindowId.value = 0
}

// Update window styles
function updateWindowStyles() {
  window1Style.value = {
    gridArea: windows.value[0].gridArea,
    zIndex: windows.value[0].zIndex
  }
  
  window2Style.value = {
    gridArea: windows.value[1].gridArea,
    zIndex: windows.value[1].zIndex
  }
}

// Computed grid template based on window count
const gridTemplate = ref('')

// Update grid template - flexible row-based configuration
function updateGridTemplate() {
  const windowCount = windows.value.length
  
  if (windowCount === 1) {
    gridTemplate.value = '1fr'
    gridColumns.value = 1
    gridRows.value = 1
    return
  }
  
  // Analyze window positions to determine row configuration
  const rowConfig = analyzeRowConfiguration()
  
  // Build grid template based on row configuration
  const rows = []
  const maxRow = Math.max(...windows.value.map(w => {
    const match = w.gridArea.match(/(\d+)/)
    return match ? parseInt(match[1]) : 1
  }))
  
  for (let row = 1; row <= maxRow; row++) {
    const rowWindows = windows.value.filter(w => {
      const match = w.gridArea.match(/(\d+)/)
      const windowRow = match ? parseInt(match[1]) : 1
      return windowRow === row
    })
    
    if (rowWindows.length === 0) {
      // Empty row - skip it
      continue
    } else if (rowWindows.length === 1) {
      rows.push('1fr') // Full width row
    } else if (rowWindows.length === 2) {
      rows.push('1fr 1fr') // Split row
    } else {
      rows.push('1fr') // Default to full width
    }
  }
  
  // Set grid template
  gridTemplate.value = rows.join(' ')
  gridColumns.value = Math.max(...rows.map(r => r.split(' ').length))
  gridRows.value = rows.length
  
  console.log('Grid template updated:', {
    template: gridTemplate.value,
    columns: gridColumns.value,
    rows: gridRows.value,
    rowConfig: rowConfig
  })
}

// Analyze how windows are distributed across rows
function analyzeRowConfiguration() {
  const rowConfig = {}
  
  windows.value.forEach(window => {
    const match = window.gridArea.match(/(\d+)/)
    const row = match ? parseInt(match[1]) : 1
    
    if (!rowConfig[row]) {
      rowConfig[row] = []
    }
    rowConfig[row].push(window)
  })
  
  return rowConfig
}

// Move window to different position
function moveWindow(windowId: number, newPosition: string) {
  const window = windows.value.find(w => w.id === windowId)
  if (window && window.gridArea !== newPosition) {
    console.log(`Moving window ${windowId} from ${window.gridArea} to ${newPosition}`)
    window.gridArea = newPosition
    
    // Update grid template first
    updateGridTemplate()
    
    // Then ensure windows in single-window rows span full width
    optimizeWindowAreas()
    
    updateWindowStyles()
  }
}

// Optimize window areas to ensure full width when alone in row
function optimizeWindowAreas() {
  const rowConfig = analyzeRowConfiguration()
  
  windows.value.forEach(window => {
    const match = window.gridArea.match(/(\d+)/)
    const windowRow = match ? parseInt(match[1]) : 1
    const rowWindows = rowConfig[windowRow] || []
    
    if (rowWindows.length === 1) {
      // Single window in row - make it full width
      window.gridArea = `${windowRow} / 1 / ${windowRow + 1} / 2`
    }
  })
}

// Get available positions for a window
function getAvailablePositions(windowId: number) {
  const usedPositions = windows.value
    .filter(w => w.id !== windowId)
    .map(w => w.gridArea)
  
  return gridPositions.value.filter(pos => !usedPositions.includes(pos.area))
}

// Add new window
function addWindow(title: string, component: any) {
  if (windows.value.length >= 3) {
    console.log('Maximum 3 windows allowed')
    return
  }
  
  const newId = Math.max(...windows.value.map(w => w.id)) + 1
  const availablePositions = getAvailablePositions(newId)
  
  if (availablePositions.length > 0) {
    windows.value.push({
      id: newId,
      title,
      component,
      gridArea: availablePositions[0].area,
      zIndex: 1
    })
    
    updateGridTemplate()
    updateWindowStyles()
  }
}

// Remove window
function removeWindow(windowId: number) {
  windows.value = windows.value.filter(w => w.id !== windowId)
  updateGridTemplate()
  updateWindowStyles()
}

// Event listeners
onMounted(function() {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  
  // Initialize grid template
  updateGridTemplate()
})

onUnmounted(function() {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})

// Set page title
if (process.client) {
  document.title = 'Dashboard'
}
</script>

<style scoped>
.dashboard-container {
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  background-image: radial-gradient(circle, rgba(85, 85, 85, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  height: 100%;
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
  height: 32px;
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

.window-title {
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
}

.window-controls {
  display: flex;
  align-items: center;
  gap: 8px;
}

.position-select {
  background: #1a1a1a;
  border: 1px solid #404040;
  color: #ffffff;
  padding: 2px 6px;
  border-radius: 3px;
  font-size: 12px;
  cursor: pointer;
}

.position-select:hover {
  border-color: rgba(4, 207, 139, 0.5);
}

.close-btn {
  background: #ff4444;
  border: none;
  color: white;
  width: 18px;
  height: 18px;
  border-radius: 50%;
  cursor: pointer;
  font-size: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-btn:hover {
  background: #ff6666;
}

/* Window Content */
.window-content {
  flex: 1;
  overflow: hidden;
}

/* Add Window Button */
.add-window-btn {
  border: 2px dashed #404040;
  border-radius: 6px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: #666;
  font-size: 14px;
  transition: all 0.2s ease;
}

.add-window-btn:hover {
  border-color: rgba(4, 207, 139, 0.5);
  color: rgba(4, 207, 139, 0.8);
  background: rgba(4, 207, 139, 0.05);
}

/* Window Placeholder */
.window-placeholder {
  padding: 40px;
  color: #888;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.window-placeholder h3 {
  color: #ccc;
  margin-bottom: 10px;
}

.window-placeholder p {
  color: #666;
  font-size: 14px;
}

/* Responsive Grid */
@media (max-width: 1200px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    gap: 10px;
    padding: 10px;
  }
}
</style>