<template>
  <div class="agreements-window" :class="densityClasses">
    <!-- Agreements Table -->
    <div class="agreements-content">
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
        <div class="header-cell actions-col">
          <span class="header-text">Actions</span>
        </div>
      </div>

      <!-- Table Rows -->
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
          <span class="status-active">Active</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">A800280056GP64MC72C-V1</span>
        </div>
        <div class="row-cell side-col">
          <div class="lending-badge">
            <span class="lend-text">LENDER</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8002 – District Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">DTRCT_StatePERS_NSCC</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-001-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">GS-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">State PERS Exclusive</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">NSCC</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">120%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.01</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">John Smith</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">Jane Doe</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/12/23</span>
            <span class="time">09:23A</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <div class="date-time">
            <span class="date">10/12/23</span>
            <span class="time">10:15A</span>
          </div>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Cash</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">USD</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">USD</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Transfer (TT)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">100%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Fixed</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">10/12/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">11/11/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$200,000,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">5%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="settlement-system">Provable</span>
        </div>
        <div class="row-cell actions-col">
          <div class="action-buttons">
            <button class="action-btn">Edit</button>
            <button class="action-btn danger">Terminate</button>
          </div>
        </div>
      </div>

      <!-- Additional sample rows -->
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
          <span class="status-pending">Pending</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">B900380067HQ75ND83D-V2</span>
        </div>
        <div class="row-cell side-col">
          <div class="borrowing-badge">
            <span class="borrow-text">BORROW</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8003 – State Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">DTRCT_StatePERS_BILAT</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-002-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">MS-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">NSCC 100% Collateral</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">BILAT</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">100%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.001</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Mike Johnson</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">--</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/11/23</span>
            <span class="time">14:45P</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <span class="dash">--</span>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Non-Cash (UST)</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">EUR</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">EUR</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Pledge (PL)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">110%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Variable</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">10/18/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">10/25/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$50,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">0%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="dash">--</span>
        </div>
        <div class="row-cell actions-col">
          <div class="action-buttons">
            <button class="action-btn">Edit</button>
            <button class="action-btn danger">Cancel</button>
          </div>
        </div>
      </div>

      <!-- Additional sample rows -->
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
          <span class="status-active">Active</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">C100490068IR86OE94E-V1</span>
        </div>
        <div class="row-cell side-col">
          <div class="lending-badge">
            <span class="lend-text">LENDER</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8004 – Regional Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">REG_StatePERS_OCC</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-003-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">RF-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">JGB JPY Collateral</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">OCC</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">110%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.0001</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Sarah Wilson</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">Tom Brown</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/10/23</span>
            <span class="time">11:30A</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <div class="date-time">
            <span class="date">10/10/23</span>
            <span class="time">12:45P</span>
          </div>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Non-Cash (JGB)</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">JPY</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">JPY</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Transfer (TT)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">105%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Fixed</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">10/15/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">12/15/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$75,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">3%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="settlement-system">Provable</span>
        </div>
        <div class="row-cell actions-col">
          <div class="action-buttons">
            <button class="action-btn">Edit</button>
            <button class="action-btn danger">Terminate</button>
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
          <span class="status-pending">Pending</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">D200580079JS97PF05F-V3</span>
        </div>
        <div class="row-cell side-col">
          <div class="borrowing-badge">
            <span class="borrow-text">BORROW</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8005 – Metro Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">METRO_StatePERS_NSCC</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-004-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">MF-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">TT Cash EUR</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">NSCC</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">125%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.01</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Lisa Chen</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">--</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/09/23</span>
            <span class="time">16:20P</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <span class="dash">--</span>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Cash</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">EUR</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">EUR</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Pledge (PL)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">115%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Variable</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">10/20/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">11/20/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$125,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">2%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="dash">--</span>
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
          <span class="status-active">Active</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">E300680080KT08QG16G-V1</span>
        </div>
        <div class="row-cell side-col">
          <div class="lending-badge">
            <span class="lend-text">LENDER</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8006 – Global Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">GLOBAL_StatePERS_BILAT</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-005-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">GF-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">NSCC 120% Collateral</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">BILAT</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">120%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.001</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">David Kim</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">Maria Garcia</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/08/23</span>
            <span class="time">08:15A</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <div class="date-time">
            <span class="date">10/08/23</span>
            <span class="time">09:30A</span>
          </div>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Non-Cash (UST)</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">USD</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">USD</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Transfer (TT)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">100%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Fixed</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">10/25/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">01/25/24</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$500,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">1%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="settlement-system">Provable</span>
        </div>
        <div class="row-cell actions-col">
          <div class="action-buttons">
            <button class="action-btn">Edit</button>
            <button class="action-btn danger">Terminate</button>
          </div>
        </div>
      </div>

      <!-- Additional rows for vertical scrolling demonstration -->
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
          <span class="status-pending">Pending</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">F400780091LU19RH27H-V2</span>
        </div>
        <div class="row-cell side-col">
          <div class="borrowing-badge">
            <span class="borrow-text">BORROW</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8007 – Central Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">CENTRAL_StatePERS_NSCC</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-006-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">CF-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">State PERS Excl</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">NSCC</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">115%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.01</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Alex Rodriguez</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">--</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/07/23</span>
            <span class="time">13:45P</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <span class="dash">--</span>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Cash</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">USD</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">USD</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Transfer (TT)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">110%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Variable</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">10/30/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">12/30/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$300,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">4%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="dash">--</span>
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
          <span class="status-active">Active</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">G500880102MV30SI38I-V1</span>
        </div>
        <div class="row-cell side-col">
          <div class="lending-badge">
            <span class="lend-text">LENDER</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8008 – Premier Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">PREMIER_StatePERS_BILAT</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-007-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">PF-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">TT Cash EUR</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">BILAT</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">118%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.01</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Jennifer Lee</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">Robert Wilson</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/06/23</span>
            <span class="time">10:30A</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <div class="date-time">
            <span class="date">10/06/23</span>
            <span class="time">11:45A</span>
          </div>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Cash</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">EUR</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">EUR</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Pledge (PL)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">118%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Fixed</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">11/01/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">05/01/24</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$275,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">1.5%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="settlement-system">Provable</span>
        </div>
        <div class="row-cell actions-col">
          <div class="action-buttons">
            <button class="action-btn">Edit</button>
            <button class="action-btn danger">Terminate</button>
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
          <span class="status-pending">Pending</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">J802180135PY63VL61L-V3</span>
        </div>
        <div class="row-cell side-col">
          <div class="borrowing-badge">
            <span class="borrow-text">BORROW</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8011 – Capital Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">CAPITAL_StatePERS_BILAT</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-010-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">CF-ACC-002-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">State PERS Excl</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">BILAT</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">105%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.001</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Christopher Taylor</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">--</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/03/23</span>
            <span class="time">14:30P</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <span class="dash">--</span>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Non-Cash (UST)</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">USD</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">USD</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Transfer (TT)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">105%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Variable</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">11/15/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">02/15/24</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$95,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">3.5%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="dash">--</span>
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
          <span class="status-active">Active</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">K903280146QZ74WM72M-V1</span>
        </div>
        <div class="row-cell side-col">
          <div class="lending-badge">
            <span class="lend-text">LENDER</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8012 – Heritage Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">HERITAGE_StatePERS_OCC</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-011-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">HF-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">NSCC 120% Collateral</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">OCC</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">120%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.0001</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Amanda Johnson</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">Daniel Smith</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/02/23</span>
            <span class="time">11:15A</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <div class="date-time">
            <span class="date">10/02/23</span>
            <span class="time">12:25P</span>
          </div>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Non-Cash (JGB)</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">JPY</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">JPY</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Pledge (PL)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">110%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Fixed</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">11/20/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">04/20/24</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$180,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">2.5%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="settlement-system">Provable</span>
        </div>
        <div class="row-cell actions-col">
          <div class="action-buttons">
            <button class="action-btn">Edit</button>
            <button class="action-btn danger">Terminate</button>
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
          <span class="status-pending">Pending</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">L004380157RA85XN83N-V2</span>
        </div>
        <div class="row-cell side-col">
          <div class="borrowing-badge">
            <span class="borrow-text">BORROW</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8013 – Liberty Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">LIBERTY_StatePERS_NSCC</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-012-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">LF-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">JGB JPY Collateral</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">NSCC</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">112%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.0001</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Matthew Anderson</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">--</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">10/01/23</span>
            <span class="time">16:40P</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <span class="dash">--</span>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Non-Cash (JGB)</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">JPY</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">JPY</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Transfer (TT)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">112%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Variable</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">11/25/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">03/25/24</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$65,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">5.5%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="dash">--</span>
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
          <span class="status-active">Active</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">M105480168SB96YO94O-V1</span>
        </div>
        <div class="row-cell side-col">
          <div class="lending-badge">
            <span class="lend-text">LENDER</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8014 – Trust Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">TRUST_StatePERS_BILAT</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-013-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">TF-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">TT Cash EUR</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">BILAT</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">118%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.01</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Nicole Martinez</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">Kevin White</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">09/30/23</span>
            <span class="time">08:50A</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <div class="date-time">
            <span class="date">09/30/23</span>
            <span class="time">10:05A</span>
          </div>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Cash</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">EUR</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">EUR</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Pledge (PL)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">118%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Fixed</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">11/30/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">05/30/24</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$420,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">1.2%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="settlement-system">Provable</span>
        </div>
        <div class="row-cell actions-col">
          <div class="action-buttons">
            <button class="action-btn">Edit</button>
            <button class="action-btn danger">Terminate</button>
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
          <span class="status-pending">Pending</span>
        </div>
        <div class="row-cell agreement-id-col">
          <span class="agreement-id">N206580179TC07ZP05P-V3</span>
        </div>
        <div class="row-cell side-col">
          <div class="borrowing-badge">
            <span class="borrow-text">BORROW</span>
          </div>
        </div>
        <div class="row-cell counterparty-id-col">
          <span class="counterparty-id">8015 – Victory Financial</span>
        </div>
        <div class="row-cell short-name-col">
          <span class="short-name">VICTORY_StatePERS_OCC</span>
        </div>
        <div class="row-cell booking-account-col">
          <span class="booking-account">ACC-014-2023</span>
        </div>
        <div class="row-cell counterparty-booking-col">
          <span class="counterparty-booking">VF-ACC-001-INTERNAL</span>
        </div>
        <div class="row-cell trade-type-col">
          <span class="trade-type">State PERS Excl</span>
        </div>
        <div class="row-cell settlement-type-col">
          <span class="settlement-type">OCC</span>
        </div>
        <div class="row-cell collateral-pct-col">
          <span class="collateral-pct">107%</span>
        </div>
        <div class="row-cell price-rounding-col">
          <span class="price-rounding">0.001</span>
        </div>
        <div class="row-cell created-by-col">
          <span class="created-by">Ryan Thompson</span>
        </div>
        <div class="row-cell approved-by-col">
          <span class="approved-by">--</span>
        </div>
        <div class="row-cell created-at-col">
          <div class="date-time">
            <span class="date">09/29/23</span>
            <span class="time">13:20P</span>
          </div>
        </div>
        <div class="row-cell approved-at-col">
          <span class="dash">--</span>
        </div>
        <div class="row-cell collateral-type-col">
          <span class="collateral-type">Non-Cash (UST)</span>
        </div>
        <div class="row-cell pricing-currency-col">
          <span class="pricing-currency">USD</span>
        </div>
        <div class="row-cell billing-currency-col">
          <span class="billing-currency">USD</span>
        </div>
        <div class="row-cell collateral-method-col">
          <span class="collateral-method">Transfer (TT)</span>
        </div>
        <div class="row-cell dividend-required-col">
          <span class="dividend-required">107%</span>
        </div>
        <div class="row-cell term-type-col">
          <span class="term-type">Variable</span>
        </div>
        <div class="row-cell term-start-col">
          <div class="date-time">
            <span class="date">12/01/23</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell term-end-col">
          <div class="date-time">
            <span class="date">04/01/24</span>
            <span class="time">EOD</span>
          </div>
        </div>
        <div class="row-cell balance-target-col">
          <span class="balance-target">$110,000,000</span>
        </div>
        <div class="row-cell target-variable-col">
          <span class="target-variable">4.2%</span>
        </div>
        <div class="row-cell settlement-system-col">
          <span class="dash">--</span>
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
</template>

