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
        <div class="header-cell agreement-id-col">
          <span class="header-text">Agreement ID</span>
        </div>
        <div class="header-cell side-col">
          <span class="header-text">Side</span>
        </div>
        <div class="header-cell counterparty-id-col">
          <span class="header-text">Counterparty ID</span>
        </div>
        <div class="header-cell short-name-col">
          <span class="header-text">Short Name</span>
        </div>
        <div class="header-cell booking-account-col">
          <span class="header-text">Booking Account</span>
        </div>
        <div class="header-cell counterparty-booking-col">
          <span class="header-text">Counterparty Booking Account</span>
        </div>
        <div class="header-cell trade-type-col">
          <span class="header-text">Trade Type</span>
        </div>
        <div class="header-cell settlement-type-col">
          <span class="header-text">Settlement Type</span>
        </div>
        <div class="header-cell collateral-pct-col">
          <span class="header-text">Collateral %</span>
        </div>
        <div class="header-cell price-rounding-col">
          <span class="header-text">Price Rounding</span>
        </div>
        <div class="header-cell created-by-col">
          <span class="header-text">Created By</span>
        </div>
        <div class="header-cell approved-by-col">
          <span class="header-text">Approved By</span>
        </div>
        <div class="header-cell created-at-col">
          <span class="header-text">Created At</span>
        </div>
        <div class="header-cell approved-at-col">
          <span class="header-text">Approved At</span>
        </div>
        <div class="header-cell collateral-type-col">
          <span class="header-text">Collateral Type</span>
        </div>
        <div class="header-cell pricing-currency-col">
          <span class="header-text">Pricing Currency</span>
        </div>
        <div class="header-cell billing-currency-col">
          <span class="header-text">Billing Currency</span>
        </div>
        <div class="header-cell collateral-method-col">
          <span class="header-text">Collateral Method</span>
        </div>
        <div class="header-cell dividend-required-col">
          <span class="header-text">Dividend Required</span>
        </div>
        <div class="header-cell term-type-col">
          <span class="header-text">Term Type</span>
        </div>
        <div class="header-cell term-start-col">
          <span class="header-text">Term Start</span>
        </div>
        <div class="header-cell term-end-col">
          <span class="header-text">Term End</span>
        </div>
        <div class="header-cell balance-target-col">
          <span class="header-text">Balance Target</span>
        </div>
        <div class="header-cell target-variable-col">
          <span class="header-text">Target Variable</span>
        </div>
        <div class="header-cell settlement-system-col">
          <span class="header-text">Settlement System</span>
        </div>
            <div class="header-cell actions-col sticky-actions">
          <span class="header-text">Actions</span>
        </div>
      </div>

        <!-- Dynamic Table Rows -->
          <div 
            v-for="agreement in agreements" 
            :key="agreement.id" 
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
          <StatusPill status="OPEN" />
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">{{ agreement.agreementId }}</span>
        </div>
        <div class="row-cell side-col">
          <SideBadge :side="agreement.side" />
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">{{ agreement.counterpartyId }}</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">{{ agreement.shortName }}</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">{{ agreement.bookingAccount }}</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">{{ agreement.counterpartyBooking }}</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">{{ agreement.tradeType }}</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">{{ agreement.settlementType }}</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">{{ agreement.collateralPct }}</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">{{ agreement.priceRounding }}</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">{{ agreement.createdBy }}</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">{{ agreement.approvedBy }}</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">{{ agreement.createdAt }}</span>
            <span class="time">{{ agreement.createdAtTime }}</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <div class="date-time">
            <span class="date">{{ agreement.approvedAt }}</span>
            <span class="time">{{ agreement.approvedAtTime }}</span>
          </div>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">{{ agreement.collateralType }}</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">{{ agreement.pricingCurrency }}</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">{{ agreement.billingCurrency }}</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">{{ agreement.collateralMethod }}</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">{{ agreement.dividendRequired }}</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">{{ agreement.termType }}</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">{{ agreement.termStart }}</span>
            <span class="time">{{ agreement.termStartTime }}</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">{{ agreement.termEnd }}</span>
            <span class="time">{{ agreement.termEndTime }}</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">{{ agreement.balanceTarget }}</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">{{ agreement.targetVariable }}</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="settlement-system">{{ agreement.settlementSystem }}</span>
        </div>
              <div class="row-cell actions-col sticky-actions">
                <div class="docked-actions-panel">
                  <button 
                    class="action-icon-btn close-btn"
                    @click="handleCloseAgreement(agreement)"
                    title="Close Agreement"
                  >
                    <svg class="action-icon" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"/>
            </svg>
                  </button>
                  <button 
                    class="action-icon-btn edit-btn"
                    @click="handleEditAgreement(agreement)"
                    title="Edit Agreement"
                  >
                    <svg class="action-icon" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M227.31,73.37,182.63,28.69a16,16,0,0,0-22.63,0L36.69,152A15.86,15.86,0,0,0,32,163.31V208a16,16,0,0,0,16,16H92.69A15.86,15.86,0,0,0,104,219.31L227.31,96A16,16,0,0,0,227.31,73.37ZM192,108.68,147.31,64,168,43.31,212.69,88ZM48,163.31l76.69-76.68,44.68,44.69L92.69,208H48Z"/>
            </svg>
                  </button>
                  <button 
                    class="action-icon-btn duplicate-btn"
                    @click="handleDuplicate(agreement)"
                    :class="{ 'active': false }"
                    title="Duplicate Agreement"
                  >
                    <!-- Duplicate icon -->
                    <svg class="action-icon" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M184,64H40A16,16,0,0,0,24,80V216a16,16,0,0,0,16,16H184a16,16,0,0,0,16-16V80A16,16,0,0,0,184,64Zm0,152H40V80H184V216ZM216,40V184a8,8,0,0,1-16,0V48H64a8,8,0,0,1,0-16H200A16,16,0,0,1,216,40Z"/>
            </svg>
                  </button>
                  <button 
                    class="action-icon-btn view-btn"
                    @click="handleViewAgreement(agreement)"
                    :class="{ 'active': viewedAgreementId === agreement.id }"
                    title="View Agreement Details"
                  >
                    <!-- Outline eye icon (default) -->
                    <svg v-if="viewedAgreementId !== agreement.id" class="action-icon" fill="currentColor" viewBox="0 0 256 256">
                      <path d="M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,192c-30.78,0-57.67-11.19-79.93-33.25A133.47,133.47,0,0,1,25,128,133.33,133.33,0,0,1,48.07,97.25C70.33,75.19,97.22,64,128,64s57.67,11.19,79.93,33.25A133.46,133.46,0,0,1,231,128C223.84,141.46,192.43,192,128,192Zm0-112a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Z"/>
            </svg>
                    <!-- Filled eye icon (active/viewing) -->
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

    <!-- Confirmation Dialog -->
    <ConfirmDialog
      :config="confirmDialogConfig"
      :is-open="showConfirmDialog"
      @confirm="handleConfirmClose"
      @cancel="handleCancelClose"
      @close="handleCancelClose"
    />
