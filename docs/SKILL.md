---
name: sfs-design-system
description: Use the SmartFlow Systems design system to generate pixel-perfect, on-brand interfaces, prototypes, slides, and production components across all SFS products. Contains colors, typography, spacing, card system, animation, iconography, component patterns, and interactive UI kit references for all five core products.
---

# SFS Design System Skill

This skill gives Claude complete knowledge of the SmartFlow Systems visual language, component library, and product UI patterns. Use it when building anything that needs to look and feel like an SFS product.

## When to Use This Skill

Invoke this skill when:
- Building a new SFS product UI, landing page, dashboard, or admin panel
- Prototyping a new feature to share with the team
- Creating marketing assets, slides, or client-facing materials
- Onboarding a new developer who needs to understand the visual system
- Checking if a design is on-brand before shipping
- White-labeling a dashboard for a client
- Generating throwaway HTML prototypes for feedback

---

## Brand Identity

**Company:** SmartFlow Systems (SFS)  
**Owner:** Gareth Bowers (`gareth@smartflowsystems.com`)  
**Tagline:** *Build. Automate. Sell.*  
**Positioning:** Premium SaaS ecosystem — AI-powered automation tools for service businesses and agencies  
**Vibe:** Dark · Premium · Conversion-focused · High-trust

---

## Color System

### Core Palette (use ONLY these)

| Token | Hex | Role |
|---|---|---|
| `--sfs-black` | `#0D0D0D` | Page background |
| `--sfs-black-soft` | `#141414` | Subtle dark surface |
| `--sfs-black-card` | `#1A1A1A` | Card backgrounds |
| `--sfs-brown` | `#3B2F2F` | Secondary surface, card fills |
| `--sfs-brown-light` | `#4D3D3D` | Hover fills |
| `--sfs-brown-dark` | `#2A2020` | Deep surface |
| `--sfs-gold` | `#FFD700` | Primary accent, CTAs, active states |
| `--sfs-gold-bright` | `#FFDD00` | Gradient start |
| `--sfs-gold-mid` | `#E6C200` | Gradient end, hover state |
| `--sfs-gold-dark` | `#C9A800` | Pressed state |
| `--sfs-white` | `#FFFFFF` | Primary text |
| `--sfs-muted` | `rgba(233,230,223,0.8)` | Secondary text |

### Gold Gradient (primary brand gradient)
```css
background: linear-gradient(135deg, #FFD700, #E6C200);
```

### Semantic Tokens (shadcn-compatible HSL channels)
```css
--background: 0 0% 5%;
--foreground: 48 10% 98%;
--card: 0 0% 8%;
--primary: 51 100% 50%;
--primary-foreground: 0 0% 5%;
--muted: 30 10% 12%;
--muted-foreground: 45 10% 65%;
--border: 45 15% 20%;
--ring: 51 100% 50%;
```

### Status Colors
```css
--sfs-success-text: #90EE90;     /* success states */
--sfs-error-text:   #FF6B6B;     /* error states */
--sfs-info:         #FFD700;     /* info / warning */
```

---

## Typography

**Font:** `Inter` (Google Fonts) — all weights 400–900  
**Mono font:** `JetBrains Mono` — code blocks, query results, data tables

```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap');
font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
-webkit-font-smoothing: antialiased;
```

### Type Scale
| Token | Value | Usage |
|---|---|---|
| `--text-xs` | `0.75rem` | Eyebrow labels, badges — ALL CAPS, tracked |
| `--text-sm` | `0.875rem` | Nav links, button text, captions |
| `--text-base` | `1rem` | Body copy |
| `--text-lg` | `1.125rem` | Lead paragraphs |
| `--text-xl` | `1.25rem` | Panel labels |
| `--text-2xl` | `1.5rem` | Card titles |
| `--text-3xl` | `clamp(1.5rem, 3vw, 2rem)` | Sub-headings |
| `--text-4xl` | `clamp(1.75rem, 4vw, 2.5rem)` | Section headings |
| `--text-5xl` | `clamp(2rem, 5vw, 3.5rem)` | Hero headlines |

### Heading defaults
```css
h1 { font-size: var(--text-5xl); font-weight: 800; line-height: 1.05; letter-spacing: -0.03em; }
h2 { font-size: var(--text-4xl); font-weight: 700; line-height: 1.15; letter-spacing: -0.025em; }
h3 { font-size: var(--text-3xl); font-weight: 700; line-height: 1.2; }
```

### Gold gradient text (hero headlines)
```css
.text-gold-gradient {
  background: linear-gradient(135deg, #FFD700, #E6C200);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  font-weight: 800;
}
```

