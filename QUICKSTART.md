# 🚀 Quick Start Guide

## 5-Minute Setup

### 1. Install Dependencies
```bash
npm install
```

### 2. Start Development Server
```bash
npm run dev
```

### 3. Open Browser
Navigate to: **http://localhost:3000**

✅ Done! The website is now running locally.

---

## 🛠️ Common Commands

```bash
# Development
npm run dev              # Start dev server on port 3000

# Production
npm run build            # Build optimized production version
npm start                # Run production build

# Linting
npm run lint             # Check for code issues

# Clean
rm -rf .next            # Remove build artifacts
```

---

## 📂 Key Files to Edit

### Update Company Info
- **Email**: `src/components/Footer.tsx` (line with hello@neura.tech)
- **Company Name**: Search and replace "Neura" in components
- **Description**: Edit text in each component (Hero, About, etc.)

### Customize Colors
- **File**: `tailwind.config.ts`
- **Section**: Look for `colors: { neura-* }`

### Modify Content
All website content is in `src/components/`:
- `Hero.tsx` - Main headline and CTA
- `About.tsx` - Company mission
- `CorePillars.tsx` - Feature list
- `Footer.tsx` - Footer content

### Add New Section
1. Create: `src/components/MySectionName.tsx`
2. Import in: `src/app/page.tsx`
3. Add: `<MySectionName />` to the page

---

## 📦 Deployment (3 Options)

### Option 1: Vercel (Easiest - 1 click)
```bash
npm install -g vercel
vercel
# Follow prompts, site goes live instantly
```

### Option 2: Docker
```bash
docker build -t neura-site .
docker run -p 3000:3000 neura-site
```

### Option 3: Manual Hosting
```bash
npm run build
npm start
# Deploy .next folder to your server
```

---

## 🎨 Quick Customization

### Change Brand Color (Blue → Purple)
Edit `tailwind.config.ts`:
```ts
'neura-blue': '#8B5CF6',  // Changed to purple
```

### Add New Technology
Edit `src/components/Technologies.tsx`, add to array:
```ts
{ icon: Cpu, label: 'Quantum Computing', accent: 'from-amber-400 to-orange-600' }
```

### Update Hero Button Links
Edit `src/components/Hero.tsx`:
```tsx
<a href="https://your-link.com" className="button-primary">
  Explore Technologies
</a>
```

---

## 🔍 Troubleshooting

| Issue | Solution |
|-------|----------|
| Port 3000 in use | `lsof -ti :3000 \| xargs kill -9` |
| Build fails | `rm -rf .next node_modules && npm install && npm run build` |
| Animations lag | Disable GPU-heavy effects in slower browsers |
| TypeScript errors | `npm run build` to see detailed errors |

---

## 📚 Documentation

- **Full Docs**: See `WEBSITE_DOCUMENTATION.md`
- **Installation Guide**: See `README_WEBSITE.md`
- **Project Details**: Check individual component files in `src/components/`

---

## ✨ What's Included

✅ 10 Premium Sections
✅ Animated UI Elements
✅ Fully Responsive Design
✅ Dark Mode by Default
✅ TypeScript Support
✅ SEO Optimized
✅ Production Ready
✅ Zero Configuration needed

---

## 🤝 Need Help?

- **Email**: hello@neura.tech
- **Docs**: Check inline comments in component files
- **Issues**: Check troubleshooting section above

---

**Status**: Ready to Go! 🎉
