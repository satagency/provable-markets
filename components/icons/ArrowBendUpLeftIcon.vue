<template>
  <svg 
    :class="iconClass" 
    :width="size" 
    :height="size" 
    fill="currentColor" 
    viewBox="0 0 256 256"
  >
    <path d="M236,200a12,12,0,0,1-24,0,84.09,84.09,0,0,0-84-84H61l27.52,27.51a12,12,0,0,1-17,17l-48-48a12,12,0,0,1,0-17l48-48a12,12,0,0,1,17,17L61,92h67A108.12,108.12,0,0,1,236,200Z"/>
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
