<template>
  <div class="dashboard-container">

    <!-- Grid Container for Windows -->
    <div 
      class="grid-container"
      :style="{ gridTemplateRows }"
    >
      <!-- Orders Window -->
      <div 
        class="grid-window"
        :style="{ gridArea: '1 / 1 / 2 / 2', zIndex: 1 }"
        @mousedown="startDrag(1, $event)"
      >
        <!-- Window Header with Controls -->
        <div class="window-header">
          <div class="window-title-section">
            <span class="window-title">Orders</span>
            <div class="show-archived-toggle">
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
              class="create-order-btn"
              @click="createOrder"
            >
              <span>Create Order</span>
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
              </svg>
            </button>
            <button 
              class="batch-orders-btn"
              @click="batchOrders"
            >
              <span>Batch Orders</span>
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
          <OrdersWindow />
        </div>
      </div>
      
      <!-- Horizontal Splitter -->
      <div 
        class="horizontal-splitter"
        :class="{ dragging: isSplitterDragging }"
        @mousedown="startSplitterDrag"
      >
        <div class="splitter-handle"></div>
      </div>
      
      <!-- Order Details Window -->
      <div 
        class="grid-window"
        :style="{ gridArea: '3 / 1 / 4 / 2', zIndex: 1 }"
        @mousedown="startDrag(2, $event)"
      >
        <!-- Window Header with Controls -->
        <div class="window-header">
          <div class="window-title-section">
            <span class="window-title">Order Details</span>
          </div>
          <div class="window-controls">
            <button class="close-btn" @click="closeWindow(2)">
              <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
        
        <!-- Window Content -->
        <div class="window-content">
          <div class="order-details-content">
            <!-- Tab Menu -->
            <div class="tab-menu">
              <div 
                v-for="tab in orderDetailTabs"
                :key="tab.id"
                class="tab-item"
                :class="{ active: activeOrderDetailTab === tab.id }"
                @click="activeOrderDetailTab = tab.id"
              >
                {{ tab.label }}
              </div>
            </div>
            
            <!-- Tab Content -->
            <div class="tab-content">
              <div v-if="activeOrderDetailTab === 'history'" class="tab-panel">
                <!-- History Table - Using exact Orders table design -->
                <div class="table-container">
                  <!-- Table Header -->
                  <div class="table-header">
                    <div class="header-cell when-col">
                      <span class="header-text">When</span>
                    </div>
                    <div class="header-cell event-col">
                      <span class="header-text">Event</span>
                    </div>
                    <div class="header-cell order-qty-col">
                      <span class="header-text">Order Qty</span>
                    </div>
                    <div class="header-cell open-qty-col">
                      <span class="header-text">Open Qty</span>
                    </div>
                    <div class="header-cell firm-qty-col">
                      <span class="header-text">Firm Qty</span>
                    </div>
                    <div class="header-cell exec-qty-col">
                      <span class="header-text">Exec Qty</span>
                    </div>
                    <div class="header-cell avg-exec-fee-col">
                      <span class="header-text">Avg Exec Fee</span>
                      <span class="header-subtext">%</span>
                    </div>
                    <div class="header-cell avg-exec-rebate-col">
                      <span class="header-text">Avg Exec Rebate</span>
                      <span class="header-subtext">%</span>
                    </div>
                    <div class="header-cell agreements-col">
                      <span class="header-text">Agreements</span>
                    </div>
                    <div class="header-cell initiator-col">
                      <span class="header-text">Initiator</span>
                    </div>
                  </div>
                  
                  <!-- Table Rows Container with Scroll -->
                  <div class="table-rows-container">
                    <!-- Row Wrapper -->
                    <div class="row-wrapper">
                      <!-- Dynamic Table Rows -->
                      <div 
                        v-for="historyItem in orderHistory" 
                        :key="historyItem.id"
                        class="table-row"
                      >
                        <div class="row-cell when-col">
                          <div class="date-time">
                            <span class="date">{{ historyItem.date }}</span>
                            <span class="time">{{ historyItem.time }}</span>
                          </div>
                        </div>
                        <div class="row-cell event-col">
                          <span>{{ historyItem.event }}</span>
                        </div>
                        <div class="row-cell order-qty-col">
                          <span class="quantity">{{ historyItem.orderQty }}</span>
                        </div>
                        <div class="row-cell open-qty-col">
                          <span class="quantity">{{ historyItem.openQty }}</span>
                        </div>
                        <div class="row-cell firm-qty-col">
                          <span class="quantity">{{ historyItem.firmQty }}</span>
                        </div>
                        <div class="row-cell exec-qty-col">
                          <span class="quantity">{{ historyItem.execQty }}</span>
                        </div>
                        <div class="row-cell avg-exec-fee-col">
                          <span class="percentage">{{ historyItem.avgExecFee }}%</span>
                        </div>
                        <div class="row-cell avg-exec-rebate-col">
                          <span class="percentage">{{ historyItem.avgExecRebate }}%</span>
                        </div>
                        <div class="row-cell agreements-col">
                          <span class="quantity">{{ historyItem.agreements }}</span>
                        </div>
                        <div class="row-cell initiator-col">
                          <span class="email">{{ historyItem.initiator }}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div v-else-if="activeOrderDetailTab === 'child-orders'" class="tab-panel">
                <h4>Child Orders</h4>
                <p>Child orders content will go here</p>
              </div>
              <div v-else-if="activeOrderDetailTab === 'details'" class="tab-panel">
                <h4>Order Details</h4>
                <p>Detailed order information will go here</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import OrdersWindow from '~/components/windows/OrdersWindow.vue'

