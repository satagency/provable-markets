<template>
  <div class="dashboard-layout">
    <!-- Main Sidebar -->
    <aside class="main-sidebar" :class="{ 'collapsed': sidebarCollapsed }">
      <div class="sidebar-container">
            <!-- Header with Toggle Button -->
            <div class="sidebar-header">
              <button @click="toggleSidebar" class="toggle-btn">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </button>
              <div class="logo" :class="{ 'collapsed': sidebarCollapsed }">
                <svg width="106" height="13" viewBox="0 0 106 13" fill="none" xmlns="http://www.w3.org/2000/svg" class="logo-svg">
                  <path d="M3.95198 12.171C1.70998 12.171 0.474976 10.822 0.474976 9.05503C0.474976 7.21203 1.72898 5.99602 4.46498 5.99602C5.20598 5.99602 6.19398 6.14802 6.59298 6.28102V5.46403C6.59298 4.78002 6.15598 4.24802 5.07298 4.24802C4.16098 4.24802 3.62898 4.74202 3.62898 5.35002H0.892976C0.892976 3.48802 2.24198 1.89202 5.16798 1.89202C7.88498 1.89202 9.51898 3.39303 9.51898 5.46403V12H6.89698L6.68798 11.107H6.61198C6.06098 11.734 5.18698 12.171 3.95198 12.171ZM4.69298 9.89102C5.88998 9.89102 6.59298 9.18802 6.59298 8.37102V8.27602C5.98498 8.02902 5.37698 7.95302 4.80698 7.95302C3.85698 7.95302 3.36298 8.37102 3.36298 8.90302C3.36298 9.47302 3.81898 9.89102 4.69298 9.89102Z" fill="#04CF8B"/>
                  <path d="M17.2143 2.06302H20.1403V8.02903C20.1403 10.138 18.8483 12.171 15.5993 12.171C15.5803 12.171 15.5803 12.171 15.5803 12.171C12.3313 12.171 11.0393 10.138 11.0393 8.02903V2.06302H13.9653V7.59202C13.9653 8.73202 14.4403 9.41603 15.5993 9.41603C16.7393 9.41603 17.2143 8.73202 17.2143 7.59202V2.06302Z" fill="#04CF8B"/>
                  <path d="M21.8522 12V2.06302H24.2842L24.5122 3.50702H24.5882C25.0252 2.63302 25.8612 1.89202 27.1342 1.89202H27.8182V4.57102H26.8682C25.4812 4.57102 24.5882 5.50203 24.5882 7.09802V12H21.8522Z" fill="#04CF8B"/>
                  <path d="M33.531 12.171C30.301 12.171 28.572 10.024 28.572 7.04102C28.572 4.05802 30.339 1.89202 33.531 1.89202C36.723 1.89202 38.49 4.05802 38.49 7.04102C38.49 10.005 36.761 12.171 33.531 12.171ZM33.531 9.60602C34.747 9.60602 35.507 8.84602 35.507 7.04102C35.507 5.23602 34.747 4.45702 33.531 4.45702C32.315 4.45702 31.555 5.25502 31.555 7.04102C31.555 8.84602 32.334 9.60602 33.531 9.60602Z" fill="#04CF8B"/>
                  <path d="M39.73 12V2.06302H42.162L42.39 3.50702H42.466C42.903 2.63302 43.739 1.89202 45.012 1.89202H45.696V4.57102H44.746C43.359 4.57102 42.466 5.50203 42.466 7.09802V12H39.73Z" fill="#04CF8B"/>
                  <path d="M49.6485 12.171C47.4065 12.171 46.1715 10.822 46.1715 9.05503C46.1715 7.21203 47.4255 5.99602 50.1615 5.99602C50.9025 5.99602 51.8905 6.14802 52.2895 6.28102V5.46403C52.2895 4.78002 51.8525 4.24802 50.7695 4.24802C49.8575 4.24802 49.3255 4.74202 49.3255 5.35002H46.5895C46.5895 3.48802 47.9385 1.89202 50.8645 1.89202C53.5815 1.89202 55.2155 3.39303 55.2155 5.46403V12H52.5935L52.3845 11.107H52.3085C51.7575 11.734 50.8835 12.171 49.6485 12.171ZM50.3895 9.89102C51.5865 9.89102 52.2895 9.18802 52.2895 8.37102V8.27602C51.6815 8.02902 51.0735 7.95302 50.5035 7.95302C49.5535 7.95302 49.0595 8.37102 49.0595 8.90302C49.0595 9.47302 49.5155 9.89102 50.3895 9.89102Z" fill="#04CF8B"/>
                  <path d="M65.05 8.70003H63.75V7.40002H62.45V6.10002H61.15V10H59.85V0.900024H65.05V2.20002H66.35V4.80002H65.05V6.10002H63.75V7.40002H65.05V8.70003H66.35V10H65.05V8.70003ZM61.15 4.80002H65.05V2.20002H61.15V4.80002Z" fill="#D7EBFF"/>
                  <path d="M74.7949 10H68.2949V0.900024H74.7949V2.20002H69.5949V4.80002H73.4949V6.10002H69.5949V8.70003H74.7949V10Z" fill="#D7EBFF"/>
                  <path d="M80.6398 8.70003V10H79.3398V8.70003H78.0398V7.40002H76.7398V0.900024H78.0398V7.40002H79.3398V8.70003H80.6398V7.40002H81.9398V0.900024H83.2398V7.40002H81.9398V8.70003H80.6398Z" fill="#D7EBFF"/>
                  <path d="M85.1848 10V8.70003H86.4848V2.20002H85.1848V0.900024H89.0848V2.20002H87.7848V8.70003H89.0848V10H85.1848Z" fill="#D7EBFF"/>
                  <path d="M97.5398 10H91.0398V0.900024H97.5398V2.20002H92.3398V4.80002H96.2398V6.10002H92.3398V8.70003H97.5398V10Z" fill="#D7EBFF"/>
                  <path d="M104.685 8.70003V10H103.385V8.70003H102.085V10H100.785V8.70003H99.4848V0.900024H100.785V8.70003H102.085V4.80002H103.385V8.70003H104.685V0.900024H105.985V8.70003H104.685Z" fill="#D7EBFF"/>
                </svg>
              </div>
            </div>

        <!-- Main Navigation -->
        <nav class="main-nav">
          <div class="nav-section">
            <NuxtLink to="/dashboard" class="nav-item" :class="{ 'active': $route.path.startsWith('/dashboard') }">
              <div class="nav-icon">
                <HomeIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Home</span>
            </NuxtLink>

            <NuxtLink to="/marketplace" class="nav-item" :class="{ 'active': $route.path.startsWith('/marketplace') }">
              <div class="nav-icon">
                <MarketplaceIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Marketplace</span>
            </NuxtLink>

            <NuxtLink to="/trade-manager" class="nav-item" :class="{ 'active': $route.path.startsWith('/trade-manager') }">
              <div class="nav-icon">
                <TradeManagerIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Trade Manager</span>
            </NuxtLink>

            <NuxtLink to="/agreements" class="nav-item" :class="{ 'active': $route.path.startsWith('/agreements') }">
              <div class="nav-icon">
                <AgreementsIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Agreements</span>
            </NuxtLink>

            <NuxtLink to="/locates" class="nav-item" :class="{ 'active': $route.path.startsWith('/locates') }">
              <div class="nav-icon">
                <LocatesIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Locates</span>
            </NuxtLink>

            <NuxtLink to="/analytics" class="nav-item" :class="{ 'active': $route.path.startsWith('/analytics') }">
              <div class="nav-icon">
                <AnalyticsIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Analytics</span>
            </NuxtLink>

            <NuxtLink to="/reports" class="nav-item" :class="{ 'active': $route.path.startsWith('/reports') }">
              <div class="nav-icon">
                <ReportsIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Reports</span>
            </NuxtLink>
          </div>

          <!-- Divider -->
          <div class="nav-divider" :class="{ 'collapsed': sidebarCollapsed }"></div>

          <!-- Secondary Navigation -->
          <div class="nav-section secondary">
            <NuxtLink to="/swaps" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/swaps') }">
              <div class="nav-icon">
                <SwapsIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Swaps</span>
            </NuxtLink>

            <NuxtLink to="/trade-optimizer" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/trade-optimizer') }">
              <div class="nav-icon">
                <SparkleIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Trade Optimizer</span>
            </NuxtLink>

            <NuxtLink to="/basket-tool" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/basket-tool') }">
              <div class="nav-icon">
                <BasketIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Basket Tool</span>
            </NuxtLink>

            <NuxtLink to="/strategy-builder" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/strategy-builder') }">
              <div class="nav-icon">
                <StrategyIcon class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Strategy Builder</span>
            </NuxtLink>
          </div>
        </nav>

        <!-- Bottom Section -->
        <div class="sidebar-bottom">
          <NuxtLink to="/compliance" class="nav-item bottom" :class="{ 'active': $route.path.startsWith('/compliance') }">
            <div class="nav-icon">
              <ComplianceIcon class="w-5 h-5 block" />
            </div>
            <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Compliance & Legal</span>
          </NuxtLink>

          <NuxtLink to="/settings" class="nav-item bottom" :class="{ 'active': $route.path.startsWith('/settings') }">
            <div class="nav-icon">
              <SettingsIcon class="w-5 h-5 block" />
            </div>
            <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Company Settings</span>
          </NuxtLink>

          <!-- Spacing and Divider -->
          <div class="settings-spacing"></div>
          <div class="settings-divider" :class="{ 'collapsed': sidebarCollapsed }"></div>

          <!-- Company Switch Button -->
          <div class="company-switch" :class="{ 'collapsed': sidebarCollapsed }">
            <div class="company-avatar">T</div>
            <div class="company-info" :class="{ 'collapsed': sidebarCollapsed }">
              <div class="company-name">Tribeca_PL_Firm</div>
              <div class="company-type">Company</div>
            </div>
            <div class="company-arrow" :class="{ 'collapsed': sidebarCollapsed }">
              <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </aside>

        <!-- Submenu Sidebar -->
        <aside 
          class="submenu-sidebar" 
          :class="{ 'expanded': submenuExpanded }"
          @mouseenter="handleSubmenuMouseEnter"
          @mouseleave="handleSubmenuMouseLeave"
        >
          <div class="submenu-content">
            <!-- Submenu content -->
            <DashboardSubmenu v-if="currentSubmenu === 'dashboard'" />
            <MarketplaceSubmenu v-if="currentSubmenu === 'marketplace'" />
            <TradeManagerSubmenu v-if="currentSubmenu === 'trade-manager'" />
            <AgreementsSubmenu v-if="currentSubmenu === 'agreements'" />
            <LocatesSubmenu v-if="currentSubmenu === 'locates'" />
            <AnalyticsSubmenu v-if="currentSubmenu === 'analytics'" />
            <ReportsSubmenu v-if="currentSubmenu === 'reports'" />
            <TradeOptimizerSubmenu v-if="currentSubmenu === 'trade-optimizer'" />
            <BasketToolSubmenu v-if="currentSubmenu === 'basket-tool'" />
            <StrategyBuilderSubmenu v-if="currentSubmenu === 'strategy-builder'" />
            <ComplianceSubmenu v-if="currentSubmenu === 'compliance'" />
            <SettingsSubmenu v-if="currentSubmenu === 'settings'" />
          </div>
        </aside>

    <!-- Main Content Area -->
    <main class="main-content" :class="{ 'submenu-open': submenuExpanded }">
      <!-- Header -->
      <header class="main-header">
        <div class="header-left">
          <div class="market-status">
            <div class="status-indicator"></div>
            <span class="status-text">{{ currentDateTime.toUpperCase() }} • {{ marketStatus }}</span>
          </div>
        </div>
        
        <div class="header-right">
          <div class="notifications">
            <div class="notification-icon">
              <div class="notification-bell">
                <NotificationBellIcon class="w-5 h-5 block" />
              </div>
              <div class="notification-dot" :class="{ 'market-open': isMarketOpen }"></div>
            </div>
          </div>
          
          <div class="user-avatar">
            <div class="avatar-circle"></div>
          </div>
        </div>
      </header>

      <!-- Content -->
      <div class="content-area">
        <slot />
      </div>
    </main>
  </div>
