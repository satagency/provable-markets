<template>
  <div class="create-agreement-window">
    <!-- Window Header with Controls -->
    <div class="window-header">
      <div class="window-title-section">
        <span class="window-title">
          {{ mode === 'create' ? 'Create Agreement' : mode === 'view' ? 'View Agreement' : 'Edit Agreement' }}
        </span>
        <span v-if="agreement" class="agreement-id">{{ agreement.agreementId }}</span>
      </div>
      <div class="window-controls">
        <!-- View mode: Only show Edit button -->
        <template v-if="mode === 'view'">
          <button class="batch-orders-btn edit-btn" @click="handleEditFromView">
            <span>Edit</span>
          </button>
        </template>
        <!-- Create/Edit mode: Show Save Draft and Create Agreement buttons -->
        <template v-else>
          <button class="batch-orders-btn save-draft-btn" @click="handleSaveDraft">
            <span>Save Draft</span>
          </button>
          <button class="batch-orders-btn create-btn" @click="handleCreateAgreement">
            <span>Create Agreement</span>
          </button>
        </template>
        <button class="close-btn" @click="$emit('close')">
          <CloseIcon />
        </button>
      </div>
    </div>

    <!-- Window Content -->
    <div class="window-content">
      <div class="create-agreement-content">
        <!-- Tab Menu -->
        <div class="tab-menu">
          <div 
            v-for="tab in createAgreementTabs"
            :key="tab.id"
            class="tab-item"
            :class="{ active: activeCreateAgreementTab === tab.id }"
            @click="activeCreateAgreementTab = tab.id"
          >
            {{ tab.label }}
          </div>
        </div>
        
        <!-- Tab Content -->
        <div class="tab-content">
          <!-- Basic Info Tab -->
          <div v-if="activeCreateAgreementTab === 'basic'" class="tab-panel">
            <div class="tab-columns">
              <!-- Left Column -->
              <div class="tab-column">
                <!-- New Agreement Section -->
                <div class="form-section new-agreement-section">
                  <h3 class="section-header">New Agreement</h3>
                  <div class="form-grid-3up">
                    <div class="material-input-group">
                      <label class="material-label">Side <span class="required-asterisk">*</span></label>
                      <select v-model="formData.side" class="material-input">
                        <option value="">Select Side</option>
                        <option value="LENDER">LENDER</option>
                        <option value="BORROWER">BORROWER</option>
                      </select>
                    </div>
                    <div class="material-input-group">
                      <label class="material-label">Counterparty <span class="required-asterisk">*</span></label>
                      <select v-model="formData.counterpartyId" class="material-input">
                        <option value="">Select Counterparty</option>
                        <option value="8002 – District Financial">8002 – District Financial</option>
                        <option value="8003 – State Financial">8003 – State Financial</option>
                        <option value="8004 – Regional Financial">8004 – Regional Financial</option>
                        <option value="8005 – Metro Financial">8005 – Metro Financial</option>
                      </select>
                    </div>
                    <div class="material-input-group">
                      <label class="material-label">Settlement Type <span class="required-asterisk">*</span></label>
                      <select v-model="formData.settlementType" class="material-input">
                        <option value="">Select Settlement Type</option>
                        <option value="NSCC">NSCC</option>
                        <option value="BILAT">BILAT</option>
                        <option value="OCC">OCC</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Booking & Trade Details -->
                <div class="form-section">
                  <div class="form-grid-3up">
                    <div class="material-input-group">
                      <label class="material-label">Booking Account</label>
                      <input 
                        v-model="formData.bookingAccount" 
                        type="text" 
                        placeholder="ACC-XXX-2023"
                        class="material-input"
                      />
                    </div>
                    <div class="material-input-group">
                      <label class="material-label">Counterparty Booking</label>
                      <input 
                        v-model="formData.counterpartyBooking" 
                        type="text" 
                        placeholder="Counterparty booking account"
                        class="material-input"
                      />
                    </div>
                    <div class="material-input-group">
                      <label class="material-label">Trade Type</label>
                      <select v-model="formData.tradeType" class="material-input">
                        <option value="">Select Trade Type</option>
                        <option value="State PERS Exclusive">State PERS Exclusive</option>
                        <option value="NSCC 100% Collateral">NSCC 100% Collateral</option>
                        <option value="JGB JPY Collateral">JGB JPY Collateral</option>
                        <option value="TT Cash EUR">TT Cash EUR</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column -->
              <div class="tab-column">
                <!-- Metadata Section -->
                <div class="form-section">
                  <h3 class="section-header">Metadata</h3>
                  <div class="form-grid-2up">
                    <div class="material-input-group">
                      <label class="material-label">Agreement Short Name <span class="required-asterisk">*</span></label>
                      <input 
                        v-model="formData.shortName" 
                        type="text" 
                        placeholder="Enter short name"
                        class="material-input"
                      />
                    </div>
                    <div class="material-input-group">
                      <label class="material-label">Agreement ID</label>
                      <input 
                        v-model="formData.agreementId" 
                        type="text" 
                        placeholder="Auto-generated"
                        class="material-input"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <!-- Collateral Tab -->
          <div v-else-if="activeCreateAgreementTab === 'collateral'" class="tab-panel">
            <div class="tab-columns">
              <!-- Left Column -->
              <div class="tab-column">
                <!-- Collateral Type Section -->
                <div class="form-section">
                  <h3 class="section-header">Collateral Type</h3>
                  <div class="form-grid-2up">
                    <div class="material-input-group">
                      <label class="material-label">Collateral Type</label>
                      <select v-model="formData.collateralType" class="material-input">
                        <option value="">Select Collateral Type</option>
                        <option value="Cash">Cash</option>
                        <option value="Non-Cash (UST)">Non-Cash (UST)</option>
                        <option value="Non-Cash (JGB)">Non-Cash (JGB)</option>
                      </select>
                    </div>
                    <div class="material-input-group">
                      <label class="material-label">Currency</label>
                      <select v-model="formData.pricingCurrency" class="material-input">
                        <option value="">Select Currency</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="JPY">JPY</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Coverage Section -->
                <div class="form-section">
                  <div class="form-grid-2up">
                    <div class="percentage-input">
                      <label class="material-label">Coverage <span class="required-asterisk">*</span></label>
                      <input 
                        v-model="formData.collateralPct" 
                        type="text" 
                        placeholder="102"
                        class="material-input"
                      />
                      <span class="percentage-symbol">%</span>
                    </div>
                    <div class="material-input-group">
                      <label class="material-label">Method <span class="required-asterisk">*</span></label>
                      <select v-model="formData.collateralMethod" class="material-input">
                        <option value="">Select Method</option>
                        <option value="Transfer Title (TT)">Transfer Title (TT)</option>
                        <option value="Pledge (PL)">Pledge (PL)</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column -->
              <div class="tab-column">
                <!-- Price Rounding Section -->
                <div class="form-section">
                  <h3 class="section-header">Price Rounding</h3>
                  <div class="form-grid-2up">
                    <div class="material-input-group">
                      <label class="material-label">Price Rounding <span class="required-asterisk">*</span></label>
                      <select v-model="formData.priceRounding" class="material-input">
                        <option value="">Select Rounding</option>
                        <option value="no rounding">no rounding</option>
                        <option value="up to nearest $0.25">up to nearest $0.25</option>
                        <option value="0.01">0.01</option>
                        <option value="0.001">0.001</option>
                        <option value="0.0001">0.0001</option>
                      </select>
                    </div>
                    <div class="material-input-group">
                      <!-- Empty space for balance -->
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Billing & Terms Tab -->
          <div v-else-if="activeCreateAgreementTab === 'billing'" class="tab-panel">
            <div class="tab-columns">
              <!-- Left Column -->
              <div class="tab-column">
                <!-- Billing & Dividends Section -->
                <div class="form-section">
                  <h3 class="section-header">Billing & Dividends</h3>
                  <div class="form-grid-2up">
                    <div class="percentage-input">
                      <label class="material-label">Dividend Required</label>
                      <input 
                        v-model="formData.dividendRequired" 
                        type="text" 
                        placeholder="100.00"
                        class="material-input"
                      />
                      <span class="percentage-symbol">%</span>
                    </div>
                    <div class="material-input-group">
                      <label class="material-label">Billing Currency</label>
                      <select v-model="formData.billingCurrency" class="material-input">
                        <option value="">Select Currency</option>
                        <option value="USD">USD</option>
                        <option value="EUR">EUR</option>
                        <option value="JPY">JPY</option>
                      </select>
                    </div>
                  </div>
                </div>

                <!-- Term Section -->
                <div class="form-section">
                  <h3 class="section-header">Term</h3>
                  <div class="form-grid-3up">
                    <div class="material-input-group">
                      <label class="material-label">Type</label>
                      <select v-model="formData.termType" class="material-input">
                        <option value="">Select Term Type</option>
                        <option value="None">None</option>
                        <option value="Fixed">Fixed</option>
                        <option value="Variable">Variable</option>
                        <option value="Open">Open</option>
                        <option value="Evergreen">Evergreen</option>
                      </select>
                    </div>
                    <div class="material-input-group date-input-group">
                      <label class="material-label">Start Date <span class="required-asterisk">*</span></label>
                      <input 
                        v-model="formData.termStart" 
                        type="date" 
                        class="material-input date-input"
                      />
                      <CalendarIcon class="date-icon" />
                    </div>
                    <div class="material-input-group date-input-group">
                      <label class="material-label">End Date <span class="required-asterisk">*</span></label>
                      <input 
                        v-model="formData.termEnd" 
                        type="date" 
                        class="material-input date-input"
                      />
                      <CalendarIcon class="date-icon" />
                    </div>
                  </div>
                </div>
              </div>

              <!-- Right Column -->
              <div class="tab-column">

                <!-- Balance Targets Section -->
                <div class="form-section">
                  <h3 class="section-header">Balance Targets</h3>
                  <div class="form-grid-2up">
                    <div class="material-input-group">
                      <label class="material-label">Balance Target</label>
                      <input 
                        v-model="formData.balanceTarget" 
                        type="text" 
                        placeholder="Balance Target"
                        class="material-input"
                      />
                    </div>
                    <div class="percentage-input">
                      <label class="material-label">Variable</label>
                      <input 
                        v-model="formData.targetVariable" 
                        type="text" 
                        placeholder="Variable"
                        class="material-input"
                      />
                      <span class="percentage-symbol">%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Misc Tab -->
          <div v-else-if="activeCreateAgreementTab === 'misc'" class="tab-panel">
            <div class="tab-columns">
              <!-- Left Column -->
              <div class="tab-column">
                <!-- System Settings Section -->
                <div class="form-section">
                  <h3 class="section-header">System Settings</h3>
                  <div class="form-grid-2up">
                    <div class="material-input-group">
                      <label class="material-label">RWA Bucket</label>
                      <input 
                        v-model="formData.rwaBucket" 
                        type="text" 
                        placeholder="Enter RWA bucket"
                        class="material-input"
                      />
                    </div>
                    <div class="material-input-group">
                      <label class="material-label">Settlement System</label>
                      <select v-model="formData.settlementSystem" class="material-input">
                        <option value="">Select System</option>
                        <option value="Provable">Provable</option>
                        <option value="--">--</option>
                      </select>
                    </div>
                  </div>
                </div>

              </div>

              <!-- Right Column -->
              <div class="tab-column">
                <!-- Additional Notes Section -->
                <div class="form-section">
                  <h3 class="section-header">Additional Notes</h3>
                  <div class="material-input-group textarea-group">
                    <label class="material-label">Comments</label>
                    <textarea 
                      v-model="formData.comments" 
                      placeholder="Counterparty: ABC Fund. Loan: 50,000 shares TSLA. Collateral: 102% cash. Term: Open. Recall anytime per MSLA. All other terms per platform agreement."
                      class="material-input textarea-field"
                      rows="4"
                    ></textarea>
                  </div>
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
import { ref, watch, onMounted } from 'vue'
import { CloseIcon, CalendarIcon } from '~/components/icons'

