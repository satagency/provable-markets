<template>
  <div class="strategy-builder-page">
    <!-- Strategy Builder Toolbar -->
    <StrategyBuilderToolbar
      :strategy-status="strategyStatus"
      :strategy-name="strategyName"
      @update:strategy-status="strategyStatus = $event"
      @update:strategy-name="strategyName = $event"
      @test-strategy="testStrategy"
      @save-draft="saveDraft"
      @activate-strategy="activateStrategy"
    />

    <!-- Grid Container for Windows -->
    <div class="dashboard-container">
      <div 
        class="grid-container"
        :style="{ gridTemplate: gridTemplate }"
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
            <div v-if="window.title === 'Market Conditions'" class="market-status-badge">
              <div class="market-status-dot" :style="{ backgroundColor: marketStatusColor }"></div>
              <span class="market-status-text">{{ marketStatusText }}</span>
            </div>
          </div>
          <div class="window-header-actions">
            <!-- Action buttons will be moved to topbar/toolbar components -->
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
            <p>Strategy creation interface coming soon</p>
          </div>
        </div>
      </div>

      <!-- Add Window Button -->
      <div 
        v-if="windows.length < 4"
        class="add-window-btn"
        @click="addWindow('New Window', null)"
      >
        <span>+ Add Window</span>
      </div>
    </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import { useHead } from '#app'
import StrategyBuilderToolbar from '~/components/ui/StrategyBuilderToolbar.vue'

// Strategy state
const strategyStatus = ref<'draft' | 'saved' | 'active'>('draft')
const strategyName = ref('')


// Market state
const marketStatus = ref('fair') // 'bull', 'fair', 'bear'
const marketData = ref({
  sp500: 0,
  nasdaq: 0,
  dow: 0,
  vix: 0,
  lastUpdate: null
})

// Grid system state
const gridColumns = ref(2)
const gridRows = ref(2)
const gridGap = ref(8)

// Window configurations
const windows = ref([
  {
    id: 1,
    title: 'Market Conditions',
    component: null,
    gridArea: '1 / 1 / 2 / 2',
    zIndex: 1
  },
  {
    id: 2,
    title: 'Actions',
    component: null,
    gridArea: '1 / 2 / 2 / 3',
    zIndex: 1
  },
  {
    id: 3,
    title: 'Constraints',
    component: null,
    gridArea: '2 / 1 / 3 / 2',
    zIndex: 1
  },
  {
    id: 4,
    title: 'Execution Settings',
    component: null,
    gridArea: '2 / 2 / 3 / 3',
    zIndex: 1
  }
])

// Drag state
const isDragging = ref(false)
const dragWindowId = ref(0)
const dragStart = ref({ x: 0, y: 0 })

// Computed grid template
const gridTemplate = ref('')

// Debug: Log grid template changes
watch(gridTemplate, (newTemplate) => {
  console.log('Grid template changed to:', newTemplate)
})

// Computed properties
const strategyStatusText = computed(() => {
  return strategyStatus.value === 'draft' ? 'Draft' : 'Active'
})

const marketStatusText = computed(() => {
  switch (marketStatus.value) {
    case 'bull': return 'Bull'
    case 'bear': return 'Bear'
    case 'fair': return 'FAIR'
    default: return 'FAIR'
  }
})

const marketStatusColor = computed(() => {
  switch (marketStatus.value) {
    case 'bull': return '#04CF8B' // Green
    case 'bear': return '#ef4444' // Red
    case 'fair': return '#f59e0b' // Yellow
    default: return '#f59e0b'
  }
})

// Calculate market status based on real data
const calculateMarketStatus = computed(() => {
  const { sp500, nasdaq, dow, vix } = marketData.value
  
  // Simple market sentiment calculation
  let bullishSignals = 0
  let bearishSignals = 0
  
  // VIX (Volatility Index) - lower is more bullish
  if (vix < 20) bullishSignals++
  else if (vix > 30) bearishSignals++
  
  // Price momentum (simplified)
  if (sp500 > 0 && nasdaq > 0 && dow > 0) {
    // If all major indices are positive, bullish
    if (sp500 > 0 && nasdaq > 0 && dow > 0) bullishSignals++
    // If any are significantly negative, bearish
    if (sp500 < -1 || nasdaq < -1 || dow < -1) bearishSignals++
  }
  
  // Determine status
  if (bullishSignals > bearishSignals) return 'bull'
  if (bearishSignals > bullishSignals) return 'bear'
  return 'fair'
})

