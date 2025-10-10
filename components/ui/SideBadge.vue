<template>
  <div :class="badgeClass">
    <span :class="textClass">{{ side }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  side: 'LENDER' | 'BORROWER'
}

const props = defineProps<Props>()

const badgeClass = computed(() => {
  return props.side === 'LENDER' ? 'side-badge lending-badge' : 'side-badge borrowing-badge'
})

const textClass = computed(() => {
  return props.side === 'LENDER' ? 'side-text lend-text' : 'side-text borrow-text'
})
</script>

<style scoped>
.side-badge {
  border-radius: 4px;
  padding: 4px 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  height: 20px;
}

.lending-badge {
  background: linear-gradient(90deg, rgba(37, 99, 235, 0.43) 0%, rgba(37, 99, 235, 0.43) 100%);
  border: 1px solid #42BED9;
}

.borrowing-badge {
  background: linear-gradient(90deg, rgba(81, 207, 102, 0.43) 0%, rgba(81, 207, 102, 0.43) 100%);
  border: 1px solid #51cf66;
}

.side-text {
  font-family: 'Matrix Sans SC', monospace;
  font-size: 9.905px;
  letter-spacing: 0.4952px;
  text-transform: uppercase;
  font-weight: 400;
  line-height: normal;
}

.lend-text {
  color: #3ffff6;
}

.borrow-text {
  color: #7dd87d;
}
</style>
