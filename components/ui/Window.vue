<template>
  <div 
    class="window-container"
    :class="{ 'dragging': isDragging, 'resizing': isResizing }"
    :style="windowStyle"
    @mousedown="handleMouseDown"
  >
    <!-- Invisible drag handle - only shows on hover -->
    <div 
      class="drag-handle"
      @mousedown="startDrag"
    ></div>
    
    <!-- Invisible resize handles - only show on hover -->
    <div class="resize-handle resize-n" @mousedown="startResize('n')"></div>
    <div class="resize-handle resize-s" @mousedown="startResize('s')"></div>
    <div class="resize-handle resize-w" @mousedown="startResize('w')"></div>
    <div class="resize-handle resize-e" @mousedown="startResize('e')"></div>
    <div class="resize-handle resize-nw" @mousedown="startResize('nw')"></div>
    <div class="resize-handle resize-ne" @mousedown="startResize('ne')"></div>
    <div class="resize-handle resize-sw" @mousedown="startResize('sw')"></div>
    <div class="resize-handle resize-se" @mousedown="startResize('se')"></div>
    
    <!-- Window content - your existing design preserved exactly -->
    <div class="window-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'

interface Props {
  id: string
  x: number
  y: number
  width: number
  height: number
  gridSize?: number
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
}

const props = withDefaults(defineProps<Props>(), {
  gridSize: 20,
  minWidth: 200,
  minHeight: 150,
  maxWidth: Infinity,
  maxHeight: Infinity
})

const emit = defineEmits<{
  move: [id: string, x: number, y: number]
  resize: [id: string, x: number, y: number, width: number, height: number]
  dragStart: [id: string]
  dragEnd: [id: string]
}>()

// State
const isDragging = ref(false)
const isResizing = ref(false)
const dragStart = ref({ x: 0, y: 0 })
const resizeStart = ref({ x: 0, y: 0, width: 0, height: 0 })
const resizeDirection = ref('')

// Computed styles
const windowStyle = computed(() => ({
  left: `${props.x}px`,
  top: `${props.y}px`,
  width: `${props.width}px`,
  height: `${props.height}px`
}))

// Grid snapping
const snapToGrid = (value: number) => {
  return Math.round(value / props.gridSize) * props.gridSize
}

// Drag functionality
const startDrag = (e: MouseEvent) => {
  console.log('Start drag triggered')
  e.preventDefault()
  e.stopPropagation()
  
  isDragging.value = true
  dragStart.value = {
    x: e.clientX - props.x,
    y: e.clientY - props.y
  }
  
  emit('dragStart', props.id)
}

// Resize functionality
const startResize = (direction: string) => (e: MouseEvent) => {
  console.log('Start resize triggered:', direction)
  e.preventDefault()
  e.stopPropagation()
  
  isResizing.value = true
  resizeDirection.value = direction
  resizeStart.value = {
    x: e.clientX,
    y: e.clientY,
    width: props.width,
    height: props.height
  }
}

// Mouse move handler
const handleMouseMove = (e: MouseEvent) => {
  if (isDragging.value) {
    console.log('Dragging...', e.clientX, e.clientY)
    const newX = snapToGrid(e.clientX - dragStart.value.x)
    const newY = snapToGrid(e.clientY - dragStart.value.y)
    emit('move', props.id, newX, newY)
  } else if (isResizing.value) {
    console.log('Resizing...', e.clientX, e.clientY)
    const deltaX = e.clientX - resizeStart.value.x
    const deltaY = e.clientY - resizeStart.value.y
    
    let newX = props.x
    let newY = props.y
    let newWidth = props.width
    let newHeight = props.height
    
    // Handle different resize directions
    if (resizeDirection.value.includes('e')) {
      newWidth = Math.max(props.minWidth, Math.min(props.maxWidth, resizeStart.value.width + deltaX))
    }
    if (resizeDirection.value.includes('w')) {
      const widthChange = resizeStart.value.width - deltaX
      if (widthChange >= props.minWidth && widthChange <= props.maxWidth) {
        newX = props.x + deltaX
        newWidth = widthChange
      }
    }
    if (resizeDirection.value.includes('s')) {
      newHeight = Math.max(props.minHeight, Math.min(props.maxHeight, resizeStart.value.height + deltaY))
    }
    if (resizeDirection.value.includes('n')) {
      const heightChange = resizeStart.value.height - deltaY
      if (heightChange >= props.minHeight && heightChange <= props.maxHeight) {
        newY = props.y + deltaY
        newHeight = heightChange
      }
    }
    
    // Snap to grid
    newX = snapToGrid(newX)
    newY = snapToGrid(newY)
    newWidth = snapToGrid(newWidth)
    newHeight = snapToGrid(newHeight)
    
    emit('resize', props.id, newX, newY, newWidth, newHeight)
  }
}

