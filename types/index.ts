// Securities Lending Platform Types

export interface Security {
  id: string
  symbol: string
  name: string
  type: 'EQUITY' | 'BOND' | 'ETF' | 'OPTION' | 'FUTURE'
  price: number
  change: number
  changePercent: number
  volume: number
  marketCap?: number
  sector?: string
  isAvailable: boolean
  lastUpdated: Date
}

export interface LendingPosition {
  id: string
  securityId: string
  security: Security
  quantity: number
  rate: number
  value: number
  startDate: Date
  endDate?: Date
  status: 'ACTIVE' | 'PENDING' | 'CLOSED' | 'DEFAULTED'
  borrower: Borrower
  collateral: Collateral
  fees: Fee[]
}

export interface Borrower {
  id: string
  name: string
  type: 'INSTITUTIONAL' | 'RETAIL' | 'HEDGE_FUND'
  creditRating: string
  riskScore: number
  contactInfo: ContactInfo
  kycStatus: 'VERIFIED' | 'PENDING' | 'REJECTED'
}

export interface Collateral {
  id: string
  type: 'CASH' | 'SECURITIES' | 'REAL_ESTATE'
  value: number
  haircut: number
  description: string
  valuationDate: Date
}

export interface Fee {
  id: string
  type: 'LENDING_FEE' | 'MANAGEMENT_FEE' | 'PERFORMANCE_FEE'
  amount: number
  rate: number
  currency: string
  dueDate: Date
  status: 'PENDING' | 'PAID' | 'OVERDUE'
}

export interface ContactInfo {
  email: string
  phone: string
  address: Address
}

export interface Address {
  street: string
  city: string
  state: string
  zipCode: string
  country: string
}

export interface Portfolio {
  id: string
  name: string
  totalValue: number
  totalReturn: number
  totalReturnPercent: number
  positions: LendingPosition[]
  riskMetrics: RiskMetrics
  performance: PerformanceMetrics
}

export interface RiskMetrics {
  var95: number
  var99: number
  maxDrawdown: number
  sharpeRatio: number
  beta: number
  correlation: number
}

export interface PerformanceMetrics {
  dailyReturn: number
  weeklyReturn: number
  monthlyReturn: number
  quarterlyReturn: number
  yearlyReturn: number
  cumulativeReturn: number
}

export interface AnalyticsData {
  totalLendingVolume: number
  activePositions: number
  averageRate: number
  totalFees: number
  riskExposure: number
  topSecurities: Security[]
  performanceChart: ChartData[]
  riskChart: ChartData[]
}

export interface ChartData {
  date: string
  value: number
  label?: string
}

export interface User {
  id: string
  email: string
  name: string
  role: 'ADMIN' | 'TRADER' | 'ANALYST' | 'VIEWER'
  permissions: Permission[]
  lastLogin: Date
  isActive: boolean
}

export interface Permission {
  resource: string
  actions: string[]
}

export interface Notification {
  id: string
  type: 'INFO' | 'WARNING' | 'ERROR' | 'SUCCESS'
  title: string
  message: string
  timestamp: Date
  isRead: boolean
  actionUrl?: string
}

export interface MarketData {
  timestamp: Date
  symbol: string
  price: number
  volume: number
  bid: number
  ask: number
  spread: number
}
