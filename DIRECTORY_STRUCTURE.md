# 📁 Project File Structure

## Complete Directory Tree

```
neura.github.io/
│
├── 📄 README.md                      # Original repository readme
├── 📄 README_WEBSITE.md              # Website installation guide
├── 📄 QUICKSTART.md                  # 5-minute quick start
├── 📄 WEBSITE_DOCUMENTATION.md       # Full documentation
├── 📄 COMPONENT_REFERENCE.md         # Component guide
├── 📄 DELIVERY_CHECKLIST.md          # Verification checklist
├── 📄 DIRECTORY_STRUCTURE.md         # This file
│
├── 🔧 Configuration Files
│   ├── package.json                  # Dependencies & scripts
│   ├── package-lock.json             # Lock file
│   ├── tsconfig.json                 # TypeScript config
│   ├── jsconfig.json                 # Path aliases
│   ├── tailwind.config.ts            # Tailwind theme
│   ├── postcss.config.js             # PostCSS config
│   ├── next.config.js                # Next.js config
│   ├── vercel.json                   # Vercel deployment
│   └── .gitignore                    # Git ignore rules
│
├── 📁 src/
│   ├── 📁 app/
│   │   ├── layout.tsx                # Root layout (metadata, fonts)
│   │   ├── page.tsx                  # Main landing page
│   │   └── globals.css               # Global styles & animations
│   │
│   └── 📁 components/
│       ├── Hero.tsx                  # Hero section (top)
│       ├── About.tsx                 # About section
│       ├── StrategicFocus.tsx        # Strategic focus section
│       ├── Differentiator.tsx        # Differentiator section
│       ├── CorePillars.tsx           # Core pillars grid (4 cols)
│       ├── Technologies.tsx          # Tech showcase (7 cols)
│       ├── ResearchHeritage.tsx      # Timeline section
│       ├── GlobalVision.tsx          # Global vision section
│       ├── ContactCTA.tsx            # Premium CTA section
│       ├── Footer.tsx                # Footer (bottom)
│       └── VisualElements.tsx        # Reusable animations
│
├── 📁 .next/                         # Build output (generated)
│   ├── static/
│   ├── server/
│   └── ...
│
├── 📁 node_modules/                  # Dependencies (generated)
│   └── ...
│
└── .git/                             # Git repository

```

---

## 📊 File Organization by Purpose

### 🎨 UI Components (10 main sections)
```
src/components/
├── Hero.tsx               → Full-screen hero with visuals
├── About.tsx              → Company mission card
├── StrategicFocus.tsx     → AI workflow cards
├── Differentiator.tsx     → Full-stack features
├── CorePillars.tsx        → 4-pillar grid
├── Technologies.tsx       → 7-tech grid
├── ResearchHeritage.tsx   → Timeline
├── GlobalVision.tsx       → Global scale
├── ContactCTA.tsx         → Call-to-action
└── Footer.tsx             → Footer links
```

### 🎭 Reusable Elements
```
src/components/
└── VisualElements.tsx
    ├── GradientOrb()
    ├── AnimatedGrid()
    ├── FloatingParticles()
    ├── RoboticArm()
    ├── HolographicPanel()
    └── DataStreamLine()
```

### ⚙️ Configuration
```
Root Directory
├── tailwind.config.ts     → Colors, animations, theme
├── next.config.js         → Next.js settings
├── tsconfig.json          → TypeScript settings
├── postcss.config.js      → CSS processing
├── jsconfig.json          → Path aliases
├── package.json           → Dependencies
└── vercel.json            → Deployment config
```

### 📖 Documentation
```
Root Directory
├── README_WEBSITE.md              → Installation & setup
├── WEBSITE_DOCUMENTATION.md       → Full reference
├── QUICKSTART.md                  → Quick start (5 min)
├── COMPONENT_REFERENCE.md         → Component details
├── DELIVERY_CHECKLIST.md          → Verification
└── DIRECTORY_STRUCTURE.md         → This file
```

---

## 📈 Total Project Stats

| Category | Count |
|----------|-------|
| Component Files | 11 |
| Configuration Files | 8 |
| Documentation Files | 6 |
| Total TypeScript/React Files | 14 |
| Total Lines of Code | ~2,500+ |
| Total Project Files | 30+ |

---

## 🚀 Build Output Structure

