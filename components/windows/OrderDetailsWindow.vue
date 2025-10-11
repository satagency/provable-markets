<template>
  <div class="order-details-window">
    <!-- Window Header with Controls -->
    <div class="window-header">
      <div class="window-title-section">
        <span class="window-title">OY1PA3P043PS1EYASD689J</span>
        <StatusPill status="PARTIAL" />
      </div>
      <div class="window-controls">
        <button class="batch-orders-btn deactivate-btn" @click="$emit('deactivate')">
          <span>Deactivate</span>
        </button>
        <button class="batch-orders-btn cancel-btn" @click="$emit('cancel')">
          <span>Cancel</span>
        </button>
        <button class="batch-orders-btn edit-btn" @click="$emit('edit')">
          <span>Edit</span>
        </button>
        <button class="close-btn" @click="$emit('close')">
          <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
    </div>

    <!-- Window Content -->
    <div class="window-content">
      <div class="order-details-content">
        <!-- Tab Menu -->
        <div class="tab-menu">
          <div 
            v-for="tab in orderDetailTabs"
            :key="tab.id"
            class="tab-item"
            :class="{ active: activeOrderDetailTab === tab.id }"
            @click="activeOrderDetailTab = tab.id"
          >
            {{ tab.label }}
          </div>
        </div>
        
        <!-- Tab Content -->
        <div class="tab-content">
        <!-- History Tab -->
        <div v-if="activeOrderDetailTab === 'history'" class="tab-panel">
          <!-- Table Container -->
          <div class="table-container">
            <!-- Table Header -->
            <div class="table-header">
              <div class="header-cell when-col">
                <span class="header-text">When</span>
              </div>
              <div class="header-cell event-col">
                <span class="header-text">Event</span>
              </div>
              <div class="header-cell order-qty-col">
                <span class="header-text">Order Qty</span>
              </div>
              <div class="header-cell open-qty-col">
                <span class="header-text">Open Qty</span>
              </div>
              <div class="header-cell firm-qty-col">
                <span class="header-text">Firm Qty</span>
              </div>
              <div class="header-cell exec-qty-col">
                <span class="header-text">Exec Qty</span>
              </div>
              <div class="header-cell avg-exec-fee-col">
                <span class="header-text">Avg Exec Fee</span>
                <span class="header-subtext">%</span>
              </div>
              <div class="header-cell avg-exec-rebate-col">
                <span class="header-text">Avg Exec Rebate</span>
                <span class="header-subtext">%</span>
              </div>
              <div class="header-cell agreements-col">
                <span class="header-text">Agreements</span>
              </div>
              <div class="header-cell initiator-col">
                <span class="header-text">Initiator</span>
              </div>
            </div>
            
            <!-- Single Order Entry -->
            <div class="order-entry">
              <div class="entry-row">
                <div class="entry-cell when-col">
                  <div class="date-time">
                    <span class="date">10/12/23</span>
                    <span class="time">8:30A</span>
                  </div>
                </div>
                <div class="entry-cell event-col">
                  <span>Created</span>
                </div>
                <div class="entry-cell order-qty-col">
                  <span class="quantity">1,000</span>
                </div>
                <div class="entry-cell open-qty-col">
                  <span class="quantity">750</span>
                </div>
                <div class="entry-cell firm-qty-col">
                  <span class="quantity">500</span>
                </div>
                <div class="entry-cell exec-qty-col">
                  <span class="quantity">250</span>
                </div>
                <div class="entry-cell avg-exec-fee-col">
                  <span class="percentage">0.15%</span>
                </div>
                <div class="entry-cell avg-exec-rebate-col">
                  <span class="percentage">0.08%</span>
                </div>
                <div class="entry-cell agreements-col">
                  <span class="quantity">3</span>
                </div>
                <div class="entry-cell initiator-col">
                  <span class="email">trader1@provable.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Child Orders Tab -->
        <div v-else-if="activeOrderDetailTab === 'child-orders'" class="tab-panel">
          <h4>Child Orders</h4>
          <p>Child orders content will go here</p>
        </div>

        <!-- Details Tab -->
        <div v-else-if="activeOrderDetailTab === 'details'" class="tab-panel">
          <h4>Order Details</h4>
          <p>Detailed order information will go here</p>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StatusPill from '~/components/ui/StatusPill.vue'

// Define emits
defineEmits(['close', 'deactivate', 'cancel', 'edit'])

// Order Details tab state
const activeOrderDetailTab = ref('history')
const orderDetailTabs = ref([
  { id: 'history', label: 'History' },
  { id: 'child-orders', label: 'Child Orders' },
  { id: 'details', label: 'Details' }
])

// Order History data
const orderHistory = ref([])

