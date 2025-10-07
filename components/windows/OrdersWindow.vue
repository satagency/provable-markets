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
            <div class="header-cell actions-col">
              <span class="header-text">Actions</span>
            </div>
          </div>
          <!-- All Rows in Single Container - Original TSLA Row Duplicated 20 Times -->
          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>

          <div class="table-row">
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
                <span class="status-held">Held</span>
              </div>
              <div class="row-cell updated-col">
                <div class="date-time">
                  <span class="date">10/12/23</span>
                  <span class="time">09:23A</span>
                </div>
              </div>
              <div class="row-cell side-col">
                <div class="lending-badge">
                  <span class="lend-text">LENDER</span>
                </div>
              </div>
              <div class="row-cell intent-col">
                <span>Firm</span>
              </div>
              <div class="row-cell ticker-col">
                <span class="ticker">TSLA</span>
              </div>
              <div class="row-cell security-col">
                <span class="security-name">Tesla, Inc. Common Stock</span>
              </div>
              <div class="row-cell cusip-col">
                <span class="cusip">88160R101</span>
              </div>
              <div class="row-cell open-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell ioi-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell firm-qty-col">
                <span class="dash">--</span>
              </div>
              <div class="row-cell fee-col">
                <span class="fee-negative">-0.67%</span>
              </div>
              <div class="row-cell exec-fee-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell rebates-col">
                <span class="fee-positive">5.00%</span>
              </div>
              <div class="row-cell agreements-col">
                <div class="agreements-info">
                  <div class="agreement-count">3</div>
                  <span class="available-text">available</span>
                  <svg class="w-4 h-4 search-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
              <div class="row-cell unit-price-col">
                <span class="price">$175.24</span>
              </div>
              <div class="row-cell market-value-col">
                <span class="market-value">$175,000</span>
              </div>
              <div class="row-cell total-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell min-qty-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell time-force-col">
                <span class="quantity">111</span>
              </div>
              <div class="row-cell counterparty-col">
                <span class="loss-amount">-$203</span>
              </div>
              <div class="row-cell last-col">
                <div class="priority-badge high">HIGH</div>
              </div>
              <div class="row-cell actions-col">
                <div class="action-buttons">
                  <button class="action-btn">Edit</button>
                  <button class="action-btn danger">Cancel</button>
                </div>
              </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// Your existing script - preserved exactly
import { ref } from 'vue'
import { useTableDensity } from '~/composables/useTableDensity'

// Table density management
const { densityClasses } = useTableDensity()

// Sample data
const orders = ref([
  {
    id: 1,
    symbol: 'AAPL',
    description: 'Apple Inc.',
    side: 'Buy',
    quantity: 1000,
    price: 175.50,
    status: 'Filled',
    time: '09:30:15'
  },
  {
    id: 2,
    symbol: 'MSFT',
    description: 'Microsoft Corporation',
    side: 'Sell',
    quantity: 500,
    price: 342.75,
    status: 'Pending',
    time: '09:31:22'
  },
  {
    id: 3,
    symbol: 'GOOGL',
    description: 'Alphabet Inc.',
    side: 'Buy',
    quantity: 200,
    price: 142.30,
    status: 'Partially Filled',
    time: '09:32:45'
  }
])
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
  max-height: 400px;
  display: flex;
  flex-direction: column;
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
  z-index: 10;
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
.actions-col { width: 120px; min-width: 120px; }

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
.status-held {
  color: #ffb74d;
  font-weight: 500;
}

.status-active {
  color: #51cf66;
  font-weight: 500;
}

.status-pending {
  color: #ffd43b;
  font-weight: 500;
}

.status-filled {
  color: #51cf66;
  font-weight: 500;
}

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
  color: #51abff;
  font-weight: 600;
  font-family: 'Roboto Mono', monospace;
}

.loss-amount {
  color: #ff7575;
  font-family: 'Roboto Mono', monospace;
  font-weight: 500;
}

.lending-badge {
  background: linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), 
              linear-gradient(90deg, rgba(37, 99, 235, 0.43) 0%, rgba(37, 99, 235, 0.43) 100%);
  border: 1px solid #42BED9;
  border-radius: 4px;
  padding: 4px 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-height: 16px;
  height: 16px;
}

.lend-text {
  font-family: 'Matrix Sans SC', monospace;
  font-size: 9.905px;
  color: #3ffff6;
  letter-spacing: 0.4952px;
  text-transform: uppercase;
  font-weight: 400;
  line-height: normal;
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
  color: #51abff;
  font-weight: 500;
}

.counterparty-loss {
  color: #ff7575;
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

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
  background-color: transparent;
  border: 1px solid #333;
  color: #ccc;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 12px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.action-btn:hover {
  background-color: #2a2a2a;
  color: white;
}

.action-btn.danger {
  background-color: #ef4444;
  color: white;
  border-color: #ef4444;
}

.action-btn.danger:hover {
  background-color: #dc2626;
}
</style>