// Grid system state
const gridColumns = ref(1)
const gridRows = ref(2)
const gridGap = ref(8)

// Splitter state
const splitterPosition = ref(50) // Percentage from top
const isSplitterDragging = ref(false)

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
    title: 'Order Details',
    component: null,
    gridArea: '2 / 1 / 3 / 2',
    zIndex: 1
  }
])

// Show archived toggle state
const showArchived = ref(false)

// Splitter drag functions
function startSplitterDrag(e: MouseEvent) {
  e.preventDefault()
  isSplitterDragging.value = true
  
  const handleMouseMove = (e: MouseEvent) => {
    if (!isSplitterDragging.value) return
    
    const containerRect = document.querySelector('.grid-container')?.getBoundingClientRect()
    if (containerRect) {
      const relativeY = e.clientY - containerRect.top
      const percentage = (relativeY / containerRect.height) * 100
      
      // Constrain between 20% and 80% to prevent overflow
      const constrainedPercentage = Math.max(20, Math.min(80, percentage))
      splitterPosition.value = constrainedPercentage
    }
  }
  
  const handleMouseUp = () => {
    isSplitterDragging.value = false
    document.removeEventListener('mousemove', handleMouseMove)
    document.removeEventListener('mouseup', handleMouseUp)
  }
  
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
}

// Computed grid template rows
const gridTemplateRows = computed(() => {
  const topSize = splitterPosition.value
  const bottomSize = 100 - splitterPosition.value
  return `${topSize}fr 8px ${bottomSize}fr`
})

// Order Details tab state
const activeOrderDetailTab = ref('history')
const orderDetailTabs = ref([
  { id: 'history', label: 'History' },
  { id: 'child-orders', label: 'Child Orders' },
  { id: 'details', label: 'Details' }
])

// Order History data
const orderHistory = ref([])

// Generate sample order history data
const generateOrderHistory = () => {
  const events = ['Created', 'Modified', 'Partially Filled', 'Filled', 'Cancelled', 'Rejected', 'Updated']
  const initiators = ['trader1@provable.com', 'trader2@provable.com', 'trader3@provable.com', 'SYSTEM']
  
  const history = []
  // Only generate 1 row
  const event = events[Math.floor(Math.random() * events.length)]
  const initiator = initiators[Math.floor(Math.random() * initiators.length)]
  
  history.push({
    id: 1,
    date: '10/12/23',
    time: '8:30A',
    event,
    orderQty: Math.floor(Math.random() * 500) + 50,
    openQty: Math.floor(Math.random() * 400) + 30,
    firmQty: Math.floor(Math.random() * 300) + 20,
    execQty: Math.floor(Math.random() * 200) + 10,
    avgExecFee: (Math.random() * 2).toFixed(2),
    avgExecRebate: (Math.random() * 1.5).toFixed(2),
    agreements: Math.floor(Math.random() * 5) + 1,
    initiator
  })
  
  return history
}

// Initialize order history
orderHistory.value = generateOrderHistory()