</template>

<script setup lang="ts">
import { useSubmenu } from '~/composables/useSubmenu'
import DashboardSubmenu from '~/components/submenus/DashboardSubmenu.vue'
import MarketplaceSubmenu from '~/components/submenus/MarketplaceSubmenu.vue'
import TradeManagerSubmenu from '~/components/submenus/TradeManagerSubmenu.vue'
import AgreementsSubmenu from '~/components/submenus/AgreementsSubmenu.vue'
import LocatesSubmenu from '~/components/submenus/LocatesSubmenu.vue'
import AnalyticsSubmenu from '~/components/submenus/AnalyticsSubmenu.vue'
import ReportsSubmenu from '~/components/submenus/ReportsSubmenu.vue'
import TradeOptimizerSubmenu from '~/components/submenus/TradeOptimizerSubmenu.vue'
import BasketToolSubmenu from '~/components/submenus/BasketToolSubmenu.vue'
import StrategyBuilderSubmenu from '~/components/submenus/StrategyBuilderSubmenu.vue'
import ComplianceSubmenu from '~/components/submenus/ComplianceSubmenu.vue'
import SettingsSubmenu from '~/components/submenus/SettingsSubmenu.vue'

// Import icon components directly
import {
  HomeIcon,
  MarketplaceIcon,
  TradeManagerIcon,
  AgreementsIcon,
  LocatesIcon,
  AnalyticsIcon,
  ReportsIcon,
  SwapsIcon,
  SparkleIcon,
  BasketIcon,
  StrategyIcon,
  NotificationBellIcon,
  ComplianceIcon,
  SettingsIcon
} from '~/components/icons'

