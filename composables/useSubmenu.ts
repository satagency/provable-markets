import { ref, readonly } from 'vue'

// Global submenu state
const submenuExpanded = ref(false)
const currentSubmenu = ref('')
const isTransitioning = ref(false)

export const useSubmenu = () => {
  const expandSubmenu = (submenuName: string) => {
    if (currentSubmenu.value === submenuName) return
    
    isTransitioning.value = true
    
    // Add delay for "thinking dashboard" effect
    setTimeout(() => {
      currentSubmenu.value = submenuName
      submenuExpanded.value = true
      
      // Small additional delay before allowing next transition
      setTimeout(() => {
        isTransitioning.value = false
      }, 100)
    }, 300) // 300ms delay for thinking effect
  }

  const collapseSubmenu = () => {
    isTransitioning.value = true
    
    setTimeout(() => {
      submenuExpanded.value = false
      currentSubmenu.value = ''
      isTransitioning.value = false
    }, 150) // Shorter delay for collapse
  }

  const toggleSubmenu = (submenuName: string) => {
    if (submenuExpanded.value && currentSubmenu.value === submenuName) {
      collapseSubmenu()
    } else {
      expandSubmenu(submenuName)
    }
  }

  return {
    submenuExpanded: readonly(submenuExpanded),
    currentSubmenu: readonly(currentSubmenu),
    isTransitioning: readonly(isTransitioning),
    expandSubmenu,
    collapseSubmenu,
    toggleSubmenu
  }
}
