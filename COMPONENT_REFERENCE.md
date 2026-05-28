# 📖 Complete Component Reference Guide

## Overview
This guide documents every component, section, and feature in the Neura Smart Technologies website.

---

## 🏗️ Component Architecture

### Main App Structure
```
src/app/
├── page.tsx              # Landing page (imports all components)
├── layout.tsx            # Root layout with global metadata
└── globals.css           # Global styles and animations

src/components/
├── Hero.tsx              # Hero section with animations
├── About.tsx             # Foundation & Mission section
├── StrategicFocus.tsx    # Strategic Focus & Tech section
├── Differentiator.tsx    # Differentiator section
├── CorePillars.tsx       # 4-column pillars grid
├── Technologies.tsx      # Technology showcase grid
├── ResearchHeritage.tsx  # Timeline section
├── GlobalVision.tsx      # Global scalability section
├── ContactCTA.tsx        # Premium CTA section
├── Footer.tsx            # Footer component
└── VisualElements.tsx    # Reusable animated elements
```

---

## 📑 Section Breakdown

### 1. Hero Section (`src/components/Hero.tsx`)

**Features:**
- Full-screen cinematic hero with animated background
- Company badge with key technologies
- Main headline with gradient text effect
- Detailed subheadline and supporting line
- Two CTA buttons (Explore, Contact)
- Right-side animated visualization

**Animations:**
- Staggered content fade-in (0.2s intervals)
- Floating particles effect
- Rotating robotic arm
- Holographic panel animations
- Stat card hover animations
- Scroll indicator pulse

**Interactive Elements:**
- Two CTA buttons with hover effects
- Scroll indicator animation
- Parallax-like floating elements

**Props:** None (self-contained)

**Customizable:**
- Badge text
- Headlines and descriptions
- Button text and links
- Animation timing/delays

---

### 2. About Section (`src/components/About.tsx`)

**Features:**
- Centered glassmorphism card
- Company mission statement
- Three stat columns (Years, Research-Backed, Global)
- Animated background orbs
- Hover lift effect

**Animations:**
- Content fade-in on scroll
- Card lift on hover (5px upward)
- Stat counter hover scale
- Background orb pulsing

**Interactive Elements:**
- Hover state card transformation
- Stat hover scale effects

**Props:** None (self-contained)

**Customizable:**
- Company description text
- Stat values and labels
- Card styling/colors

---

### 3. Strategic Focus (`src/components/StrategicFocus.tsx`)

**Features:**
- Section title with gradient
- Introductory paragraph
- 3-column workflow card layout
- Animated connecting lines
- Data stream visualization
- Floating animation on cards

**Animations:**
- Title fade-in on scroll
- Cards floating (up/down 20px)
- Connecting SVG lines animate from left
- Data stream animated path
- Card border animations

**Interactive Elements:**
- Border color transitions on hover
- Card lift animations

**Props:** None (self-contained)

**Customizable:**
- Section heading and description
- Card titles and descriptions
- Icons (using lucide-react)
- Connecting line colors

---

### 4. Differentiator Section (`src/components/Differentiator.tsx`)

**Features:**
- Section title and description
- 3-column feature card grid
- 3D rotation effect preparation
- Icon cards with glow backgrounds
- Animated underline reveal

**Animations:**
- Title fade-in on scroll
- Cards stagger fade-in (0.2s intervals)
- Cards lift on hover (-10px)
- Glow box-shadow on hover
- Underline width animation on hover

**Interactive Elements:**
- 3D card hover effects
- Border color transitions
- Icon background transitions
- Animated underlines

**Props:** None (self-contained)

**Customizable:**
- Card titles and descriptions
- Icon selections
- Colors and gradients
- Hover animation intensity

---

### 5. Core Pillars (`src/components/CorePillars.tsx`)

**Features:**
- Section header with gradient title
- 4-column feature grid
- Animated icons with rotation
- Glassmorphic cards
- Background gradient
- Icon rotation animations

**Animations:**
- Header fade-in on scroll
- Cards stagger fade-in (0.15s intervals)
- Icons rotate on page load (4s duration)
- Background gradient pulse
- Card hover lift (-8px)
- Border glow on hover

**Interactive Elements:**
- Icon hover scale effects
- Border color transitions
- Animated underlines on hover

**Props:** None (self-contained, pillar data is hardcoded)

**Customizable:**
- Pillar titles and descriptions
- Icon selections
- Color gradients
- Animation delays

---

### 6. Technologies (`src/components/Technologies.tsx`)

**Features:**
- Section title and description
- 7-technology grid layout
- Individual tech cards
- Animated icons
- Bottom CTA button
- Responsive grid (2 cols mobile, 4 tablet, 7 desktop)

