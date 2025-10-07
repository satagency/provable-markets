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
            <div 
              v-if="window.title === 'Agreements'"
              class="show-archived-toggle"
            >
              <span class="toggle-label">Show Archived</span>
              <div 
                class="switch"
                :class="{ active: showArchived }"
                @click="toggleShowArchived"
              >
                <div class="handle"></div>
              </div>
            </div>
          </div>
          <div class="window-header-actions">
            <button 
              v-if="window.title === 'Agreements'"
              class="create-agreement-btn"
              @click="createAgreement"
            >
              <span>Create Agreement</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
            <button 
              v-if="window.title === 'Agreements'"
              class="batch-agreements-btn"
              @click="batchAgreements"
            >
              <span>Batch Agreements</span>
            </button>
            <button 
              v-if="window.title === 'Agreements' && windows.length === 1"
              class="expand-btn"
              @click="toggleWindowExpansion(window.id)"
              :class="{ expanded: window.expanded }"
            >
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"></path>
              </svg>
            </button>
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
import AgreementsWindow from '~/components/windows/AgreementsWindow.vue'

// Grid system state
const gridColumns = ref(2)
const gridRows = ref(1)
const gridGap = ref(8)

// Window configurations
const windows = ref([
  {
    id: 1,
    title: 'Agreements',
    component: AgreementsWindow,
    gridArea: '1 / 1 / 2 / 2', // row-start / col-start / row-end / col-end
    zIndex: 1,
    expanded: false
  },
  {
    id: 2,
    title: 'Window 2',
    component: null,
    gridArea: '2 / 1 / 3 / 2',
    zIndex: 1,
    expanded: false
  }
])

// Show archived toggle state
const showArchived = ref(false)

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
  const activeWindows = windows.value.filter(w => w.component !== null)
  const hasExpandedWindow = activeWindows.some(w => w.expanded)
  
  if (windowCount === 1 && hasExpandedWindow) {
    // Single window expanded - take full height
    gridTemplate.value = '1fr'
    gridColumns.value = 1
    gridRows.value = 1
    return
  }
  
  if (windowCount === 1) {
    // Single window normal - take half height
    gridTemplate.value = '1fr 1fr'
    gridColumns.value = 1
    gridRows.value = 2
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
      zIndex: 1,
      expanded: false
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

// Create agreement function
function createAgreement() {
  console.log('Create Agreement clicked')
  // Add your create agreement logic here
}

// Batch agreements function
function batchAgreements() {
  console.log('Batch Agreements clicked')
  // Add your batch agreements logic here
}

// Toggle show archived function
function toggleShowArchived() {
  showArchived.value = !showArchived.value
  console.log('Show Archived:', showArchived.value)
  // Add your logic to filter/show archived agreements here
}

// Toggle window expansion function
function toggleWindowExpansion(windowId: number) {
  const window = windows.value.find(w => w.id === windowId)
  if (window) {
    window.expanded = !window.expanded
    console.log(`Window ${windowId} expanded:`, window.expanded)
    
    // Update grid template when expansion changes
    updateGridTemplate()
  }
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
</script>

<style scoped>
.dashboard-container {
  padding: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(circle, rgba(85, 85, 85, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
}

/* Grid Container */
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 8px;
  height: calc(100vh - 50px - 24px); /* Full viewport minus header and padding */
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

.window-header-actions {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: auto;
}

.window-controls {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-left: 8px;
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

.create-agreement-btn {
  background-color: #0e8212;
  color: white;
  border: none;
  border-radius: 6px;
  height: 28px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Geist', sans-serif;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.create-agreement-btn:hover {
  background-color: #0a6b0e;
}

.batch-agreements-btn {
  background-color: #404040;
  color: white;
  border: none;
  border-radius: 6px;
  height: 28px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Geist', sans-serif;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.batch-agreements-btn:hover {
  background-color: #555555;
}

.expand-btn {
  background-color: #404040;
  color: white;
  border: none;
  border-radius: 6px;
  height: 28px;
  width: 28px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.2s ease;
}

.expand-btn:hover {
  background-color: #555555;
  color: #04CF8B;
}

.expand-btn.expanded {
  background-color: #04CF8B;
  color: white;
}

.expand-btn.expanded:hover {
  background-color: #0a6b0e;
}

.show-archived-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
}

.toggle-label {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #8e8e8e;
}

.switch {
  width: 26px;
  height: 16px;
  background-color: #e6e0e9;
  border: 0.938px solid #79747e;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.switch.active {
  background-color: #00ad79;
}

.handle {
  width: 12px;
  height: 12px;
  background-color: #79747e;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  transition: all 0.2s ease;
}

.switch.active .handle {
  background-color: white;
  left: 12px;
}

/* Window Content */
.window-content {
  flex: 1;
  overflow: auto;
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
