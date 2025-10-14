<template>
  <div class="sticky-actions-column">
    <slot />
  </div>
</template>

<script setup lang="ts">
// This component provides the sticky actions column styling
// It wraps the DockedActionsPanel or any other content
</script>

<style scoped>
/* Sticky Actions Column */
.sticky-actions-column {
  position: sticky;
  right: 0;
  background-color: #161818 !important;
  z-index: 30;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
}

/* Header sticky actions */
.table-header .sticky-actions-column {
  background-color: #161818 !important;
  z-index: 35;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
}

/* Dense density adjustments for Actions header */
.table-density-dense .table-header .sticky-actions-column {
  padding-left: 20px;
}

/* Row sticky actions */
.table-row .sticky-actions-column {
  background-color: #1A1A1A !important;
  z-index: 30;
}

.table-row:hover .sticky-actions-column {
  background-color: #1A1A1A !important;
  z-index: 30;
}
</style>
