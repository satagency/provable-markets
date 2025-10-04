<template>
  <div class="dashboard-layout">
    <!-- Main Sidebar -->
    <aside class="main-sidebar" :class="{ 'collapsed': sidebarCollapsed }">
      <div class="sidebar-container">
        <!-- Header with Toggle Button -->
        <div class="sidebar-header">
          <button @click="toggleSidebar" class="toggle-btn">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M3 6h14M3 12h14M3 18h14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
            </svg>
          </button>
          <div class="logo" v-show="!sidebarCollapsed">
            <span class="logo-text aurora">aurora</span>
            <span class="logo-text review">REVIEW</span>
          </div>
        </div>

        <!-- Main Navigation -->
        <nav class="main-nav">
          <div class="nav-section">
            <NuxtLink to="/dashboard" class="nav-item" :class="{ 'active': $route.path.startsWith('/dashboard') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6 6a1 1 0 01-1.414 0l-6-6A1 1 0 013 6.586V4z" fill="currentColor"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Dashboard</span>
            </NuxtLink>

            <NuxtLink to="/marketplace" class="nav-item" :class="{ 'active': $route.path.startsWith('/marketplace') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6 6a1 1 0 01-1.414 0l-6-6A1 1 0 013 6.586V4z" fill="currentColor"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Marketplace</span>
            </NuxtLink>

            <NuxtLink to="/trade-manager" class="nav-item" :class="{ 'active': $route.path.startsWith('/trade-manager') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Trade Manager</span>
            </NuxtLink>

            <NuxtLink to="/agreements" class="nav-item" :class="{ 'active': $route.path.startsWith('/agreements') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Agreements</span>
            </NuxtLink>

            <NuxtLink to="/locates" class="nav-item" :class="{ 'active': $route.path.startsWith('/locates') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M10 2L3 7v11h14V7l-7-5z" fill="currentColor"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Locates</span>
            </NuxtLink>

            <NuxtLink to="/analytics" class="nav-item" :class="{ 'active': $route.path.startsWith('/analytics') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6 6a1 1 0 01-1.414 0l-6-6A1 1 0 013 6.586V4z" fill="currentColor"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Analytics</span>
            </NuxtLink>

            <NuxtLink to="/reports" class="nav-item" :class="{ 'active': $route.path.startsWith('/reports') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6 6a1 1 0 01-1.414 0l-6-6A1 1 0 013 6.586V4z" fill="currentColor"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Reports</span>
            </NuxtLink>
          </div>

          <!-- Divider -->
          <div class="nav-divider" v-show="!sidebarCollapsed"></div>

          <!-- Secondary Navigation -->
          <div class="nav-section secondary">
            <NuxtLink to="/swaps" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/swaps') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M8 4l4 4-4 4" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Swaps</span>
            </NuxtLink>

            <NuxtLink to="/trade-optimizer" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/trade-optimizer') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Trade Optimizer</span>
            </NuxtLink>

            <NuxtLink to="/basket-tool" class="nav-item secondary" :class="{ 'active': $route.path.startsWith('/basket-tool') }">
              <div class="nav-icon">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3h2l.4 2M7 13h10l-1-7H5.4m0 0L7 13m0 0l-2.5 5M7 13l2.5 5m6-5v6a2 2 0 01-2 2H9a2 2 0 01-2-2v-6" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              </div>
              <span class="nav-label" v-show="!sidebarCollapsed">Basket Tool</span>
            </NuxtLink>
          </div>
        </nav>

        <!-- Bottom Section -->
        <div class="sidebar-bottom">
          <NuxtLink to="/compliance" class="nav-item bottom" :class="{ 'active': $route.path.startsWith('/compliance') }">
            <div class="nav-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="nav-label" v-show="!sidebarCollapsed">Compliance & Legal</span>
          </NuxtLink>

          <NuxtLink to="/settings" class="nav-item bottom" :class="{ 'active': $route.path.startsWith('/settings') }">
            <div class="nav-icon">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
            <span class="nav-label" v-show="!sidebarCollapsed">Company Settings</span>
          </NuxtLink>

          <!-- Company Switch Button -->
          <div class="company-switch" v-show="!sidebarCollapsed">
            <div class="company-avatar">T</div>
            <div class="company-info">
              <div class="company-name">Tribeca_PL_Firm</div>
              <div class="company-type">Company</div>
            </div>
            <div class="company-arrow">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M3 4.5l3 3 3-3" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </aside>

    <!-- Submenu Sidebar -->
    <aside class="submenu-sidebar" :class="{ 'expanded': submenuExpanded }">
      <div class="submenu-content">
        <DashboardSubmenu v-if="currentSubmenu === 'dashboard'" />
        <LendingSubmenu v-if="currentSubmenu === 'lending'" />
        <AnalyticsSubmenu v-if="currentSubmenu === 'analytics'" />
        <MarketplaceSubmenu v-if="currentSubmenu === 'marketplace'" />
        <TradeManagerSubmenu v-if="currentSubmenu === 'trade-manager'" />
      </div>
    </aside>

    <!-- Main Content Area -->
    <main class="main-content" :class="{ 'submenu-open': submenuExpanded }">
      <!-- Header -->
      <header class="main-header">
        <div class="header-left">
          <div class="market-status">
            <div class="status-indicator"></div>
            <span class="status-text">Aug 26, 2025, EDT • Market Closed</span>
          </div>
        </div>
        
        <div class="header-right">
          <div class="notifications">
            <div class="notification-icon">
              🔔
              <span class="notification-badge">125</span>
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
import LendingSubmenu from '~/components/submenus/LendingSubmenu.vue'
import AnalyticsSubmenu from '~/components/submenus/AnalyticsSubmenu.vue'
import MarketplaceSubmenu from '~/components/submenus/MarketplaceSubmenu.vue'
import TradeManagerSubmenu from '~/components/submenus/TradeManagerSubmenu.vue'

