import { ref, readonly } from 'vue'

// Global submenu state
const submenuExpanded = ref(false)
const currentSubmenu = ref('')
const lastSubmenu = ref('') // Keep track of last submenu for hover expansion

export const useSubmenu = () => {
  const expandSubmenu = (submenuName: string, force = false) => {
    if (!force && currentSubmenu.value === submenuName) return
    
    currentSubmenu.value = submenuName
    lastSubmenu.value = submenuName
    submenuExpanded.value = true
  }

  const collapseSubmenu = () => {
    submenuExpanded.value = false
    // Don't clear currentSubmenu - keep it for hover expansion
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
    lastSubmenu: readonly(lastSubmenu),
    expandSubmenu,
    collapseSubmenu,
    toggleSubmenu
  }
}
