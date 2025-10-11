<template>
  <div class="min-h-screen p-8" style="background-color: #121212;">
    <div class="max-w-4xl mx-auto">
      <h1 class="text-3xl font-bold mb-8" style="color: #ffffff;">Confirm Dialog System Test</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <!-- Order Cancellation Dialog -->
        <div class="rounded-lg shadow-md p-6" style="background-color: #1a1c1e; border: 1px solid rgba(255, 255, 255, 0.1);">
          <h3 class="text-lg font-semibold mb-4" style="color: #ffffff;">Order Cancellation</h3>
          <p class="mb-4" style="color: rgba(255, 255, 255, 0.8);">Test the order cancellation dialog</p>
          <button
            @click="testOrderCancellation"
            class="w-full px-4 py-2 rounded-lg transition-colors"
            style="background-color: rgba(220, 38, 38, 0.8); color: white; border: none; font-family: 'Geist', sans-serif; font-weight: 500;"
            @mouseenter="$event.target.style.backgroundColor = 'rgba(220, 38, 38, 1)'"
            @mouseleave="$event.target.style.backgroundColor = 'rgba(220, 38, 38, 0.8)'"
          >
            Cancel Order
          </button>
        </div>

        <!-- Danger Dialog -->
        <div class="rounded-lg shadow-md p-6" style="background-color: #1a1c1e; border: 1px solid rgba(255, 255, 255, 0.1);">
          <h3 class="text-lg font-semibold mb-4" style="color: #ffffff;">Danger Dialog</h3>
          <p class="mb-4" style="color: rgba(255, 255, 255, 0.8);">Test delete confirmation with danger styling</p>
          <button
            @click="testDeleteDialog"
            class="w-full px-4 py-2 rounded-lg transition-colors"
            style="background-color: rgba(220, 38, 38, 0.8); color: white; border: none; font-family: 'Geist', sans-serif; font-weight: 500;"
            @mouseenter="$event.target.style.backgroundColor = 'rgba(220, 38, 38, 1)'"
            @mouseleave="$event.target.style.backgroundColor = 'rgba(220, 38, 38, 0.8)'"
          >
            Test Delete Dialog
          </button>
        </div>

        <!-- Warning Dialog -->
        <div class="rounded-lg shadow-md p-6" style="background-color: #1a1c1e; border: 1px solid rgba(255, 255, 255, 0.1);">
          <h3 class="text-lg font-semibold mb-4" style="color: #ffffff;">Warning Dialog</h3>
          <p class="mb-4" style="color: rgba(255, 255, 255, 0.8);">Test action confirmation with warning styling</p>
          <button
            @click="testWarningDialog"
            class="w-full px-4 py-2 rounded-lg transition-colors"
            style="background-color: rgba(245, 158, 11, 0.8); color: white; border: none; font-family: 'Geist', sans-serif; font-weight: 500;"
            @mouseenter="$event.target.style.backgroundColor = 'rgba(245, 158, 11, 1)'"
            @mouseleave="$event.target.style.backgroundColor = 'rgba(245, 158, 11, 0.8)'"
          >
            Test Warning Dialog
          </button>
        </div>

        <!-- Info Dialog -->
        <div class="rounded-lg shadow-md p-6" style="background-color: #1a1c1e; border: 1px solid rgba(255, 255, 255, 0.1);">
          <h3 class="text-lg font-semibold mb-4" style="color: #ffffff;">Info Dialog</h3>
          <p class="mb-4" style="color: rgba(255, 255, 255, 0.8);">Test informational dialog</p>
          <button
            @click="testInfoDialog"
            class="w-full px-4 py-2 rounded-lg transition-colors"
            style="background-color: rgba(59, 130, 246, 0.8); color: white; border: none; font-family: 'Geist', sans-serif; font-weight: 500;"
            @mouseenter="$event.target.style.backgroundColor = 'rgba(59, 130, 246, 1)'"
            @mouseleave="$event.target.style.backgroundColor = 'rgba(59, 130, 246, 0.8)'"
          >
            Test Info Dialog
          </button>
        </div>

        <!-- Custom Dialog -->
        <div class="rounded-lg shadow-md p-6" style="background-color: #1a1c1e; border: 1px solid rgba(255, 255, 255, 0.1);">
          <h3 class="text-lg font-semibold mb-4" style="color: #ffffff;">Custom Dialog</h3>
          <p class="mb-4" style="color: rgba(255, 255, 255, 0.8);">Test with custom configuration</p>
          <button
            @click="testCustomDialog"
            class="w-full px-4 py-2 rounded-lg transition-colors"
            style="background-color: #404040; color: white; border: none; font-family: 'Geist', sans-serif; font-weight: 500;"
            @mouseenter="$event.target.style.backgroundColor = '#555555'"
            @mouseleave="$event.target.style.backgroundColor = '#404040'"
          >
            Test Custom Dialog
          </button>
        </div>

        <!-- Loading State -->
        <div class="rounded-lg shadow-md p-6" style="background-color: #1a1c1e; border: 1px solid rgba(255, 255, 255, 0.1);">
          <h3 class="text-lg font-semibold mb-4" style="color: #ffffff;">Loading State</h3>
          <p class="mb-4" style="color: rgba(255, 255, 255, 0.8);">Test dialog with loading state</p>
          <button
            @click="testLoadingDialog"
            class="w-full px-4 py-2 rounded-lg transition-colors"
            style="background-color: rgba(34, 197, 94, 0.8); color: white; border: none; font-family: 'Geist', sans-serif; font-weight: 500;"
            @mouseenter="$event.target.style.backgroundColor = 'rgba(34, 197, 94, 1)'"
            @mouseleave="$event.target.style.backgroundColor = 'rgba(34, 197, 94, 0.8)'"
          >
            Test Loading Dialog
          </button>
        </div>
      </div>

      <!-- Results -->
      <div v-if="lastResult !== null" class="mt-8 rounded-lg shadow-md p-6" style="background-color: #1a1c1e; border: 1px solid rgba(255, 255, 255, 0.1);">
        <h3 class="text-lg font-semibold mb-4" style="color: #ffffff;">Last Result</h3>
        <div class="flex items-center space-x-2">
          <span class="text-sm" style="color: rgba(255, 255, 255, 0.8);">User action:</span>
          <span :style="lastResult ? 'color: #22c55e; font-weight: 600;' : 'color: #ef4444; font-weight: 600;'">
            {{ lastResult ? 'Confirmed' : 'Cancelled' }}
          </span>
        </div>
        <p class="text-sm mt-2" style="color: rgba(255, 255, 255, 0.6);">{{ lastMessage }}</p>
      </div>
    </div>

    <!-- Global Confirm Dialog -->
    <ConfirmDialog
      :config="confirmDialogState.config"
      :is-open="confirmDialogState.isOpen"
      :loading="confirmDialogState.loading"
      @confirm="handleConfirm"
      @cancel="handleCancel"
      @close="handleClose"
    />
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ConfirmDialog from '~/components/ui/ConfirmDialog.vue'
import { useConfirmDialog, confirmDialogState } from '~/composables/useConfirmDialog'

