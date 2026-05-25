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

**Important:** This repo includes `pnpm-lock.yaml` and `package-lock.json`. Use **one** package manager in your deploy script.

#### Recommended Forge deployment script

Replace the install/build lines in your Forge deployment script with:

```bash
cd $FORGE_RELEASE_DIRECTORY

export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1

pnpm install --frozen-lockfile
pnpm run build
```

**Or with npm:**

```bash
cd $FORGE_RELEASE_DIRECTORY

export NODE_ENV=production
export NEXT_TELEMETRY_DISABLED=1

npm ci
npm run build
```

#### Site settings

1. Site type: **Next.js**
2. Node version: **20** or **22**
3. Environment: `NODE_ENV=production`, `PORT=3002` (match your PM2 port)
4. PM2 start: `next start --hostname 0.0.0.0 --port 3002`

#### If deploy times out (>10 min)

- Do **not** retry blindly — push the latest code (includes `pnpm-lock.yaml`, `sharp`, faster production build).
- Ensure Forge runs `pnpm install --frozen-lockfile` (not a fallback double install).
- `sharp` must build for image optimization (configured in `package.json` → `pnpm.onlyBuiltDependencies`).

**Performance notes:** Lenis smooth scroll and GSAP parallax are disabled on mobile/touch devices. Images use AVIF/WebP via `next/image`.

## Design System

- **Palette:** Matte black `#0a0a0a`, cream `#fafaf8`, warm gold accent `#c4b5a0`
- **Typography:** Geist Sans + Inter Tight (display)
- **Mobile-first** with floating CTA, premium full-screen menu

---

Crafted with intention · Windsor Embro
