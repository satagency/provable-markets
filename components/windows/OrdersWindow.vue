<template>
  <!-- Your existing orders window design - preserved exactly -->
  <div class="dashboard-container" :class="densityClasses">
    <!-- Data Window -->
    <div class="data-window">
      
      <!-- Orders Table -->
      <div class="orders-content">
        <!-- Table Rows Container with Scroll -->
        <div class="table-rows-container">
          <!-- Table Header -->
          <div class="table-header">
            <div class="header-cell select-col">
              <span class="header-text">Select</span>
            </div>
            <div class="header-cell status-col">
              <span class="header-text">Status</span>
            </div>
            <div class="header-cell updated-col">
              <span class="header-text">Updated</span>
            </div>
            <div class="header-cell side-col">
              <span class="header-text">Side</span>
            </div>
            <div class="header-cell intent-col">
              <span class="header-text">Intent</span>
            </div>
            <div class="header-cell ticker-col">
              <span class="header-text">Ticker</span>
            </div>
            <div class="header-cell security-col">
              <span class="header-text">Security Name</span>
            </div>
            <div class="header-cell cusip-col">
              <span class="header-text">CUSIP</span>
            </div>
            <div class="header-cell open-qty-col">
              <span class="header-text">Open QTY</span>
            </div>
            <div class="header-cell ioi-qty-col">
              <span class="header-text">IOI QTY</span>
            </div>
            <div class="header-cell firm-qty-col">
              <span class="header-text">Firm QTY</span>
            </div>
            <div class="header-cell fee-col">
              <span class="header-text">Fee</span>
              <span class="header-subtext">%</span>
            </div>
            <div class="header-cell exec-fee-col">
              <span class="header-text">Exec Fee</span>
              <span class="header-subtext">%</span>
            </div>
            <div class="header-cell rebates-col">
              <span class="header-text">Rebates</span>
              <span class="header-subtext">%</span>
            </div>
            <div class="header-cell agreements-col">
              <span class="header-text">Agreements</span>
            </div>
            <div class="header-cell unit-price-col">
              <span class="header-text">Unit Price</span>
            </div>
            <div class="header-cell market-value-col">
              <span class="header-text">Market Value</span>
            </div>
            <div class="header-cell total-qty-col">
              <span class="header-text">Total QTY</span>
            </div>
            <div class="header-cell min-qty-col">
              <span class="header-text">Min QTY</span>
            </div>
            <div class="header-cell time-force-col">
              <span class="header-text">Time Force</span>
            </div>
            <div class="header-cell counterparty-col">
              <span class="header-text">CounterParty</span>
            </div>
            <div class="header-cell last-col">
              <span class="header-text">Last</span>
            </div>
            <div class="header-cell actions-col sticky-actions">
              <span class="header-text">Actions</span>
            </div>
        </div>
        
        <!-- Dynamic Table Rows -->
          <div 
            v-for="order in orders" 
            :key="order.id" 
            class="table-row"
          >
              <div class="row-cell select-col">
                <div class="gripper">
                  <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8h16M4 16h16"></path>
                  </svg>
                </div>
                <div class="checkbox">
                  <input type="checkbox" />
                </div>
              </div>
              <div class="row-cell status-col">
                <StatusPill :status="order.status" />
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">{{ order.date }}</span>
                  <span class="time">{{ order.time }}</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <SideBadge :side="order.side" />
              </div>
              <div class="row-cell intent-col">
                <span>{{ order.intent }}</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">{{ order.ticker }}</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">{{ order.securityName }}</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">{{ order.cusip }}</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">{{ order.openQty }}</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span v-if="order.ioiQty" class="quantity">{{ order.ioiQty }}</span>
                <span v-else class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span v-if="order.firmQty" class="quantity">{{ order.firmQty }}</span>
                <span v-else class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span :class="order.fee < 0 ? 'fee-negative' : 'fee-positive'">{{ order.fee }}%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">{{ order.execFee }}%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">{{ order.rebates }}%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">{{ order.agreements }}</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">${{ order.unitPrice }}</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">${{ order.marketValue.toLocaleString() }}</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">{{ order.totalQty }}</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">{{ order.minQty }}</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">{{ order.timeForce }}</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">{{ order.counterpartyAmount > 0 ? '+' : '' }}${{ Math.abs(order.counterpartyAmount) }}</span>
              </div>
              <div class="row-cell last-col">
                <div :class="`priority-badge ${order.priority.toLowerCase()}`">{{ order.priority }}</div>
              </div>
              <div class="row-cell actions-col sticky-actions">
                <div class="docked-actions-panel">
                  <button 
                    class="action-icon-btn close-btn"
                    @click="handleCloseOrder(order.id)"
                    title="Close Order"
                  >
                    <svg class="action-icon" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"/>
                    </svg>
                  </button>
                  <button 
                    class="action-icon-btn edit-btn"
                    @click="handleEditOrder(order.id)"
                    title="Edit Order"
                  >
                    <svg class="action-icon" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M227.31,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96A16,16,0,0,0,227.31,73.37ZM192,108.68,147.31,64,168,43.31,212.69,88ZM48,163.31l76.69-76.68,44.68,44.69L92.69,208H48Z"/>
                    </svg>
                  </button>
                  <button 
                    class="action-icon-btn toggle-btn"
                    @click="handleToggleOrder(order.id)"
                    :class="{ 'active': order.isToggled }"
                    title="Toggle Order Exposure"
                  >
                    <!-- Arrow Bend Up Left (holding back from market) -->
                    <ArrowBendUpLeftIcon v-if="!order.isToggled" class="action-icon" />
                    <!-- Arrow Bend Up Right (exposing to market) -->
                    <ArrowBendUpRightIcon v-else class="action-icon" />
                  </button>
                  <button 
                    class="action-icon-btn view-btn"
                    @click="handleViewOrder(order)"
                    :class="{ 'active': selectedOrder?.id === order.id }"
                    title="View Order Details"
                  >
                    <!-- Outline eye icon (default) -->
                    <svg v-if="selectedOrder?.id !== order.id" class="action-icon" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"/>
                    </svg>
                    <!-- Filled eye icon (active) -->
                    <svg v-else class="action-icon" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M128,48C61.43,48,17.51,105.18,8.69,124.76a8,8,0,0,0,0,6.5c8.82,19.58,52.74,76.74,119.31,76.74s110.49-57.16,119.31-76.74a8,8,0,0,0,0-6.5C238.49,105.18,194.57,48,128,48Zm0,112a48,48,0,1,1,48-48A48.05,48.05,0,0,1,128,160Zm0-80a32,32,0,1,0,32,32A32,32,0,0,0,128,80Z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Dynamic orders data for permanent scrolling solution
