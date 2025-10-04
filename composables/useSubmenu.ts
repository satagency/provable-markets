import { ref } from 'vue'

// Global submenu state
const submenuExpanded = ref(false)
const currentSubmenu = ref('')

export const useSubmenu = () => {
  const expandSubmenu = (submenuName: string) => {
    currentSubmenu.value = submenuName
    submenuExpanded.value = true
  }

  const collapseSubmenu = () => {
    submenuExpanded.value = false
    currentSubmenu.value = ''
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
    expandSubmenu,
    collapseSubmenu,
    toggleSubmenu
  }
}
