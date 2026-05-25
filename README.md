# Windsor Embro

Premium luxury embroidery streetwear ecommerce experience built with Next.js 15, TypeScript, Tailwind CSS v4, Framer Motion, GSAP, and Lenis smooth scrolling.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS v4**
- **Framer Motion** — UI transitions & reveals
- **GSAP + ScrollTrigger** — cinematic text reveals & parallax
- **Lenis** — buttery smooth scrolling
- **shadcn/ui** (Radix primitives)
- **Embla Carousel**
- **React Query** + **Zustand** (cart persistence)
- **Lucide Icons**

## Pages

| Route | Description |
|-------|-------------|
| `/` | Cinematic home with hero, showcase, process, testimonials |
| `/shop` | Filterable collection with quick preview |
| `/product/[slug]` | Premium PDP with gallery, sticky buy box |
| `/custom` | Custom embroidery quote flow |
| `/about` | Brand storytelling & founder section |
| `/contact` | Contact form + FAQ accordion |

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

### Deploy on Laravel Forge (Next.js)

1. Site type: **Next.js**
2. Build: `npm ci && npm run build`
3. Start: `npm run start` (uses `output: "standalone"` — smaller, faster cold starts)
4. Node version: **20** or **22**
5. Environment: `NODE_ENV=production`, `PORT=3000`

**Performance notes:** Lenis smooth scroll and GSAP parallax are disabled on mobile/touch devices. Images use AVIF/WebP via `next/image`. First visit shows a short loader; mobile skips it.

## Design System

- **Palette:** Matte black `#0a0a0a`, cream `#fafaf8`, warm gold accent `#c4b5a0`
- **Typography:** Geist Sans + Inter Tight (display)
- **Mobile-first** with floating CTA, premium full-screen menu

---

Crafted with intention · Windsor Embro