</template>

<script setup lang="ts">
// Dynamic orders data for permanent scrolling solution
import { ref } from 'vue'
import { useTableDensity } from '~/composables/useTableDensity'
import StatusPill from '~/components/ui/StatusPill.vue'
import SideBadge from '~/components/ui/SideBadge.vue'
import ConfirmDialog from '~/components/ui/ConfirmDialog.vue'
import { ArrowBendUpRightIcon } from '~/components/icons'

// Table density management
const { densityClasses, setDensity } = useTableDensity()

// Force normal density for Agreements (good spacing like Orders)
setDensity('normal')

// Define emits
const emit = defineEmits(['view-agreement', 'edit-agreement', 'create-agreement', 'close-details'])

// Generate dynamic agreements data
const generateAgreements = () => {
  const agreementIds = [
    'A800280056GP64MC72C-V1',
    'A800780007GP64MC72C-V1', 
    'A800380003GP64MC72C-V1',
    'A800380003GP64MC72C-V2',
    'A800380003GP64MC72C-V3'
  ]
  const sides = ['LENDER', 'BORROWER', 'BORROWER', 'BORROWER', 'LENDER']
  const counterparties = [
    '8002 – District Financial',
    '8007 – West Side Assets',
    '8003 – Tribeca Financial',
    '8003 – Tribeca Financial',
    '8003 – Tribeca Financial'
  ]
  const shortNames = [
    'DTRCT_StatePERS_NSCC',
    'WESTSIDE (B)',
    'TRIBECA (B)',
    'Tribeca_NSCC_B',
    'Tribeca_NSCC_L'
  ]
  const bookingAccounts = ['ACC-001-2023', 'ACC-002-2023', 'ACC-003-2023', 'ACC-004-2023', 'ACC-005-2023']
  const counterpartyBookings = ['GS-ACC-001-INTERNAL', 'WS-ACC-001-INTERNAL', 'TB-ACC-001-INTERNAL', 'TB-ACC-002-INTERNAL', 'TB-ACC-003-INTERNAL']
  const tradeTypes = ['State PERS Exclusive', 'West Side Standard', 'Tribeca Standard', 'Tribeca NSCC', 'Tribeca NSCC']
  const settlementTypes = ['NSCC', 'DTC', 'NSCC', 'NSCC', 'NSCC']
  const collateralTypes = ['Cash', 'Securities', 'Cash', 'Securities', 'Cash']
  const currencies = ['USD', 'USD', 'USD', 'USD', 'USD']
  const collateralMethods = ['Transfer (TT)', 'Transfer (TT)', 'Transfer (TT)', 'Transfer (TT)', 'Transfer (TT)']
  const termTypes = ['Fixed', 'Variable', 'Fixed', 'Variable', 'Fixed']
  const createdBy = ['John Smith', 'Jane Doe', 'Bob Johnson', 'Alice Brown', 'Charlie Wilson']
  const approvedBy = ['Jane Doe', 'John Smith', 'Alice Brown', 'Bob Johnson', 'Jane Doe']
  const statuses = ['Active', 'Active', 'Active', 'Active', 'Active']
  
  const agreements = []
  
  for (let i = 0; i < 5; i++) {
    const status = statuses[i]
    const side = sides[i]
    
    agreements.push({
      id: i + 1,
      status,
      agreementId: agreementIds[i],
      side,
      counterpartyId: counterparties[i],
      shortName: shortNames[i],
      bookingAccount: bookingAccounts[i],
      counterpartyBooking: counterpartyBookings[i],
      tradeType: tradeTypes[i],
      settlementType: settlementTypes[i],
      collateralPct: '120%',
      priceRounding: '0.01',
      createdBy: createdBy[i],
      approvedBy: approvedBy[i],
      createdAt: '10/12/23',
      createdAtTime: '09:23A',
      approvedAt: '10/12/23',
      approvedAtTime: '10:15A',
      collateralType: collateralTypes[i],
      pricingCurrency: currencies[i],
      billingCurrency: currencies[i],
      collateralMethod: collateralMethods[i],
      dividendRequired: '100%',
      termType: termTypes[i],
      termStart: '10/12/23',
      termStartTime: 'EOD',
      termEnd: '11/11/23',
      termEndTime: 'EOD',
      balanceTarget: '$200,000,000,000',
      targetVariable: '5%',
      settlementSystem: 'Provable',
      isToggled: false
    })
  }
  
  return agreements
}