// Sidebar toggle state
const sidebarCollapsed = ref(false)

// Real-time clock and market status
const currentDateTime = ref('')
const isMarketOpen = ref(false)
const marketStatus = ref('MARKET CLOSED')

// Check if market is open (9:30 AM - 4:00 PM EST, Monday-Friday)
const checkMarketStatus = () => {
  const now = new Date()
  const estTime = new Date(now.toLocaleString("en-US", {timeZone: "America/New_York"}))
  const day = estTime.getDay() // 0 = Sunday, 6 = Saturday
  const hour = estTime.getHours()
  const minute = estTime.getMinutes()
  const timeInMinutes = hour * 60 + minute
  
  // Market hours: 9:30 AM (570 minutes) to 4:00 PM (960 minutes), Monday-Friday
  const marketOpenTime = 9 * 60 + 30 // 9:30 AM
  const marketCloseTime = 16 * 60 // 4:00 PM
  
  const isWeekday = day >= 1 && day <= 5
  const isMarketHours = timeInMinutes >= marketOpenTime && timeInMinutes < marketCloseTime
  
  isMarketOpen.value = isWeekday && isMarketHours
  marketStatus.value = isMarketOpen.value ? 'MARKET OPEN' : 'MARKET CLOSED'
}

// Update clock every second
const updateClock = () => {
  const now = new Date()
  const options = {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    timeZoneName: 'short'
  }
  currentDateTime.value = now.toLocaleDateString('en-US', options)
  checkMarketStatus()
}

