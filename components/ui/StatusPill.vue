<template>
  <span :class="statusClass">
    {{ status }}
  </span>
</template>

<script setup lang="ts">
import { computed } from 'vue'

interface Props {
  status: 'OPEN' | 'HELD' | 'PARTIAL' | 'FILLED' | 'EXPIRED' | 'CLOSED' | 'CANCEL' | 'CREATED' | 'AMENDED' | 'EXECUTED' | 'NEW'
}

const props = defineProps<Props>()

const statusClass = computed(() => {
  return `status-pill status-${props.status.toLowerCase()}`
})
</script>

<style scoped>
.status-pill {
  border-radius: 4px;
  padding: 4px 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  height: 20px;
  font-weight: 600;
  font-size: 9.905px;
  text-transform: uppercase;
  letter-spacing: 0.4952px;
  font-family: 'Matrix Sans SC', monospace;
}

/* OPEN - Green */
.status-open {
  background: linear-gradient(90deg, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.8) 100%);
  border: 1px solid #22c55e;
  color: white;
}

/* HELD - Amber */
.status-held {
  background: linear-gradient(90deg, rgba(255, 183, 77, 0.8) 0%, rgba(255, 183, 77, 0.8) 100%);
  border: 1px solid #ffb74d;
  color: white;
}

/* PARTIAL - Orange */
.status-partial {
  background: linear-gradient(90deg, rgba(255, 140, 0, 0.8) 0%, rgba(255, 140, 0, 0.8) 100%);
  border: 1px solid #ff8c00;
  color: white;
}

/* FILLED - Gray (muted, not actionable) */
.status-filled {
  background: linear-gradient(90deg, rgba(136, 136, 136, 0.43) 0%, rgba(136, 136, 136, 0.43) 100%);
  border: 1px solid #666666;
  color: #888888;
  font-weight: 500;
}

/* EXPIRED - Purple */
.status-expired {
  background: linear-gradient(90deg, rgba(156, 39, 176, 0.8) 0%, rgba(156, 39, 176, 0.8) 100%);
  border: 1px solid #9c27b0;
  color: white;
}

/* CLOSED - Blue-gray */
.status-closed {
  background: linear-gradient(90deg, rgba(96, 125, 139, 0.8) 0%, rgba(96, 125, 139, 0.8) 100%);
  border: 1px solid #607d8b;
  color: white;
}

/* CANCEL - Red */
.status-cancel {
  background: linear-gradient(90deg, rgba(244, 67, 54, 0.8) 0%, rgba(244, 67, 54, 0.8) 100%);
  border: 1px solid #f44336;
  color: white;
}

/* CREATED - Blue */
.status-created {
  background: linear-gradient(90deg, rgba(33, 150, 243, 0.8) 0%, rgba(33, 150, 243, 0.8) 100%);
  border: 1px solid #2196f3;
  color: white;
}

/* AMENDED - Gray */
.status-amended {
  background: linear-gradient(90deg, rgba(136, 136, 136, 0.8) 0%, rgba(136, 136, 136, 0.8) 100%);
  border: 1px solid #888888;
  color: white;
}

/* EXECUTED - Orange */
.status-executed {
  background: linear-gradient(90deg, rgba(255, 140, 0, 0.8) 0%, rgba(255, 140, 0, 0.8) 100%);
  border: 1px solid #ff8c00;
  color: white;
}

/* NEW - Green */
.status-new {
  background: linear-gradient(90deg, rgba(34, 197, 94, 0.8) 0%, rgba(34, 197, 94, 0.8) 100%);
  border: 1px solid #22c55e;
  color: white;
}
</style>
