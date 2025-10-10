<template>
  <svg 
    :class="iconClass" 
    :width="size" 
    :height="size" 
    fill="currentColor" 
    viewBox="0 0 256 256"
  >
    <path d="M232.49,112.49l-48,48a12,12,0,0,1-17-17L195,116H128a84.09,84.09,0,0,0-84,84,12,12,0,0,1-24,0A108.12,108.12,0,0,1,128,92h67L167.51,64.48a12,12,0,0,1,17-17l48,48A12,12,0,0,1,232.49,112.49Z"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: string | number
  class?: string
}

const props = withDefaults(defineProps<Props>(), {
  size: '20',
  class: ''
})

const iconClass = computed(() => {
  return props.class || 'action-icon'
})
</script>
