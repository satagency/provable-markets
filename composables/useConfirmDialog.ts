import { ref, reactive, readonly } from 'vue'
import type { ConfirmDialogConfig, ConfirmDialogState } from '~/types'


const state = reactive<ConfirmDialogState>({
  isOpen: false,
  config: {
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    variant: 'info',
    allowBackdropClose: true
  },
  loading: false
})

export const useConfirmDialog = () => {
  const showDialog = (config: ConfirmDialogConfig): Promise<boolean> => {
    return new Promise((resolve) => {
      state.config = { ...state.config, ...config }
      state.isOpen = true
      state.loading = false
      state.resolve = resolve
    })
  }

  const hideDialog = () => {
    state.isOpen = false
    state.loading = false
    if (state.resolve) {
      state.resolve(false)
      state.resolve = undefined
    }
  }

  const handleConfirm = () => {
    if (state.resolve) {
      state.resolve(true)
      state.resolve = undefined
    }
    state.isOpen = false
    state.loading = false
  }

  const handleCancel = () => {
    if (state.resolve) {
      state.resolve(false)
      state.resolve = undefined
    }
    state.isOpen = false
    state.loading = false
  }

  const setLoading = (loading: boolean) => {
    state.loading = loading
  }

  // Convenience methods for common dialog types
  const confirmDelete = (itemName: string, customMessage?: string): Promise<boolean> => {
    return showDialog({
      title: 'Delete Confirmation',
      message: customMessage || `Are you sure you want to delete "${itemName}"? This action cannot be undone.`,
      confirmText: 'Delete',
      cancelText: 'Cancel',
      variant: 'danger',
      allowBackdropClose: false
    })
  }

  const confirmAction = (action: string, itemName: string, customMessage?: string): Promise<boolean> => {
    return showDialog({
      title: `${action} Confirmation`,
      message: customMessage || `Are you sure you want to ${action.toLowerCase()} "${itemName}"?`,
      confirmText: action,
      cancelText: 'Cancel',
      variant: 'warning',
      allowBackdropClose: true
    })
  }

  const showInfo = (title: string, message: string): Promise<boolean> => {
    return showDialog({
      title,
      message,
      confirmText: 'OK',
      cancelText: '',
      variant: 'info',
      allowBackdropClose: true
    })
  }

  return {
    // State
    isOpen: readonly(ref(state.isOpen)),
    config: readonly(ref(state.config)),
    loading: readonly(ref(state.loading)),
    
    // Methods
    showDialog,
    hideDialog,
    handleConfirm,
    handleCancel,
    handleClose: hideDialog,
    setLoading,
    
    // Convenience methods
    confirmDelete,
    confirmAction,
    showInfo
  }
}

// Global state for the dialog
export const confirmDialogState = state