### Eyebrow label pattern
```css
.eyebrow {
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: rgba(255, 215, 0, 0.7);
}
```

---

## Card System

Three official card variants — all use gold-tinted borders:

### Glass Card (default)
```css
background: rgba(255, 255, 255, 0.06);
border: 1px solid rgba(255, 215, 0, 0.22);
border-radius: 1rem;
box-shadow: 0 10px 15px -3px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06);
backdrop-filter: blur(12px);
```

### Brown Glass Card
```css
background: rgba(59, 47, 47, 0.4);
border: 1px solid rgba(255, 215, 0, 0.2);
border-radius: 1rem;
backdrop-filter: blur(12px);
box-shadow: 0 8px 32px rgba(0,0,0,0.3);
```

### Flow Card (premium / hero)
```css
background: linear-gradient(145deg, rgba(13,13,13,0.8), rgba(59,47,47,0.6));
border: 1px solid rgba(255, 215, 0, 0.25);
border-radius: 1.25rem;
box-shadow: 0 12px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,215,0,0.1);
```

### Card Hover (all variants)
```css
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
/* hover: */
transform: translateY(-2px);
border-color: rgba(230, 194, 0, 0.35);
/* active: */
transform: scale(0.98);
```

---

## Button System

### Primary (Gold)
```css
background: linear-gradient(135deg, #FFD700, #E6C200);
color: #0D0D0D;
border: 1px solid rgba(230, 194, 0, 0.6);
border-radius: 0.5rem;
padding: 10px 20px;
font-weight: 700;
box-shadow: 0 4px 12px rgba(255, 215, 0, 0.3);
/* hover: translateY(-1px), shadow intensifies */
/* active: translateY(0) */
```

### Ghost
```css
background: rgba(255, 255, 255, 0.04);
color: #FFFFFF;
border: 1px solid rgba(255, 215, 0, 0.18);
border-radius: 0.5rem;
/* hover: background rgba(255,255,255,0.07), border brightens */
```

### Outline (gold text)
```css
background: transparent;
color: #FFD700;
border: 1px solid rgba(255, 215, 0, 0.5);
border-radius: 0.5rem;
```

### Sizes
- Small: `padding: 6px 14px; font-size: 12px; border-radius: 6px`
- Default: `padding: 10px 20px; font-size: 14px; border-radius: 8px`
- Large: `padding: 14px 28px; font-size: 16px; border-radius: 10px`

---

## Navigation Patterns

### Top Navbar (marketing / fixed)
```css
position: fixed; top: 0; left: 0; right: 0;
background: rgba(13, 13, 13, 0.95);
backdrop-filter: blur(12px);
border-bottom: 1px solid rgba(255, 215, 0, 0.15);
height: 64px;
z-index: 100;
```
- Nav links: `rgba(200,195,185,0.65)` → hover `#FFD700`
- Active: `#FFD700`

### Dashboard Sidebar
```css
width: 220px;
background: rgba(13, 13, 13, 0.98);
border-right: 1px solid rgba(255, 215, 0, 0.1);
height: 100vh; position: sticky; top: 0;
```
- Active item: `background: rgba(255,215,0,0.1); color: #FFD700; font-weight: 600`
- Hover: `background: rgba(255,215,0,0.06)`

### Hamburger Menu (vanilla JS — static sites only)
- Load: `<script src="sfs-hamburger-menu.js"></script>`
- Adds fixed hamburger button + full slide-in sidebar from left
- Auto-injects CSS — no configuration needed
- Used on SmartFlowSite and other static HTML pages

---

## Signature Background — Circuit Flow

The animated circuit board is SFS's signature background texture. Required on all marketing/hero sections.

```html
<!-- 1. Add canvas -->
<canvas id="circuit-canvas"></canvas>

<!-- 2. Position it -->
<style>
  #circuit-canvas {
    position: fixed; top: 0; left: 0;
    width: 100%; height: 100%;
    z-index: 0; opacity: 0.4;
    pointer-events: none;
  }
  /* Ensure content is above canvas */
  main, #root, .app { position: relative; z-index: 1; }
</style>

<!-- 3. Initialize (at end of body) -->
<script src="sfs-circuit-flow.js"></script>
```

**How it works:** 35 gold nodes move slowly, drawing lines between nearby nodes at `rgba(255,215,0,opacity)`. Pauses when tab is hidden (performance). Resize-aware.

---

## Shadow System

