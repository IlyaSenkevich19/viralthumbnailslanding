# ViralThumblify — Landing Page

Marketing landing for **ViralThumblify**, an AI-powered YouTube thumbnail generator aimed at creators (especially ~5–30K subscribers). Built with **Next.js (App Router)**, **React 19**, **TypeScript**, and **Tailwind CSS v4**.

## Features

- Responsive, mobile-first layout
- SEO: metadata, Open Graph, Twitter cards, JSON-LD (`SoftwareApplication`)
- `public/robots.txt` and `public/llm.txt` (Generative Engine Optimization)
- Optimized images via `next/image` where applicable
- Ready to deploy on [Vercel](https://vercel.com)

## Requirements

- **Node.js** 20+ (recommended)
- **npm** 10+

## Getting started

```bash
# Install dependencies
npm install

# Dev server (http://localhost:3000)
npm run dev
```

## Scripts

| Command       | Description              |
| ------------- | ------------------------ |
| `npm run dev` | Start development server |
| `npm run build` | Production build       |
| `npm run start` | Run production server  |
| `npm run lint`  | Run ESLint             |

## Project structure

```
app/                 # App Router: layout, page, global styles
components/          # UI sections and shared components
components/ui/       # Reusable primitives (Button, SectionWrapper, …)
public/              # Static assets (favicon, robots.txt, llm.txt, thumbnails)
```

## Deployment (Vercel)

1. Push this repo to GitHub.
2. In Vercel: **Add New Project** → import the repository.
3. Framework preset: **Next.js** (default).
4. Deploy.

After you have a production URL, update:

- `siteUrl` in `app/layout.tsx` (`metadataBase`, canonical, JSON-LD)
- `Sitemap:` URL in `public/robots.txt`
- Domain line in `public/llm.txt`

## Environment variables

No env vars are required for the static marketing page. Add them when you connect analytics, forms API, or auth.

## License

[MIT](LICENSE) © 2026 Ilya Senkevich.

## Repository

<https://github.com/IlyaSenkevich19/viralthumbnailslanding>