// Sample data
const agreements = ref(generateAgreements())

// Selected agreement for confirmation dialog
const selectedAgreement = ref(null)

// Track which agreement is currently being viewed
const viewedAgreementId = ref(null)

// State for confirmation dialog
const showConfirmDialog = ref(false)
const confirmDialogConfig = ref({
  title: 'Close Agreement',
  message: 'Are you sure you want to close this agreement?',
  confirmText: 'Close Agreement',
  cancelText: 'Cancel',
  variant: 'danger' as const,
  allowBackdropClose: true
})

// Action handlers
const handleCloseOrder = (orderId) => {
  console.log('Closing order:', orderId)
  // TODO: Implement close order logic
}

const handleEditOrder = (orderId) => {
  console.log('Editing order:', orderId)
  // TODO: Implement edit order logic
}

const handleDuplicate = (agreement) => {
  console.log('Duplicating agreement:', agreement)
  // TODO: Implement duplicate agreement logic
}

const handleView = () => {
  console.log('View agreement details')
}

const handleClose = () => {
  console.log('Close agreement')
}

const handleEdit = () => {
  console.log('Edit agreement')
}

// New handlers for agreement actions
const handleViewAgreement = (agreement) => {
  console.log('handleViewAgreement called with:', agreement)
  console.log('Emitting view-agreement event to parent')
  viewedAgreementId.value = agreement.id
  emit('view-agreement', agreement)
}