**Animations:**
- Title fade-in on scroll
- Tech cards stagger scale/fade (0.08s intervals)
- Icon rotation animations
- Card hover scale (1.1x)
- Underline width animation

**Interactive Elements:**
- Card hover scale and lift
- Icon rotation on hover
- Underline reveal on hover

**Props:** None (self-contained, tech data is hardcoded)

**Customizable:**
- Technology names and icons
- Tech description tooltip (if added)
- Colors and gradients
- Grid column layout

---

### 7. Research Heritage (`src/components/ResearchHeritage.tsx`)

**Features:**
- Vertical timeline layout
- 5 milestone events (1998-Now)
- Center animated vertical line
- Alternating card layout (left/right)
- Glassmorphic milestone cards
- Timeline dot indicators
- Animated dots (different for active milestone)

**Animations:**
- Title fade-in on scroll
- Center timeline line height animation
- Milestone cards stagger fade-in (0.1s intervals)
- Timeline dot scale animation on active milestone
- Card hover lift (-5px)

**Interactive Elements:**
- Card hover lift effects
- Active milestone pulse effect
- Border transitions on hover

**Props:** None (self-contained, milestone data is hardcoded)

**Customizable:**
- Milestone years and titles
- Milestone descriptions
- Timeline dot colors
- Card styling

---

### 8. Global Vision (`src/components/GlobalVision.tsx`)

**Features:**
- 3-column layout (International, Enterprise, Compliance)
- Feature cards with hover effects
- Stat badges (50+ Countries, Fortune 500, etc.)
- Background gradient orbs
- Centered trust statement

**Animations:**
- Section fade-in on scroll
- Column cards stagger fade-in (0.1s intervals)
- Background orbs animate scale
- Card hover scale (1.05x)
- Badge hover scale animations

**Interactive Elements:**
- Card hover scale effects
- Badge hover animations

**Props:** None (self-contained)

**Customizable:**
- Column titles and descriptions
- Badge values and labels
- Colors and gradients
- Animation timing

---

### 9. Contact CTA (`src/components/ContactCTA.tsx`)

**Features:**
- Large centered call-to-action section
- Main headline with gradient
- Subheadline
- Two CTA buttons
- Email contact link
- Trust indicators section
- Animated background orbs

**Animations:**
- Main content fade-in on scroll
- Buttons stagger fade-in (0.2s intervals)
- Email fade-in with delay
- Divider line scale animation
- Trust indicators stagger fade-in

**Interactive Elements:**
- Button hover effects
- Email link hover color change
- Trust indicator hover scale

**Props:** None (self-contained)

**Customizable:**
- Headlines and descriptions
- Button text and links
- Email address
- Trust indicator values

---

### 10. Footer (`src/components/Footer.tsx`)

**Features:**
- 3-column layout (Brand, Company, Resources)
- Social media links
- Copyright year (auto-calculated)
- Minimal elegant design
- Glassmorphic branding
- Decorative bottom border

**Animations:**
- Columns stagger fade-in (0.1s intervals)
- Divider line scale animation
- Social icons scale/lift on hover
- Links color transition on hover

**Interactive Elements:**
- Social icon hover scale (1.2x) and lift (-3px)
- Link hover color changes
- External link indicators

**Props:** None (self-contained)

**Customizable:**
- Company description
- Link URLs and labels
- Social media links
- Colors and styling

---

## 🎨 Visual Elements Component (`src/components/VisualElements.tsx`)

**Reusable Animated Components:**

### 1. GradientOrb
- Animated radial gradient blobs
- Used in: Hero, sections
- Animation: Y-axis movement with opacity pulse
- Duration: 8-10 seconds

### 2. AnimatedGrid
- SVG pattern grid overlay
- Used in: Hero section
- Animation: Static with opacity fade
- Purpose: Background texture

### 3. FloatingParticles
- Array of 8 animated cyan particles
- Used in: Hero right section
- Animation: Y-axis movement with fade
- Duration: 3-5 seconds (randomized)

### 4. RoboticArm
- SVG mechanical arm with gradient
- Used in: Hero visualization
- Animation: Rotating arm and forearm with pulsing end effector
- Duration: 4-6 seconds

### 5. HolographicPanel
- Glass-effect info panel
- Used in: Hero visualization
- Animation: Y-axis float with opacity pulse
- Duration: 4 seconds

### 6. DataStreamLine
- Animated SVG path with gradient stroke
- Used in: Strategic Focus section
- Animation: Stroke dash offset animation
- Duration: 3 seconds (infinite)

---

## 🎬 Animation Library

### Global Animations (defined in `tailwind.config.ts`)

