import { ref, computed } from 'vue'

export type TableDensity = 'normal' | 'dense'

const tableDensity = ref<TableDensity>('normal')

export const useTableDensity = () => {
  const setDensity = (density: TableDensity) => {
    tableDensity.value = density
    // Save to localStorage for persistence
    if (process.client) {
      localStorage.setItem('tableDensity', density)
    }
  }

  const toggleDensity = () => {
    setDensity(tableDensity.value === 'normal' ? 'dense' : 'normal')
  }

  const densityClasses = computed(() => {
    return {
      'table-density-normal': tableDensity.value === 'normal',
      'table-density-dense': tableDensity.value === 'dense'
    }
  })

  // Initialize from localStorage on client
  if (process.client) {
    const saved = localStorage.getItem('tableDensity') as TableDensity
    if (saved && (saved === 'normal' || saved === 'dense')) {
      tableDensity.value = saved
    }
  }

  return {
    density: computed(() => tableDensity.value),
    setDensity,
    toggleDensity,
    densityClasses
  }
}