// Use submenu composable
const { submenuExpanded, currentSubmenu, expandSubmenu, collapseSubmenu } = useSubmenu()

// Auto-collapse submenu after 6 seconds
const autoCollapseTimer = ref(null)
const isHoveringSubmenu = ref(false)

// Start auto-collapse timer
const startAutoCollapseTimer = () => {
  // Clear existing timer
  if (autoCollapseTimer.value) {
    clearTimeout(autoCollapseTimer.value)
  }
  
  // Set new timer for 3 seconds
  autoCollapseTimer.value = setTimeout(() => {
    if (!isHoveringSubmenu.value && submenuExpanded.value) {
      collapseSubmenu()
    }
  }, 3000)
}

// Handle submenu hover
const handleSubmenuMouseEnter = () => {
  isHoveringSubmenu.value = true
  // Clear auto-collapse timer when hovering
  if (autoCollapseTimer.value) {
    clearTimeout(autoCollapseTimer.value)
  }
  // Expand submenu when hovering (even if it was collapsed)
  if (currentSubmenu.value) {
    // Force expand even if it's the same submenu
    expandSubmenu(currentSubmenu.value, true)
  }
}

const handleSubmenuMouseLeave = () => {
  isHoveringSubmenu.value = false
  // Restart auto-collapse timer when leaving hover
  if (submenuExpanded.value) {
    startAutoCollapseTimer()
  }
}