const handleEditAgreement = (agreement) => {
  console.log('handleEditAgreement called with:', agreement)
  console.log('Emitting edit-agreement event to parent')
  emit('edit-agreement', agreement)
}

const handleCloseAgreement = (agreement) => {
  selectedAgreement.value = agreement
  showConfirmDialog.value = true
}

// Dialog handlers
const handleConfirmClose = () => {
  console.log('Closing agreement:', selectedAgreement.value)
  // TODO: Implement actual close logic
  showConfirmDialog.value = false
  selectedAgreement.value = null
}

const handleCancelClose = () => {
  showConfirmDialog.value = false
  selectedAgreement.value = null
}

// Clear viewed state when details window is closed
const clearViewedState = () => {
  viewedAgreementId.value = null
}

// Expose the clearViewedState function to parent
defineExpose({
  clearViewedState
})

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
  font-size: 14px;
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

/* Column Assignments - 25% more dense */
.select-col { width: 60px; min-width: 60px; }
.status-col { width: 60px; min-width: 60px; }
.agreement-id-col { width: 150px; min-width: 150px; }
.side-col { width: 60px; min-width: 60px; }
.counterparty-id-col { width: 120px; min-width: 120px; }
.short-name-col { width: 135px; min-width: 135px; }
.booking-account-col { width: 105px; min-width: 105px; }
.counterparty-booking-col { width: 150px; min-width: 150px; }
.trade-type-col { width: 120px; min-width: 120px; }
.settlement-type-col { width: 90px; min-width: 90px; }
.collateral-pct-col { width: 75px; min-width: 75px; }
.price-rounding-col { width: 75px; min-width: 75px; }
.created-by-col { width: 90px; min-width: 90px; }
.approved-by-col { width: 90px; min-width: 90px; }
.created-at-col { width: 90px; min-width: 90px; }
.approved-at-col { width: 90px; min-width: 90px; }
.collateral-type-col { width: 90px; min-width: 90px; }
.pricing-currency-col { width: 90px; min-width: 90px; }
.billing-currency-col { width: 90px; min-width: 90px; }
.collateral-method-col { width: 105px; min-width: 105px; }
.dividend-required-col { width: 90px; min-width: 90px; }
.term-type-col { width: 75px; min-width: 75px; }
.term-start-col { width: 90px; min-width: 90px; }
.term-end-col { width: 90px; min-width: 90px; }
.balance-target-col { width: 135px; min-width: 135px; }
.target-variable-col { width: 90px; min-width: 90px; }
.settlement-system-col { width: 90px; min-width: 90px; }
.actions-col { width: 190px; min-width: 190px; }

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
  overflow: hidden;
  text-overflow: ellipsis;
}

/* Normal density (default - current Orders spacing) */
.table-density-normal .row-cell {
  height: 48px;
  padding: 0 12px;
  font-size: 14px;
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

/* Text truncation for data elements */
.agreement-id,
.counterparty-id,
.short-name,
.booking-account,
.counterparty-booking,
.trade-type,
.settlement-type,
.collateral-type,
.pricing-currency,
.billing-currency,
.collateral-method,
.term-type,
.settlement-system,
.created-by,
.approved-by,
.balance-target,
.target-variable {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
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
  padding: 0 16px;
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

.action-icon-btn.duplicate-btn:hover {
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