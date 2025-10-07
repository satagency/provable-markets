<template>
  <div class="grid-container" ref="containerRef">
    <!-- Grid background (optional, for debugging) -->
    <div 
      v-if="showGrid" 
      class="grid-background"
      :style="gridBackgroundStyle"
    ></div>
    
    <!-- Windows -->
    <Window
      v-for="window in windows"
      :key="window.id"
      :id="window.id"
      :x="window.x"
      :y="window.y"
      :width="window.width"
      :height="window.height"
      :grid-size="gridSize"
      :min-width="window.minWidth || 200"
      :min-height="window.minHeight || 150"
      :max-width="window.maxWidth"
      :max-height="window.maxHeight"
      @move="handleWindowMove"
      @resize="handleWindowResize"
      @drag-start="handleDragStart"
      @drag-end="handleDragEnd"
    >
      <component :is="window.component" v-bind="window.props || {}" />
    </Window>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, nextTick, watch } from 'vue'
import Window from './Window.vue'

interface WindowConfig {
  id: string
  x: number
  y: number
  width: number
  height: number
  component: any
  props?: Record<string, any>
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  zIndex?: number
}

interface Props {
  windows: WindowConfig[]
  gridSize?: number
  showGrid?: boolean
  autoArrange?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  gridSize: 20,
  showGrid: false,
  autoArrange: true
})

const emit = defineEmits<{
  windowMove: [id: string, x: number, y: number]
  windowResize: [id: string, x: number, y: number, width: number, height: number]
  windowReorder: [windows: WindowConfig[]]
}>()

const containerRef = ref<HTMLElement>()
const isDragging = ref(false)
const draggedWindowId = ref<string>('')

// Debug: Watch windows prop
watch(() => props.windows, (newWindows) => {
  console.log('GridContainer received windows:', newWindows.length, newWindows)
}, { immediate: true })

// Grid background style
const gridBackgroundStyle = computed(() => ({
  backgroundImage: 'radial-gradient(circle, rgba(85, 85, 85, 0.3) 1px, transparent 1px)',
  backgroundSize: `${props.gridSize}px ${props.gridSize}px`
}))

// Collision detection
const checkCollision = (window1: WindowConfig, window2: WindowConfig): boolean => {
  return !(
    window1.x + window1.width <= window2.x ||
    window2.x + window2.width <= window1.x ||
    window1.y + window1.height <= window2.y ||
    window2.y + window2.height <= window1.y
  )
}

// Find available position
const findAvailablePosition = (window: WindowConfig, otherWindows: WindowConfig[]): { x: number, y: number } => {
  const container = containerRef.value
  if (!container) return { x: window.x, y: window.y }
  
  const containerWidth = container.clientWidth
  const containerHeight = container.clientHeight
  
  // Try current position first
  const testWindow = { ...window }
  if (!otherWindows.some(w => w.id !== window.id && checkCollision(testWindow, w))) {
    return { x: window.x, y: window.y }
  }
  
  // Try positions in a spiral pattern
  for (let radius = 1; radius < 20; radius++) {
    for (let angle = 0; angle < 360; angle += 45) {
      const x = window.x + Math.cos(angle * Math.PI / 180) * radius * props.gridSize
      const y = window.y + Math.sin(angle * Math.PI / 180) * radius * props.gridSize
      
      // Ensure window stays within container bounds
      if (x >= 0 && y >= 0 && x + window.width <= containerWidth && y + window.height <= containerHeight) {
        testWindow.x = x
        testWindow.y = y
        
        if (!otherWindows.some(w => w.id !== window.id && checkCollision(testWindow, w))) {
          return { x, y }
        }
      }
    }
  }
  
  // Fallback to original position
  return { x: window.x, y: window.y }
}

// Auto-arrange windows
const autoArrangeWindows = () => {
  if (!props.autoArrange) return
  
  const updatedWindows = [...props.windows]
  let hasChanges = false
  
  for (let i = 0; i < updatedWindows.length; i++) {
    const window = updatedWindows[i]
    const otherWindows = updatedWindows.filter(w => w.id !== window.id)
    
    const newPosition = findAvailablePosition(window, otherWindows)
    
    if (newPosition.x !== window.x || newPosition.y !== window.y) {
      updatedWindows[i] = { ...window, ...newPosition }
      hasChanges = true
    }
  }
  
  if (hasChanges) {
    emit('windowReorder', updatedWindows)
  }
}

// Event handlers
const handleWindowMove = (id: string, x: number, y: number) => {
  emit('windowMove', id, x, y)
}

const handleWindowResize = (id: string, x: number, y: number, width: number, height: number) => {
  emit('windowResize', id, x, y, width, height)
}

const handleDragStart = (id: string) => {
  isDragging.value = true
  draggedWindowId.value = id
}

const handleDragEnd = (id: string) => {
  isDragging.value = false
  draggedWindowId.value = ''
  
  // Auto-arrange after drag ends
  nextTick(() => {
    autoArrangeWindows()
  })
}

onMounted(() => {
  // Initial auto-arrange
  nextTick(() => {
    autoArrangeWindows()
  })
})
</script>

<style scoped>
.grid-container {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: #121212;
}

.grid-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  pointer-events: none;
  z-index: 0;
}
</style>
