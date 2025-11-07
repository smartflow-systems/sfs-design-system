# SmartFlow Systems Design System

A unified design system for all SmartFlow Systems applications featuring a dark brown/black theme with luxurious metallic gold accents.

## Theme Overview

- **Primary Background:** Dark Brown (#4B2E2E) and Black (#0A0A0A)
- **Accent Color:** Metallic Gold (range from #7A5A00 to #FFD700)
- **Typography:** Inter sans-serif font family
- **Design Philosophy:** Dark, luxurious, professional with metallic gold highlights

## Installation

```bash
npm install @smartflow/design-system
```

## Usage

### With Tailwind CSS

1. Import the design system in your `tailwind.config.js`:

```javascript
const sfsTheme = require('@smartflow/design-system/tailwind.config');

module.exports = {
  ...sfsTheme,
  content: [
    ...sfsTheme.content,
    './src/**/*.{js,jsx,ts,tsx}',
  ],
};
```

2. Import the CSS in your main stylesheet:

```css
@import '@smartflow/design-system/src/theme.css';
```

## Components

### Buttons

#### Gold Button
```html
<button class="btn-gold">Click Me</button>
```

#### Ghost Button
```html
<button class="btn-gold-ghost">Learn More</button>
```

### Typography

#### Metallic Gold Text
```html
<h1 class="text-gold">SmartFlow Systems</h1>
```

#### Animated Gold Shine
```html
<h1 class="text-gold-shine">Premium Feature</h1>
```

### Form Elements

#### Dark Input
```html
<input type="text" class="input-dark" placeholder="Enter your email" />
```

### Panels & Containers

#### Dark Panel
```html
<div class="panel-dark p-6">
  Content here
</div>
```

#### Gold Border
```html
<div class="border-gold p-4">
  Premium content
</div>
```

### Badges

#### Gold Badge
```html
<span class="badge-gold">New</span>
```

### Dividers

#### Gold Horizontal Rule
```html
<hr class="hr-gold" />
```

## Color Palette

### Gold Shades
- `gold-100`: #FFF7CC (Lightest)
- `gold-300`: #FFE58A
- `gold-500`: #FFD700 (Primary)
- `gold-600`: #E6C200
- `gold-700`: #B58E00
- `gold-800`: #7A5A00 (Darkest)

### Background Colors
- `brown-900`: #4B2E2E
- `black-900`: #0A0A0A

## Animations

### Gold Pan Animation
Creates a shimmering effect on text with the gold gradient.

### Loading Skeleton
```html
<div class="skeleton h-10 w-full"></div>
```

## Customization

You can override any CSS variables in your root styles:

```css
:root {
  --gold-500: #your-custom-gold;
  --background: #your-custom-bg;
}
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

MIT © SmartFlow Systems