// Available grid positions - quadrant-based layout
const gridPositions = ref([
  // Quadrant positions
  { id: 1, area: '1 / 1 / 2 / 2', name: 'Top Left' },
  { id: 2, area: '1 / 2 / 2 / 3', name: 'Top Right' },
  { id: 3, area: '2 / 1 / 3 / 2', name: 'Bottom Left' },
  { id: 4, area: '2 / 2 / 3 / 3', name: 'Bottom Right' }
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

// Update grid template - responsive horizontal-first configuration
function updateGridTemplate() {
  const windowCount = windows.value.length
  
  if (windowCount === 1) {
    gridTemplate.value = '1fr / 1fr'
    gridColumns.value = 1
    gridRows.value = 1
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
    return
  } else if (windowCount === 2) {
    // Two windows: stacked vertically, both full width
    gridTemplate.value = '1fr 1fr / 1fr'
    gridColumns.value = 1
    gridRows.value = 2
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
    windows.value[1].gridArea = '2 / 1 / 3 / 2'
  } else if (windowCount === 3) {
    // Three windows: all in top row horizontally
    gridTemplate.value = '1fr / 1fr 1fr 1fr'
    gridColumns.value = 3
    gridRows.value = 1
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
    windows.value[1].gridArea = '1 / 2 / 2 / 3'
    windows.value[2].gridArea = '1 / 3 / 2 / 4'
  } else if (windowCount === 4) {
    // Four windows: 2x2 grid
    gridTemplate.value = '1fr 1fr / 1fr 1fr'
    gridColumns.value = 2
    gridRows.value = 2
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
    windows.value[1].gridArea = '1 / 2 / 2 / 3'
    windows.value[2].gridArea = '2 / 1 / 3 / 2'
    windows.value[3].gridArea = '2 / 2 / 3 / 3'
  } else if (windowCount === 5) {
    // Five windows: 3 in top row, 2 in bottom row
    gridTemplate.value = '1fr 1fr / 1fr 1fr 1fr'
    gridColumns.value = 3
    gridRows.value = 2
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
    windows.value[1].gridArea = '1 / 2 / 2 / 3'
    windows.value[2].gridArea = '1 / 3 / 2 / 4'
    windows.value[3].gridArea = '2 / 1 / 3 / 2'
    windows.value[4].gridArea = '2 / 2 / 3 / 3'
  } else if (windowCount === 6) {
    // Six windows: 3x2 grid
    gridTemplate.value = '1fr 1fr / 1fr 1fr 1fr'
    gridColumns.value = 3
    gridRows.value = 2
    windows.value[0].gridArea = '1 / 1 / 2 / 2'
    windows.value[1].gridArea = '1 / 2 / 2 / 3'
    windows.value[2].gridArea = '1 / 3 / 2 / 4'
    windows.value[3].gridArea = '2 / 1 / 3 / 2'
    windows.value[4].gridArea = '2 / 2 / 3 / 3'
    windows.value[5].gridArea = '2 / 3 / 3 / 4'
  } else {
    // More than 6 windows: flexible layout
    const cols = Math.ceil(Math.sqrt(windowCount))
    const rows = Math.ceil(windowCount / cols)
    const rowTemplate = Array(rows).fill('1fr').join(' ')
    const colTemplate = Array(cols).fill('1fr').join(' ')
    gridTemplate.value = `${rowTemplate} / ${colTemplate}`
    gridColumns.value = cols
    gridRows.value = rows
    
    // Position windows in grid
    windows.value.forEach((window, index) => {
      const row = Math.floor(index / cols) + 1
      const col = (index % cols) + 1
      window.gridArea = `${row} / ${col} / ${row + 1} / ${col + 1}`
    })
  }
  
  console.log('Grid template updated:', {
    template: gridTemplate.value,
    columns: gridColumns.value,
    rows: gridRows.value,
    windowCount: windowCount
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
  if (windows.value.length >= 6) {
    console.log('Maximum 6 windows allowed')
    return
  }
  
  const newId = Math.max(...windows.value.map(w => w.id)) + 1
  
  // Add the new window
  windows.value.push({
    id: newId,
    title,
    component,
    gridArea: '1 / 1 / 2 / 2', // Temporary position
    zIndex: 1
  })
  
  // Update grid template which will automatically position all windows
  updateGridTemplate()
  updateWindowStyles()
}

// Remove window
function removeWindow(windowId: number) {
  windows.value = windows.value.filter(w => w.id !== windowId)
  updateGridTemplate()
  updateWindowStyles()
}

// Create order function
function createOrder() {
  console.log('Create Order clicked')
  // Add your create order logic here
}

// Batch orders function
function batchOrders() {
  console.log('Batch Orders clicked')
  // Add your batch orders logic here
}


// Toggle show archived function
function toggleShowArchived() {
  showArchived.value = !showArchived.value
  console.log('Show Archived:', showArchived.value)
  // Add your logic to filter/show archived orders here
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
  document.title = 'Orders'
}

useHead({
  title: 'Orders'
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

.create-order-btn {
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

.create-order-btn:hover {
  background-color: #0a6b0e;
}

.batch-orders-btn {
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

.batch-orders-btn:hover {
  background-color: #555555;
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
  overflow: hidden;
}

/* Horizontal Splitter */
.horizontal-splitter {
  background: rgba(255, 255, 255, 0.05);
  cursor: row-resize;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s ease;
  position: relative;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
}

.horizontal-splitter:hover {
  background: rgba(255, 255, 255, 0.1);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.horizontal-splitter.dragging {
  background: rgba(4, 207, 139, 0.2);
  border-top: 1px solid rgba(4, 207, 139, 0.5);
  border-bottom: 1px solid rgba(4, 207, 139, 0.5);
}

.splitter-handle {
  width: 40px;
  height: 4px;
  background: rgba(255, 255, 255, 0.3);
  border-radius: 2px;
  transition: all 0.2s ease;
}

.horizontal-splitter:hover .splitter-handle {
  background: rgba(255, 255, 255, 0.5);
  width: 60px;
}

.horizontal-splitter.dragging .splitter-handle {
  background: rgba(4, 207, 139, 0.8);
  width: 80px;
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

/* Order Details Tab Menu */
.order-details-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tab-menu {
  display: flex;
  border-bottom: 1px solid #404040;
  background: #1a1a1a;
}

.tab-item {
  padding: 12px 16px;
  color: #888;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-right: 1px solid #404040;
  transition: all 0.2s ease;
  background: transparent;
}

.tab-item:last-child {
  border-right: none;
}

.tab-item:hover {
  color: #ccc;
  background: #2a2a2a;
}

.tab-item.active {
  color: #ffffff;
  background: #2a2a2a;
}

.tab-content {
  flex: 1;
  padding: 0;
  overflow-y: auto;
}

.tab-panel h4 {
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
}

.tab-panel p {
  color: #888;
  font-size: 14px;
  line-height: 1.5;
}

/* History Table Styles - Using exact Orders table design */
.table-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
}

/* Table Rows Container with Scroll */
.table-rows-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* Row Wrapper */
.row-wrapper {
  width: 100%;
  min-width: max-content;
  display: flex;
  flex-direction: column;
}

/* Table Header */
.table-header {
  display: flex;
  background-color: #161818;
  padding: 0;
  gap: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  min-width: max-content;
  flex-shrink: 0;
}

.header-cell {
  background-color: rgba(224, 224, 224, 0);
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 40px;
  padding: 0 12px;
}

.header-text {
  font-weight: 400;
}

.header-subtext {
  color: rgba(255, 255, 255, 0.4);
  font-size: 10px;
  margin-left: 2px;
}

/* Table Row */
.table-row {
  display: flex;
  padding: 0;
  gap: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background-color 0.15s ease;
  width: 100%;
  min-width: max-content;
}

.table-row:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.row-cell {
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #ffffff;
  white-space: nowrap;
  height: 48px;
  padding: 0 12px;
}

/* Column Widths */
.when-col { width: 120px; min-width: 120px; }
.event-col { width: 120px; min-width: 120px; }
.order-qty-col { width: 80px; min-width: 80px; }
.open-qty-col { width: 80px; min-width: 80px; }
.firm-qty-col { width: 80px; min-width: 80px; }
.exec-qty-col { width: 80px; min-width: 80px; }
.avg-exec-fee-col { width: 100px; min-width: 100px; }
.avg-exec-rebate-col { width: 120px; min-width: 120px; }
.agreements-col { width: 80px; min-width: 80px; }
.initiator-col { width: 180px; min-width: 180px; }

/* Data Element Styling - EXACT copy from OrdersWindow.vue */

.date-time {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.date {
  color: #ffffff;
  font-weight: 500;
}

.time {
  color: rgba(255, 255, 255, 0.6);
}

.quantity {
  color: #ffffff;
  font-weight: 500;
  text-align: right;
  width: 100%;
}

.percentage {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 0.12px;
}

.email {
  color: #ffffff;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
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