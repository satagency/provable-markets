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
                <span class="logo-text aurora">aurora</span>
                <span class="logo-text review">REVIEW</span>
              </div>
            </div>

        <!-- Main Navigation -->
        <nav class="main-nav">
          <div class="nav-section">
            <NuxtLink to="/dashboard" class="nav-item" :class="{ 'active': $route.path.startsWith('/dashboard') }">
              <div class="nav-icon">
                <img :src="customIcons.home" alt="Home" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Home</span>
            </NuxtLink>

            <NuxtLink to="/marketplace" class="nav-item" :class="{ 'active': $route.path.startsWith('/marketplace') }">
              <div class="nav-icon">
                <img :src="customIcons.marketplace" alt="Marketplace" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Marketplace</span>
            </NuxtLink>

            <NuxtLink to="/trade-manager" class="nav-item" :class="{ 'active': $route.path.startsWith('/trade-manager') }">
              <div class="nav-icon">
                <img :src="customIcons.tradeManager" alt="Trade Manager" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Trade Manager</span>
            </NuxtLink>

            <NuxtLink to="/agreements" class="nav-item" :class="{ 'active': $route.path.startsWith('/agreements') }">
              <div class="nav-icon">
                <img :src="customIcons.agreements" alt="Agreements" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Agreements</span>
            </NuxtLink>

            <NuxtLink to="/locates" class="nav-item" :class="{ 'active': $route.path.startsWith('/locates') }">
              <div class="nav-icon">
                <img :src="customIcons.locates" alt="Locates" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Locates</span>
            </NuxtLink>

            <NuxtLink to="/analytics" class="nav-item" :class="{ 'active': $route.path.startsWith('/analytics') }">
              <div class="nav-icon">
                <img :src="customIcons.analytics" alt="Analytics" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Analytics</span>
            </NuxtLink>

            <NuxtLink to="/reports" class="nav-item" :class="{ 'active': $route.path.startsWith('/reports') }">
              <div class="nav-icon">
                <img :src="customIcons.reports" alt="Reports" class="w-5 h-5 block" />
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
                <img :src="customIcons.swaps" alt="Swaps" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Swaps</span>
            </NuxtLink>

            <NuxtLink to="/trade-optimizer" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/trade-optimizer') }">
              <div class="nav-icon">
                <img :src="customIcons.sparkle" alt="Trade Optimizer" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Trade Optimizer</span>
            </NuxtLink>

            <NuxtLink to="/basket-tool" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/basket-tool') }">
              <div class="nav-icon">
                <img :src="customIcons.basket" alt="Basket Tool" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Basket Tool</span>
            </NuxtLink>

            <NuxtLink to="/strategy-builder" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/strategy-builder') }">
              <div class="nav-icon">
                <img :src="customIcons.strategy" alt="Strategy Builder" class="w-5 h-5 block" />
              </div>
              <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Strategy Builder</span>
            </NuxtLink>
          </div>
        </nav>

        <!-- Bottom Section -->
        <div class="sidebar-bottom">
          <NuxtLink to="/compliance" class="nav-item bottom" :class="{ 'active': $route.path.startsWith('/compliance') }">
            <div class="nav-icon">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
            </div>
            <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Compliance & Legal</span>
          </NuxtLink>

          <NuxtLink to="/settings" class="nav-item bottom" :class="{ 'active': $route.path.startsWith('/settings') }">
            <div class="nav-icon">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <span class="nav-label" :class="{ 'collapsed': sidebarCollapsed }">Company Settings</span>
          </NuxtLink>

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
        <aside class="submenu-sidebar" :class="{ 'expanded': submenuExpanded }">
          <div class="submenu-content">
            <!-- Loading indicator during transition -->
            <div v-if="isTransitioning" class="submenu-loading">
              <div class="loading-dots">
                <div class="dot"></div>
                <div class="dot"></div>
                <div class="dot"></div>
              </div>
            </div>
            
            <!-- Submenu content -->
            <DashboardSubmenu v-if="currentSubmenu === 'dashboard' && !isTransitioning" />
            <MarketplaceSubmenu v-if="currentSubmenu === 'marketplace' && !isTransitioning" />
            <TradeManagerSubmenu v-if="currentSubmenu === 'trade-manager' && !isTransitioning" />
            <AgreementsSubmenu v-if="currentSubmenu === 'agreements' && !isTransitioning" />
            <LocatesSubmenu v-if="currentSubmenu === 'locates' && !isTransitioning" />
            <AnalyticsSubmenu v-if="currentSubmenu === 'analytics' && !isTransitioning" />
            <ReportsSubmenu v-if="currentSubmenu === 'reports' && !isTransitioning" />
            <TradeOptimizerSubmenu v-if="currentSubmenu === 'trade-optimizer' && !isTransitioning" />
            <BasketToolSubmenu v-if="currentSubmenu === 'basket-tool' && !isTransitioning" />
            <StrategyBuilderSubmenu v-if="currentSubmenu === 'strategy-builder' && !isTransitioning" />
            <ComplianceSubmenu v-if="currentSubmenu === 'compliance' && !isTransitioning" />
            <SettingsSubmenu v-if="currentSubmenu === 'settings' && !isTransitioning" />
          </div>
        </aside>

    <!-- Main Content Area -->
    <main class="main-content" :class="{ 'submenu-open': submenuExpanded }">
      <!-- Header -->
      <header class="main-header">
        <div class="header-left">
          <div class="market-status">
            <div class="status-indicator"></div>
            <span class="status-text">{{ currentDateTime.toUpperCase() }} • MARKET CLOSED</span>
          </div>
        </div>
        
        <div class="header-right">
          <div class="notifications">
            <div class="notification-icon">
              <div class="notification-bell">
                <img :src="customIcons.notificationBell" alt="Notifications" class="w-5 h-5 block" />
              </div>
              <div class="notification-dot"></div>
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