```css
--shadow-sm:       0 2px 4px -1px rgba(0,0,0,0.35), 0 1px 2px -1px rgba(0,0,0,0.50);
--shadow-md:       0 6px 10px -2px rgba(0,0,0,0.45), 0 2px 4px -2px rgba(0,0,0,0.35);
--shadow-lg:       0 10px 15px -3px rgba(0,0,0,0.50), 0 4px 6px -4px rgba(0,0,0,0.40);
--shadow-xl:       0 20px 25px -5px rgba(0,0,0,0.55), 0 8px 10px -6px rgba(0,0,0,0.40);
--shadow-gold-sm:  0 4px 12px rgba(255, 215, 0, 0.30);   /* primary buttons */
--shadow-gold-md:  0 6px 20px rgba(255, 215, 0, 0.40);   /* hover state */
```

---

## Spacing & Radius

### Radius scale
| Token | Value | Used for |
|---|---|---|
| `--radius-sm` | `6px` | Badges |
| `--radius-md` | `8px` | Buttons, inputs |
| `--radius-lg` | `12px` | Small cards |
| `--radius-xl` | `16px` | Standard cards |
| `--radius-2xl` | `20px` | Large/hero cards |
| `--radius-full` | `9999px` | Pill buttons |

### Spacing scale (4px base unit)
`4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96px`

### Container
```css
max-width: 1280px; margin: 0 auto;
padding: 0 clamp(1rem, 3vw, 2rem);
```

### Section padding
```css
padding: clamp(3rem, 8vw, 5rem) 0;
```

---

## Icon System

**Library:** Lucide React — used across all SFS React products  
**CDN:** `https://unpkg.com/lucide@latest/dist/umd/lucide.min.js`

```tsx
import { Bell, Search, Settings, Zap, LayoutDashboard, BarChart2 } from 'lucide-react';
// Default size: 16px, strokeWidth: 1.75, rounded linecap
```

**Color rules:**
- Accent / feature icons: `color: #FFD700`
- UI chrome (nav, topbar): `color: rgba(200,195,185,0.65)`
- Active state: `color: #FFD700; opacity: 1`

**Common icons by context:**
- Dashboard: `LayoutDashboard`
- Analytics: `BarChart2`, `TrendingUp`
- Automations: `Zap`
- Bookings: `Calendar`
- Clients: `Users`
- Billing: `CreditCard`
- Settings: `Settings`
- Notifications: `Bell`
- Search: `Search`
- AI/Smart: `Sparkles`, `Bot`

---

## Animation System

```css
/* Entry animation */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to   { opacity: 1; transform: translateY(0); }
}
.fade-in-up { animation: fadeInUp 0.8s ease-out; }

/* Stagger classes for card grids */
.stagger-1 { animation-delay: 0.1s; }
.stagger-2 { animation-delay: 0.2s; }
/* ... up to .stagger-6 */

/* CTA pulse (on hover) */
@keyframes pulse {
  0%, 100% { box-shadow: 0 4px 12px rgba(255,215,0,0.3); }
  50%       { box-shadow: 0 4px 24px rgba(255,215,0,0.55); }
}

/* Standard transition */
transition: all 0.2s ease;                               /* buttons */
transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);     /* cards */
```

---

## Form Elements

### Input
```css
background: hsl(45 15% 25%);
border: 1px solid hsl(45 15% 20%);
border-radius: 8px;
padding: 9px 12px;
color: #fff;
font-size: 14px;
/* focus: */
border-color: #FFD700;
box-shadow: 0 0 0 3px rgba(255, 215, 0, 0.1);
```

### Badge
```css
background: rgba(0, 0, 0, 0.5);
border: 1px solid rgba(255, 215, 0, 0.35);
color: #FFD700;
border-radius: 5px;
padding: 2px 8px;
font-size: 11px;
font-weight: 600;
/* text: ALL CAPS */
```

### Alerts
```css
/* Info/Gold */ background: rgba(255,215,0,0.08); border: 1px solid rgba(255,215,0,0.25); color: #FFD700;
/* Success  */ background: rgba(74,124,74,0.10);  border: 1px solid rgba(74,124,74,0.30);  color: #90EE90;
/* Error    */ background: rgba(221,60,60,0.10);   border: 1px solid rgba(221,60,60,0.30);  color: #FF6B6B;
```

---

## Data Table Pattern

```css
/* Container */
border-radius: 12px; background: rgba(255,255,255,0.03);
border: 1px solid rgba(255,215,0,0.15); overflow: hidden;

/* Header */
thead { background: rgba(255,215,0,0.07); }
th { color: #FFD700; font-size: 12px; font-weight: 600; letter-spacing: 0.05em; border-bottom: 1px solid rgba(255,215,0,0.18); }

/* Rows */
td { border-bottom: 1px solid rgba(255,215,0,0.06); color: rgba(233,230,223,0.9); }
tbody tr:hover td { background: rgba(255,215,0,0.03); }
```

