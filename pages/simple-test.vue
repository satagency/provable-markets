<template>
  <div class="min-h-screen p-8" style="background-color: #121212;">
    <div class="max-w-2xl mx-auto">
      <h1 class="text-3xl font-bold mb-8" style="color: #ffffff;">Simple Dialog Test</h1>
      
      <div class="space-y-4">
        <button
          @click="testDialog"
          class="px-6 py-3 rounded-lg transition-colors"
          style="background-color: rgba(220, 38, 38, 0.8); color: white; border: none; font-family: 'Geist', sans-serif; font-weight: 500;"
          @mouseenter="$event.target.style.backgroundColor = 'rgba(220, 38, 38, 1)'"
          @mouseleave="$event.target.style.backgroundColor = 'rgba(220, 38, 38, 0.8)'"
        >
          Test Dialog
        </button>
        
        <div v-if="result !== null" class="mt-4 p-4 rounded-lg" style="background-color: #1a1c1e; border: 1px solid rgba(255, 255, 255, 0.1);">
          <p style="color: #ffffff;">Result: {{ result ? 'Confirmed' : 'Cancelled' }}</p>
        </div>
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

const { showDialog, handleConfirm, handleCancel, handleClose } = useConfirmDialog()

const result = ref<boolean | null>(null)

const testDialog = async () => {
  try {
    const confirmed = await showDialog({
      title: 'Test Dialog',
      message: 'This is a test dialog to verify the system is working.',
      confirmText: 'OK',
      cancelText: 'Cancel',
      variant: 'info'
    })
    
    result.value = confirmed
  } catch (error) {
    console.error('Dialog test failed:', error)
  }
}
</script>
