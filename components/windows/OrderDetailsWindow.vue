<template>
  <div class="order-details-window">
    <!-- Window Header with Controls -->
    <div class="window-header">
      <div class="window-title-section">
        <span class="window-title">OY1PA3P043PS1EYASD689J</span>
        <StatusPill status="PARTIAL" />
      </div>
      <div class="window-controls">
        <button 
          class="batch-orders-btn toggle-activation-btn" 
          :class="{ 'active': isOrderActive, 'inactive': !isOrderActive }"
          @click="toggleOrderActivation"
        >
          <span>{{ isOrderActive ? 'Deactivate' : 'Activate' }}</span>
        </button>
        <button class="batch-orders-btn cancel-btn" @click="handleCancelOrder">
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
              <div class="header-cell ioi-qty-col">
                <span class="header-text">IOI Qty</span>
              </div>
              <div class="header-cell firm-qty-col">
                <span class="header-text">Firm Qty</span>
              </div>
              <div class="header-cell exec-qty-col">
                <span class="header-text">Exec Qty</span>
              </div>
              <div class="header-cell avg-exec-fee-col">
                <span class="header-text">Avg Exec Fee</span>
              </div>
              <div class="header-cell avg-exec-rebate-col">
                <span class="header-text">Avg Exec Rebate</span>
              </div>
              <div class="header-cell agreements-col">
                <span class="header-text">Agreements</span>
              </div>
              <div class="header-cell initiator-col">
                <span class="header-text">Initiator</span>
              </div>
            </div>
            
            <!-- Order History Entries -->
            <div v-for="entry in orderHistory" :key="entry.id" class="order-entry">
              <div class="entry-row">
                <div class="entry-cell when-col">
                  <span class="date">{{ entry.date }}</span>
                  <span class="time">{{ entry.time }}</span>
                </div>
                <div class="entry-cell event-col">
                  <StatusPill :status="entry.event.toUpperCase()" />
                </div>
                <div class="entry-cell order-qty-col">
                  <span class="quantity">{{ entry.orderQty.toLocaleString() }}</span>
                </div>
                <div class="entry-cell open-qty-col">
                  <span class="quantity">{{ entry.openQty.toLocaleString() }}</span>
                </div>
                <div class="entry-cell ioi-qty-col">
                  <span class="quantity">0</span>
                </div>
                <div class="entry-cell firm-qty-col">
                  <span class="quantity">{{ entry.firmQty.toLocaleString() }}</span>
                </div>
                <div class="entry-cell exec-qty-col">
                  <span class="quantity">{{ entry.execQty.toLocaleString() }}</span>
                </div>
                <div class="entry-cell avg-exec-fee-col">
                  <span class="percentage">{{ entry.avgExecFee }}%</span>
                </div>
                <div class="entry-cell avg-exec-rebate-col">
                  <span class="percentage">{{ entry.avgExecRebate }}%</span>
                </div>
                <div class="entry-cell agreements-col">
                  <div class="agreements-info">
                    <div class="agreement-count">{{ entry.agreements }}</div>
                    <span class="available-text">available</span>
                    <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
                <div class="entry-cell initiator-col">
                  <span class="email">{{ entry.initiator }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Child Orders Tab -->
        <div v-else-if="activeOrderDetailTab === 'child-orders'" class="tab-panel">
          <!-- Table Container -->
          <div class="table-container">
            <!-- Table Header -->
            <div class="table-header">
              <div class="header-cell status-col">
                <span class="header-text">Status</span>
              </div>
              <div class="header-cell intent-col">
                <span class="header-text">Intent</span>
              </div>
              <div class="header-cell side-col">
                <span class="header-text">Side</span>
              </div>
              <div class="header-cell ticker-col">
                <span class="header-text">Ticker</span>
              </div>
              <div class="header-cell open-qty-col">
                <span class="header-text">Open Qty</span>
              </div>
              <div class="header-cell total-qty-col">
                <span class="header-text">Total Qty</span>
              </div>
              <div class="header-cell exec-qty-col">
                <span class="header-text">Exec Qty</span>
              </div>
              <div class="header-cell fee-col">
                <span class="header-text">Fee</span>
              </div>
              <div class="header-cell rebate-col">
                <span class="header-text">Rebate</span>
              </div>
              <div class="header-cell min-qty-col">
                <span class="header-text">Min Qty</span>
              </div>
              <div class="header-cell agreements-col">
                <span class="header-text">Agreements</span>
              </div>
            </div>
            
            <!-- Single Order Entry -->
            <div class="order-entry">
              <div class="entry-row">
                <div class="entry-cell status-col">
                  <StatusPill status="OPEN" />
                </div>
                <div class="entry-cell intent-col">
                  <span>Firm</span>
                </div>
                <div class="entry-cell side-col">
                  <span>LENDER</span>
                </div>
                <div class="entry-cell ticker-col">
                  <span class="ticker">VIAV</span>
                </div>
                <div class="entry-cell open-qty-col">
                  <span class="quantity">50,000</span>
                </div>
                <div class="entry-cell total-qty-col">
                  <span class="quantity">150,000</span>
                </div>
                <div class="entry-cell exec-qty-col">
                  <span class="quantity">100,000</span>
                </div>
                <div class="entry-cell fee-col">
                  <span class="percentage">3.0900%</span>
                </div>
                <div class="entry-cell rebate-col">
                  <span class="percentage">1.0100%</span>
                </div>
                <div class="entry-cell min-qty-col">
                  <span class="quantity">100</span>
                </div>
                <div class="entry-cell agreements-col">
                  <div class="agreements-info">
                    <div class="agreement-count">1</div>
                    <span class="available-text">available</span>
                    <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Details Tab -->
        <div v-else-if="activeOrderDetailTab === 'details'" class="tab-panel">
          <div class="details-grid">
            <div class="detail-column">
              <div class="detail-row">
                <div class="detail-label">Security</div>
                <div class="detail-value">VIAV [925550105]</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Side</div>
                <div class="detail-value">lender</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Fee</div>
                <div class="detail-value">3.0900%</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Rebate</div>
                <div class="detail-value">1.0100%</div>
              </div>
            </div>
            <div class="detail-column">
              <div class="detail-row">
                <div class="detail-label">Quantity</div>
                <div class="detail-value">150,000  (min. 100)</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Open Qty.</div>
                <div class="detail-value">50,000</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Filled Qty.</div>
                <div class="detail-value">100,000</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">IOI Qty.</div>
                <div class="detail-value">–</div>
              </div>
            </div>
            <div class="detail-column">
              <div class="detail-row">
                <div class="detail-label">Firm Qty.</div>
                <div class="detail-value">50,000</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Avg. Exec. Fee</div>
                <div class="detail-value">3.0900%</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Avg. Exec. Rebate</div>
                <div class="detail-value">1.0100%</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Created Time</div>
                <div class="detail-value">Oct 06 3:27 AM</div>
              </div>
            </div>
            <div class="detail-column">
              <div class="detail-row">
                <div class="detail-label">Agreements</div>
                <div class="detail-value">LEND TO SOHO - NSCC</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Time in Force</div>
                <div class="detail-value">Good till cancel</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Anonymous Order</div>
                <div class="detail-value">No</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Order Intent</div>
                <div class="detail-value">Firm</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import StatusPill from '~/components/ui/StatusPill.vue'
import { useConfirmDialog } from '~/composables/useConfirmDialog'

// Define emits
const emit = defineEmits(['close', 'deactivate', 'cancel', 'edit'])

// Confirm dialog composable
const { confirmDelete, showDialog } = useConfirmDialog()

// Order activation state
const isOrderActive = ref(true)

// Order Details tab state
const activeOrderDetailTab = ref('history')
const orderDetailTabs = ref([
  { id: 'history', label: 'History' },
  { id: 'child-orders', label: 'Child Orders' },
  { id: 'details', label: 'Details' }
])

// Toggle order activation
const toggleOrderActivation = () => {
  isOrderActive.value = !isOrderActive.value
  console.log(`Order ${isOrderActive.value ? 'activated' : 'deactivated'}`)
}

// Handle cancel order with confirmation dialog
const handleCancelOrder = async () => {
  console.log('Cancel button clicked!') // Debug log
  
  try {
    const confirmed = await showDialog({
      title: 'Order cancellation',
      message: 'You are about to cancel the order. This cannot be undone.',
      confirmText: 'Cancel Order',
      cancelText: 'Keep Order',
      variant: 'danger',
      allowBackdropClose: false
    })
    
    console.log('Dialog result:', confirmed) // Debug log
    
    if (confirmed) {
      // Perform the actual cancel operation
      console.log('Order cancelled successfully')
      emit('cancel')
    }
  } catch (error) {
    console.error('Error cancelling order:', error)
  }
}

// Test dialog function

// Order History data
const orderHistory = ref([])

// Generate sample order history data
const generateOrderHistory = () => {
  const history = [
    {
      id: 'history-1',
      date: '01/15',
      time: '9:30AM',
      event: 'New',
      orderQty: 10000,
      openQty: 10000,
      firmQty: 0,
      execQty: 0,
      avgExecFee: '0.000',
      avgExecRebate: '0.000',
      agreements: 0,
      initiator: 'john.doe@firm.com'
    },
    {
      id: 'history-2',
      date: '01/15',
      time: '10:15AM',
      event: 'Amended',
      orderQty: 10000,
      openQty: 10000,
      firmQty: 0,
      execQty: 0,
      avgExecFee: '0.000',
      avgExecRebate: '0.000',
      agreements: 0,
      initiator: 'john.doe@firm.com'
    },
    {
      id: 'history-3',
      date: '01/15',
      time: '11:22AM',
      event: 'Amended',
      orderQty: 10000,
      openQty: 10000,
      firmQty: 0,
      execQty: 0,
      avgExecFee: '0.000',
      avgExecRebate: '0.000',
      agreements: 0,
      initiator: 'john.doe@firm.com'
    },
    {
      id: 'history-4',
      date: '01/15',
      time: '2:45PM',
      event: 'Executed',
      orderQty: 10000,
      openQty: 0,
      firmQty: 10000,
      execQty: 10000,
      avgExecFee: '0.125',
      avgExecRebate: '0.075',
      agreements: 5,
      initiator: 'system@execution.com'
    }
  ]
  
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

/* Toggle Activation Button Styles */
.toggle-activation-btn.active {
  background-color: rgba(220, 38, 38, 0.8); /* Muted red for deactivate */
  color: white;
}

.toggle-activation-btn.active:hover {
  background-color: rgba(220, 38, 38, 1); /* Slightly brighter red on hover */
}

.toggle-activation-btn.inactive {
  background-color: rgba(34, 197, 94, 0.8); /* Muted green for activate */
  color: white;
}

.toggle-activation-btn.inactive:hover {
  background-color: rgba(34, 197, 94, 1); /* Slightly brighter green on hover */
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
  gap: 8px;
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
  padding: 0;
}

.entry-row {
  display: flex;
  padding: 0;
  gap: 8px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  width: 100%;
  min-width: max-content;
  transition: background-color 0.15s ease;
}

.entry-row:hover {
  background-color: rgba(255, 255, 255, 0.08);
}

.entry-cell {
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #ffffff;
  white-space: nowrap;
  height: 32px;
  padding: 0 12px;
}

/* Column Widths */
.when-col { width: 120px; min-width: 120px; }
.event-col { width: 120px; min-width: 120px; }
.order-qty-col { width: 80px; min-width: 80px; }
.open-qty-col { width: 80px; min-width: 80px; }
.ioi-qty-col { width: 80px; min-width: 80px; }
.firm-qty-col { width: 80px; min-width: 80px; }
.exec-qty-col { width: 80px; min-width: 80px; }
.avg-exec-fee-col { width: 100px; min-width: 100px; }
.avg-exec-rebate-col { width: 120px; min-width: 120px; }
.agreements-col { width: 160px; min-width: 160px; }
.initiator-col { width: 180px; min-width: 180px; }

/* Child Orders Column Widths */
.status-col { width: 80px; min-width: 80px; }
.intent-col { width: 80px; min-width: 80px; }
.side-col { width: 80px; min-width: 80px; }
.ticker-col { width: 80px; min-width: 80px; }
.total-qty-col { width: 80px; min-width: 80px; }
.fee-col { width: 80px; min-width: 80px; }
.rebate-col { width: 80px; min-width: 80px; }
.min-qty-col { width: 80px; min-width: 80px; }

/* Data Element Styling - EXACT copy from OrdersWindow.vue */

.date {
  color: #ffffff;
  font-weight: 400;
  margin-right: 8px;
}

.time {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

.quantity {
  color: #ffffff;
  font-weight: 400;
  text-align: right;
  width: 100%;
}

.percentage {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
  letter-spacing: 0.12px;
}

.email {
  font-size: 14px;
  color: #ffffff;
  font-weight: 400;
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

/* Agreements Info Styling - EXACT copy from OrdersWindow.vue */
.agreements-info {
  display: flex;
  align-items: center;
  gap: 3px;
  width: 100%;
  justify-content: space-between;
}

.agreement-count {
  border: 1px solid #484848;
  border-radius: 3px;
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  color: #ffffff;
}

.available-text {
  font-size: 12px;
  color: rgba(255, 255, 255, 0.6);
}

.search-icon {
  color: rgba(255, 255, 255, 0.4);
  cursor: pointer;
  transition: color 0.2s ease;
}

.search-icon:hover {
  color: rgba(255, 255, 255, 0.8);
}

/* Details Tab Styling */
.details-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  gap: 60px;
  padding: 12px 20px 0 20px;
}

.detail-column {
  display: flex;
  flex-direction: column;
}

.detail-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0;
  height: 32px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
}

.detail-row:last-child {
  border-bottom: none;
}

.detail-label {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
  min-width: 100px;
}

.detail-value {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;
  text-align: right;
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
