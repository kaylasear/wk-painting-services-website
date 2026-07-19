# WK Painting Services

Marketing website for [WK Painting Services, LLC](https://wk-painting-services.com), a Pierce County exterior, interior, and cabinet painting company.

Live site: **https://wk-painting-services.com**

## Tech Stack

- [Astro](https://astro.build) — static site generator
- [Prettier](https://prettier.io) (with `prettier-plugin-astro`) — code formatting

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org) 20+
- npm

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Starts a local dev server at `http://localhost:4321` with hot reload.

### Build

```bash
npm run build
```

Outputs a production-ready static site to `dist/`.

### Preview

```bash
npm run preview
```

Serves the production build locally to sanity-check it before deploying.

### Formatting

```bash
npm run format        # format all files
npm run format:check  # check formatting without writing
```

## Project Structure

```
src/
├── components/   # Reusable Astro components (Header, Footer, Hero, Gallery, etc.)
├── config/       # Site-wide config (business name, phone, hours, etc.)
├── layouts/      # Shared page layout
├── pages/        # Route-based pages (index, about, reviews, residential-painting)
├── styles/       # Global CSS
└── utils/        # Shared helper functions
pictures/         # Logo and print assets (business cards, magnets)
```

## Deployment

Deployed via [Cloudflare Pages](https://pages.cloudflare.com), connected directly to this GitHub repository. Pushes to `main` trigger an automatic build (`npm run build`, output directory `dist`) and deploy. Cloudflare also manages DNS for the custom domain `wk-painting-services.com`.

A GitHub Actions workflow ([.github/workflows/deploy.yml](.github/workflows/deploy.yml)) that deploys to GitHub Pages is kept in place as a fallback.

## License

Private, all rights reserved. This code is not licensed for reuse.
