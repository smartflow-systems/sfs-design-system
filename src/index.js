/**
 * @smartflow/design-system
 * Unified design system for all SmartFlow Systems applications
 *
 * Features:
 * - Dark theme with black/brown base colors
 * - Metallic gold (#FFD700) accent colors
 * - Glassmorphism card components
 * - Animated circuit flow background
 * - Consistent typography and spacing
 */

// Export circuit flow animation initializer
export { initSFSCircuitFlow } from './sfs-circuit-flow.js';

// Export design tokens
export const SFSColors = {
  black: '#0D0D0D',
  brown: '#3B2F2F',
  gold: '#FFD700',
  gold2: '#E6C200',
  beige: '#F5F5DC',
  white: '#FFFFFF',
};

export const SFSGradients = {
  gold: 'linear-gradient(135deg, #FFD700, #E6C200)',
  goldHorizontal: 'linear-gradient(90deg, #FFD700 0%, #E6C200 100%)',
};

// CSS imports (use in your app's main CSS/JS file)
export const cssImports = {
  theme: './sfs-complete-theme.css',
  tailwindPreset: './tailwind.smartflow.preset.cjs',
};

// Installation instructions
export const installInstructions = `
SmartFlow Design System Installation:

1. Link CSS theme in your HTML/main component:
   <link rel="stylesheet" href="node_modules/@smartflow/design-system/src/sfs-complete-theme.css">

2. Add circuit canvas element:
   <canvas id="circuit-canvas"></canvas>

3. Initialize circuit animation:
   import { initSFSCircuitFlow } from '@smartflow/design-system';
   initSFSCircuitFlow();

4. For Tailwind projects, extend your tailwind.config.js:
   module.exports = {
     presets: [require('@smartflow/design-system/src/tailwind.smartflow.preset.cjs')],
     // ... your config
   }

5. Use design system classes:
   - Cards: .glass-card, .sfs-glass-card, .sfs-flow-card
   - Buttons: .btn-gold, .btn-ghost
   - Typography: .text-gold-gradient, .text-gold
   - Badges: .badge
`;