// Toggle sidebar function
const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

// Auto-expand submenu based on current route
const route = useRoute()

// Define which routes have submenus
const routesWithSubmenus = [
  'dashboard', 'marketplace', 'trade-manager', 'agreements', 'locates', 
  'analytics', 'reports', 'trade-optimizer', 'basket-tool', 
  'strategy-builder', 'compliance', 'settings'
]

onMounted(() => {
  // Initialize clock
  updateClock()
  
  // Set up interval to update clock every second
  const clockInterval = setInterval(updateClock, 1000)
  
  // Clean up interval on unmount
  onUnmounted(() => {
    clearInterval(clockInterval)
    if (autoCollapseTimer.value) {
      clearTimeout(autoCollapseTimer.value)
    }
  })
  
  const pathSegments = route.path.split('/').filter(Boolean)
  if (pathSegments.length > 0 && routesWithSubmenus.includes(pathSegments[0])) {
    expandSubmenu(pathSegments[0])
    // Start auto-collapse timer when submenu expands
    startAutoCollapseTimer()
  } else {
    collapseSubmenu()
  }
})

// Watch for route changes
watch(() => route.path, (newPath) => {
  const pathSegments = newPath.split('/').filter(Boolean)
  if (pathSegments.length > 0 && routesWithSubmenus.includes(pathSegments[0])) {
    expandSubmenu(pathSegments[0])
    // Start auto-collapse timer when submenu expands
    startAutoCollapseTimer()
  } else {
    collapseSubmenu()
  }
})
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  height: 100vh;
  background-color: #121212;
  color: white;
  /* Prevent layout shifts */
  overflow: hidden;
}

/* Main Sidebar */
    .main-sidebar {
      width: 256px;
      background-color: #161818;
      transition: width 0.3s ease;
      flex-shrink: 0;
      position: relative;
    }

    .main-sidebar.collapsed {
      width: 60px;
    }

    .sidebar-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      padding: 12px;
      gap: 8px;
    }

.sidebar-header {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  border-radius: 3px;
  height: 40px;
}

.toggle-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  background: none;
  border: none;
  color: #ccc;
  cursor: pointer;
  transition: color 0.2s ease;
  flex-shrink: 0;
}

.toggle-btn:hover {
  color: white;
}

.logo {
  display: flex;
  align-items: center;
  gap: 3.2px;
  padding: 2px 9px 4px 0;
  border-radius: 90px;
  transition: opacity 0.15s ease;
  opacity: 1 !important;
  width: auto !important;
}


