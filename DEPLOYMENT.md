# Deployment Guide

This site is deployed to **GitHub Pages** via GitHub Actions. Every push to `main` that changes files under `pages/` triggers an automatic build and deploy.

## Hosting Environment

- **Platform:** GitHub Pages (static hosting)
- **CI/CD:** GitHub Actions (`.github/workflows/deploy.yml`)
- **Build output:** `pages/dist/`

## Pre-Deployment Checklist

Before deploying changes:

- [ ] Build succeeds locally: `cd pages && npm run build`
- [ ] Site looks correct in preview: `npm run preview`
- [ ] Contact form endpoint is configured (see below)
- [ ] No console errors in browser developer tools

## Configuring the Contact Form

The contact form uses a third-party form submission service. The site ships with a placeholder endpoint. Before going live:

1. Create a free account at [Formspree.io](https://formspree.io)
2. Create a new form — Formspree will give you a form ID (e.g., `xabcdefg`)
3. Open `pages/src/components/ContactForm.astro`
4. Find the line:
   ```js
   const FORM_ENDPOINT = 'https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID';
   ```
5. Replace `REPLACE_WITH_YOUR_FORM_ID` with your actual Formspree form ID
6. Commit and push — the deploy pipeline will pick up the change

Formspree's free tier supports 50 submissions/month. For higher volume, upgrade Formspree or swap in another compatible service (Netlify Forms, EmailJS, etc.) — the form sends a standard JSON `POST` request.

## First-Time GitHub Pages Setup

1. Go to your repository on GitHub
2. Settings → Pages
3. Under **Source**, select **GitHub Actions**
4. The first push to `main` will trigger the deploy workflow

## Deployment Steps (Normal Flow)

All deployments happen automatically:

1. Push changes to `main` branch
2. GitHub Actions runs the `build` job:
   - Checks out code
   - Installs Node.js 20
   - Runs `npm install` in `pages/`
   - Runs `npm run build` (Astro static build → `pages/dist/`)
   - Uploads build artifact
3. GitHub Actions runs the `deploy` job:
   - Deploys the artifact to GitHub Pages
4. The site is live at your GitHub Pages URL

Build time is typically under 2 minutes.

## Post-Deployment Verification

After deploying, verify:

1. Visit your GitHub Pages URL (e.g., `https://yourusername.github.io/repo-name/`)
2. Check all three pages: `/`, `/about`, `/contact`
3. Test the contact form (submit a test message)
4. Test the chatbot widget (click the bubble in the bottom-right)
5. Check on mobile (375px viewport) for responsive layout

## Rollback Procedure

To revert to a previous version:

1. Find the commit hash of the last good deploy in GitHub Actions history
2. Revert the commit on `main`:
   ```bash
   git revert <bad-commit-hash>
   git push origin main
   ```
3. This triggers a new deploy of the reverted state

Alternatively, in the GitHub Actions tab, re-run a previous successful workflow to re-deploy its artifact.

## Domain & DNS

By default, the site is served at `https://<username>.github.io/<repo-name>/`.

To use a custom domain:
1. Go to Settings → Pages → Custom domain
2. Enter your domain (e.g., `puffparadiseforney.com`)
3. Add a `CNAME` record at your DNS provider pointing to `<username>.github.io`
4. Update `site` in `pages/astro.config.mjs` to your custom domain:
   ```js
   export default defineConfig({
     site: 'https://puffparadiseforney.com',
     ...
   });
   ```
5. Remove any `base` config if using a custom domain at the root
