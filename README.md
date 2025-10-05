# Provable Markets

A professional securities lending platform built with Nuxt.js, featuring real-time analytics, risk management, and portfolio optimization tools.

## 🚀 Features

- **Dynamic Dashboard**: Comprehensive overview with collapsible sidebar navigation and sliding submenus
- **Securities Lending Management**: Create, monitor, and manage lending positions
- **Advanced Analytics**: Performance metrics, risk analysis, and market insights
- **Trade Management**: Position tracking, open positions with dropdowns, and loan history
- **Marketplace Integration**: Orderbook, orders, executions, and watchlists
- **Strategy Builder**: Create strategies, templates, and AI-powered optimization
- **Smooth Animations**: Professional sidebar collapse/expand with fade transitions
- **Figma MCP Integration**: Pixel-perfect design implementation using Figma's Model Context Protocol

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 3
- **Styling**: Tailwind CSS
- **Charts**: Chart.js with Vue integration
- **State Management**: Pinia
- **TypeScript**: Full type safety
- **Design System**: Custom components with Figma MCP integration

## 📁 Project Structure

```
provable-markets/
├── assets/css/           # Global styles and Tailwind configuration
├── components/           # Vue components organized by feature
│   ├── submenus/        # Submenu components for navigation
│   ├── ui/              # Reusable UI components (dropdowns, etc.)
│   └── layouts/         # Layout-specific components
├── composables/         # Vue composables for shared logic
│   └── useSubmenu.ts    # Submenu state management
├── layouts/            # Page layouts
│   ├── dashboard.vue   # Main dashboard layout with sidebar
│   ├── default.vue     # Default layout routing
│   └── simple.vue      # Simple layout for auth pages
├── pages/              # File-based routing
│   ├── dashboard/      # Main dashboard
│   ├── marketplace/    # Marketplace with subpages
│   ├── trade-manager/  # Trade management with dropdowns
│   ├── agreements/     # Agreement management
│   ├── locates/        # Locate management
│   ├── analytics/      # Analytics and reporting
│   ├── reports/        # Report generation
│   ├── swaps/          # Swap management
│   ├── trade-optimizer/ # Trade optimization tools
│   ├── basket-tool/    # Basket trading tools
│   ├── strategy-builder/ # Strategy creation and AI tools
│   ├── compliance/     # Compliance and legal
│   ├── settings/       # User settings
│   └── auth/           # Authentication pages
├── plugins/            # Nuxt plugins
├── server/api/         # API routes
├── stores/            # Pinia stores
├── types/             # TypeScript type definitions
└── utils/             # Utility functions
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Figma desktop app (for MCP integration)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd provable-markets
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000`

## 🎨 Figma MCP Integration

This project is configured to work with Figma's Model Context Protocol for pixel-perfect design implementation.

### Setup Instructions

#### For Cursor:
1. Click the Figma MCP server deep link to open the MCP configuration in Cursor
2. Click `Install` under 'Install MCP Server?'
3. Click `Connect` next to Figma to begin the authentication process
4. Allow access when prompted

#### For VS Code:
1. Open this project in VS Code
2. The `.mcp.json` file is already configured
3. Start the MCP server within VS Code
4. Allow access when prompted

#### For Claude Code:
1. Run: `claude mcp add --transport http figma-remote-mcp https://mcp.figma.com/mcp`
2. Type `/mcp` in Claude to manage your MCP Servers
3. Follow the prompts to log in and allow access

### Enabling Local MCP Server in Figma

1. Open the Figma desktop app
2. Open a Figma file
3. Click on the Figma menu (upper-left corner)
4. Navigate to `Preferences` and select `Enable local MCP server`
5. Confirm when the server is running locally

### Usage

Once connected, you can:

- **Selection-Based**: Select a frame or layer in Figma and prompt your client to help implement the current selection
- **Link-Based**: Copy the link to a frame or layer in Figma and prompt your client to help implement the design at the selected URL

## 📊 Available Pages

### Main Navigation
- **Dashboard** (`/dashboard`) - Main overview with key metrics and charts
- **Marketplace** (`/marketplace`) - Orderbook, orders, executions, and watchlists
- **Trade Manager** (`/trade-manager`) - Position tracking with dropdowns for returns, recalls, rerates
- **Agreements** (`/agreements`) - Agreement management and tracking
- **Locates** (`/locates`) - Locate management and monitoring
- **Analytics** (`/analytics`) - Performance analytics and reporting
- **Reports** (`/reports`) - Report generation and customization

### Secondary Navigation
- **Swaps** (`/swaps`) - Swap management and execution
- **Trade Optimizer** (`/trade-optimizer`) - Trade optimization tools
- **Basket Tool** (`/basket-tool`) - Basket trading and management
- **Strategy Builder** (`/strategy-builder`) - Strategy creation, templates, and AI tools

### System
- **Compliance & Legal** (`/compliance`) - Compliance monitoring and legal requirements
- **Company Settings** (`/settings`) - User preferences and configuration
- **Authentication** (`/auth/staff-login`, `/auth/partner-login`) - Login pages for staff and partners

## 🎯 Key Features

### Dynamic Navigation System
- **Collapsible Sidebar**: Smooth 256px ↔ 60px transitions with fade animations
- **Sliding Submenus**: Context-aware submenus that expand/collapse based on current page
- **Smart Transitions**: Text fades out smoothly before sidebar collapse for professional UX
- **Fixed Elements**: Company avatar stays in position during collapse
- **Dropdown Support**: Nested navigation with count badges and JetBrains Mono styling

### Securities Lending Platform
- Real-time position monitoring
- Borrower management and KYC
- Collateral tracking
- Fee calculation and management
- Risk assessment and controls

### Trade Management
- Position overview and tracking
- Open positions with categorized dropdowns (Returns, Recalls, Rerates)
- Count badges with orange styling for active items
- Loan history and performance tracking

### Analytics & Reporting
- Performance metrics (Sharpe ratio, VaR, drawdown)
- Market analysis and trends
- Fee analysis and optimization
- Custom reporting and exports

### Strategy & Optimization
- Strategy builder with templates
- AI-powered optimization tools
- Trade optimizer for execution efficiency
- Basket tool for portfolio management

## 🎨 UI/UX Features

### Professional Design System
- **Dark Theme**: Consistent #121212 background with #161818 sidebar
- **Typography**: Inter, JetBrains Mono, and Roboto font families
- **Color Palette**: Aurora green (#04CF8B) accents with professional grays
- **Spacing**: Consistent 40px menu item heights and 8px gaps
- **Animations**: Smooth 0.15s transitions with ease curves

### Responsive Navigation
- **Main Sidebar**: 256px expanded, 60px collapsed
- **Submenu Sidebar**: 230px width with transparent background
- **Smart Routing**: Automatic submenu expansion based on current page
- **Loading States**: Animated dots during submenu transitions
- **Badge System**: Orange count badges with Roboto Medium styling

### Authentication Pages
- **Staff Login**: Internal team access with clean Titan-inspired design
- **Partner Login**: External partner access with legal compliance text
- **Aurora Review Branding**: Custom logo integration
- **Responsive Layout**: Centered content with max-width constraints

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run generate` - Generate static site
- `npm run preview` - Preview production build

### Environment Variables

Create a `.env` file in the root directory:

```env
API_BASE_URL=http://localhost:3001/api
```

## 📚 Resources

- [Nuxt.js Documentation](https://nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Figma MCP Server Guide](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