// Mouse up handler
const handleMouseUp = () => {
  if (isDragging.value) {
    isDragging.value = false
    emit('dragEnd', props.id)
  }
  if (isResizing.value) {
    isResizing.value = false
    resizeDirection.value = ''
  }
}

// General mouse down handler
const handleMouseDown = (e: MouseEvent) => {
  console.log('Window clicked!')
  // Bring window to front
  const container = e.currentTarget as HTMLElement
  const parent = container.parentElement
  if (parent) {
    parent.appendChild(container)
  }
}

// Event listeners
onMounted(() => {
  console.log('Window mounted, adding event listeners')
  document.addEventListener('mousemove', handleMouseMove)
  document.addEventListener('mouseup', handleMouseUp)
})

onUnmounted(() => {
  console.log('Window unmounted, removing event listeners')
  document.removeEventListener('mousemove', handleMouseMove)
  document.removeEventListener('mouseup', handleMouseUp)
})
</script>

<style scoped>
.window-container {
  position: absolute;
  background: transparent;
  border: 1px solid transparent;
  border-radius: 6px;
  overflow: hidden;
  cursor: default;
  transition: border-color 0.2s ease;
  z-index: 1;
}

.window-container:hover {
  border-color: rgba(255, 255, 255, 0.1);
}

.window-container.dragging {
  border-color: rgba(4, 207, 139, 0.5);
  z-index: 1000;
}

.window-container.resizing {
  border-color: rgba(4, 207, 139, 0.5);
  z-index: 1000;
}

/* Drag handle - invisible until hover */
.drag-handle {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 30px;
  background: transparent;
  cursor: move;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.2s ease;
}

.window-container:hover .drag-handle {
  opacity: 1;
}

/* Resize handles - invisible until hover */
.resize-handle {
  position: absolute;
  background: transparent;
  z-index: 10;
  opacity: 0;
  transition: opacity 0.2s ease, background-color 0.2s ease;
}

.window-container:hover .resize-handle {
  opacity: 1;
}

.resize-handle:hover {
  background-color: rgba(4, 207, 139, 0.3);
}

.resize-n {
  top: 0;
  left: 0;
  right: 0;
  height: 8px;
  cursor: n-resize;
}

.resize-s {
  bottom: 0;
  left: 0;
  right: 0;
  height: 8px;
  cursor: s-resize;
}

.resize-w {
  top: 0;
  left: 0;
  bottom: 0;
  width: 8px;
  cursor: w-resize;
}

.resize-e {
  top: 0;
  right: 0;
  bottom: 0;
  width: 8px;
  cursor: e-resize;
}

.resize-nw {
  top: 0;
  left: 0;
  width: 12px;
  height: 12px;
  cursor: nw-resize;
}

.resize-ne {
  top: 0;
  right: 0;
  width: 12px;
  height: 12px;
  cursor: ne-resize;
}

.resize-sw {
  bottom: 0;
  left: 0;
  width: 12px;
  height: 12px;
  cursor: sw-resize;
}

.resize-se {
  bottom: 0;
  right: 0;
  width: 12px;
  height: 12px;
  cursor: se-resize;
}

/* Window content - preserves your existing design */
.window-content {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
</style>
