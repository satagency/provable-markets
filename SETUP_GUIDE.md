# Provable Markets - Securities Lending Platform

## 🚀 Project Overview

A professional securities lending platform built with Nuxt.js 3, featuring dynamic navigation, real-time analytics, and comprehensive risk management tools. This platform implements pixel-perfect designs from Figma using MCP integration.

## 📋 Core Architecture

### **Navigation System**
- **Collapsed State**: 56px width (minimized)
- **Main Navigation**: 256px width (primary menu)
- **Submenu Panels**: 224px width (secondary navigation)
- **Flexible Canvas**: Dynamic width based on active navigation state

### **Layout States**
```
┌─────────────────────────────────────────────────────────────┐
│ [Collapsed Nav] → [Main Nav] → [Submenu] → [Flexible Canvas] │
│     56px    →    256px   →   224px   →    remaining space    │
└─────────────────────────────────────────────────────────────┘
```

### **Dynamic Transitions**
- Submenus slide in from left with smooth animations
- Canvas adjusts width responsively
- Data-heavy dashboards expand within available space
- Mobile-responsive collapse behavior

## 🛠️ Tech Stack

- **Framework**: Nuxt.js 3 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **State Management**: Pinia
- **Charts**: Chart.js with Vue integration
- **Design Integration**: Figma MCP for pixel-perfect implementation
- **Deployment**: Vercel with GitHub Actions CI/CD

## 📁 Project Structure

```
provable-markets/
├── assets/css/              # Global styles and Tailwind config
├── components/             # Vue components organized by feature
│   ├── navigation/        # Navigation system components
│   ├── dashboard/         # Dashboard-specific components
│   ├── marketplace/       # Marketplace components
│   ├── trade-manager/    # Trade management components
│   ├── analytics/        # Analytics and reporting components
│   └── admin/            # Admin panel components
├── composables/          # Vue composables for shared logic
├── layouts/             # Page layouts with navigation
├── middleware/          # Route middleware
├── pages/              # File-based routing
│   ├── marketplace/    # Marketplace pages
│   ├── trade-manager/ # Trade management pages
│   ├── analytics/     # Analytics pages
│   ├── admin/         # Admin pages
│   └── ...            # Other feature pages
├── plugins/           # Nuxt plugins
├── server/api/        # API routes
├── stores/           # Pinia stores
├── types/            # TypeScript type definitions
└── utils/            # Utility functions
```

## 🎨 Design System

### **Color Palette**
- **Background**: Dark (#161818)
- **Primary**: Blue (#3b82f6)
- **Success**: Green (#22c55e)
- **Warning**: Yellow (#f59e0b)
- **Danger**: Red (#ef4444)
- **Brand**: Aurora Green (#04cf8b)

### **Typography**
- **Primary**: Inter (400, 500, 600, 700)
- **Monospace**: JetBrains Mono (400, 500)
- **Brand**: Custom fonts for logo

### **Navigation States**
- **Active**: Highlighted with background color
- **Inactive**: Reduced opacity (45-75%)
- **Badges**: Count indicators and status badges
- **Icons**: 20px SVG icons for each item

## 🚀 Development Setup

### **Prerequisites**
- Node.js 18+
- npm or yarn
- Git
- Figma desktop app (for MCP integration)
- Vercel CLI
- GitHub account

### **Installation**

1. **Clone Repository**
   ```bash
   git clone https://github.com/[username]/provable-markets.git
   cd provable-markets
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Setup**
   ```bash
   cp .env.example .env
   # Edit .env with your configuration
   ```

4. **Start Development Server**
   ```bash
   npm run dev
   ```

5. **Open Browser**
   Navigate to `http://localhost:3000`

## 🎯 Navigation Implementation

### **Core Components**
- `NavigationMain.vue` - Main navigation bar
- `NavigationSubmenu.vue` - Submenu panels
- `NavigationToggle.vue` - Collapse/expand toggle
- `NavigationItem.vue` - Individual navigation items

### **State Management**
```typescript
// stores/navigation.ts
interface NavigationState {
  isCollapsed: boolean
  activeMainItem: string | null
  activeSubmenu: string | null
  submenuVisible: boolean
}
```

### **Animation Classes**
```css
.nav-slide-enter-active,
.nav-slide-leave-active {
  transition: transform 0.3s ease-in-out;
}

.nav-slide-enter-from {
  transform: translateX(-100%);
}

.nav-slide-leave-to {
  transform: translateX(-100%);
}
```

## 📊 Page Structure

### **Main Navigation Items**
1. **Marketplace** → Orderbook, Orders, Executions, Watchlists
2. **Trade Manager** → Positions, Open Positions, Loans History
3. **Agreements** → Contract management
4. **Locates** → Security location tracking
5. **Analytics** → NSCC Dashboard, VaR Calculator, Trading Analytics
6. **Reports** → Reporting and compliance

### **Secondary Navigation**
- **Swaps** → Swap management
- **Trade Optimizer** → Optimization tools
- **Basket Tool** → Basket trading

### **Admin Section**
- **Users** → User management
- **Preferences** → System preferences
- **Compliance & Legal** → Regulatory compliance
- **Company Settings** → Organization settings

## 🔧 Build & Deployment

### **Build Commands**
```bash
npm run build      # Production build
npm run generate   # Static site generation
npm run preview    # Preview production build
```

### **Deployment**
- **Platform**: Vercel
- **Branch**: `main` (auto-deploy)
- **Environment**: Production
- **Domain**: `provable-markets.vercel.app`

### **CI/CD Pipeline**
- **Trigger**: Push to `main` branch
- **Build**: `npm run build`
- **Deploy**: Automatic via Vercel
- **Status**: Check Vercel dashboard

## 🎨 Figma MCP Integration

### **Setup**
1. Enable local MCP server in Figma desktop app
2. Connect via Cursor/VS Code MCP configuration
3. Use selection-based or link-based implementation

### **Usage**
- Select designs in Figma and prompt for implementation
- Copy Figma URLs for specific component implementation
- Maintain pixel-perfect accuracy with design system

## 🐛 Troubleshooting

### **Common Issues**

1. **Navigation Not Animating**
   - Check CSS transitions are enabled
   - Verify Vue transition components
   - Ensure Tailwind CSS is properly configured

2. **Submenu Not Appearing**
   - Check Pinia store state
   - Verify component visibility logic
   - Ensure proper event handling

3. **Layout Breaking**
   - Check CSS Grid/Flexbox configuration
   - Verify responsive breakpoints
   - Ensure proper width calculations

4. **Build Failures**
   - Check TypeScript errors
   - Verify all imports are correct
   - Ensure environment variables are set

### **Debug Commands**
```bash
npm run dev:debug    # Debug mode
npm run type-check   # TypeScript checking
npm run lint         # ESLint checking
```

## 📚 Resources

- [Nuxt.js Documentation](https://nuxt.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Chart.js](https://www.chartjs.org/)
- [Pinia](https://pinia.vuejs.org/)
- [Figma MCP Guide](https://help.figma.com/hc/en-us/articles/32132100833559-Guide-to-the-Figma-MCP-server)
- [Vercel Deployment](https://vercel.com/docs)

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🚨 Emergency Recovery

If the project gets corrupted or needs to be rebuilt:

1. **Check Git Status**: `git status`
2. **Reset to Last Commit**: `git reset --hard HEAD`
3. **Reinstall Dependencies**: `rm -rf node_modules && npm install`
4. **Rebuild**: `npm run build`
5. **Check Deployment**: Verify Vercel deployment status

**Last Updated**: $(date)
**Version**: 1.0.0
**Status**: Active Development
