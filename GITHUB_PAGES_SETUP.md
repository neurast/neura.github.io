# GitHub Pages Deployment Configuration

This website is configured to automatically deploy to GitHub Pages using GitHub Actions.

## How It Works

1. **Automatic Deployment**: When you push to the `main` branch, GitHub Actions automatically:
   - Installs dependencies
   - Builds the Next.js application
   - Exports it as a static site
   - Deploys to the `gh-pages` branch
   - Makes it live on https://neura.github.io

2. **GitHub Actions Workflow**: See `.github/workflows/deploy.yml`

## Configuration

### Files Modified for GitHub Pages:
- **next.config.js**: Added `output: 'export'` for static export
- **package.json**: Added `export` script
- **.github/workflows/deploy.yml**: Automatic deployment workflow

## How to Deploy

### Automatic (Recommended)
Just push to main branch:
```bash
git push origin main
```

The GitHub Actions workflow will automatically build and deploy.

### Manual Deployment
If you need to manually deploy:

```bash
# Build and export static site
npm run export

# This creates the 'out' folder which is ready for deployment
```

## GitHub Pages Settings

The site is configured to deploy from the `gh-pages` branch created by GitHub Actions.

To verify in GitHub:
1. Go to repository Settings → Pages
2. Source should be "Deploy from a branch"
3. Branch should be "gh-pages" and "(root)"

## Viewing Your Site

Once deployed, visit: **https://neura.github.io**

## Troubleshooting

### Build Fails
- Check GitHub Actions logs in repository → Actions tab
- Common issues: Missing dependencies, export config issues

### Site Not Updating
- Check if the workflow completed successfully
- May take a few minutes for GitHub Pages to refresh
- Clear browser cache (Ctrl+Shift+Delete or Cmd+Shift+Delete)

### 404 Errors
- Ensure all paths end with trailing slash (configured in next.config.js)
- Check that pages exist in src/app/

## Performance Notes

- Static export means the site is fully static HTML/CSS/JS
- No server-side rendering
- Fast load times and good SEO
- All animations and interactivity work client-side

## Local Testing

Before pushing, test the static export locally:

```bash
npm run export
npx serve out
# Visit http://localhost:3000
```

## Need Help?

- Check `.github/workflows/deploy.yml` for the deployment workflow
- Review `next.config.js` for export configuration
- See `FINAL_DELIVERY_REPORT.md` for more info
