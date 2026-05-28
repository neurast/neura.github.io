# Neura Smart Technologies - Corporate Website

A world-class, premium corporate landing page for an AI and robotics company. Built with Next.js, TailwindCSS, and Framer Motion.

## 🚀 Features

### Design
- **Dark Luxury Aesthetic**: Deep navy and electric blue color scheme with subtle cyan accents
- **Enterprise-Grade**: Professional design inspired by OpenAI, Palantir, and Anduril
- **Cinematic Visuals**: Animated neural networks, robotic visualizations, and holographic elements
- **Glassmorphism**: Modern glass-effect cards with subtle transparency
- **Responsive**: Fully responsive design that works on all devices

### Sections
1. **Hero Section** - Cinematic introduction with animated visuals
2. **About** - Foundation and mission in elegant glassmorphism card
3. **Strategic Focus** - AI-powered solutions with floating UI cards
4. **Differentiator** - Full-stack mastery with 3D hover effects
5. **Core Pillars** - 4-column enterprise feature grid with animated icons
6. **Technologies** - Showcase of core technology stack
7. **Research Heritage** - Timeline from academic research to commercialization
8. **Global Vision** - International scalability and enterprise readiness
9. **Contact CTA** - Large premium call-to-action section
10. **Footer** - Minimal elegant footer with links and social

### Technical Highlights
- ✨ Smooth animations with Framer Motion
- 🎨 Modern typography with custom CSS
- 🔍 SEO optimized with proper meta tags
- ♿ Accessible design with semantic HTML
- ⚡ High performance with Next.js 14
- 🌙 Dark mode by default
- 📱 Mobile-first responsive design
- 🎯 Reusable component architecture

## 🛠️ Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS 3
- **Animations**: Framer Motion 10
- **Icons**: Lucide React
- **Language**: TypeScript
- **Font**: Inter (via Google Fonts)

## 📦 Installation

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Run development server**:
```bash
npm run dev
```

3. **Open in browser**:
Navigate to `http://localhost:3000`

4. **Build for production**:
```bash
npm run build
npm start
```

## 📁 Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── globals.css         # Global styles and animations
│   └── page.tsx            # Main landing page
├── components/
│   ├── Hero.tsx            # Hero section
│   ├── About.tsx           # About section
│   ├── StrategicFocus.tsx  # Strategic focus section
│   ├── Differentiator.tsx  # Differentiator section
│   ├── CorePillars.tsx     # Core pillars grid
│   ├── Technologies.tsx    # Technologies showcase
│   ├── ResearchHeritage.tsx # Timeline section
│   ├── GlobalVision.tsx    # Global vision section
│   ├── ContactCTA.tsx      # Contact CTA section
│   ├── Footer.tsx          # Footer component
│   └── VisualElements.tsx  # Reusable visual components
```

## 🎨 Design System

### Colors
- **Primary Dark**: `#0a0e27` (neura-darker)
- **Dark**: `#050812` (neura-dark)
- **Navy**: `#1a1f3a` (neura-navy)
- **Blue**: `#0066ff` (neura-blue)
- **Cyan**: `#00d9ff` (neura-cyan)
- **Accent**: `#00b4e6` (neura-accent)

### Typography
- **Heading Large**: 5xl/7xl font-bold
- **Heading Medium**: 3xl/5xl font-bold
- **Body**: 16px leading text in gray tones
- **Font**: Inter (modern, clean, professional)

### Components
- **Glass Cards**: Semi-transparent with backdrop blur
- **Glow Effects**: Cyan/blue accents with subtle animations
- **Buttons**: Primary (filled) and Secondary (outlined)
- **Animations**: Fade-in, slide-up, float, glow, pulse

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Other Platforms
- Build: `npm run build`
- Start: `npm start`
- Output directory: `.next`

## 📝 Customization

### Update Company Information
Edit `src/app/layout.tsx` and component files for company name, contact info, etc.

### Modify Colors
Update color values in `tailwind.config.ts` under `colors`.

### Change Content
Edit text content in individual component files (located in `src/components/`).

### Add New Sections
1. Create a new component in `src/components/`
2. Import and add to `src/app/page.tsx`
3. Style with TailwindCSS and Framer Motion

## 🔄 Animation Customization

Animations are configured in:
- `tailwind.config.ts` - Keyframe definitions
- `src/app/globals.css` - Custom animation classes
- Individual components - Framer Motion `animate` and `transition` props

## 🌐 SEO

Basic SEO is configured in `src/app/layout.tsx`. Customize:
- `title` - Page title
- `description` - Meta description
- `keywords` - SEO keywords
- `openGraph` - Social media preview

## 📄 License

This project is part of Neura Smart Technologies.

## 🤝 Support

For customization and deployment support, contact: hello@neura.tech

---

Built with ❤️ for Neura Smart Technologies
