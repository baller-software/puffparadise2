# Puff Paradise — Website

Static marketing website for Puff Paradise Smoke & Vape Shop in Forney, TX. Built with [Astro 5](https://astro.build) and [Tailwind CSS v4](https://tailwindcss.com), deployed to GitHub Pages.

## What's Here

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero, value propositions, service overview, testimonials, CTA |
| About | `/about` | Company story, mission statement, values |
| Contact | `/contact` | Contact form, location/hours, social links |

**Features:**
- Demo chatbot widget (bottom-right bubble) — scripted conversation with keyword matching
- Responsive layout (mobile-first, works 375px → 1440px)
- Contact form with client-side validation and spam honeypot

## Prerequisites

- Node.js 20 LTS or later
- npm

## Local Development

```bash
git clone <repo-url>
cd <project-dir>/pages
npm install
npm run dev
```

The dev server runs at `http://localhost:4321` with hot reload.

## Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Astro dev server with hot reload |
| `npm run build` | Build static site to `pages/dist/` |
| `npm run preview` | Preview the production build locally |

All commands must be run from the `pages/` directory.

## Environment Variables / Configuration

| Variable | Where to change | Description |
|----------|----------------|-------------|
| Contact form endpoint | `pages/src/components/ContactForm.astro` line with `FORM_ENDPOINT` | Replace `REPLACE_WITH_YOUR_FORM_ID` with your Formspree form ID (or another compatible endpoint) |
| Site URL | `pages/astro.config.mjs` | Set `site` to your production URL if deploying with a base path |

## Project Structure

```
pages/
├── src/
│   ├── pages/          # Astro routes — one file = one page
│   │   ├── index.astro
│   │   ├── about.astro
│   │   └── contact.astro
│   ├── layouts/
│   │   └── BaseLayout.astro   # HTML shell, header, footer, chatbot
│   ├── components/
│   │   ├── Header.astro       # Sticky nav with mobile menu
│   │   ├── Footer.astro       # Footer with contact info and social links
│   │   ├── ContactForm.astro  # Validated contact form
│   │   └── ChatBot.astro      # Floating demo chatbot widget
│   └── styles/
│       └── global.css         # Tailwind import + design tokens
└── public/
    └── favicon.svg
```

## Deploying

See [DEPLOYMENT.md](./DEPLOYMENT.md) for full deployment instructions.