---

## Copy & Content Rules

- **Voice:** Confident, direct, premium. No hedging.
- **Person:** Second-person — "you," "your business"
- **Power verbs:** Automate · Scale · Unlock · Deploy · Dominate
- **Framing:** Outcome-first — lead with the result, not the feature
- **No emoji** in product UI or marketing headlines
- **No exclamation points** in headlines
- **Casing:** Headlines → Title Case; Subheadings → Sentence case; Badges → ALL CAPS; Buttons → Title Case
- **CTAs:** "Get Started" · "Book a Demo" · "Start Free" · "Launch Now"

### Example good copy
```
"Automate your workflow. Scale your revenue."
"AI-powered tools built for businesses that move fast."
"From booking to billing — everything in one dashboard."
"Your brand. Our infrastructure. Endless possibilities."
```

---

## Product UI Kit Reference

Five interactive UI kits are available in the design system project:

| Product | Kit | Core Screens |
|---|---|---|
| **SmartFlowSite** | `ui_kits/smartflowsite/` | Hero, Features, Pricing, Footer |
| **SmartFlow Hub** | `ui_kits/smartflow-hub/` | Dashboard, Analytics, Automations, Settings |
| **Barber Booker** | `ui_kits/barber-booker/` | 4-step booking flow, Appointments, Services |
| **SocialScaleBooster** | `ui_kits/social-scale-booster/` | Overview, Scheduler, Analytics, AI Content |
| **Data Query Engine** | `ui_kits/data-query-engine/` | NL→SQL editor, Saved queries, Dashboards, Schema |

---

## Genesis Template (base for all new apps)

All new SFS React apps start from `sfs-genesis-template`:

- **Stack:** React 19 + TypeScript + Vite + Tailwind CSS
- **Components:** Radix UI + shadcn (`Button`, `DropdownMenu`, `Input`, `Badge`, `Avatar`)
- **Key CSS classes:** `glass-card`, `glass-card-hover`, `circuit-bg`, `sfs-gradient`, `sfs-button`, `sfs-button-outline`, `text-glow`
- **Layout:** `Hamburger` + `Sidebar` (slides in from left) + `ProfessionalHeader`

### Tailwind SFS tokens (from genesis)
```js
// tailwind.config.js extensions
colors: {
  'sfs-gold':  '#FFD700',
  'sfs-beige': '#F5F5DC',
  'sfs-black': '#0D0D0D',
  'sfs-brown': '#3B2F2F',
}
```

---

## Brand Assets

All assets available at `assets/` in the design system project:

| File | Size | Use |
|---|---|---|
| `logo.png` | 1024×1024 | Full wordmark, dark/transparent backgrounds |
| `logo-square-256.png` | 256×256 | App icons, nav logo |
| `logo-square-64.png` | 64×64 | Favicon, small UI usage |
| `app-icon-192.png` | 192×192 | PWA manifest icon |
| `sfs-circuit-flow.js` | — | Animated background |
| `sfs-hamburger-menu.js` | — | Vanilla JS slide-in nav |

---

## Related Skills

- `sfs-theme-enforcer` — Apply Tailwind theme to any project
- `sfs-repo-setup` — Initialize a new SFS repo
- `sfs-auth-setup` — Add JWT auth with SFS role hierarchy
- `sfs-stripe-integration` — Add Stripe billing
- `sfs-multi-tenant` — White-label multi-tenant setup

---

## Quick Checklist

When building any SFS interface, verify:

- [ ] Background is `#0D0D0D`
- [ ] Circuit canvas is present on hero/landing sections
- [ ] Font is Inter (imported from Google Fonts)
- [ ] Cards use gold-tinted borders (`rgba(255,215,0,0.22)`)
- [ ] Primary CTA uses gold gradient + black text
- [ ] No emoji in UI copy or headlines
- [ ] Icon library is Lucide React
- [ ] Hover states lift with `translateY(-2px)`
- [ ] Active/press states use `scale(0.98)`
- [ ] Shadows are dark-tinted (not colorful) except gold glow on CTAs
- [ ] Copy leads with outcomes, uses power verbs, no exclamation marks

---

*Part of the SmartFlow Systems Claude Skills Library — `sfs-claude-skills`*  
*Design system source: [smartflow-systems/sfs-design-system](https://github.com/smartflow-systems/sfs-design-system)*