import { ref } from 'vue'
import { useTableDensity } from '~/composables/useTableDensity'
import StatusPill from '~/components/ui/StatusPill.vue'
import SideBadge from '~/components/ui/SideBadge.vue'
import { ArrowBendUpLeftIcon, ArrowBendUpRightIcon } from '~/components/icons'

// Table density management
const { densityClasses } = useTableDensity()

// Generate dynamic orders data
const generateOrders = () => {
  const tickers = ['TSLA', 'AAPL', 'MSFT', 'GOOGL', 'AMZN', 'NVDA', 'META', 'NFLX', 'ADBE', 'CRM', 'ORCL', 'INTC', 'AMD', 'PYPL', 'UBER', 'LYFT', 'SQ', 'ROKU', 'ZM', 'PTON']
  const sides = ['LENDER', 'BORROWER']
  const intents = ['Firm', 'IOI']
  const priorities = ['HIGH', 'MEDIUM', 'LOW']
  
  const orders = []
  
  for (let i = 1; i <= 50; i++) {
    const ticker = tickers[i % tickers.length]
    const side = sides[i % sides.length]
    const intent = intents[i % intents.length]
    const priority = priorities[i % priorities.length]
    
    // Realistic status distribution: 96% PARTIAL, 4% other statuses
    const statusRandom = Math.random()
    let status
    if (statusRandom < 0.96) {
      status = 'PARTIAL'
    } else if (statusRandom < 0.98) {
      status = 'OPEN'
    } else if (statusRandom < 0.99) {
      status = 'FILLED'
    } else {
      status = 'CANCEL'
    }
    
    orders.push({
      id: i,
      status,
      date: '10/12/23',
      time: `${9 + Math.floor(i / 10)}:${(i * 3) % 60}${i % 2 === 0 ? 'A' : 'P'}`,
      side,
      intent,
      ticker,
      securityName: `${ticker} Inc. Common Stock`,
      cusip: `${Math.floor(Math.random() * 900000000) + 100000000}`,
      openQty: Math.floor(Math.random() * 500) + 50,
      ioiQty: intent === 'IOI' ? Math.floor(Math.random() * 300) + 25 : null,
      firmQty: status === 'FILLED' ? Math.floor(Math.random() * 400) + 30 : null,
      fee: (Math.random() * 2 - 1).toFixed(2),
      execFee: (Math.random() * 3 + 3).toFixed(2),
      rebates: (Math.random() * 3 + 3).toFixed(2),
      agreements: Math.floor(Math.random() * 5) + 1,
      unitPrice: (Math.random() * 500 + 50).toFixed(2),
      marketValue: Math.floor(Math.random() * 200000) + 10000,
      totalQty: Math.floor(Math.random() * 500) + 50,
      minQty: Math.floor(Math.random() * 100) + 25,
      timeForce: Math.floor(Math.random() * 500) + 50,
      counterpartyAmount: Math.floor(Math.random() * 2000) - 1000,
      priority,
      isToggled: false
    })
  }
  
  return orders
}

