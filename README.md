# Provable Markets

A professional securities lending platform built with Nuxt.js, featuring real-time analytics, risk management, and portfolio optimization tools.

## 🚀 Features

- **Real-time Dashboard**: Comprehensive overview of lending positions and portfolio performance
- **Securities Lending Management**: Create, monitor, and manage lending positions
- **Advanced Analytics**: Performance metrics, risk analysis, and market insights
- **Risk Management**: VaR calculations, stress testing, and automated risk monitoring
- **Portfolio Management**: Asset allocation, performance tracking, and optimization
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
│   ├── dashboard/       # Dashboard-specific components
│   ├── lending/         # Securities lending components
│   ├── analytics/       # Analytics and reporting components
│   ├── risk/           # Risk management components
│   ├── portfolio/      # Portfolio management components
│   └── settings/       # Settings and configuration components
├── composables/         # Vue composables for shared logic
├── layouts/            # Page layouts
├── middleware/         # Route middleware
├── pages/              # File-based routing
│   ├── dashboard/      # Main dashboard
│   ├── lending/        # Securities lending management
│   ├── analytics/       # Analytics and reporting
│   ├── risk/          # Risk management
│   ├── portfolio/     # Portfolio management
│   └── settings/      # User settings
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

- **Dashboard** (`/dashboard`) - Main overview with key metrics and charts
- **Securities Lending** (`/lending`) - Manage lending positions and opportunities
- **Analytics** (`/analytics`) - Performance analytics and reporting
- **Risk Management** (`/risk`) - Risk monitoring and controls
- **Portfolio** (`/portfolio`) - Portfolio management and optimization
- **Settings** (`/settings`) - User preferences and configuration

## 🎯 Key Features

### Securities Lending Platform
- Real-time position monitoring
- Borrower management and KYC
- Collateral tracking
- Fee calculation and management
- Risk assessment and controls

### Analytics & Reporting
- Performance metrics (Sharpe ratio, VaR, drawdown)
- Market analysis and trends
- Fee analysis and optimization
- Custom reporting and exports

### Risk Management
- Real-time risk monitoring
- VaR calculations (95%, 99%)
- Stress testing scenarios
- Correlation analysis
- Automated risk alerts

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