// Generate sample order history data
const generateOrderHistory = () => {
  const events = ['Created', 'Modified', 'Partially Filled', 'Filled', 'Cancelled', 'Rejected', 'Updated']
  const dates = ['2024-01-15', '2024-01-14', '2024-01-13', '2024-01-12', '2024-01-11']
  const times = ['09:30:15', '14:22:08', '11:45:33', '16:18:42', '08:55:27']
  const initiators = ['john.doe@firm.com', 'jane.smith@trader.com', 'mike.wilson@hedge.com', 'sarah.jones@fund.com', 'alex.brown@prop.com']
  
  const history = []
  
  for (let i = 0; i < 25; i++) {
    history.push({
      id: `history-${i + 1}`,
      date: dates[Math.floor(Math.random() * dates.length)],
      time: times[Math.floor(Math.random() * times.length)],
      event: events[Math.floor(Math.random() * events.length)],
      orderQty: Math.floor(Math.random() * 10000) + 1000,
      openQty: Math.floor(Math.random() * 5000) + 500,
      firmQty: Math.floor(Math.random() * 3000) + 200,
      execQty: Math.floor(Math.random() * 2000) + 100,
      avgExecFee: (Math.random() * 0.5 + 0.1).toFixed(3),
      avgExecRebate: (Math.random() * 0.3 + 0.05).toFixed(3),
      agreements: Math.floor(Math.random() * 10) + 1,
      initiator: initiators[Math.floor(Math.random() * initiators.length)]
    })
  }
  
  return history
}

onMounted(() => {
  orderHistory.value = generateOrderHistory()
})
</script>

<style scoped>
.order-details-window {
  display: flex;
  flex-direction: column;
  height: 100%;
  background-color: #1a1c1e;
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  overflow: hidden;
}

/* Window Header */
.window-header {
  height: 40px;
  background: #2a2a2a;
  border-bottom: 1px solid #404040;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 12px;
  cursor: move;
  user-select: none;
  transition: background-color 0.2s ease;
}

.window-header:hover {
  background: #333;
}

.window-title-section {
  display: flex;
  align-items: center;
  gap: 8px;
}

.window-title {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #ffffff;
  margin: 0;
}


.window-controls {
  display: flex;
  align-items: center;
  gap: 4px;
}

.batch-orders-btn {
  background-color: #404040;
  color: white;
  border: none;
  border-radius: 6px;
  height: 28px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-family: 'Geist', sans-serif;
  font-weight: 500;
  font-size: 12px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-right: 6px;
}

.batch-orders-btn:hover {
  background-color: #555555;
}

.close-btn {
  width: 20px;
  height: 20px;
  border: none;
  background: transparent;
  color: #888;
  cursor: pointer;
  border-radius: 3px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
}

.close-btn:hover {
  background: #444;
  color: #fff;
}

/* Window Content */
.window-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Order Details Content */
.order-details-content {
  height: 100%;
  display: flex;
  flex-direction: column;
}

.tab-menu {
  display: flex;
  border-bottom: 1px solid #404040;
  background: #1a1a1a;
}

.tab-item {
  padding: 12px 16px;
  color: #888;
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  border-right: 1px solid #404040;
  transition: all 0.2s ease;
  background: transparent;
}

.tab-item:last-child {
  border-right: none;
}

.tab-item:hover {
  color: #ccc;
  background: #2a2a2a;
}

.tab-item.active {
  color: #ffffff;
  background: #2a2a2a;
}

/* Tab Content */
.tab-content {
  flex: 1;
  padding: 0;
  overflow-y: auto;
}

.tab-panel h4 {
  color: #ffffff;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
}

.tab-panel p {
  color: #888;
  font-size: 14px;
  line-height: 1.5;
}

/* Table Container */
.table-container {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow-x: auto;
  overflow-y: hidden;
}

/* Table Header */
.table-header {
  display: flex;
  background-color: #161818;
  padding: 0;
  gap: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  min-width: max-content;
  flex-shrink: 0;
}

.header-cell {
  background-color: rgba(224, 224, 224, 0);
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  height: 40px;
  padding: 0 12px;
}

.header-text {
  font-weight: 400;
}

.header-subtext {
  color: rgba(255, 255, 255, 0.4);
  font-size: 10px;
  margin-left: 2px;
}

/* Order Entry */
.order-entry {
  padding: 16px;
}

.entry-row {
  display: flex;
  padding: 0;
  gap: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  width: 100%;
  min-width: max-content;
}

.entry-cell {
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #ffffff;
  white-space: nowrap;
  height: 48px;
  padding: 0 12px;
}

/* Column Widths */
.when-col { width: 120px; min-width: 120px; }
.event-col { width: 120px; min-width: 120px; }
.order-qty-col { width: 80px; min-width: 80px; }
.open-qty-col { width: 80px; min-width: 80px; }
.firm-qty-col { width: 80px; min-width: 80px; }
.exec-qty-col { width: 80px; min-width: 80px; }
.avg-exec-fee-col { width: 100px; min-width: 100px; }
.avg-exec-rebate-col { width: 120px; min-width: 120px; }
.agreements-col { width: 80px; min-width: 80px; }
.initiator-col { width: 180px; min-width: 180px; }

/* Data Element Styling - EXACT copy from OrdersWindow.vue */

.date-time {
  display: flex;
  flex-direction: column;
  gap: 1px;
}

.date {
  color: #ffffff;
  font-weight: 500;
}

.time {
  color: rgba(255, 255, 255, 0.6);
}

.quantity {
  color: #ffffff;
  font-weight: 500;
  text-align: right;
  width: 100%;
}

.percentage {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #ffffff;
  font-weight: 500;
  letter-spacing: 0.12px;
}

.email {
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

/* Scrollbar Styling */
.table-rows-container::-webkit-scrollbar {
  width: 6px;
}

.table-rows-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.table-rows-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.table-rows-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}

/* Horizontal Scrollbar */
.table-container::-webkit-scrollbar {
  height: 6px;
}

.table-container::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.05);
}

.table-container::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
}

.table-container::-webkit-scrollbar-thumb:hover {
  background: rgba(255, 255, 255, 0.3);
}
</style>