// Sidebar toggle state
const sidebarCollapsed = ref(false)

// Use submenu composable
const { submenuExpanded, currentSubmenu, expandSubmenu, collapseSubmenu } = useSubmenu()

// Toggle sidebar function
const toggleSidebar = () => {
  sidebarCollapsed.value = !sidebarCollapsed.value
}

// Auto-expand submenu based on current route
const route = useRoute()
onMounted(() => {
  const pathSegments = route.path.split('/').filter(Boolean)
  if (pathSegments.length > 0) {
    expandSubmenu(pathSegments[0])
  }
})

// Watch for route changes
watch(() => route.path, (newPath) => {
  const pathSegments = newPath.split('/').filter(Boolean)
  if (pathSegments.length > 0) {
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
  width: 54px;
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
  min-height: 40px;
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
}

.main-sidebar.collapsed .logo {
  opacity: 0;
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

.nav-section.secondary {
  margin-top: auto;
}

.nav-divider {
  height: 1px;
  background-color: rgba(185, 198, 195, 0.15);
  margin: 0;
  transition: opacity 0.15s ease;
}

.main-sidebar.collapsed .nav-divider {
  opacity: 0;
}

.nav-item {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 8px;
  color: rgba(242, 247, 247, 0.75);
  text-decoration: none;
  border-radius: 3px;
  min-height: 40px;
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
  color: rgba(242, 247, 247, 0.45);
}

.nav-item.bottom {
  color: rgba(242, 247, 247, 0.75);
}

.nav-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  flex-shrink: 0;
}

.nav-label {
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  white-space: nowrap;
  transition: opacity 0.15s ease;
}

.main-sidebar.collapsed .nav-label {
  opacity: 0;
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
  min-height: 40px;
  cursor: pointer;
  transition: background-color 0.2s ease, opacity 0.15s ease;
}

.main-sidebar.collapsed .company-switch {
  opacity: 0;
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
  font-size: 0.875rem;
  color: #ccc;
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
  font-size: 1.2rem;
  cursor: pointer;
}

.notification-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background-color: #ef4444;
  color: white;
  font-size: 0.75rem;
  padding: 0.125rem 0.375rem;
  border-radius: 0.75rem;
  min-width: 1.25rem;
  text-align: center;
}

.user-avatar {
  cursor: pointer;
}

.avatar-circle {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #04CF8B;
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