// Sample data
const orders = ref(generateOrders())

// Selected order for detail view
const selectedOrder = ref(null)

// Action handlers
const handleCloseOrder = (orderId) => {
  console.log('Closing order:', orderId)
  // TODO: Implement close order logic
}

const handleEditOrder = (orderId) => {
  console.log('Editing order:', orderId)
  // TODO: Implement edit order logic
}

const handleToggleOrder = (orderId) => {
  const order = orders.value.find(o => o.id === orderId)
  if (order) {
    order.isToggled = !order.isToggled
    console.log(`Order ${orderId} ${order.isToggled ? 'exposed to market' : 'held back from market'}`)
  }
}

const handleViewOrder = (order) => {
  // Toggle selection - if already selected, deselect it
  if (selectedOrder.value?.id === order.id) {
    console.log('Deselecting order:', order.id)
    selectedOrder.value = null
  } else {
    console.log('Selecting order:', order.id)
    selectedOrder.value = order
  }
  // TODO: Emit event to show/hide order details in bottom window
}
</script>

<style scoped>
/* Your existing styles - preserved exactly */
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;500;600;700;800;900&display=swap');
@font-face {
  font-family: 'Matrix Sans SC';
  src: url('https://fonts.cdnfonts.com/css/matrix-sans-sc') format('woff2');
  font-weight: 400;
  font-style: normal;
}
.dashboard-container {
  padding: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.data-window {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

/* Widget Top Header */
.widget-top {
  background-color: #1A1A1A;
  border-bottom: 1px solid rgba(144, 144, 144, 0.6);
  height: 90px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  border-radius: 6px 6px 0 0;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left-section {
  display: flex;
  align-items: center;
  gap: 30px;
}

.widget-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 600;
  font-size: 20px;
  color: white;
  margin: 0;
}

.term-toggle {
  display: flex;
  align-items: center;
  gap: 27px;
}

.toggle-label {
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  color: #8e8e8e;
}

.switch {
  width: 26px;
  height: 16px;
  background-color: #e6e0e9;
  border: 0.938px solid #79747e;
  border-radius: 100px;
  position: relative;
  cursor: pointer;
}

.switch.active {
  background-color: #00ad79;
}

.handle {
  width: 12px;
  height: 12px;
  background-color: #79747e;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 2px;
  transform: translateY(-50%);
  transition: all 0.2s ease;
}

.switch.active .handle {
  background-color: white;
  left: 12px;
}

.right-section {
  display: flex;
  align-items: center;
  gap: 24px;
}

.batch-toggle {
  display: flex;
  align-items: center;
  gap: 8px;
}

.batch-label {
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  color: #6fedc7;
}

.create-order-btn {
  background-color: #0e8212;
  color: white;
  border: none;
  border-radius: 6px;
  height: 32px;
  padding: 0 12px;
  display: flex;
  align-items: center;
  gap: 10px;
  font-family: 'Geist', sans-serif;
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.create-order-btn:hover {
  background-color: #0a6b0e;
}

/* Orders Content */
.orders-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  padding: 0;
}

/* Table Rows Container with Scroll */
.table-rows-container {
  flex: 1;
  overflow-y: auto;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

/* Row Wrapper */
.row-wrapper {
  width: 100%;
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
  position: sticky;
  top: 0;
  z-index: 20;
}

.header-cell {
  background-color: rgba(224, 224, 224, 0);
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 12px;
  font-weight: 400;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.1px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Normal density (default - current Orders spacing) */
.table-density-normal .header-cell {
  height: 40px;
  padding: 0 12px;
}

/* Dense density (Agreements spacing) */
.table-density-dense .header-cell {
  height: 36px;
  padding: 0 6px;
}

.header-text {
  font-weight: 400;
}

.header-subtext {
  color: rgba(255, 255, 255, 0.4);
  font-size: 10px;
  margin-left: 2px;
}

/* Column Size System */
.col-small { width: 80px; min-width: 80px; }
.col-medium { width: 120px; min-width: 120px; }
.col-large { width: 160px; min-width: 160px; }
.col-xlarge { width: 200px; min-width: 200px; }

/* Column Assignments */
.select-col { width: 80px; min-width: 80px; }
.status-col { width: 80px; min-width: 80px; }
.updated-col { width: 120px; min-width: 120px; }
.side-col { width: 80px; min-width: 80px; }
.intent-col { width: 80px; min-width: 80px; }
.ticker-col { width: 80px; min-width: 80px; }
.security-col { width: 160px; min-width: 160px; }
.cusip-col { width: 120px; min-width: 120px; }
.open-qty-col { width: 80px; min-width: 80px; }
.ioi-qty-col { width: 80px; min-width: 80px; }
.firm-qty-col { width: 80px; min-width: 80px; }
.fee-col { width: 80px; min-width: 80px; }
.exec-fee-col { width: 80px; min-width: 80px; }
.rebates-col { width: 80px; min-width: 80px; }
.agreements-col { width: 160px; min-width: 160px; }
.unit-price-col { width: 80px; min-width: 80px; }
.market-value-col { width: 120px; min-width: 120px; }
.total-qty-col { width: 80px; min-width: 80px; }
.min-qty-col { width: 80px; min-width: 80px; }
.time-force-col { width: 80px; min-width: 80px; }
.counterparty-col { width: 120px; min-width: 120px; }
.last-col { width: 80px; min-width: 80px; }
.actions-col { width: 180px; min-width: 180px; }

/* Table Row */
.table-row {
  display: flex;
  padding: 0;
  gap: 0;
  border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  transition: background-color 0.15s ease;
  width: 100%;
  min-width: max-content;
}

.table-row:hover {
  background-color: rgba(255, 255, 255, 0.02);
}

.row-cell {
  display: flex;
  align-items: center;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  color: #ffffff;
  white-space: nowrap;
}

/* Normal density (default - current Orders spacing) */
.table-density-normal .row-cell {
  height: 48px;
  padding: 0 12px;
}

/* Dense density (Agreements spacing) */
.table-density-dense .row-cell {
  height: 40px;
  padding: 0 6px;
}

.row-cell.select-col {
  gap: 8px;
  justify-content: center;
}

/* Normal density (default - current Orders spacing) */
.table-density-normal .row-cell.select-col {
  padding: 0 12px;
}

/* Dense density (Agreements spacing) */
.table-density-dense .row-cell.select-col {
  padding: 0 12px;
}

.gripper {
  color: #666;
  cursor: grab;
  opacity: 0.6;
}

.checkbox input {
  width: 16px;
  height: 16px;
  accent-color: #04CF8B;
}

/* Data Element Styling */

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

.ticker {
  font-weight: 600;
  color: #ffffff;
}

.security-name {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.cusip {
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Roboto Mono', monospace;
}

.quantity {
  color: #ffffff;
  font-weight: 500;
  text-align: right;
  width: 100%;
}

.dash {
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  width: 100%;
}

.fee-negative {
  color: #ff6b6b;
  font-weight: 500;
}

.fee-positive {
  color: #51cf66;
  font-weight: 500;
}

.price {
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto Mono', monospace;
}

.market-value {
  color: #ffffff;
  font-weight: 600;
  font-family: 'Roboto Mono', monospace;
}

.loss-amount {
  color: #ffffff;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
}


.security-col {
  padding: 2px 8px;
}

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

.market-value {
  color: #ffffff;
  font-weight: 500;
}

.counterparty-loss {
  color: #ffffff;
  font-family: 'Roboto Mono', monospace;
  font-size: 14px;
  letter-spacing: -0.14px;
}

.priority-badge {
  border-radius: 90px;
  padding: 2px 13px;
  font-family: 'Roboto', sans-serif;
  font-weight: 500;
  font-size: 12px;
  color: white;
  letter-spacing: 0.12px;
  text-transform: uppercase;
}

.priority-badge.high {
  background-color: rgba(239, 68, 68, 0.8);
}

.priority-badge.medium {
  background-color: rgba(245, 158, 11, 0.8);
}

.priority-badge.low {
  background-color: rgba(0, 189, 101, 0.66);
}

/* Docked Actions Panel */
.docked-actions-panel {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  height: 100%;
  padding: 0 12px 0 16px;
  margin-right: 12px;
  box-sizing: border-box;
}

.action-icon-btn {
  background: transparent;
  border: none;
  color: rgba(255, 255, 255, 0.6);
  cursor: pointer;
  padding: 6px;
  border-radius: 4px;
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  min-width: 32px;
  height: 32px;
  box-sizing: border-box;
}

.action-icon-btn:hover {
  background-color: transparent;
  color: rgba(255, 255, 255, 0.9);
}

.action-icon-btn.active {
  color: #ffffff;
  background-color: transparent;
}

.action-icon-btn.close-btn:hover {
  color: #ef4444;
  background-color: transparent;
}

.action-icon-btn.edit-btn:hover {
  color: rgba(255, 255, 255, 0.9);
  background-color: transparent;
}

.action-icon-btn.toggle-btn:hover {
  color: rgba(255, 255, 255, 0.9);
  background-color: transparent;
}

.action-icon-btn.view-btn:hover {
  color: rgba(255, 255, 255, 0.9);
  background-color: transparent;
}

.action-icon {
  width: 20px;
  height: 20px;
  transition: all 0.2s ease;
  flex-shrink: 0;
  max-width: 100%;
  max-height: 100%;
}

/* Dense density adjustments */
.table-density-dense .docked-actions-panel {
  gap: 6px;
  padding: 0 10px 0 12px;
  margin-right: 10px;
}

.table-density-dense .action-icon-btn {
  min-width: 28px;
  height: 28px;
  padding: 4px;
}

.table-density-dense .action-icon {
  width: 16px;
  height: 16px;
}

/* Sticky Actions Column */
.sticky-actions {
  position: sticky;
  right: 0;
  background-color: #161818 !important;
  z-index: 30;
  border-left: 1px solid rgba(255, 255, 255, 0.1);
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.3);
}

/* Header sticky actions */
.table-header .sticky-actions {
  background-color: #161818 !important;
  z-index: 10;
  box-shadow: -2px 0 8px rgba(0, 0, 0, 0.4);
}

/* Row sticky actions */
.table-row .sticky-actions {
  background-color: #1A1A1A !important;
  z-index: 5;
}

.table-row:hover .sticky-actions {
  background-color: #1A1A1A !important;
  z-index: 30;
}
</style>