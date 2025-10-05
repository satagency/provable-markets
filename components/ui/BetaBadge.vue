<template>
  <svg 
    :width="width" 
    :height="height" 
    viewBox="0 0 41 21" 
    fill="none" 
    xmlns="http://www.w3.org/2000/svg"
    class="beta-badge-svg"
  >
    <rect x="0.5" y="0.5" width="39.1906" height="19.4" rx="2.5" fill="#181818"/>
    <rect x="0.5" y="0.5" width="39.1906" height="19.4" rx="2.5" stroke="#585858"/>
    <path d="M10.8 14.4H6V6H10.8V7.2H12V9.6H10.8V10.8H12V13.2H10.8V14.4ZM7.2 13.2H10.8V10.8H7.2V13.2ZM7.2 9.6H10.8V7.2H7.2V9.6Z" fill="#929292"/>
    <path d="M19.7953 14.4H13.7953V6H19.7953V7.2H14.9953V9.6H18.5953V10.8H14.9953V13.2H19.7953V14.4Z" fill="#929292"/>
    <path d="M21.5906 7.2V6H27.5906V7.2H25.1906V14.4H23.9906V7.2H21.5906Z" fill="#929292"/>
    <path d="M32.9906 14.4V12H29.3906V14.4H28.1906V8.4H29.3906V7.2H30.5906V6H31.7906V7.2H32.9906V8.4H34.1906V14.4H32.9906ZM29.3906 10.8H32.9906V8.4H31.7906V7.2H30.5906V8.4H29.3906V10.8Z" fill="#929292"/>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  size?: 'small' | 'medium' | 'large'
}

const props = withDefaults(defineProps<Props>(), {
  size: 'medium'
})

const width = computed(() => {
  switch (props.size) {
    case 'small': return 28
    case 'large': return 55
    default: return 41
  }
})

const height = computed(() => {
  switch (props.size) {
    case 'small': return 14
    case 'large': return 28
    default: return 21
  }
})
</script>

<style scoped>
.beta-badge-svg {
  display: inline-block;
  vertical-align: middle;
  flex-shrink: 0;
}
</style>