// Define props
interface Props {
  agreement?: any // The agreement data to pre-fill (optional)
  mode?: 'create' | 'view' | 'edit'
}

const props = withDefaults(defineProps<Props>(), {
  agreement: null,
  mode: 'create'
})

// Define emits
const emit = defineEmits(['close', 'create', 'save-draft', 'edit-from-view'])

// Create Agreement tab state
const activeCreateAgreementTab = ref('basic')
const createAgreementTabs = ref([
  { id: 'basic', label: 'Basic Info' },
  { id: 'collateral', label: 'Collateral' },
  { id: 'billing', label: 'Billing & Terms' },
  { id: 'misc', label: 'Misc' }
])

// Form data
const formData = ref({
  agreementId: '',
  side: '',
  counterpartyId: '',
  shortName: '',
  bookingAccount: '',
  counterpartyBooking: '',
  tradeType: '',
  settlementType: '',
  collateralPct: '',
  priceRounding: '',
  collateralType: '',
  collateralMethod: '',
  pricingCurrency: '',
  billingCurrency: '',
  dividendRequired: '',
  termType: '',
  termStart: '',
  termEnd: '',
  balanceTarget: '',
  targetVariable: '',
  rwaBucket: '',
  settlementSystem: '',
  comments: ''
})

// Handle create agreement
const handleCreateAgreement = () => {
  console.log('Creating agreement with data:', formData.value)
  emit('create', formData.value)
}