// Custom icons from Figma
import { customIcons } from '~/composables/useCustomIcons'

// Sidebar toggle state
const sidebarCollapsed = ref(false)

// Real-time clock
const currentDateTime = ref('')

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
}

// Use submenu composable
const { submenuExpanded, currentSubmenu, isTransitioning, expandSubmenu, collapseSubmenu } = useSubmenu()

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
  })
  
  const pathSegments = route.path.split('/').filter(Boolean)
  if (pathSegments.length > 0 && routesWithSubmenus.includes(pathSegments[0])) {
    expandSubmenu(pathSegments[0])
  } else {
    collapseSubmenu()
  }
})

// Watch for route changes
watch(() => route.path, (newPath) => {
  const pathSegments = newPath.split('/').filter(Boolean)
  if (pathSegments.length > 0 && routesWithSubmenus.includes(pathSegments[0])) {
    expandSubmenu(pathSegments[0])
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

.logo-text.aurora {
  font-family: 'Basier Circle', sans-serif;
  font-weight: bold;
  font-size: 19px;
  color: #04cf8b;
  line-height: 1;
  letter-spacing: -0.19px;
}

.logo-text.review {
  font-family: 'Matrix Sans', sans-serif;
  font-size: 13px;
  color: #d7ebff;
  line-height: 100%;
  letter-spacing: 0.65px;
  text-transform: uppercase;
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


    .nav-item {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px;
      color: #8F8F8F;
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
  color: #f2f7f7;
}

    .nav-item.active {
      background-color: rgba(199, 209, 207, 0.1);
      color: #f2f7f7;
    }

    .nav-item.secondary {
      color: #8F8F8F;
    }

    .nav-item.bottom {
      color: #8F8F8F;
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

.nav-item.active .nav-icon img,
.nav-item:hover .nav-icon img {
  filter: brightness(0) saturate(100%) invert(95%) sepia(0%) saturate(0%) hue-rotate(0deg) brightness(100%) contrast(100%);
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
  gap: 4px;
}

.company-name {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 14px;
  color: #e1e3e3;
  line-height: 20px;
}

.company-type {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 12px;
  color: rgba(242, 247, 247, 0.75);
  line-height: 16px;
}

.company-arrow {
  width: 12px;
  height: 12px;
  color: #ccc;
  flex-shrink: 0;
}

/* Submenu Sidebar */
.submenu-sidebar {
  width: 0;
  background-color: transparent;
  border-right: 1px solid #202020;
  transition: width 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;
}

.submenu-sidebar.expanded {
  width: 230px;
}

    .submenu-content {
      padding: 1rem;
      width: 230px;
      background-color: transparent;
    }

    .submenu-loading {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 200px;
      padding: 1rem;
    }

    .loading-dots {
      display: flex;
      gap: 4px;
    }

    .dot {
      width: 6px;
      height: 6px;
      background-color: rgba(255, 255, 255, 0.4);
      border-radius: 50%;
      animation: loading-dots 1.4s infinite ease-in-out both;
    }

    .dot:nth-child(1) {
      animation-delay: -0.32s;
    }

    .dot:nth-child(2) {
      animation-delay: -0.16s;
    }

    @keyframes loading-dots {
      0%, 80%, 100% {
        transform: scale(0);
        opacity: 0.5;
      }
      40% {
        transform: scale(1);
        opacity: 1;
      }
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
  padding: 1rem;
  overflow: auto;
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
