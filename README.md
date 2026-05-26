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

**SIGKILL during build?** That is almost always **out of memory** on a small VPS. Use the full script in `forge-deploy.sh` and push the latest code (sets `FORGE_LOW_MEMORY=1`).

Copy the entire contents of **`forge-deploy.sh`** into Forge → Site → Deployment Script.

Key build env vars (already in that script):

```bash
export FORGE_LOW_MEMORY=1
export NODE_OPTIONS="--max-old-space-size=1536"
pnpm install --frozen-lockfile
pnpm run build:forge
```

#### Site settings

1. Site type: **Next.js**
2. Node version: **20** or **22**
3. Environment: `NODE_ENV=production`, `PORT=3002`
4. PM2: `next start --hostname 0.0.0.0 --port 3002` (1 instance, fork mode)

#### If build still fails with SIGKILL

- Upgrade server to **2GB+ RAM**, or add **2GB swap** on the droplet.
- On 4GB+ servers, set `NODE_OPTIONS="--max-old-space-size=3072"` and remove `FORGE_LOW_MEMORY=1` to re-enable `standalone` output.

**Performance notes:** Lenis smooth scroll and GSAP parallax are disabled on mobile/touch devices. Images use AVIF/WebP via `next/image`.

## Design System

- **Palette:** Matte black `#0a0a0a`, cream `#fafaf8`, warm gold accent `#c4b5a0`
- **Typography:** Geist Sans + Inter Tight (display)
- **Mobile-first** with floating CTA, premium full-screen menu

---

Crafted with intention · Windsor Embro
