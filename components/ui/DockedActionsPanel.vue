<template>
  <div class="docked-actions-panel">
    <button 
      class="action-icon-btn close-btn"
      @click="handleClose"
      title="Close"
    >
      <svg class="action-icon" fill="currentColor" viewBox="0 0 256 256">
        <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"/>
      </svg>
    </button>
    <button 
      class="action-icon-btn edit-btn"
      @click="handleEdit"
      title="Edit"
    >
      <svg class="action-icon" fill="currentColor" viewBox="0 0 256 256">
        <path d="M227.31,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96A16,16,0,0,0,227.31,73.37ZM192,108.68,147.31,64,168,43.31,212.69,88ZM48,163.31l76.69-76.68,44.68,44.69L92.69,208H48Z"/>
      </svg>
    </button>
    <button 
      v-if="showToggle"
      class="action-icon-btn toggle-btn"
      @click="handleToggle"
      :class="{ 'active': isToggled }"
      :title="toggleTitle"
    >
      <!-- Arrow Bend Up Left (holding back from market) -->
      <ArrowBendUpLeftIcon v-if="!isToggled" class="action-icon" />
      <!-- Arrow Bend Up Right (exposing to market) -->
      <ArrowBendUpRightIcon v-else class="action-icon" />
    </button>
    <button 
      class="action-icon-btn view-btn"
      @click="handleView"
      :class="{ 'active': isSelected }"
      :title="viewTitle"
    >
      <!-- Outline eye icon (default) -->
      <svg v-if="!isSelected" class="action-icon" fill="currentColor" viewBox="0 0 256 256">
        <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"/>
      </svg>
      <!-- Filled eye icon (active) -->
      <svg v-else class="action-icon" fill="currentColor" viewBox="0 0 256 256">
        <path d="M128,48C61.43,48,17.51,105.18,8.69,124.76a8,8,0,0,0,0,6.5c8.82,19.58,52.74,76.74,119.31,76.74s110.49-57.16,119.31-76.74a8,8,0,0,0,0-6.5C238.49,105.18,194.57,48,128,48Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,160Zm0-80a32,32,0,1,0,32,32A32,32,0,0,0,128,80Z"/>
      </svg>
    </button>
  </div>
</template>

<script setup lang="ts">
import { ArrowBendUpLeftIcon, ArrowBendUpRightIcon } from '~/components/icons'

interface Props {
  isToggled?: boolean
  isSelected?: boolean
  showToggle?: boolean
  closeTitle?: string
  editTitle?: string
  toggleTitle?: string
  viewTitle?: string
}

const props = withDefaults(defineProps<Props>(), {
  isToggled: false,
  isSelected: false,
  showToggle: true,
  closeTitle: 'Close',
  editTitle: 'Edit',
  toggleTitle: 'Toggle Status',
  viewTitle: 'View Details'
})

const emit = defineEmits(['close', 'edit', 'toggle', 'view'])

const handleClose = () => emit('close')
const handleEdit = () => emit('edit')
const handleToggle = () => emit('toggle')
const handleView = () => emit('view')
</script>

<style scoped>
/* Docked Actions Panel */
.docked-actions-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 0 12px 0 16px;
  margin-right: 12px;
  box-sizing: border-box;
}

.action-icon-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 32px;
  height: 32px;
  box-sizing: border-box;
}

.action-icon-btn:hover {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
}

.action-icon-btn.active {
  color: #ffffff;
  background-color: transparent;
}

.action-icon-btn.close-btn:hover {
  color: #ef4444;
  background-color: transparent;
}

.action-icon-btn.edit-btn:hover {
  color: rgba(255, 255, 255, 0.9);
  background-color: transparent;
}

.action-icon-btn.toggle-btn:hover {
  color: rgba(255, 255, 255, 0.9);
  background-color: transparent;
}

.action-icon-btn.view-btn:hover {
  color: rgba(255, 255, 255, 0.9);
  background-color: transparent;
}

.action-icon {
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  flex-shrink: 0;
  max-width: 100%;
  max-height: 100%;
}

/* Dense density adjustments */
.table-density-dense .docked-actions-panel {
  gap: 6px;
  padding: 0 10px 0 12px;
  margin-right: 10px;
}

.table-density-dense .action-icon-btn {
  min-width: 28px;
  height: 28px;
  padding: 4px;
}

.table-density-dense .action-icon {
  width: 16px;
  height: 16px;
}
</style>
