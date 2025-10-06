<template>
  <div class="submenu-dropdown">
    <button 
      @click="toggleDropdown" 
      class="dropdown-trigger"
      :class="{ 'active': isOpen }"
    >
      <span class="dropdown-label">
        <slot name="label">
          {{ label }}
        </slot>
      </span>
      <svg 
        class="dropdown-arrow" 
        :class="{ 'rotated': isOpen }"
        width="12" 
        height="12" 
        viewBox="0 0 12 12" 
        fill="none"
      >
        <path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
    
    <div v-if="isOpen" class="dropdown-content">
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  label: string
  defaultOpen?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  defaultOpen: false
})

const isOpen = ref(props.defaultOpen)

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}
</script>

<style scoped>
.submenu-dropdown {
  margin-bottom: 0.25rem;
}

.dropdown-trigger {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 0.75rem 0.5rem;
  background: none;
  border: none;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  border-radius: 0.375rem;
  transition: all 0.2s ease;
  font-size: 0.813rem;
  font-weight: 400;
  cursor: pointer;
}

.dropdown-trigger:hover {
  background-color: #2a2a2a;
  color: rgba(255, 255, 255, 1);
}

.dropdown-trigger.active {
  background-color: #2a2a2a;
  color: rgba(255, 255, 255, 1);
  font-weight: 600;
}

.dropdown-label {
  font-size: 0.813rem;
  font-weight: inherit;
  display: flex;
  align-items: center;
}

.dropdown-arrow {
  color: rgba(255, 255, 255, 0.6);
  transition: transform 0.2s ease;
  flex-shrink: 0;
}

.dropdown-arrow.rotated {
  transform: rotate(180deg);
}

.dropdown-content {
  margin-left: 1rem;
  margin-top: 0.25rem;
  padding-left: 0.5rem;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
}

.dropdown-content :deep(.submenu-item) {
  margin-left: 0;
  padding-left: 0.5rem;
}
</style>
