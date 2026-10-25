# Signal Bloom — Jester Pedrosa
A responsive Next.js portfolio with a living canvas ASCII bloom, GSAP scroll choreography, Lenis smoothing, Motion cursor parallax, project carousel, expandable project details and email contact.

## Run
```sh
npm install
npm run dev
```
Open http://localhost:3000. `npm run build` generates a static export in `out/`; `npm run typecheck` checks TypeScript.

## Content
Edit `lib/websites.ts` for the five live website links. Real homepage captures are in `public/work/` as WebP files. Employment and earlier project experience are separate, in `components/experience-table.tsx`, with native dialog details. Contact: pedrosajester28@gmail.com.

## Accessibility
Semantic landmarks, skip link, visible keyboard focus, reduced-motion support, native links, accessible experience buttons, native dialog focus management and Escape dismissal. Ambient motion can be paused. The canvas is decorative and has a semantic text heading alongside it.

## Design
The supplied Signal Bloom brief is adapted into an editorial portfolio with a botanical ASCII field. Website URLs were supplied by the user. No testimonials, metrics or client outcomes have been invented. The website showcase is a one-at-a-time gallery with previous/next controls and direct links to each live site.
