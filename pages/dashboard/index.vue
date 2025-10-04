<template>
  <div>
    <!-- Orders Table -->
    <div class="orders-section">
      <div class="section-header">
        <h2 class="section-title">Orders</h2>
        <div class="section-actions">
          <button class="action-btn primary">New Order</button>
          <button class="action-btn secondary">Export</button>
        </div>
      </div>
      
      <div class="table-container">
        <table class="orders-table">
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Side</th>
              <th>Quantity</th>
              <th>Price</th>
              <th>Status</th>
              <th>Time</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td class="symbol-cell">
                <div class="symbol-info">
                  <span class="symbol">{{ order.symbol }}</span>
                  <span class="description">{{ order.description }}</span>
                </div>
              </td>
              <td>
                <span class="side" :class="order.side">{{ order.side }}</span>
              </td>
              <td>{{ order.quantity.toLocaleString() }}</td>
              <td>${{ order.price.toFixed(2) }}</td>
              <td>
                <span class="status" :class="order.status">{{ order.status }}</span>
              </td>
              <td>{{ order.time }}</td>
              <td>
                <div class="actions">
                  <button class="action-btn small">Edit</button>
                  <button class="action-btn small danger">Cancel</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Market Data Widgets -->
    <div class="widgets-grid">
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">Portfolio Value</h3>
        </div>
        <div class="widget-content">
          <div class="metric-value">$2,847,392</div>
          <div class="metric-change positive">+$12,847 (+0.45%)</div>
        </div>
      </div>
      
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">Active Loans</h3>
        </div>
        <div class="widget-content">
          <div class="metric-value">47</div>
          <div class="metric-change">$1,234,567</div>
        </div>
      </div>
      
      <div class="widget">
        <div class="widget-header">
          <h3 class="widget-title">Daily P&L</h3>
        </div>
        <div class="widget-content">
          <div class="metric-value">$8,234</div>
          <div class="metric-change positive">+2.1%</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

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

useHead({
  title: 'Dashboard'
})
</script>

<style scoped>
.orders-section {
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  padding: 1.5rem;
  margin-bottom: 2rem;
}

.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.section-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: white;
  margin: 0;
}

.section-actions {
  display: flex;
  gap: 0.75rem;
}

.action-btn {
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-size: 0.875rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  border: none;
}

.action-btn.primary {
  background-color: #04CF8B;
  color: white;
}

.action-btn.primary:hover {
  background-color: #03b87a;
}

.action-btn.secondary {
  background-color: transparent;
  color: #ccc;
  border: 1px solid #333;
}

.action-btn.secondary:hover {
  background-color: #2a2a2a;
  color: white;
}

.action-btn.small {
  padding: 0.25rem 0.5rem;
  font-size: 0.75rem;
}

.action-btn.danger {
  background-color: #ef4444;
  color: white;
}

.action-btn.danger:hover {
  background-color: #dc2626;
}

.table-container {
  overflow-x: auto;
}

.orders-table {
  width: 100%;
  border-collapse: collapse;
}

.orders-table th {
  background-color: #2a2a2a;
  color: #ccc;
  font-weight: 600;
  padding: 0.75rem;
  text-align: left;
  border-bottom: 1px solid #333;
  font-size: 0.875rem;
}

.orders-table td {
  padding: 0.75rem;
  border-bottom: 1px solid #333;
  color: white;
  font-size: 0.875rem;
}

.orders-table tr:hover {
  background-color: #2a2a2a;
}

.symbol-cell {
  min-width: 150px;
}

.symbol-info {
  display: flex;
  flex-direction: column;
}

.symbol {
  font-weight: 600;
  color: white;
}

.description {
  font-size: 0.75rem;
  color: #ccc;
}

.side {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.side.Buy {
  background-color: #10b981;
  color: white;
}

.side.Sell {
  background-color: #ef4444;
  color: white;
}

.status {
  padding: 0.25rem 0.5rem;
  border-radius: 0.25rem;
  font-size: 0.75rem;
  font-weight: 600;
}

.status.Filled {
  background-color: #10b981;
  color: white;
}

.status.Pending {
  background-color: #f59e0b;
  color: white;
}

.status.Partially\ Filled {
  background-color: #3b82f6;
  color: white;
}

.actions {
  display: flex;
  gap: 0.5rem;
}

.widgets-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
}

.widget {
  background-color: #1a1a1a;
  border-radius: 0.5rem;
  padding: 1.5rem;
}

.widget-header {
  margin-bottom: 1rem;
}

.widget-title {
  font-size: 1rem;
  font-weight: 600;
  color: #ccc;
  margin: 0;
}

.widget-content {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.metric-value {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
}

.metric-change {
  font-size: 0.875rem;
  color: #ccc;
}

.metric-change.positive {
  color: #10b981;
}

.metric-change.negative {
  color: #ef4444;
}
</style>