const { confirmDelete, confirmAction, showInfo, showDialog, setLoading, handleConfirm, handleCancel, handleClose } = useConfirmDialog()

const lastResult = ref<boolean | null>(null)
const lastMessage = ref('')

const testOrderCancellation = async () => {
  try {
    const result = await showDialog({
      title: 'Order cancellation',
      message: 'You are about to cancel the order. This cannot be undone.',
      confirmText: 'Cancel Order',
      cancelText: 'Keep Order',
      variant: 'danger',
      allowBackdropClose: false
    })
    
    lastResult.value = result
    lastMessage.value = 'Order cancellation dialog test'
  } catch (error) {
    console.error('Order cancellation test failed:', error)
  }
}


const testDeleteDialog = async () => {
  const result = await showDialog({
    title: 'Delete Item',
    message: 'Are you sure you want to delete this item? This action cannot be undone.',
    confirmText: 'Delete',
    cancelText: 'Cancel',
    variant: 'danger',
    allowBackdropClose: false
  })
  
  lastResult.value = result
  lastMessage.value = 'Delete dialog test'
}

const testWarningDialog = async () => {
  const result = await showDialog({
    title: 'Warning',
    message: 'This action will modify important data. Are you sure you want to continue?',
    confirmText: 'Continue',
    cancelText: 'Cancel',
    variant: 'warning',
    allowBackdropClose: true
  })
  
  lastResult.value = result
  lastMessage.value = 'Warning dialog test'
}

const testInfoDialog = async () => {
  const result = await showDialog({
    title: 'Information',
    message: 'This is an informational message. Click OK to continue.',
    confirmText: 'OK',
    cancelText: '',
    variant: 'info',
    allowBackdropClose: true
  })
  
  lastResult.value = result
  lastMessage.value = 'Info dialog test'
}

const testCustomDialog = async () => {
  const result = await showDialog({
    title: 'Custom Configuration',
    message: 'This dialog has custom styling and behavior. The backdrop cannot be clicked to close.',
    confirmText: 'Proceed',
    cancelText: 'Go Back',
    variant: 'info',
    allowBackdropClose: false
  })
  
  lastResult.value = result
  lastMessage.value = 'Custom dialog test'
}

const testLoadingDialog = async () => {
  // Show dialog
  const promise = showDialog({
    title: 'Processing',
    message: 'This action will take a few seconds to complete.',
    confirmText: 'Start Process',
    cancelText: 'Cancel',
    variant: 'info',
    allowBackdropClose: false
  })
  
  // Simulate loading
  setTimeout(() => {
    setLoading(true)
  }, 1000)
  
  const result = await promise
  lastResult.value = result
  lastMessage.value = 'Loading dialog test'
}

const testConfirmDelete = async () => {
  try {
    const result = await confirmDelete('Test Item', 'This is a custom delete message.')
    lastResult.value = result
    lastMessage.value = 'confirmDelete() convenience method test'
  } catch (error) {
    console.error('confirmDelete test failed:', error)
  }
}

const testConfirmAction = async () => {
  try {
    const result = await confirmAction('Archive', 'Test Document', 'This will move the document to the archive.')
    lastResult.value = result
    lastMessage.value = 'confirmAction() convenience method test'
  } catch (error) {
    console.error('confirmAction test failed:', error)
  }
}

const testShowInfo = async () => {
  try {
    const result = await showInfo('Success', 'The operation completed successfully!')
    lastResult.value = result
    lastMessage.value = 'showInfo() convenience method test'
  } catch (error) {
    console.error('showInfo test failed:', error)
  }
}
</script>
