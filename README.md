# Jester Pedrosa — freelance portfolio

Next.js / React / TypeScript portfolio with an ASCII hero, interactive website
gallery, freelance services, project stories, professional experience, and a
project-brief email draft builder. Deployed through the existing Vercel project.

## Run and validate
```sh
npm ci
npm run dev
npm run typecheck
npm run build
npm run verify:export
```
`next build` produces the static `out/` export. No backend is needed for enquiries:
the contact form opens the visitor's email application and provides a copy fallback.

## Edit content
- `lib/websites.ts`: live website examples and screenshots.
- `lib/experience.ts`: CV-backed roles and responsibilities.
- `lib/case-studies.ts`: project stories, with static routes and sitemap entries.
- `lib/site.ts`: public identity, domain, email, GitHub, and share metadata.
- `components/freelance-sections.tsx`: services, skills, workflow, and Figma handoff.
- `public/downloads/`: public profile PDF and clearly labeled sample QA checklist.

`python3 scripts/create-profile.py` regenerates the profile with ReportLab installed.
Confirm the one-page layout visually after changing it. No private phone number or
home address is included. Add LinkedIn only when the correct URL is supplied.

## Accessibility and motion
Semantic landmarks, a skip link, visible focus, native disclosures, gallery arrow
buttons and keyboard navigation, reduced-motion styles, and a pause control.
Professional content remains readable without waiting for scroll animations.

## SEO
See `SEO-SETUP.md` for implemented metadata and the remaining owner-controlled
Search Console verification. Existing GA4 configuration is preserved.
