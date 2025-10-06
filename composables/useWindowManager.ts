import { ref, reactive, computed } from 'vue'

export interface WindowConfig {
  id: string
  x: number
  y: number
  width: number
  height: number
  component: string
  props?: Record<string, any>
  minWidth?: number
  minHeight?: number
  maxWidth?: number
  maxHeight?: number
  zIndex?: number
  title?: string
  isMinimized?: boolean
  isMaximized?: boolean
}

export interface WindowLayout {
  id: string
  name: string
  windows: WindowConfig[]
  createdAt: Date
  updatedAt: Date
}

export const useWindowManager = () => {
  // State
  const windows = ref<WindowConfig[]>([])
  const layouts = ref<WindowLayout[]>([])
  const activeLayout = ref<string>('default')
  const nextWindowId = ref(1)

  // Computed
  const activeWindows = computed(() => 
    windows.value.filter(w => !w.isMinimized)
  )

  const minimizedWindows = computed(() => 
    windows.value.filter(w => w.isMinimized)
  )

  // Window management
  const addWindow = (config: Omit<WindowConfig, 'id'>) => {
    console.log('Adding window with config:', config)
    const window: WindowConfig = {
      id: `window-${nextWindowId.value++}`,
      ...config
    }
    console.log('Created window:', window)
    windows.value.push(window)
    console.log('Windows array now has:', windows.value.length, 'windows')
    saveLayout()
    return window.id
  }

  const removeWindow = (id: string) => {
    const index = windows.value.findIndex(w => w.id === id)
    if (index > -1) {
      windows.value.splice(index, 1)
      saveLayout()
    }
  }

  const updateWindow = (id: string, updates: Partial<WindowConfig>) => {
    const window = windows.value.find(w => w.id === id)
    if (window) {
      Object.assign(window, updates)
      saveLayout()
    }
  }

  const moveWindow = (id: string, x: number, y: number) => {
    updateWindow(id, { x, y })
  }

  const resizeWindow = (id: string, x: number, y: number, width: number, height: number) => {
    updateWindow(id, { x, y, width, height })
  }

  const minimizeWindow = (id: string) => {
    updateWindow(id, { isMinimized: true })
  }

  const maximizeWindow = (id: string) => {
    updateWindow(id, { isMaximized: true })
  }

  const restoreWindow = (id: string) => {
    updateWindow(id, { isMinimized: false, isMaximized: false })
  }

  const bringToFront = (id: string) => {
    const maxZIndex = Math.max(...windows.value.map(w => w.zIndex || 0))
    updateWindow(id, { zIndex: maxZIndex + 1 })
  }

  // Layout management
  const saveLayout = (name?: string) => {
    const layoutName = name || activeLayout.value
    const existingLayout = layouts.value.find(l => l.id === layoutName)
    
    const layout: WindowLayout = {
      id: layoutName,
      name: layoutName === 'default' ? 'Default Layout' : name!,
      windows: [...windows.value],
      createdAt: existingLayout?.createdAt || new Date(),
      updatedAt: new Date()
    }

    if (existingLayout) {
      const index = layouts.value.findIndex(l => l.id === layoutName)
      layouts.value[index] = layout
    } else {
      layouts.value.push(layout)
    }

    // Save to localStorage
    localStorage.setItem('window-layouts', JSON.stringify(layouts.value))
  }

  const loadLayout = (layoutId: string) => {
    const layout = layouts.value.find(l => l.id === layoutId)
    if (layout) {
      windows.value = [...layout.windows]
      activeLayout.value = layoutId
    }
  }

  const deleteLayout = (layoutId: string) => {
    if (layoutId === 'default') return // Can't delete default layout
    
    const index = layouts.value.findIndex(l => l.id === layoutId)
    if (index > -1) {
      layouts.value.splice(index, 1)
      localStorage.setItem('window-layouts', JSON.stringify(layouts.value))
      
      if (activeLayout.value === layoutId) {
        loadLayout('default')
      }
    }
  }

  const createNewLayout = (name: string) => {
    const layoutId = `layout-${Date.now()}`
    saveLayout(layoutId)
    loadLayout(layoutId)
    return layoutId
  }

  // Initialize from localStorage
  const initialize = () => {
    try {
      const savedLayouts = localStorage.getItem('window-layouts')
      if (savedLayouts) {
        layouts.value = JSON.parse(savedLayouts).map((layout: any) => ({
          ...layout,
          createdAt: new Date(layout.createdAt),
          updatedAt: new Date(layout.updatedAt)
        }))
      }

      // Load default layout or create one
      const defaultLayout = layouts.value.find(l => l.id === 'default')
      if (defaultLayout) {
        loadLayout('default')
      } else {
        // Create default layout with a sample window
        windows.value = []
        saveLayout('default')
      }
    } catch (error) {
      console.error('Failed to load window layouts:', error)
      // Create fresh default layout
      windows.value = []
      saveLayout('default')
    }
  }

  // Auto-save on window changes
  const autoSave = () => {
    saveLayout()
  }

  // Reset to default layout
  const resetToDefault = () => {
    windows.value = []
    saveLayout('default')
    loadLayout('default')
  }

  return {
    // State
    windows: readonly(windows),
    layouts: readonly(layouts),
    activeLayout: readonly(activeLayout),
    activeWindows,
    minimizedWindows,

    // Window management
    addWindow,
    removeWindow,
    updateWindow,
    moveWindow,
    resizeWindow,
    minimizeWindow,
    maximizeWindow,
    restoreWindow,
    bringToFront,

    // Layout management
    saveLayout,
    loadLayout,
    deleteLayout,
    createNewLayout,
    initialize,
    autoSave,
    resetToDefault
  }
}
