<template>
  <div class="strategy-toolbar">
    <!-- Left Section -->
    <div class="toolbar-left">
      <div class="page-title-section">
        <h1 class="page-title">Create Strategy</h1>
        <div class="strategy-name-section">
          <input 
            v-model="strategyName"
            @input="updateStrategyName"
            type="text" 
            placeholder="Enter strategy name..." 
            class="strategy-name-input"
          />
        </div>
        <div class="status-indicator" :class="{ 'saving': isSaving }">
          <div class="status-dot" :class="[strategyStatus, { 'pulsating': isSaving }]"></div>
          <div class="status-text-container">
            <span class="status-text" :class="[strategyStatus, { 'saving': isSaving }]">{{ strategyStatusText }}</span>
          </div>
        </div>
      </div>
    </div>

    <!-- Right Section -->
    <div class="toolbar-right">
      <div class="toolbar-actions">
        <button class="action-btn secondary" @click="testStrategy">
          <span>Test Strategy</span>
        </button>
        <button class="action-btn secondary" @click="saveDraft">
          <span>Save Draft</span>
        </button>
        <button class="action-btn primary" @click="activateStrategy">
          <span>Activate Strategy</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from 'vue'

// Props
interface Props {
  strategyStatus?: 'draft' | 'saved' | 'active'
  strategyName?: string
}

const props = withDefaults(defineProps<Props>(), {
  strategyStatus: 'draft',
  strategyName: ''
})

// Emits
const emit = defineEmits<{
  'update:strategyStatus': [value: 'draft' | 'saved' | 'active']
  'update:strategyName': [value: string]
  'test-strategy': []
  'save-draft': []
  'activate-strategy': []
}>()

// Local state
const strategyStatus = ref(props.strategyStatus)
const strategyName = ref(props.strategyName)
const isSaving = ref(false)

// Computed properties
const strategyStatusText = computed(() => {
  switch (strategyStatus.value) {
    case 'draft': return 'DRAFT'
    case 'saved': return 'SAVED'
    case 'active': return 'PUBLISHED'
    default: return 'DRAFT'
  }
})

// Methods
function testStrategy() {
  emit('test-strategy')
}

function saveDraft() {
  isSaving.value = true
  
  // Simulate saving process with animation
  setTimeout(() => {
    strategyStatus.value = 'saved'
    emit('update:strategyStatus', 'saved')
    emit('save-draft')
    
    // Add slide-up class for the text animation
    const statusText = document.querySelector('.status-text')
    if (statusText) {
      statusText.classList.add('slide-up')
    }
    
    // Reset saving state after animation completes
    setTimeout(() => {
      isSaving.value = false
      if (statusText) {
        statusText.classList.remove('slide-up')
      }
    }, 500)
  }, 1500) // 1.5 second saving animation
}

function activateStrategy() {
  strategyStatus.value = 'active'
  emit('update:strategyStatus', 'active')
  emit('activate-strategy')
}

// Watch for prop changes
watch(() => props.strategyStatus, (newValue) => {
  strategyStatus.value = newValue
})

watch(() => props.strategyName, (newValue) => {
  strategyName.value = newValue
})

// Handle strategy name input
function updateStrategyName(event: Event) {
  const target = event.target as HTMLInputElement
  strategyName.value = target.value
  emit('update:strategyName', target.value)
}
</script>

<style scoped>
.strategy-toolbar {
  height: 48px;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  flex-shrink: 0;
}

.toolbar-left {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.page-title-section {
  display: flex;
  align-items: center;
  gap: 24px;
}

.strategy-name-section {
  display: flex;
  align-items: center;
}

.strategy-name-input {
  background: transparent;
  border: 1px solid #333;
  border-radius: 4px;
  color: #ccc;
  padding: 6px 12px;
  font-size: 12px;
  font-weight: 500;
  font-family: 'Roboto', sans-serif;
  min-width: 200px;
  height: 32px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.strategy-name-input:focus {
  outline: none;
  border-color: #04CF8B;
  box-shadow: 0 0 0 1px #04CF8B;
  background-color: #2a2a2a;
  color: white;
}

.strategy-name-input::placeholder {
  color: #666;
}

.page-title {
  color: #ffffff;
  font-size: 18px;
  font-weight: 400;
  margin: 0;
  font-family: 'Inter', system-ui, sans-serif;
}

.status-indicator {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 4px 8px;
  border: 1px solid #404040;
  border-radius: 4px;
  background: transparent;
  transition: border-color 0.3s ease, background-color 0.3s ease;
}

.status-indicator.saving {
  border-color: #ffb74d;
  background: rgba(255, 183, 77, 0.1);
}

.status-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #ffb74d;
  transition: background-color 0.3s ease, transform 0.3s ease, opacity 0.3s ease;
}

.status-dot.pulsating {
  animation: pulse 1s ease-in-out infinite;
}

.status-dot.saved {
  background: #04CF8B;
}

.status-dot.active {
  background: #04CF8B;
}

@keyframes pulse {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.6;
    transform: scale(1.2);
  }
}

.status-text-container {
  position: relative;
  overflow: hidden;
  height: 16px;
}

.status-text {
  color: #ffffff;
  font-size: 11px;
  font-weight: 600;
  font-family: 'Roboto Mono', monospace;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  transition: opacity 0.3s ease, transform 0.3s ease;
  display: block;
}

.status-text.draft {
  color: #666;
  opacity: 0.7;
}

.status-text.saving {
  animation: textPulse 1s ease-in-out infinite;
}

.status-text.slide-up {
  animation: slideUp 0.5s ease-out forwards;
}

@keyframes textPulse {
  0%, 100% {
    opacity: 1;
  }
  50% {
    opacity: 0.7;
  }
}

@keyframes slideUp {
  0% {
    transform: translateY(100%);
    opacity: 0;
  }
  100% {
    transform: translateY(0);
    opacity: 1;
  }
}


.toolbar-right {
  display: flex;
  align-items: center;
  flex: 0 0 auto;
}

.toolbar-actions {
  display: flex;
  gap: 8px;
}

.action-btn {
  background-color: transparent;
  border: 1px solid #333;
  color: #ccc;
  padding: 6px 12px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
}

.action-btn:hover {
  background-color: #2a2a2a;
  color: white;
}

.action-btn.primary {
  background-color: #0e8212;
  color: white;
  border-color: #0e8212;
}

.action-btn.primary:hover {
  background-color: #0a6b0e;
}


/* Responsive Design */
@media (max-width: 1200px) {
  .strategy-toolbar {
    padding: 0 16px;
  }
  
  .page-title-section {
    gap: 16px;
  }
  
  .page-title {
    font-size: 18px;
  }
}

@media (max-width: 768px) {
  .strategy-toolbar {
    flex-direction: column;
    height: auto;
    padding: 16px;
    gap: 16px;
  }
  
  .toolbar-left,
  .toolbar-right {
    width: 100%;
    justify-content: center;
  }
  
  .page-title-section {
    justify-content: center;
  }
  
  .toolbar-actions {
    justify-content: center;
  }
}
</style>
