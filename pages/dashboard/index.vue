<template>
  <div class="dashboard-container">
    <!-- Debug info -->
    <div style="position: fixed; top: 10px; right: 10px; background: red; color: white; padding: 10px; z-index: 10000;">
      Window: {{ windowX }}x{{ windowY }} {{ windowWidth }}x{{ windowHeight }}
    </div>
    
    <!-- Simple draggable window -->
    <div 
      class="draggable-window"
      :style="windowStyle"
      @mousedown="startDrag"
    >
      <!-- Resize handles -->
      <div class="resize-handle resize-n" @mousedown="startResize('n')"></div>
      <div class="resize-handle resize-s" @mousedown="startResize('s')"></div>
      <div class="resize-handle resize-w" @mousedown="startResize('w')"></div>
      <div class="resize-handle resize-e" @mousedown="startResize('e')"></div>
      <div class="resize-handle resize-nw" @mousedown="startResize('nw')"></div>
      <div class="resize-handle resize-ne" @mousedown="startResize('ne')"></div>
      <div class="resize-handle resize-sw" @mousedown="startResize('sw')"></div>
      <div class="resize-handle resize-se" @mousedown="startResize('se')"></div>
      
      <!-- Window content -->
      <OrdersWindow />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import OrdersWindow from '~/components/windows/OrdersWindow.vue'

// Simple window state
const windowX = ref(20)
const windowY = ref(20)
const windowWidth = ref(1200)
const windowHeight = ref(600)

// Drag state
const isDragging = ref(false)
const isResizing = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const resizeStart = ref({ x: 0, y: 0, width: 0, height: 0 })
const resizeDirection = ref('')

// Window style
const windowStyle = ref({
  left: `${windowX.value}px`,
  top: `${windowY.value}px`,
  width: `${windowWidth.value}px`,
  height: `${windowHeight.value}px`
})

// Update window style
const updateWindowStyle = () => {
  windowStyle.value = {
    left: `${windowX.value}px`,
    top: `${windowY.value}px`,
    width: `${windowWidth.value}px`,
    height: `${windowHeight.value}px`
  }
}

// Start drag
const startDrag = (e: MouseEvent) => {
  console.log('Start drag')
  e.preventDefault()
  isDragging.value = true
  dragStart.value = {
    x: e.clientX - windowX.value,
    y: e.clientY - windowY.value
  }
}

// Start resize
const startResize = (direction: string) => (e: MouseEvent) => {
  console.log('Start resize:', direction)
  e.preventDefault()
  e.stopPropagation()
  isResizing.value = true
  resizeDirection.value = direction
  resizeStart.value = {
    x: e.clientX,
    y: e.clientY,
    width: windowWidth.value,
    height: windowHeight.value
  }
  
  // Prevent drag from starting
  isDragging.value = false
}

// Snap to grid function
const snapToGrid = (value: number, gridSize: number = 20) => {
  return Math.round(value / gridSize) * gridSize
}

// Mouse move handler
const handleMouseMove = (e: MouseEvent) => {
  if (isDragging.value) {
    const newX = e.clientX - dragStart.value.x
    const newY = e.clientY - dragStart.value.y
    
    // Snap to grid
    windowX.value = snapToGrid(newX)
    windowY.value = snapToGrid(newY)
    updateWindowStyle()
  } else if (isResizing.value) {
    const deltaX = e.clientX - resizeStart.value.x
    const deltaY = e.clientY - resizeStart.value.y
    
    if (resizeDirection.value.includes('e')) {
      const newWidth = Math.max(400, resizeStart.value.width + deltaX)
      windowWidth.value = snapToGrid(newWidth)
    }
    if (resizeDirection.value.includes('w')) {
      const newWidth = Math.max(400, resizeStart.value.width - deltaX)
      const snappedWidth = snapToGrid(newWidth)
      windowX.value = snapToGrid(windowX.value + (windowWidth.value - snappedWidth))
      windowWidth.value = snappedWidth
    }
    if (resizeDirection.value.includes('s')) {
      const newHeight = Math.max(300, resizeStart.value.height + deltaY)
      windowHeight.value = snapToGrid(newHeight)
    }
    if (resizeDirection.value.includes('n')) {
      const newHeight = Math.max(300, resizeStart.value.height - deltaY)
      const snappedHeight = snapToGrid(newHeight)
      windowY.value = snapToGrid(windowY.value + (windowHeight.value - snappedHeight))
      windowHeight.value = snappedHeight
    }
    
    updateWindowStyle()
  }
}

// Mouse up handler
const handleMouseUp = () => {
  isDragging.value = false
  isResizing.value = false
}

// Event listeners
onMounted(() => {
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
})

// Set page title
if (process.client) {
  document.title = 'Dashboard'
}
</script>

<style scoped>
.dashboard-container {
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}

.draggable-window {
  position: absolute;
  border: 1px solid #404040;
  border-radius: 6px;
  overflow: hidden;
  cursor: move;
  z-index: 10;
}

.draggable-window:hover {
  border-color: rgba(4, 207, 139, 0.5);
}

/* Resize handles */
.resize-handle {
  position: absolute;
  background: transparent;
  z-index: 20;
  opacity: 0;
  transition: opacity 0.2s ease, background-color 0.2s ease;
}

.draggable-window:hover .resize-handle {
  opacity: 1;
}

.resize-handle:hover {
  background-color: rgba(4, 207, 139, 0.5);
}

.resize-handle:active {
  background-color: rgba(4, 207, 139, 0.8);
}

.resize-n {
  top: 0;
  left: 0;
  right: 0;
  height: 10px;
  cursor: n-resize;
}

.resize-s {
  bottom: 0;
  left: 0;
  right: 0;
  height: 10px;
  cursor: s-resize;
}

.resize-w {
  top: 0;
  left: 0;
  bottom: 0;
  width: 10px;
  cursor: w-resize;
}

.resize-e {
  top: 0;
  right: 0;
  bottom: 0;
  width: 10px;
  cursor: e-resize;
}

.resize-nw {
  top: 0;
  left: 0;
  width: 15px;
  height: 15px;
  cursor: nw-resize;
}

.resize-ne {
  top: 0;
  right: 0;
  width: 15px;
  height: 15px;
  cursor: ne-resize;
}

.resize-sw {
  bottom: 0;
  left: 0;
  width: 15px;
  height: 15px;
  cursor: sw-resize;
}

.resize-se {
  bottom: 0;
  right: 0;
  width: 15px;
  height: 15px;
  cursor: se-resize;
}
</style>