When you run `npm run build`, a `.next` folder is generated:

```
.next/
├── static/                          # Static assets
│   ├── chunks/
│   │   ├── main-*.js               # Main bundle
│   │   ├── app/page-*.js           # Page bundle
│   │   └── vendor-*.js             # Dependencies
│   ├── css/
│   │   └── *.css                   # Generated CSS
│   └── media/
│       └── fonts/                  # Font files
├── server/                          # Server-side code
├── standalone/                      # Standalone build
└── cache/                          # Build cache
```

---

## 📦 Node Modules Summary

**Key Packages Installed:**

```
node_modules/
├── next/                           # Next.js framework (14.0)
├── react/                          # React library (18.2)
├── react-dom/                      # React DOM (18.2)
├── framer-motion/                  # Animation library (10.16)
├── tailwindcss/                    # Styling framework (3.3)
├── postcss/                        # CSS processing (8.4)
├── autoprefixer/                   # CSS vendor prefixes (10.4)
├── lucide-react/                   # Icon library (0.292)
├── typescript/                     # Type checking (5.2)
├── clsx/                           # Class utilities (2.0)
└── ... 100+ more packages
```

Total: **111 packages** (dev + production)

---

## 🔄 Common File Changes

### Most Changed During Development
1. `src/components/Hero.tsx` - Complex animations & visuals
2. `tailwind.config.ts` - Color & animation tweaks
3. `src/app/globals.css` - Global style updates
4. `src/app/page.tsx` - Component imports

### Configuration Priority
1. `tsconfig.json` - TypeScript paths (must be set)
2. `tailwind.config.ts` - Theme colors (customization)
3. `package.json` - Dependencies (do not modify)
4. `next.config.js` - Build settings (rarely needed)

---

## 💾 Storage Breakdown

| Category | Size | Notes |
|----------|------|-------|
| Source Code (src/) | ~200 KB | React components |
| Configuration | ~50 KB | Config files |
| node_modules/ | ~500 MB | Dependencies |
| .next/ build | ~5 MB | Build output |
| Total with deps | ~505 MB | For dev environment |
| Production | ~2 MB | Deployed size |

---

## 🔐 Important Files (Don't Delete)

| File | Reason |
|------|--------|
| `package.json` | Defines dependencies |
| `tsconfig.json` | TypeScript configuration |
| `tailwind.config.ts` | Theme & colors |
| `src/app/layout.tsx` | Root layout & metadata |
| `src/app/page.tsx` | Main page |
| `src/app/globals.css` | Global styles |

---

## 🛠️ File Usage During Development

### Daily Work
```
Editing:
├── src/components/*.tsx     → Content changes
├── tailwind.config.ts       → Style tweaks
└── src/app/globals.css      → CSS updates

Checking:
├── package.json             → Dependencies
├── tsconfig.json            → Type settings
└── next.config.js           → Build config
```

### Deployment
```
Upload:
├── src/                     → Source code
├── package.json             → Dependencies
├── All config files         → Configuration
├── public/                  → Static files (if any)
└── vercel.json              → Deployment config

Ignore:
├── .next/                   → Built automatically
├── node_modules/            → Built automatically
├── .git/                    → Version control
└── Any temporary files
```

---

## 📝 Adding New Files

### To Add a New Component

1. Create: `src/components/NewSection.tsx`
2. Update: `src/app/page.tsx` (add import and component)
3. Done! (no other files need changes)

### To Add a New Page

1. Create: `src/app/newpage/page.tsx`
2. Update: `src/components/Footer.tsx` (add link if needed)
3. Done! (automatic routing)

### To Customize Styles

1. Edit: `tailwind.config.ts` (colors/fonts)
2. Or edit: `src/app/globals.css` (custom CSS)
3. Changes apply immediately in dev mode

---

## ✅ Verification Checklist

Before deployment, verify these files exist:

- [ ] `package.json` - Lists all dependencies
- [ ] `src/app/layout.tsx` - Has metadata
- [ ] `src/app/page.tsx` - Imports all components
- [ ] `src/components/*.tsx` - All 11 files present
- [ ] `tailwind.config.ts` - Has theme colors
- [ ] `tsconfig.json` - Has path aliases
- [ ] `.next/` - Build folder exists after `npm run build`

---

**Last Updated**: May 28, 2026
**Version**: 1.0.0
