<template>
  <div class="agreement-details-window">
    <!-- Window Header with Controls -->
    <div class="window-header">
      <div class="window-title-section">
        <span class="window-title">{{ agreement?.agreementId || 'Agreement Details' }}</span>
        <StatusPill :status="agreement?.status || 'OPEN'" />
      </div>
      <div class="window-controls">
        <button 
          class="batch-orders-btn toggle-activation-btn" 
          :class="{ 'active': isAgreementActive, 'inactive': !isAgreementActive }"
          @click="toggleAgreementActivation"
        >
          <span>{{ isAgreementActive ? 'Deactivate' : 'Activate' }}</span>
        </button>
        <button class="batch-orders-btn terminate-btn" @click="handleTerminateAgreement">
          <span>Terminate</span>
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
      <div class="agreement-details-content">
        <!-- Tab Menu -->
        <div class="tab-menu">
          <div 
            v-for="tab in agreementDetailTabs"
            :key="tab.id"
            class="tab-item"
            :class="{ active: activeAgreementDetailTab === tab.id }"
            @click="activeAgreementDetailTab = tab.id"
          >
            {{ tab.label }}
          </div>
        </div>
        
        <!-- Tab Content -->
        <div class="tab-content">
        <!-- History Tab -->
        <div v-if="activeAgreementDetailTab === 'history'" class="tab-panel">
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
              <div class="header-cell status-col">
                <span class="header-text">Status</span>
              </div>
              <div class="header-cell side-col">
                <span class="header-text">Side</span>
              </div>
              <div class="header-cell counterparty-col">
                <span class="header-text">Counterparty</span>
              </div>
              <div class="header-cell collateral-col">
                <span class="header-text">Collateral %</span>
              </div>
              <div class="header-cell balance-col">
                <span class="header-text">Balance Target</span>
              </div>
              <div class="header-cell initiator-col">
                <span class="header-text">Initiator</span>
              </div>
            </div>
            
            <!-- Agreement History Entries -->
            <div v-for="entry in agreementHistory" :key="entry.id" class="agreement-entry">
              <div class="entry-row">
                <div class="entry-cell when-col">
                  <span class="date">{{ entry.date }}</span>
                  <span class="time">{{ entry.time }}</span>
                </div>
                <div class="entry-cell event-col">
                  <StatusPill :status="entry.event.toUpperCase()" />
                </div>
                <div class="entry-cell status-col">
                  <StatusPill :status="entry.status.toUpperCase()" />
                </div>
                <div class="entry-cell side-col">
                  <SideBadge :side="entry.side" />
                </div>
                <div class="entry-cell counterparty-col">
                  <span class="counterparty">{{ entry.counterparty }}</span>
                </div>
                <div class="entry-cell collateral-col">
                  <span class="percentage">{{ entry.collateralPct }}%</span>
                </div>
                <div class="entry-cell balance-col">
                  <span class="balance">{{ entry.balanceTarget }}</span>
                </div>
                <div class="entry-cell initiator-col">
                  <span class="email">{{ entry.initiator }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Terms Tab -->
        <div v-else-if="activeAgreementDetailTab === 'terms'" class="tab-panel">
          <!-- Table Container -->
          <div class="table-container">
            <!-- Table Header -->
            <div class="table-header">
              <div class="header-cell term-type-col">
                <span class="header-text">Term Type</span>
              </div>
              <div class="header-cell start-date-col">
                <span class="header-text">Start Date</span>
              </div>
              <div class="header-cell end-date-col">
                <span class="header-text">End Date</span>
              </div>
              <div class="header-cell collateral-type-col">
                <span class="header-text">Collateral Type</span>
              </div>
              <div class="header-cell collateral-method-col">
                <span class="header-text">Collateral Method</span>
              </div>
              <div class="header-cell pricing-currency-col">
                <span class="header-text">Pricing Currency</span>
              </div>
              <div class="header-cell billing-currency-col">
                <span class="header-text">Billing Currency</span>
              </div>
              <div class="header-cell dividend-required-col">
                <span class="header-text">Dividend Required</span>
              </div>
            </div>
            
            <!-- Agreement Terms Entry -->
            <div class="agreement-entry">
              <div class="entry-row">
                <div class="entry-cell term-type-col">
                  <span class="term-type">Fixed</span>
                </div>
                <div class="entry-cell start-date-col">
                  <span class="date">10/12/23</span>
                  <span class="time">EOD</span>
                </div>
                <div class="entry-cell end-date-col">
                  <span class="date">11/11/23</span>
                  <span class="time">EOD</span>
                </div>
                <div class="entry-cell collateral-type-col">
                  <span class="collateral-type">Cash</span>
                </div>
                <div class="entry-cell collateral-method-col">
                  <span class="collateral-method">Transfer (TT)</span>
                </div>
                <div class="entry-cell pricing-currency-col">
                  <span class="currency">USD</span>
                </div>
                <div class="entry-cell billing-currency-col">
                  <span class="currency">USD</span>
                </div>
                <div class="entry-cell dividend-required-col">
                  <span class="percentage">100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Details Tab -->
        <div v-else-if="activeAgreementDetailTab === 'details'" class="tab-panel">
          <div class="details-grid">
            <div class="detail-column">
              <div class="detail-row">
                <div class="detail-label">Agreement ID</div>
                <div class="detail-value">A800280056GP64MC72C-V1</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Side</div>
                <div class="detail-value">LENDER</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Counterparty</div>
                <div class="detail-value">8002 – District Financial</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Short Name</div>
                <div class="detail-value">DTRCT_StatePERS_NSCC</div>
              </div>
            </div>
            <div class="detail-column">
              <div class="detail-row">
                <div class="detail-label">Booking Account</div>
                <div class="detail-value">ACC-001-2023</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Counterparty Booking</div>
                <div class="detail-value">GS-ACC-001-INTERNAL</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Trade Type</div>
                <div class="detail-value">State PERS Exclusive</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Settlement Type</div>
                <div class="detail-value">NSCC</div>
              </div>
            </div>
            <div class="detail-column">
              <div class="detail-row">
                <div class="detail-label">Collateral %</div>
                <div class="detail-value">120%</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Price Rounding</div>
                <div class="detail-value">0.01</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Balance Target</div>
                <div class="detail-value">$200,000,000,000</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Target Variable</div>
                <div class="detail-value">5%</div>
              </div>
            </div>
            <div class="detail-column">
              <div class="detail-row">
                <div class="detail-label">Created By</div>
                <div class="detail-value">John Smith</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Approved By</div>
                <div class="detail-value">Jane Doe</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Created At</div>
                <div class="detail-value">10/12/23 09:23A</div>
              </div>
              <div class="detail-row">
                <div class="detail-label">Approved At</div>
                <div class="detail-value">10/12/23 10:15A</div>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import StatusPill from '~/components/ui/StatusPill.vue'
import SideBadge from '~/components/ui/SideBadge.vue'
// Define props
interface Props {
  agreement?: any
}

const props = withDefaults(defineProps<Props>(), {
  agreement: null
})

// Define emits
const emit = defineEmits(['close', 'deactivate', 'terminate', 'edit'])

// Agreement activation state
const isAgreementActive = ref(true)

// Agreement Details tab state
const activeAgreementDetailTab = ref('history')
const agreementDetailTabs = ref([
  { id: 'history', label: 'History' },
  { id: 'terms', label: 'Terms' },
  { id: 'details', label: 'Details' }
])

// Toggle agreement activation
const toggleAgreementActivation = () => {
  isAgreementActive.value = !isAgreementActive.value
  console.log(`Agreement ${isAgreementActive.value ? 'activated' : 'deactivated'}`)
}

// Handle terminate agreement with confirmation dialog
const handleTerminateAgreement = async () => {
  console.log('Terminate button clicked!') // Debug log
  
  try {
    const confirmed = await showDialog({
      title: 'Agreement termination',
      message: 'You are about to terminate this agreement. This cannot be undone.',
      confirmText: 'Terminate Agreement',
      cancelText: 'Keep Agreement',
      variant: 'danger',
      allowBackdropClose: false
    })
    
    console.log('Dialog result:', confirmed) // Debug log
    
    if (confirmed) {
      // Perform the actual terminate operation
      console.log('Agreement terminated successfully')
      emit('terminate')
    }
  } catch (error) {
    console.error('Error terminating agreement:', error)
  }
}

// Agreement History data
const agreementHistory = ref([])

// Generate sample agreement history data
const generateAgreementHistory = () => {
  const history = [
    {
      id: 'history-1',
      date: '10/12',
      time: '9:23AM',
      event: 'Created',
      status: 'Pending',
      side: 'LENDER',
      counterparty: '8002 – District Financial',
      collateralPct: '120%',
      balanceTarget: '$200,000,000,000',
      initiator: 'john.smith@firm.com'
    },
    {
      id: 'history-2',
      date: '10/12',
      time: '10:15AM',
      event: 'Approved',
      status: 'Active',
      side: 'LENDER',
      counterparty: '8002 – District Financial',
      collateralPct: '120%',
      balanceTarget: '$200,000,000,000',
      initiator: 'jane.doe@firm.com'
    },
    {
      id: 'history-3',
      date: '10/15',
      time: '2:30PM',
      event: 'Amended',
      status: 'Active',
      side: 'LENDER',
      counterparty: '8002 – District Financial',
      collateralPct: '125%',
      balanceTarget: '$250,000,000,000',
      initiator: 'john.smith@firm.com'
    }
  ]
  
  return history
}

onMounted(() => {
  agreementHistory.value = generateAgreementHistory()
})
</script>

<style scoped>
.agreement-details-window {
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

.terminate-btn {
  background-color: rgba(239, 68, 68, 0.8);
  color: white;
}

.terminate-btn:hover {
  background-color: rgba(239, 68, 68, 1);
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

/* Agreement Details Content */
.agreement-details-content {
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

/* Agreement Entry */
.agreement-entry {
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
.status-col { width: 100px; min-width: 100px; }
.side-col { width: 100px; min-width: 100px; }
.counterparty-col { width: 200px; min-width: 200px; }
.collateral-col { width: 120px; min-width: 120px; }
.balance-col { width: 180px; min-width: 180px; }
.initiator-col { width: 180px; min-width: 180px; }

/* Terms Tab Column Widths */
.term-type-col { width: 100px; min-width: 100px; }
.start-date-col { width: 120px; min-width: 120px; }
.end-date-col { width: 120px; min-width: 120px; }
.collateral-type-col { width: 140px; min-width: 140px; }
.collateral-method-col { width: 140px; min-width: 140px; }
.pricing-currency-col { width: 120px; min-width: 120px; }
.billing-currency-col { width: 120px; min-width: 120px; }
.dividend-required-col { width: 120px; min-width: 120px; }

/* Data Element Styling */
.date {
  color: #ffffff;
  font-weight: 400;
  margin-right: 8px;
}

.time {
  color: rgba(255, 255, 255, 0.6);
  font-weight: 400;
}

.percentage {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #51cf66;
  font-weight: 500;
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

.counterparty {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.balance {
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto Mono', monospace;
}


.term-type {
  color: #ffffff;
  font-weight: 500;
}

.collateral-type {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.collateral-method {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
}

.currency {
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto Mono', monospace;
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
