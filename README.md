# Formidable Functions.ai — Next.js + GSAP

Pure-black, monochrome marketing site for the 1% Revenue Engine.

## Stack
- Next.js 14 (App Router, TypeScript)
- GSAP 3 + ScrollTrigger
- next/font (Inter Tight + JetBrains Mono)
- No image assets — all type and CSS

## Animation inventory
- `SiteBackdrop` — radial glow drifts idly + soft cursor follow
- `CursorDot` — mix-blend cursor that grows on interactive elements
- `AnimatedHeadline` — clip-mask word-by-word reveal on scroll
- `Reveal` — fade-up wrapper, IntersectionObserver via ScrollTrigger
- `Hairline` — section dividers draw in (scaleX) on scroll
- `StatCounter` — numeric tween (0 → value) when in view
- `MagneticButton` — magnetic pull + radial spotlight on hover
- `PhoneNumber` — character-stagger reveal, hover letter-spacing tween
- `Marquee` — looping VAPI/Twilio/etc badge strip
- `Parallax` — generic scroll-tied translate
- `HeroCipher` — oversized monospace numerals, parallax + reveal
- `Header` — slide-in on mount, blurred-bg swap on scroll, link underlines
- `PricingTier` — scroll-in, mouse-tracking spotlight on each card

All animations honor `prefers-reduced-motion`.

## Run
```bash
cd website
npm install
npm run dev
```

## Pages
- `/` — Home
- `/how-it-works`
- `/pricing`
- `/demo`
- `/about`
- `/book` (Calendly inline)
