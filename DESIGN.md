# Signal Bloom visual system
Experience mode. The supplied brief pins the visual world: a phosphor terminal growing into an editorial gallery.
Background #050805, panel #0c140e, phosphor #39ff14, lime #c6ff3d, mint #b8e6be, sage #7fb98b.
Instrument Serif roman and italic display, Lora serif body, JetBrains Mono for technical metadata. Editorial hero combines large two-line name and a living ASCII botanical form. Sections use generous space and thin rules; project previews are explicitly illustrative, never represented as client screenshots.
Motion: canvas morph with visibility pause, Lenis scroll synced to GSAP, scrubbed text, a directional website carousel and marquee. Reduced motion removes continuous and scrubbed motion.

Website gallery uses six actual homepage captures with direct external links. Experience is an independent table with labeled employment/project rows and a native, keyboard-accessible details dialog. The period column and dates in the detail dialog were removed at the user’s request. Role and client details remain visible.

User requested removal of sans-serif typography. Headings use Instrument Serif; body, navigation, tables, and controls use Lora. Technical metadata and ASCII keep JetBrains Mono.

Latest user correction supersedes previous font choices: all portfolio text uses the native system sans-serif stack (-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial). Upright medium-weight headings replace serif italics. No downloaded font imports remain; live website screenshot typography belongs to those websites.

## Section transitions
Website links reveal individually from y=24px and opacity=0 over 600ms, with a 70ms delay for adjacent desktop cards. Their outer Motion wrappers retain independent pointer parallax. Experience heading and table reveal as one group from y=16px over 450ms; the tools heading uses y=20px over 500ms. Entrances use the existing cubic-bezier(0.16, 1, 0.3, 1) curve through GSAP CustomEase and play once. Keyboard focus immediately completes the relevant entrance. Contact content scales 0.97 to 1 and fades 0.6 to 1 over the final 250px of scroll; the sticky footer shell stays untransformed. Reduced motion uses 150ms opacity-only reveals, with no stagger or scroll scrub.

## Artistic website showcase
Six live screenshots form an exhibition gallery. The selected site sits between smaller neighboring previews; arrows, dragging, and direct thumbnail selection cycle through all sites. Its title, category, count, and visit link sit beside the preview. The entrance spreads the previews as the section scrolls into view, while reduced-motion settings keep the transition still.

## Hero ASCII composition
The ASCII canvas spans the full desktop hero and centers its bloom behind the left-aligned name, with a dark left wash to preserve legibility. Its visual radius is substantially larger than the original split-column version. On phones, the canvas sits below the introduction at 390px height so the centered bloom remains visible without covering text or controls. Resize resets cached glyph states; reduced-motion behavior stays static.

The hero artwork returned to the original split placement at the user's request: name and actions on the left, enlarged ASCII canvas on the right. The mobile canvas remains below the intro copy.
