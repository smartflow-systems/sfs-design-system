# SFS Hamburger Menu Component

A comprehensive, reusable slide-in sidebar navigation menu for all Smart Flow Systems applications.

## Features

- ✨ **Slide-in sidebar** animation from the left
- 📱 **Fully responsive** and works on all screen sizes
- 🎨 **SFS themed** with gold/brown color scheme
- 🔒 **User profile** display with avatar
- 📋 **Organized sections** for easy navigation
- 🎯 **Active state** highlighting
- ♿ **Accessible** with proper ARIA labels
- 🔌 **Framework agnostic** (works with any router)

## Installation

### Option 1: Copy Files Directly

Copy these files to your project:
- `SFSHamburgerMenu.tsx`
- `SFSMenuConfig.tsx`
- `index.ts`

### Option 2: Import from Design System (Future)

```bash
npm install @sfs/design-system
```

## Usage

### Basic Example

```tsx
import { SFSHamburgerMenu, crmMenuSections } from './components';

function MyApp() {
  const currentUser = {
    fullName: "John Doe",
    email: "john@example.com"
  };

  const handleLogout = () => {
    // Your logout logic
  };

  return (
    <nav>
      <SFSHamburgerMenu
        menuSections={crmMenuSections}
        user={currentUser}
        onLogout={handleLogout}
        currentPath={window.location.pathname}
        appName="Smart Flow Systems"
        appSubtitle="CRM"
      />
    </nav>
  );
}
```

### With React Router

```tsx
import { useLocation, Link } from 'react-router-dom';
import { SFSHamburgerMenu, crmMenuSections } from './components';

function Navigation() {
  const location = useLocation();

  return (
    <SFSHamburgerMenu
      menuSections={crmMenuSections}
      user={currentUser}
      onLogout={handleLogout}
      currentPath={location.pathname}
      Link={Link}  // Pass your router's Link component
    />
  );
}
```

### With Wouter

```tsx
import { useLocation, Link } from 'wouter';
import { SFSHamburgerMenu, crmMenuSections } from './components';

function Navigation() {
  const [location] = useLocation();

  return (
    <SFSHamburgerMenu
      menuSections={crmMenuSections}
      user={currentUser}
      onLogout={handleLogout}
      currentPath={location}
      Link={Link}
    />
  );
}
```

## Pre-configured Menu Sections

The component comes with several pre-configured menu sections for different app types:

### 1. CRM Application (`crmMenuSections`)

```tsx
import { crmMenuSections } from './components';

// Includes:
// - Main Navigation: Dashboard, Pipeline, Leads, Tasks
// - User Profile & Settings: Profile, Settings, Notifications
// - Admin & System Tools: Admin Panel, Analytics, User Management, System Settings
// - Help & Resources: Help Center, Documentation, Contact Support, Contact Us
```

### 2. E-commerce/Store (`storeMenuSections`)

```tsx
import { storeMenuSections } from './components';

// Includes:
// - Main Navigation: Home, Dashboard, Products, Orders, Sales
// - User Profile & Settings: Profile, Settings, Favorites, Order History
// - Admin & System Tools: Admin Panel, Analytics, Inventory, Customers
// - Help & Resources: Help Center, Documentation, Contact Support
```

### 3. Marketing & Social Media (`marketingMenuSections`)

```tsx
import { marketingMenuSections } from './components';

// Includes:
// - Main Navigation: Dashboard, Campaigns, Content, Analytics, Calendar
// - Social Media: Posts, Schedule, Engagement
// - User Profile & Settings: Profile, Settings
// - Admin & System Tools: Admin Panel, Team Management, Integrations
// - Help & Resources: Help Center, Documentation, Contact Support
```

### 4. Data Query/Analytics (`dataQueryMenuSections`)