// Handle save draft
const handleSaveDraft = () => {
  console.log('Saving draft with data:', formData.value)
  emit('save-draft', formData.value)
}

const handleEditFromView = () => {
  console.log('Switching from view to edit mode')
  emit('edit-from-view', agreement.value)
}

// Pre-fill form when agreement data is provided
const prefillForm = (agreement) => {
  if (!agreement) return
  
  formData.value = {
    agreementId: agreement.agreementId || '',
    side: agreement.side || '',
    counterpartyId: agreement.counterpartyId || '',
    shortName: agreement.shortName || '',
    bookingAccount: agreement.bookingAccount || '',
    counterpartyBooking: agreement.counterpartyBooking || '',
    tradeType: agreement.tradeType || '',
    settlementType: agreement.settlementType || '',
    collateralPct: agreement.collateralPct || '',
    priceRounding: agreement.priceRounding || '',
    collateralType: agreement.collateralType || '',
    collateralMethod: agreement.collateralMethod || '',
    pricingCurrency: agreement.pricingCurrency || '',
    billingCurrency: agreement.billingCurrency || '',
    dividendRequired: agreement.dividendRequired || '',
    termType: agreement.termType || '',
    termStart: agreement.termStart || '',
    termEnd: agreement.termEnd || '',
    balanceTarget: agreement.balanceTarget || '',
    targetVariable: agreement.targetVariable || '',
    rwaBucket: agreement.rwaBucket || '',
    settlementSystem: agreement.settlementSystem || '',
    comments: agreement.comments || ''
  }
}

