<template>
  <div class="p-6 bg-white rounded-lg shadow-md">
    <h3 class="text-lg font-semibold text-gray-900 mb-4">Confirm Dialog Usage Examples</h3>
    
    <div class="space-y-4">
      <!-- Example 1: Basic Delete Confirmation -->
      <div>
        <h4 class="font-medium text-gray-800 mb-2">1. Basic Delete Confirmation</h4>
        <button
          @click="handleDelete"
          class="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
        >
          Delete Item
        </button>
        <p class="text-sm text-gray-600 mt-1">Uses the confirmDelete convenience method</p>
      </div>

      <!-- Example 2: Custom Action Confirmation -->
      <div>
        <h4 class="font-medium text-gray-800 mb-2">2. Custom Action Confirmation</h4>
        <button
          @click="handleArchive"
          class="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition-colors"
        >
          Archive Document
        </button>
        <p class="text-sm text-gray-600 mt-1">Uses the confirmAction convenience method</p>
      </div>

      <!-- Example 3: Custom Dialog -->
      <div>
        <h4 class="font-medium text-gray-800 mb-2">3. Custom Dialog Configuration</h4>
        <button
          @click="handleCustom"
          class="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
        >
          Custom Dialog
        </button>
        <p class="text-sm text-gray-600 mt-1">Uses showDialog with custom configuration</p>
      </div>

      <!-- Example 4: Async Operation with Loading -->
      <div>
        <h4 class="font-medium text-gray-800 mb-2">4. Async Operation with Loading</h4>
        <button
          @click="handleAsyncOperation"
          class="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
        >
          Process Data
        </button>
        <p class="text-sm text-gray-600 mt-1">Shows loading state during async operation</p>
      </div>
    </div>

    <!-- Results Display -->
    <div v-if="lastAction" class="mt-6 p-4 bg-gray-50 rounded-lg">
      <h4 class="font-medium text-gray-800 mb-2">Last Action Result:</h4>
      <p class="text-sm">
        <span class="font-medium">Action:</span> {{ lastAction }}<br>
        <span class="font-medium">Result:</span> 
        <span :class="lastResult ? 'text-green-600' : 'text-red-600'">
          {{ lastResult ? 'Confirmed' : 'Cancelled' }}
        </span>
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useConfirmDialog } from '~/composables/useConfirmDialog'

const { confirmDelete, confirmAction, showDialog, setLoading } = useConfirmDialog()

const lastAction = ref('')
const lastResult = ref<boolean | null>(null)

const handleDelete = async () => {
  try {
    const result = await confirmDelete('Important Document')
    lastAction.value = 'Delete Important Document'
    lastResult.value = result
    
    if (result) {
      // Perform actual delete operation
      console.log('Item deleted successfully')
    }
  } catch (error) {
    console.error('Delete operation failed:', error)
  }
}

const handleArchive = async () => {
  try {
    const result = await confirmAction('Archive', 'Project Report', 'This will move the document to the archive folder.')
    lastAction.value = 'Archive Project Report'
    lastResult.value = result
    
    if (result) {
      // Perform actual archive operation
      console.log('Document archived successfully')
    }
  } catch (error) {
    console.error('Archive operation failed:', error)
  }
}

const handleCustom = async () => {
  try {
    const result = await showDialog({
      title: 'Custom Operation',
      message: 'This is a custom dialog with specific styling and behavior. The backdrop cannot be clicked to close.',
      confirmText: 'Proceed',
      cancelText: 'Cancel',
      variant: 'warning',
      allowBackdropClose: false
    })
    
    lastAction.value = 'Custom Operation'
    lastResult.value = result
    
    if (result) {
      console.log('Custom operation completed')
    }
  } catch (error) {
    console.error('Custom operation failed:', error)
  }
}

const handleAsyncOperation = async () => {
  try {
    // Show initial confirmation
    const confirmed = await showDialog({
      title: 'Process Data',
      message: 'This operation will process all pending data. This may take a few minutes.',
      confirmText: 'Start Processing',
      cancelText: 'Cancel',
      variant: 'info',
      allowBackdropClose: false
    })
    
    if (!confirmed) {
      lastAction.value = 'Process Data (Cancelled)'
      lastResult.value = false
      return
    }
    
    // Set loading state
    setLoading(true)
    
    // Simulate async operation
    await new Promise(resolve => setTimeout(resolve, 3000))
    
    // Clear loading state
    setLoading(false)
    
    lastAction.value = 'Process Data'
    lastResult.value = true
    
    console.log('Data processing completed')
  } catch (error) {
    setLoading(false)
    console.error('Data processing failed:', error)
    lastAction.value = 'Process Data (Failed)'
    lastResult.value = false
  }
}
</script>