```tsx
import { dataQueryMenuSections } from './components';

// Includes:
// - Main Navigation: Dashboard, Queries, Data Sources, Reports, Visualizations
// - Tools: Query Builder, Filters, Export Data, Import Data
// - User Profile & Settings: Profile, Settings, Saved Queries
// - Admin & System Tools: Admin Panel, API Management, User Management
// - Help & Resources: Help Center, Documentation, Contact Support
```

### 5. General Purpose (`generalMenuSections`)

```tsx
import { generalMenuSections } from './components';

// A minimal set of sections for general applications
```

## Custom Menu Sections

You can create your own custom menu sections:

```tsx
import { menuIcons, type MenuSection } from './components';

const customMenuSections: MenuSection[] = [
  {
    title: "My Custom Section",
    items: [
      {
        id: "custom-item",
        label: "Custom Item",
        href: "/custom",
        icon: menuIcons.Star
      },
      // Add more items...
    ],
  },
];

<SFSHamburgerMenu
  menuSections={customMenuSections}
  // ... other props
/>
```

## Available Icons

All Lucide React icons are exported in the `menuIcons` object:

```tsx
import { menuIcons } from './components';

// Available icons:
menuIcons.LayoutDashboard
menuIcons.Users
menuIcons.Settings
menuIcons.Shield
menuIcons.BarChart3
// ... and many more (see SFSMenuConfig.tsx for full list)
```

## Props

| Prop | Type | Required | Default | Description |
|------|------|----------|---------|-------------|
| `menuSections` | `MenuSection[]` | Yes | - | Array of menu sections with items |
| `currentPath` | `string` | Yes | - | Current route path for active state |
| `user` | `SFSUser \| null` | No | - | User object to display in menu |
| `onLogout` | `() => void` | No | - | Logout handler function |
| `appName` | `string` | No | `"Smart Flow Systems"` | Application name in header |
| `appSubtitle` | `string` | No | - | Subtitle text below app name |
| `Link` | `React.ComponentType` | No | `<a>` tag | Custom Link component from your router |
| `showUserInfo` | `boolean` | No | `true` | Show/hide user info section |
| `showLogoutButton` | `boolean` | No | `true` | Show/hide logout button |
| `showFooter` | `boolean` | No | `true` | Show/hide footer with copyright |

## Styling

The component uses Tailwind CSS with SFS theme variables:

- `bg-brown-900` - Main background
- `text-gold-*` - Gold color variants
- `border-gold-800/30` - Border colors
- `panel-dark` - SFS panel class

Make sure your project has these classes defined in your global CSS or Tailwind config.

## Dependencies

Required packages:
- `react` (v16.8+)
- `lucide-react` (for icons)
- Tailwind CSS (with SFS theme configuration)

## Implementation in Your Apps

### SmartFlowSite

```tsx
// In your navigation component
import { SFSHamburgerMenu, storeMenuSections } from '@sfs/design-system';

<SFSHamburgerMenu
  menuSections={storeMenuSections}
  currentPath={location.pathname}
  appName="SmartFlow Store"
/>
```

### SFSAPDemoCRM

```tsx
// Already implemented in client/src/components/HamburgerMenu.tsx
import { SFSHamburgerMenu, crmMenuSections } from '@sfs/design-system';
```

### SFSDataQueryEngine

```tsx
import { SFSHamburgerMenu, dataQueryMenuSections } from '@sfs/design-system';

<SFSHamburgerMenu
  menuSections={dataQueryMenuSections}
  currentPath={location.pathname}
  appName="SFS Data Query Engine"
/>
```

### SocialScaleBoosterAIbot

```tsx
import { SFSHamburgerMenu, marketingMenuSections } from '@sfs/design-system';

<SFSHamburgerMenu
  menuSections={marketingMenuSections}
  currentPath={location.pathname}
  appName="Social Scale Booster"
/>
```

## Accessibility

- Keyboard navigation supported
- Focus states on all interactive elements
- ARIA labels for screen readers
- Semantic HTML structure

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Proprietary - Smart Flow Systems

---

For questions or issues, contact the SFS development team.
