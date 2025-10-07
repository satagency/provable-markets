<template>
  <div class="table-density-settings">
    <!-- Settings Toggle Button -->
    <button 
      class="settings-toggle-btn"
      @click="toggleSettings"
      :class="{ active: showSettings }"
    >
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
      <span>Table Settings</span>
    </button>

    <!-- Settings Popup -->
    <div 
      v-if="showSettings" 
      class="settings-popup"
      @click.stop
    >
      <div class="settings-header">
        <h3>Table Settings</h3>
        <button class="close-btn" @click="closeSettings">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      
      <div class="settings-content">
        <div class="setting-group">
          <label class="setting-label">Table Density</label>
          <div class="density-options">
            <button 
              class="density-option"
              :class="{ active: currentDensity === 'normal' }"
              @click="setDensity('normal')"
            >
              <div class="density-preview normal">
                <div class="preview-row"></div>
                <div class="preview-row"></div>
                <div class="preview-row"></div>
              </div>
              <span>Normal</span>
              <small>Spacious rows</small>
            </button>
            
            <button 
              class="density-option"
              :class="{ active: currentDensity === 'dense' }"
              @click="setDensity('dense')"
            >
              <div class="density-preview dense">
                <div class="preview-row"></div>
                <div class="preview-row"></div>
                <div class="preview-row"></div>
              </div>
              <span>Dense</span>
              <small>Compact rows</small>
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Backdrop -->
    <div 
      v-if="showSettings" 
      class="settings-backdrop"
      @click="closeSettings"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useTableDensity } from '~/composables/useTableDensity'

const showSettings = ref(false)
const { density: currentDensity, setDensity } = useTableDensity()

const toggleSettings = () => {
  showSettings.value = !showSettings.value
}

const closeSettings = () => {
  showSettings.value = false
}

// Close on escape key
const handleEscape = (e: KeyboardEvent) => {
  if (e.key === 'Escape') {
    closeSettings()
  }
}

onMounted(() => {
  document.addEventListener('keydown', handleEscape)
})

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.table-density-settings {
  position: relative;
  display: inline-block;
}

.settings-toggle-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  background: #2a2a2a;
  border: 1px solid #404040;
  color: #ffffff;
  padding: 6px 12px;
  border-radius: 6px;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
}

.settings-toggle-btn:hover {
  background: #333;
  border-color: rgba(4, 207, 139, 0.5);
}

.settings-toggle-btn.active {
  background: #333;
  border-color: rgba(4, 207, 139, 0.8);
  color: #04CF8B;
}

.settings-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 9998;
  background: rgba(0, 0, 0, 0.3);
}

.settings-popup {
  position: absolute;
  top: 100%;
  right: 0;
  margin-top: 8px;
  background: #1a1a1a;
  border: 1px solid #404040;
  border-radius: 8px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.4);
  z-index: 9999;
  min-width: 280px;
  max-width: 320px;
}

.settings-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
  border-bottom: 1px solid #404040;
}

.settings-header h3 {
  margin: 0;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
}

.close-btn {
  background: transparent;
  border: none;
  color: #888;
  cursor: pointer;
  padding: 4px;
  border-radius: 4px;
  transition: color 0.2s ease;
}

.close-btn:hover {
  color: #ffffff;
}

.settings-content {
  padding: 20px;
}

.setting-group {
  margin-bottom: 0;
}

.setting-label {
  display: block;
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 12px;
}

.density-options {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.density-option {
  display: flex;
  align-items: center;
  gap: 12px;
  background: transparent;
  border: 1px solid #404040;
  border-radius: 6px;
  padding: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
  text-align: left;
  width: 100%;
}

.density-option:hover {
  border-color: rgba(4, 207, 139, 0.5);
  background: rgba(4, 207, 139, 0.05);
}

.density-option.active {
  border-color: #04CF8B;
  background: rgba(4, 207, 139, 0.1);
}

.density-preview {
  display: flex;
  flex-direction: column;
  gap: 2px;
  min-width: 40px;
}

.density-preview.normal .preview-row {
  height: 6px;
  background: #333;
  border-radius: 1px;
}

.density-preview.dense .preview-row {
  height: 4px;
  background: #333;
  border-radius: 1px;
}

.density-option.active .density-preview .preview-row {
  background: #04CF8B;
}

.density-option span {
  color: #ffffff;
  font-size: 13px;
  font-weight: 500;
  flex: 1;
}

.density-option small {
  color: #888;
  font-size: 11px;
  display: block;
  margin-top: 2px;
}
</style>
