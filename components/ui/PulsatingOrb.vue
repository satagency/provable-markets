<template>
  <div class="pulsating-orb" :class="{ 'small': size === 'small', 'large': size === 'large' }">
    <div class="orb-core"></div>
    <div class="orb-pulse-1"></div>
    <div class="orb-pulse-2"></div>
    <div class="orb-pulse-3"></div>
  </div>
</template>

<script setup lang="ts">
interface Props {
  size?: 'small' | 'medium' | 'large'
}

withDefaults(defineProps<Props>(), {
  size: 'medium'
})
</script>

<style scoped>
.pulsating-orb {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 8px;
  height: 8px;
  margin-left: 6px;
}

.pulsating-orb.small {
  width: 6px;
  height: 6px;
  margin-left: 4px;
}

.pulsating-orb.large {
  width: 12px;
  height: 12px;
  margin-left: 8px;
}

.orb-core {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, #04CF8B 0%, #00B876 100%);
  border-radius: 50%;
  z-index: 4;
  box-shadow: 0 0 4px rgba(4, 207, 139, 0.6);
}

.orb-pulse-1,
.orb-pulse-2,
.orb-pulse-3 {
  position: absolute;
  border-radius: 50%;
  background: rgba(4, 207, 139, 0.3);
  animation: pulse 2s ease-in-out infinite;
}

.orb-pulse-1 {
  width: 100%;
  height: 100%;
  animation-delay: 0s;
}

.orb-pulse-2 {
  width: 150%;
  height: 150%;
  animation-delay: 0.3s;
}

.orb-pulse-3 {
  width: 200%;
  height: 200%;
  animation-delay: 0.6s;
}

@keyframes pulse {
  0% {
    transform: scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: scale(1.2);
    opacity: 0.4;
  }
  100% {
    transform: scale(1.6);
    opacity: 0;
  }
}

/* Small size adjustments */
.pulsating-orb.small .orb-pulse-2 {
  width: 120%;
  height: 120%;
}

.pulsating-orb.small .orb-pulse-3 {
  width: 160%;
  height: 160%;
}

/* Large size adjustments */
.pulsating-orb.large .orb-pulse-2 {
  width: 180%;
  height: 180%;
}

.pulsating-orb.large .orb-pulse-3 {
  width: 250%;
  height: 250%;
}
</style>