.logo.collapsed {
  opacity: 0 !important;
  width: 0 !important;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.logo-svg {
  height: 16px;
  width: auto;
  display: block;
}

.main-nav {
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

    .nav-section {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .nav-divider {
      height: 1px;
      background-color: rgba(185, 198, 195, 0.15);
      margin: 0;
      transition: opacity 0.15s ease;
    }

.nav-divider.collapsed {
  opacity: 0;
  height: 0;
  margin: 0;
}

/* Settings spacing and divider */
.settings-spacing {
  height: 12px;
}

.settings-divider {
  height: 1px;
  background-color: rgba(185, 198, 195, 0.15);
  margin: 0 0 16px 0;
  transition: opacity 0.15s ease;
}

.settings-divider.collapsed {
  opacity: 0;
  height: 0;
  margin: 0;
}


    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px;
      color: rgba(255, 255, 255, 0.7); /* 70% opacity for inactive */
      text-decoration: none;
      border-radius: 3px;
      height: 40px;
      transition: all 0.2s ease;
      font-family: 'Roboto', sans-serif;
      font-size: 14px;
      font-weight: 400;
    }

.nav-item:hover {
  background-color: rgba(199, 209, 207, 0.1);
  color: #ffffff; /* 100% white on hover */
}

    .nav-item.active {
      background-color: rgba(199, 209, 207, 0.1);
      color: #ffffff; /* 100% white when active */
    }

    .nav-item.secondary {
      color: rgba(255, 255, 255, 0.7); /* 70% opacity for secondary */
    }

.nav-item.bottom {
  color: rgba(255, 255, 255, 0.7); /* 70% opacity for bottom items */
}



.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.nav-icon img {
  filter: brightness(0) saturate(100%) invert(57%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
}

.nav-item.active .nav-icon svg,
.nav-item:hover .nav-icon svg {
  color: #ffffff !important;
}

.nav-item .nav-icon svg {
  color: rgba(255, 255, 255, 0.7) !important;
  transition: color 0.2s ease;
}

.nav-label {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
  transition: opacity 0.15s ease;
  opacity: 1 !important;
  width: auto !important;
}

.nav-item.active .nav-label {
  font-weight: 500;
}

.nav-label.collapsed {
  opacity: 0 !important;
  width: 0 !important;
  overflow: hidden;
  margin: 0;
  padding: 0;
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-top: auto;
}

.company-switch {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 2px 8px;
  border-radius: 3px;
  height: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  position: relative;
}

.company-switch.collapsed {
  padding: 2px 8px;
  gap: 0;
}

.company-info.collapsed {
  display: none;
}

.company-arrow.collapsed {
  display: none;
}

.company-switch:hover {
  background-color: rgba(199, 209, 207, 0.1);
}

.company-avatar {
  width: 24px;
  height: 24px;
  background-color: #8a744a;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 11.438px;
  text-transform: uppercase;
  flex-shrink: 0;
}

.company-info {
  display: flex;
  flex-direction: column;
  flex: 1;
  gap: 1px;
}

.company-name {
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 14px;
  color: #e1e3e3;
  line-height: 16px;
}

.company-type {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgba(242, 247, 247, 0.75);
  line-height: 14px;
}

.company-arrow {
  width: 12px;
  height: 12px;
  color: #ccc;
  flex-shrink: 0;
}

/* Submenu Sidebar */
.submenu-sidebar {
  width: 12px; /* Increased hoverable area for easier testing */
  background-color: #161818; /* Fade in background to blend with main sidebar */
  border-right: 1px solid #202020;
  transition: width 0.3s ease, background-color 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;
  cursor: pointer; /* Add cursor to indicate hoverable area */
}


.submenu-sidebar.expanded {
  width: 230px;
  background-color: transparent; /* Transparent when expanded */
}

    .submenu-content {
      padding: 1rem;
      width: 230px;
      background-color: transparent;
    }


/* Main Content */
.main-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.main-content.submenu-open {
  /* Adjust content when submenu is open */
}

.main-header {
  height: 50px;
  background-color: #1a1a1a;
  border-bottom: 1px solid #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1rem;
  flex-shrink: 0;
}

.header-left {
  display: flex;
  align-items: center;
}

.market-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.status-indicator {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background-color: #ef4444;
}

.status-text {
  font-family: 'Roboto Mono', monospace;
  font-size: 10px;
  color: #898989;
}

.header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.notifications {
  position: relative;
}

.notification-icon {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
}

.notification-bell {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
}

.notification-dot {
  position: absolute;
  top: -2px;
  right: -2px;
  width: 8px;
  height: 8px;
  background-color: #ef4444;
  border: 1px solid #000000;
  border-radius: 50%;
  z-index: 10;
}

.notification-dot.market-open {
  background-color: #10b981;
}

.user-avatar {
  cursor: pointer;
}

.avatar-circle {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: #6B7280;
}

.content-area {
  flex: 1;
  padding: 12px;
  overflow: hidden;
  background-color: #121212;
}

/* Responsive */
@media (max-width: 768px) {
  .main-sidebar {
    width: 0;
    overflow: hidden;
  }
  
  .main-sidebar.collapsed {
    width: 0;
  }
  
  .submenu-sidebar.expanded {
    width: 100%;
  }
  
  .submenu-content {
    width: 100%;
  }
}
</style>