| Animation | Duration | Repeat | Easing | Use Case |
|-----------|----------|--------|--------|----------|
| `fade-in` | 0.6s | Once | ease-out | Initial page loads |
| `slide-up` | 0.8s | Once | ease-out | Content reveal |
| `glow` | 3s | Infinite | ease-in-out | Cards and buttons |
| `float` | 6s | Infinite | ease-in-out | Floating elements |
| `pulse-glow` | 2s | Infinite | ease-in-out | Light effects |

### Framer Motion Animations

| Type | Duration | Transition | Use Case |
|------|----------|-----------|----------|
| Stagger | Varies | 0.15-0.2s delay | Multiple elements |
| Scale | 0.3s | easeOut | Hover effects |
| Y-Axis | 4-6s | easeInOut | Float animations |
| Opacity | 0.6-0.8s | easeOut | Fade effects |
| SVG Path | 2-3s | linear | Line drawing |

---

## 🎯 Customization Points

### Per Component Customization

**Hero:**
```tsx
// Line 50: Badge text
"AI • Robotics • MLOps • Computer Vision"

// Line 56: Main headline
"Engineering Intelligence for the Real World"

// Line 80: Button links
href="link-here"
```

**About:**
```tsx
// Line 17: Section title
"Foundation & Mission"

// Line 25: Company description
"Neura Smart Technologies is..."
```

**Footer:**
```tsx
// Line 67: Email address
href="mailto:hello@neura.tech"

// Line 150: Copyright year
© {currentYear} Neura Smart Technologies
```

---

## 📱 Responsive Design

### Breakpoints Used
- **Mobile**: Default (320px+)
- **Tablet**: `md:` (768px+)
- **Desktop**: `lg:` (1024px+)
- **Wide**: `xl:` (1280px+)

### Responsive Patterns

**Grid Layouts:**
```tsx
// Example pattern used throughout
grid-cols-1 md:grid-cols-2 lg:grid-cols-4
```

**Typography Scaling:**
```tsx
// Example pattern
text-2xl md:text-3xl lg:text-5xl
```

**Spacing:**
```tsx
// Example pattern
px-6 md:px-8 lg:px-12
```

---

## 🔧 Development Tips

### Adding a New Component

1. Create file: `src/components/MyComponent.tsx`
2. Add 'use client' directive (for interactive components)
3. Import animations: `import { motion } from 'framer-motion'`
4. Use Tailwind classes for styling
5. Add to page: `src/app/page.tsx`

### Modifying Animations

**Option 1: Tailwind animations**
```ts
// tailwind.config.ts
keyframes: {
  myAnimation: {
    '0%': { opacity: '0' },
    '100%': { opacity: '1' },
  },
}
```

**Option 2: Framer Motion**
```tsx
animate={{ y: [0, -20, 0] }}
transition={{ duration: 3, repeat: Infinity }}
```

### Changing Colors

All colors in `tailwind.config.ts`:
```ts
colors: {
  'neura-blue': '#0066ff',  // Change value here
}
```

Then use: `className="text-neura-blue"`

---

## ⚡ Performance Considerations

- **Total Bundle**: ~129KB (First Load JS)
- **Main Page Size**: ~42KB (optimized)
- **Animations**: GPU-accelerated via Framer Motion
- **Images**: None (all SVG/CSS)
- **Fonts**: Single Google Font (Inter)

### Performance Tips
1. Limit simultaneous animations
2. Use `will-change: transform` for heavy elements
3. Prefer SVG over PNG for icons
4. Lazy load below-the-fold components

---

## 🔐 Security Notes

- ✅ All content is static (no database exposure)
- ✅ No external API calls (except Google Fonts)
- ✅ No API keys hardcoded
- ✅ XSS protected (React escaping)
- ✅ Ready for HTTPS

---

## 📊 Component Dependency Tree

```
page.tsx
├── Hero
│   └── VisualElements (all)
├── About
│   └── motion
├── StrategicFocus
│   ├── motion
│   └── lucide-react
├── Differentiator
│   ├── motion
│   └── lucide-react
├── CorePillars
│   ├── motion
│   └── lucide-react
├── Technologies
│   ├── motion
│   └── lucide-react
├── ResearchHeritage
│   └── motion
├── GlobalVision
│   ├── motion
│   └── lucide-react
├── ContactCTA
│   ├── motion
│   └── lucide-react
└── Footer
    ├── motion
    └── lucide-react
```

---

## 🚀 Deployment Notes

- ✅ Works on Vercel (recommended)
- ✅ Works on any Node.js hosting
- ✅ Works with Docker
- ✅ Works on static CDN (export as static)

**For Static Export:**
Add to `next.config.js`:
```js
output: 'export',
```

---

**Last Updated**: May 28, 2026
**Version**: 1.0.0
