<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition-all duration-300 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-all duration-200 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        class="fixed inset-0 z-50 flex items-center justify-center"
        @click.self="handleBackdropClick"
      >
        <!-- Backdrop with blur -->
        <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        <!-- Dialog container -->
        <Transition
          enter-active-class="transition-all duration-300 ease-out"
          enter-from-class="opacity-0 scale-95 translate-y-4"
          enter-to-class="opacity-100 scale-100 translate-y-0"
          leave-active-class="transition-all duration-200 ease-in"
          leave-from-class="opacity-100 scale-100 translate-y-0"
          leave-to-class="opacity-0 scale-95 translate-y-4"
        >
          <div
            v-if="isOpen"
            class="relative rounded-lg shadow-2xl max-w-sm w-full mx-4"
            style="background-color: #1a1c1e; border: 3px solid rgba(255, 255, 255, 0.1);"
            role="dialog"
            aria-modal="true"
            :aria-labelledby="titleId"
            :aria-describedby="messageId"
          >
            <!-- Header -->
            <div class="flex items-center justify-between p-4">
              <h3 :id="titleId" class="text-base font-semibold" style="color: #ffffff; font-family: 'Roboto', sans-serif;">
                {{ config.title }}
              </h3>
            </div>

            <!-- Content -->
            <div class="p-4">
              <p :id="messageId" class="leading-relaxed text-sm" style="color: #ffffff; font-family: 'Roboto', sans-serif;">
                {{ config.message }}
              </p>
            </div>

            <!-- Actions -->
            <div class="flex items-center justify-end space-x-2 p-4 rounded-b-lg">
              <button
                type="button"
                class="px-3 py-1.5 text-xs font-medium rounded transition-colors"
                style="background-color: #404040; color: white; border: none; font-family: 'Geist', sans-serif; font-weight: 500;"
                @click="handleCancel"
                :disabled="loading"
                :style="{ opacity: loading ? '0.5' : '1', cursor: loading ? 'not-allowed' : 'pointer' }"
                @mouseenter="$event.target.style.backgroundColor = '#555555'"
                @mouseleave="$event.target.style.backgroundColor = '#404040'"
              >
                {{ cancelText }}
              </button>
              <button
                type="button"
                :class="confirmButtonClasses"
                :style="confirmButtonStyle"
                @click="handleConfirm"
                :disabled="loading"
                @mouseenter="handleConfirmHover"
                @mouseleave="handleConfirmLeave"
              >
                <svg
                  v-if="loading"
                  class="w-3 h-3 mr-1.5 animate-spin"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                </svg>
                {{ confirmText }}
              </button>
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, onUnmounted, ref } from 'vue'
import type { ConfirmDialogConfig } from '~/types'

interface Props {
  config: ConfirmDialogConfig
  isOpen: boolean
  loading?: boolean
}

interface Emits {
  (e: 'confirm'): void
  (e: 'cancel'): void
  (e: 'close'): void
}

const props = withDefaults(defineProps<Props>(), {
  loading: false,
  config: () => ({
    title: '',
    message: '',
    confirmText: 'Confirm',
    cancelText: 'Cancel',
    variant: 'info',
    allowBackdropClose: true
  })
})

const emit = defineEmits<Emits>()

// Generate unique IDs for accessibility
const titleId = ref(`confirm-dialog-title-${Math.random().toString(36).substr(2, 9)}`)
const messageId = ref(`confirm-dialog-message-${Math.random().toString(36).substr(2, 9)}`)

// Computed properties
const confirmText = computed(() => props.config.confirmText || 'Confirm')
const cancelText = computed(() => props.config.cancelText || 'Cancel')

const confirmButtonClasses = computed(() => {
  const baseClasses = 'px-3 py-1.5 text-xs font-medium rounded transition-colors flex items-center'
  
  if (props.config.variant === 'danger') {
    return `${baseClasses} text-white disabled:opacity-50 disabled:cursor-not-allowed`
  } else if (props.config.variant === 'warning') {
    return `${baseClasses} text-white disabled:opacity-50 disabled:cursor-not-allowed`
  } else {
    return `${baseClasses} text-white disabled:opacity-50 disabled:cursor-not-allowed`
  }
})

const confirmButtonStyle = computed(() => {
  const baseStyle = {
    fontFamily: "'Geist', sans-serif",
    fontWeight: '500',
    opacity: props.loading ? '0.5' : '1',
    cursor: props.loading ? 'not-allowed' : 'pointer'
  }
  
  if (props.config.variant === 'danger') {
    return {
      ...baseStyle,
      backgroundColor: 'rgba(220, 38, 38, 0.8)',
      color: 'white',
      border: 'none'
    }
  } else if (props.config.variant === 'warning') {
    return {
      ...baseStyle,
      backgroundColor: 'rgba(245, 158, 11, 0.8)',
      color: 'white',
      border: 'none'
    }
  } else {
    return {
      ...baseStyle,
      backgroundColor: 'rgba(59, 130, 246, 0.8)',
      color: 'white',
      border: 'none'
    }
  }
})

// Event handlers
const handleConfirm = () => {
  emit('confirm')
}

const handleCancel = () => {
  emit('cancel')
}

const handleBackdropClick = () => {
  if (props.config.allowBackdropClose) {
    emit('close')
  }
}

const handleConfirmHover = (event: Event) => {
  if (props.loading) return
  
  const target = event.target as HTMLElement
  if (props.config.variant === 'danger') {
    target.style.backgroundColor = 'rgba(220, 38, 38, 1)'
  } else if (props.config.variant === 'warning') {
    target.style.backgroundColor = 'rgba(245, 158, 11, 1)'
  } else {
    target.style.backgroundColor = 'rgba(59, 130, 246, 1)'
  }
}

const handleConfirmLeave = (event: Event) => {
  if (props.loading) return
  
  const target = event.target as HTMLElement
  if (props.config.variant === 'danger') {
    target.style.backgroundColor = 'rgba(220, 38, 38, 0.8)'
  } else if (props.config.variant === 'warning') {
    target.style.backgroundColor = 'rgba(245, 158, 11, 0.8)'
  } else {
    target.style.backgroundColor = 'rgba(59, 130, 246, 0.8)'
  }
}

// Keyboard handling
const handleKeydown = (event: KeyboardEvent) => {
  if (!props.isOpen) return
  
  if (event.key === 'Escape') {
    if (props.config.allowBackdropClose) {
      emit('close')
    }
  } else if (event.key === 'Enter' && !props.loading) {
    emit('confirm')
  }
}

// Focus management
let previousActiveElement: HTMLElement | null = null

onMounted(() => {
  document.addEventListener('keydown', handleKeydown)
  
  if (props.isOpen) {
    previousActiveElement = document.activeElement as HTMLElement
    nextTick(() => {
      const dialog = document.querySelector('[role="dialog"]') as HTMLElement
      if (dialog) {
        dialog.focus()
      }
    })
  }
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleKeydown)
  
  if (previousActiveElement) {
    previousActiveElement.focus()
  }
})
</script>
