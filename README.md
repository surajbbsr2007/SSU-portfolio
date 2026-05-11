# Suraj - Portfolio

A monochrome, motion-aware personal portfolio built to feel professional enough to win work and warm enough to share with family.

## Run It

```bash
npm install
npm run dev
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

Production:

```bash
npm run build
npm run start
```

Standalone type-check:

```bash
npm run typecheck
```

Node 18.17+ is required for Next.js 14.

Codex desktop note: this project includes `@next/swc-wasm-nodejs` as a dev fallback because the Codex app's bundled Node runtime can reject Next's native SWC binary on macOS. A normal local Node/npm install should use the standard scripts above.

## What's Inside

| Page | Route | Notes |
| --- | --- | --- |
| Home | `/` | Word-by-word hero reveal, motion video visual, tool marquee, featured work, journey teaser |
| About | `/about` | Split layout, editorial bio, value cards, SVG signature draw-in |
| Journey | `/journey` | Horizontal pinned timeline on desktop, vertical fallback on mobile |
| Work | `/work` | Filterable bento-style project grid |
| Case Study | `/work/[slug]` | Static-generated MDX project pages with next-project nav |
| Services | `/services` | Flip cards, process cards, pricing toggle |
| Skills | `/skills` | Tool marquee, grouped chips, transform-based skill bars |
| Journal | `/blog` | Featured post and recent post grid |
| Article | `/blog/[slug]` | MDX article rendering with reading progress |
| Life | `/life` | Cream tonal shift, polaroid masonry, lightbox |
| Testimonials | `/testimonials` | Auto-advancing carousel and family notes |
| Contact | `/contact` | Minimal contact form with loading and success states |
| Resume | `/resume` | Print-friendly resume with PDF download button |
| Guestbook | `/guestbook` | Local-storage demo guestbook with moderation note |

## Stack

- Next.js 14 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- Lenis smooth scroll
- next-mdx-remote and local MDX
- GSAP installed for future timeline-heavy sequences
- Vercel-ready

## Design System

The fixed palette lives in `tailwind.config.ts` and `styles/tokens.css`.

| Role | Token | Hex |
| --- | --- | --- |
| Text and headlines | `ink` | `#0A0A0A` |
| Default background | `paper` | `#FAFAFA` |
| Borders and disabled states | `silver` | `#C0C0C0` |
| Cards and dark surfaces | `charcoal` | `#2A2A2A` |
| Accent | `accent` | `#D97706` |
| Personal-life pages | `cream` | `#F5F1EB` |

Typography uses `next/font/google`:

- Fraunces for display and editorial moments
- Inter for body and UI
- JetBrains Mono for dates, chips, and accents
- Caveat for handwritten personal captions

Motion tokens live in `lib/motion.ts`. Site animations use transform and opacity for performance.

## Global Behaviors

- First-session logo intro in `components/motion/LogoIntro.tsx`
- Burnt-orange page sweep in `components/motion/PageTransition.tsx`
- Lenis root smooth scroll in `components/motion/SmoothScroll.tsx`
- Desktop custom cursor in `components/motion/CustomCursor.tsx`
- Sticky hide-on-scroll nav in `components/sections/Nav.tsx`
- Magnetic buttons in `components/ui/MagneticButton.tsx`
- Native IntersectionObserver reveals in `components/motion/Reveal.tsx`
- Reading progress on long pages in `components/motion/ReadingProgress.tsx`
- Cream page tone via `components/motion/ToneSetter.tsx`

## Where To Swap Real Content

Most personal content is centralized:

| File | What to change |
| --- | --- |
| `lib/profile.ts` | Name, headline, bios, links, tools, values, experience, education, skills |
| `lib/journey.ts` | Timeline milestones |
| `lib/projects.ts` | Project metadata |
| `lib/posts.ts` | Blog metadata |
| `lib/testimonials.ts` | Client quotes and family notes |
| `content/projects/*.mdx` | Long-form case-study copy |
| `content/blog/*.mdx` | Long-form article copy |
| `public/images/*` | Replace placeholder images |
| `public/resume.pdf` | Replace with the real resume |

## Add A New Project

1. Add an entry to `lib/projects.ts` with a unique `slug`.
2. Add a cover image at `public/images/projects/<slug>.jpg`.
3. Add the case study body at `content/projects/<slug>.mdx`.

## Add A New Post

1. Add an entry to `lib/posts.ts`.
2. Create `content/blog/<slug>.mdx`.

## Decisions

- Lenis instead of Locomotive Scroll for a smaller, simpler smooth-scroll layer.
- Local MDX instead of a CMS for a fast v1 that is easy to own.
- One warm accent color, used sparingly.
- Cream tone only on personal-life routes.
- Profile data centralized in one file so edits ripple through the site.
- Existing motion video preserved and reused as the first-screen visual asset.

## Compromises

The image set uses the existing motion still as a placeholder across profile, project, journey, and life imagery. Replace those files with real photos and project covers when available. The guestbook and contact form are local demo patterns; wire them to Supabase, Notion, Resend, or another backend before public launch.

`npm audit --omit=dev` currently reports advisories against Next 14. The automated fix upgrades to Next 16, which is a breaking change from the requested stack. Move to the latest Next major before a public production launch if security policy takes priority over matching this brief exactly.