// Start drag
function startDrag(windowId: number, e: MouseEvent) {
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


// Calculate grid position
function calculateGridPosition(x: number, y: number, containerRect: DOMRect) {
  const containerWidth = containerRect.width
  const containerHeight = containerRect.height
  const rowHeight = containerHeight / 2
  let targetRow = 1

  if (y < rowHeight) {
    targetRow = 1
  } else {
    targetRow = 2
  }

  const colWidth = containerWidth / 2
  let targetCol = 1

  if (x < colWidth) {
    targetCol = 1
  } else {
    targetCol = 2
  }

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


// Update grid template - Strategy Builder always uses 2x2 quadrant layout
function updateGridTemplate() {
  const windowCount = windows.value.length
  
  // Strategy Builder: Always 2x2 quadrant layout for 4 mandatory windows
  if (windowCount >= 1) {
    gridTemplate.value = '1fr 1fr / 1fr 1fr'
    gridColumns.value = 2
    gridRows.value = 2
    
    // Position windows in quadrant layout
    windows.value.forEach((window, index) => {
      if (index === 0) window.gridArea = '1 / 1 / 2 / 2' // Top-left
      else if (index === 1) window.gridArea = '1 / 2 / 2 / 3' // Top-right
      else if (index === 2) window.gridArea = '2 / 1 / 3 / 2' // Bottom-left
      else if (index === 3) window.gridArea = '2 / 2 / 3 / 3' // Bottom-right
    })
  }
  
  console.log('Grid template updated:', {
    template: gridTemplate.value,
    columns: gridColumns.value,
    rows: gridRows.value,
    windowCount: windowCount
  })
}

// Move window
function moveWindow(windowId: number, newPosition: string) {
  const window = windows.value.find(w => w.id === windowId)
  if (window && window.gridArea !== newPosition) {
    console.log(`Moving window ${windowId} from ${window.gridArea} to ${newPosition}`)
    window.gridArea = newPosition
    updateGridTemplate()
  }
}

// Add new window
function addWindow(title: string, component: any) {
  if (windows.value.length >= 4) {
    console.log('Maximum 4 windows allowed')
    return
  }

  const newId = Math.max(...windows.value.map(w => w.id)) + 1
  windows.value.push({
    id: newId,
    title,
    component,
    gridArea: '1 / 1 / 2 / 2',
    zIndex: 1
  })

  updateGridTemplate()
}

// Remove window
function removeWindow(windowId: number) {
  windows.value = windows.value.filter(w => w.id !== windowId)
  updateGridTemplate()
}

// Strategy functions
function createStrategy() {
  console.log('Create Strategy clicked')
}

function testStrategy() {
  console.log('Test Strategy clicked')
}

function saveDraft() {
  console.log('Save Draft clicked')
}

function activateStrategy() {
  console.log('Activate Strategy clicked')
}


// Fetch real market data
async function fetchMarketData() {
  try {
    // Using Alpha Vantage API (free tier) for real market data
    const apiKey = 'demo' // Replace with actual API key
    const baseUrl = 'https://www.alphavantage.co/query'
    
    // Fetch S&P 500 data
    const sp500Response = await fetch(`${baseUrl}?function=GLOBAL_QUOTE&symbol=SPY&apikey=${apiKey}`)
    const sp500Data = await sp500Response.json()
    
    // Fetch NASDAQ data
    const nasdaqResponse = await fetch(`${baseUrl}?function=GLOBAL_QUOTE&symbol=QQQ&apikey=${apiKey}`)
    const nasdaqData = await nasdaqResponse.json()
    
    // Fetch VIX data
    const vixResponse = await fetch(`${baseUrl}?function=GLOBAL_QUOTE&symbol=VIX&apikey=${apiKey}`)
    const vixData = await vixResponse.json()
    
    // Process the data
    if (sp500Data['Global Quote'] && nasdaqData['Global Quote'] && vixData['Global Quote']) {
      const sp500Change = parseFloat(sp500Data['Global Quote']['10. change percent'].replace('%', ''))
      const nasdaqChange = parseFloat(nasdaqData['Global Quote']['10. change percent'].replace('%', ''))
      const vixValue = parseFloat(vixData['Global Quote']['05. price'])
      
      marketData.value = {
        sp500: sp500Change,
        nasdaq: nasdaqChange,
        dow: sp500Change, // Using S&P as proxy for Dow
        vix: vixValue,
        lastUpdate: new Date()
      }
      
      // Update market status based on real data
      marketStatus.value = calculateMarketStatus.value
      
      console.log('Market data updated:', marketData.value)
    }
  } catch (error) {
    console.error('Error fetching market data:', error)
    // Fallback to mock data for development
    marketData.value = {
      sp500: Math.random() * 4 - 2, // Random between -2% and +2%
      nasdaq: Math.random() * 4 - 2,
      dow: Math.random() * 4 - 2,
      vix: 15 + Math.random() * 20, // Random between 15-35
      lastUpdate: new Date()
    }
    marketStatus.value = calculateMarketStatus.value
  }
}

// Update market data every 5 minutes
let marketDataInterval: NodeJS.Timeout | null = null

// Event listeners
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
  updateGridTemplate()
  
  // Fetch initial market data
  fetchMarketData()
  
  // Set up interval to update market data every 5 minutes
  marketDataInterval = setInterval(fetchMarketData, 5 * 60 * 1000)
})

onUnmounted(() => {
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
  
  // Clear market data interval
  if (marketDataInterval) {
    clearInterval(marketDataInterval)
  }
})

// Set page title
useHead({
  title: 'Create Strategy - Strategy Builder'
})
</script>

<style scoped>
.strategy-builder-page {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background: #121212;
}

.dashboard-container {
  flex: 1;
  padding: 2px;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  background-image: radial-gradient(circle, rgba(85, 85, 85, 0.3) 1px, transparent 1px);
  background-size: 20px 20px;
}

.grid-container {
  display: grid;
  gap: 8px;
  flex: 1;
  box-sizing: border-box;
}

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


.market-status-badge {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: 12px;
}

.market-status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  animation: pulse 2s infinite;
}

.market-status-text {
  color: #ffffff;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto Mono', monospace;
}

@keyframes pulse {
  0% {
    opacity: 1;
  }
  50% {
    opacity: 0.5;
  }
  100% {
    opacity: 1;
  }
}

.window-header-actions {
  display: flex;
  align-items: center;
  gap: 6px;
  margin-left: auto;
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

/* Action button styles removed - will be moved to topbar/toolbar components */

.window-content {
  flex: 1;
  overflow: auto;
}

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