<script setup lang="ts">
import { useTableDensity } from '~/composables/useTableDensity'

// Table density management
const { densityClasses } = useTableDensity()
</script>

<style scoped>
.agreements-window {
  height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.agreements-content {
  flex: 1;
  overflow: hidden;
  padding: 0;
  width: 100%;
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
  z-index: 40;
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

/* Normal density (Orders spacing) */
.table-density-normal .header-cell {
  height: 40px;
  padding: 0 12px;
}

/* Dense density (default - current Agreements spacing) */
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

/* Column Assignments - Bloomberg-style dense layout */
.select-col { width: 50px; min-width: 50px; }
.status-col { width: 60px; min-width: 60px; }
.agreement-id-col { width: 90px; min-width: 90px; }
.side-col { width: 80px; min-width: 80px; }
.counterparty-id-col { width: 120px; min-width: 120px; }
.short-name-col { width: 100px; min-width: 100px; }
.booking-account-col { width: 80px; min-width: 80px; }
.counterparty-booking-col { width: 120px; min-width: 120px; }
.trade-type-col { width: 110px; min-width: 110px; }
.settlement-type-col { width: 60px; min-width: 60px; }
.collateral-pct-col { width: 70px; min-width: 70px; }
.price-rounding-col { width: 70px; min-width: 70px; }
.created-by-col { width: 80px; min-width: 80px; }
.approved-by-col { width: 80px; min-width: 80px; }
.created-at-col { width: 90px; min-width: 90px; }
.approved-at-col { width: 90px; min-width: 90px; }
.collateral-type-col { width: 100px; min-width: 100px; }
.pricing-currency-col { width: 60px; min-width: 60px; }
.billing-currency-col { width: 60px; min-width: 60px; }
.collateral-method-col { width: 80px; min-width: 80px; }
.dividend-required-col { width: 80px; min-width: 80px; }
.term-type-col { width: 60px; min-width: 60px; }
.term-start-col { width: 90px; min-width: 90px; }
.term-end-col { width: 90px; min-width: 90px; }
.balance-target-col { width: 140px; min-width: 140px; }
.target-variable-col { width: 70px; min-width: 70px; }
.settlement-system-col { width: 80px; min-width: 80px; }
.actions-col { width: 140px; min-width: 140px; }

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
  overflow: hidden;
}

/* Normal density (Orders spacing) */
.table-density-normal .row-cell {
  height: 48px;
  padding: 0 12px;
}

/* Dense density (default - current Agreements spacing) */
.table-density-dense .row-cell {
  height: 40px;
  padding: 0 6px;
}

.row-cell.select-col {
  gap: 8px;
  justify-content: center;
}

/* Normal density (Orders spacing) */
.table-density-normal .row-cell.select-col {
  padding: 0 12px;
}

/* Dense density (default - current Agreements spacing) */
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
.status-active {
  color: #51cf66;
  font-weight: 500;
  background: none !important;
  border: none !important;
  border-radius: 0 !important;
  padding: 0 !important;
  display: inline !important;
}

.status-pending {
  color: #ffb74d;
  font-weight: 500;
  background: none !important;
  border: none !important;
  border-radius: 0 !important;
  padding: 0 !important;
  display: inline !important;
}

.status-held {
  color: #ffb74d;
  font-weight: 500;
}

.date-time {
  display: flex;
  flex-direction: column;
  gap: 0px;
}

.date {
  color: #ffffff;
  font-weight: 500;
}

.time {
  color: rgba(255, 255, 255, 0.6);
}

.agreement-id {
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Roboto Mono', monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.lending-badge {
  background: linear-gradient(90deg, rgba(37, 99, 235, 0.43) 0%, rgba(37, 99, 235, 0.43) 100%);
  border: 1px solid #42BED9;
  border-radius: 4px;
  padding: 4px 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  height: 20px;
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

.borrowing-badge {
  background: linear-gradient(90deg, rgba(81, 207, 102, 0.43) 0%, rgba(81, 207, 102, 0.43) 100%);
  border: 1px solid #51cf66;
  border-radius: 4px;
  padding: 4px 4px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: fit-content;
  height: 20px;
}

.borrow-text {
  font-family: 'Matrix Sans SC', monospace;
  font-size: 9.905px;
  color: #51cf66;
  letter-spacing: 0.4952px;
  text-transform: uppercase;
  font-weight: 400;
  line-height: normal;
}

.counterparty-id {
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Roboto Mono', monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.short-name {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.booking-account {
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Roboto Mono', monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.counterparty-booking {
  color: rgba(255, 255, 255, 0.6);
  font-family: 'Roboto Mono', monospace;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.trade-type {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.settlement-type {
  color: #ffffff;
  font-weight: 500;
}

.collateral-pct {
  color: #51cf66;
  font-weight: 500;
}

.price-rounding {
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto Mono', monospace;
}

.created-by {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.approved-by {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.collateral-type {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.pricing-currency {
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto Mono', monospace;
}

.billing-currency {
  color: #ffffff;
  font-weight: 500;
  font-family: 'Roboto Mono', monospace;
}

.collateral-method {
  color: rgba(255, 255, 255, 0.8);
  font-weight: 400;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}

.dividend-required {
  color: #51cf66;
  font-weight: 500;
}

.term-type {
  color: #ffffff;
  font-weight: 500;
}

.balance-target {
  color: #ffffff;
  font-weight: 400;
  font-family: 'Roboto Mono', monospace;
}

.target-variable {
  color: #51cf66;
  font-weight: 500;
}

.settlement-system {
  color: #ffffff;
  font-weight: 500;
}

.dash {
  color: rgba(255, 255, 255, 0.4);
  text-align: center;
  width: 100%;
}

.action-buttons {
  display: flex;
  gap: 8px;
}

.action-btn {
  background-color: transparent;
  border: 1px solid #333;
  color: #ccc;
  padding: 4px 4px;
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