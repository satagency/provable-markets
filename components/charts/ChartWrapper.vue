<template>
  <div class="chart-wrapper">
    <slot v-if="isMounted" />
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<style scoped>
.chart-wrapper {
  width: 100%;
  height: 100%;
}
</style>