// Watch for agreement changes
watch(() => props.agreement, (newAgreement) => {
  prefillForm(newAgreement)
}, { immediate: true })

// Pre-fill on mount if agreement is provided
onMounted(() => {
  if (props.agreement) {
    prefillForm(props.agreement)
  }
})
</script>

<style scoped>
.create-agreement-window {
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

.agreement-id {
  font-family: 'Roboto Mono', monospace;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  margin-left: 8px;
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

.save-draft-btn {
  background-color: rgba(59, 130, 246, 0.8);
  color: white;
}

.save-draft-btn:hover {
  background-color: rgba(59, 130, 246, 1);
}

.create-btn {
  background-color: rgba(34, 197, 94, 0.8);
  color: white;
}

.create-btn:hover {
  background-color: rgba(34, 197, 94, 1);
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

/* Create Agreement Content */
.create-agreement-content {
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

.tab-panel {
  padding: 20px;
}

/* Form Sections */
.form-section {
  margin-bottom: 30px;
}

/* Extra spacing for New Agreement section */
.new-agreement-section {
  margin-bottom: 45px;
}

.form-section:last-child {
  margin-bottom: 0;
}

/* Tab Columns Layout - 2 column design */
.tab-columns {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 32px;
  height: 100%;
}

.tab-column {
  display: flex;
  flex-direction: column;
  gap: 0;
}

/* Form Grid - 2-up inputs for best UX */
.form-grid-2up {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px;
  max-width: 100%;
}

/* Form Grid - 3-up inputs for better grouping */
.form-grid-3up {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  max-width: 100%;
}

/* Legacy form grid for backward compatibility */
.form-grid {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 16px;
  max-width: 100%;
}

.form-column {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.form-label {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.form-input {
  width: 100%;
}

/* Material Design Input Styles - Matching Figma Design */
.material-input-group {
  position: relative;
  width: 100%;
  height: 54px;
  margin-bottom: 0;
  padding: 8px 4px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
}

.material-label {
  position: absolute;
  top: 6px;
  left: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  pointer-events: none;
  transition: all 0.2s ease;
  z-index: 1;
  transform: translateY(-50%);
}

.material-label .required-asterisk {
  color: #ff7777;
}

.material-input {
  width: 100%;
  height: 26px;
  background: transparent;
  border: none;
  border-bottom: 0.5px solid white;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 4.8px 0;
  outline: none;
  transition: all 0.2s ease;
  position: absolute;
  bottom: 0;
  left: 0;
}

.material-input:focus {
  color: white;
  border-bottom-color: #04CF8B;
}

.material-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.material-input option {
  background-color: #2a2a2a;
  color: #ffffff;
}

/* Custom date input styling with Phosphor calendar icon */
.date-input-group {
  position: relative;
}

.date-input {
  padding-right: 32px !important; /* Make room for the calendar icon */
}

.date-input::-webkit-calendar-picker-indicator {
  display: none; /* Hide the default calendar icon */
}

.date-icon {
  position: absolute;
  right: 8px;
  bottom: 4.8px;
  color: rgba(255, 255, 255, 0.7);
  pointer-events: none;
  transition: color 0.2s ease;
}

.date-input:focus + .date-icon {
  color: #04CF8B;
}

.date-input:hover + .date-icon {
  color: rgba(255, 255, 255, 0.9);
}

/* Section Headers */
.section-header {
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  color: #6fedc7;
  font-weight: 500;
  margin: 0;
  padding: 8px 0 16px 0;
}

/* Special input styles for percentage fields */
.percentage-input {
  position: relative;
  width: 100%;
  height: 54px;
  margin-bottom: 0;
  padding: 8px 4px;
  box-sizing: border-box;
  display: flex;
  align-items: flex-end;
}

.percentage-input .material-label {
  position: absolute;
  top: 6px;
  left: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  pointer-events: none;
  transition: all 0.2s ease;
  z-index: 1;
  transform: translateY(-50%);
}

.percentage-input .material-input {
  position: absolute;
  bottom: 0;
  left: 0;
  width: calc(100% - 20px);
  height: 26px;
  background: transparent;
  border: none;
  border-bottom: 0.5px solid white;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 4.8px 0;
  outline: none;
  transition: all 0.2s ease;
}

.percentage-input .material-input:focus {
  color: white;
  border-bottom-color: #04CF8B;
}

.percentage-input .material-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}

.percentage-symbol {
  color: white;
  font-size: 14px;
  font-family: 'Roboto', sans-serif;
  position: absolute;
  right: 0;
  bottom: 4.8px;
  pointer-events: none;
}

/* Legacy input field styles for non-material inputs */
.input-field {
  width: 100%;
  height: 32px;
  background: transparent;
  border: 1px solid #333;
  border-radius: 4px;
  color: #ccc;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  padding: 0 8px;
  transition: border-color 0.2s ease, box-shadow 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}

.input-field:focus {
  outline: none;
  border-color: #04CF8B;
  box-shadow: 0 0 0 1px #04CF8B;
  background-color: #2a2a2a;
  color: white;
}

.input-field::placeholder {
  color: #666;
}

.input-field option {
  background-color: #2a2a2a;
  color: #ffffff;
}

.textarea-field {
  height: auto;
  min-height: 80px;
  resize: vertical;
  position: relative !important;
  padding: 10px 0 !important;
}

/* Textarea group for full-width textareas */
.textarea-group {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 100px;
  margin-bottom: 0;
  padding: 8px 4px;
  box-sizing: border-box;
}

.textarea-group .material-label {
  position: absolute;
  top: 6px;
  left: 0;
  font-size: 12px;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 400;
  font-family: 'Roboto', sans-serif;
  pointer-events: none;
  transition: all 0.2s ease;
  z-index: 1;
  transform: translateY(-50%);
}

.textarea-group .material-input {
  width: 100%;
  min-height: 80px;
  background: transparent;
  border: none;
  border-bottom: 0.5px solid white;
  color: white;
  font-family: 'Roboto', sans-serif;
  font-size: 14px;
  padding: 4.8px 0;
  outline: none;
  transition: all 0.2s ease;
  position: absolute;
  bottom: 0;
  left: 0;
  resize: vertical;
}

.textarea-group .material-input:focus {
  color: white;
  border-bottom-color: #04CF8B;
}

.textarea-group .material-input::placeholder {
  color: rgba(255, 255, 255, 0.4);
}
</style>
