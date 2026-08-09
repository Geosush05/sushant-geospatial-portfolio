# Sushant Gurav — GIS Portfolio (Static Build)

## Why static HTML instead of Next.js
This build environment has no network access, so `npm install` for Next.js/Tailwind/
Framer Motion/MapLibre can't run here. This is a **single self-contained HTML file**
(vanilla CSS + JS, no build step, no dependencies except Google Fonts loaded at
runtime) that delivers the same design system and interactions described in the
brief. It opens directly in any browser and deploys as-is to Vercel, Netlify, or
GitHub Pages (as a static site). It's also straightforward to port into a Next.js
`app/page.tsx` later if you want the React/Next architecture — the CSS variables and
section structure translate directly into components.

## Files
- `index.html` — the entire site (structure, styles, scripts)
- `sushant.jpg` — your photo, used in the profile strip under "Journey"

## Run it
Just open `index.html` in a browser. No install needed.
For local dev with live reload: `npx serve .` (requires internet on your machine).

## Deploy
- **Vercel/Netlify**: drag-and-drop the folder, or connect the repo — no build command needed (static site).
- **GitHub Pages**: push to a repo, enable Pages on the root.

## What's real vs. placeholder
Every career fact (roles, dates, education, projects, tools) comes directly from
your resume — nothing invented. Two things are intentionally placeholders, both
clearly marked in the code and to the visitor:
1. **CV button** — currently shows an alert. Add your PDF at
   `outputs/Sushant-Gurav-CV.pdf` and update the two `.view-cv` click handlers
   (search `view-cv` in the `<script>` at the bottom of index.html) to link there
   instead of showing the alert.
2. **LinkedIn button** — linked to the supplied LinkedIn profile URL and opens in
   a new browser tab.
3. **Project visuals** (the three SVG "layer stack" panels) are labelled
   "Conceptual Visual" / "Demo Data" on the card itself — they illustrate the
   workflow, not real map outputs, since no screenshots or datasets were supplied.

The portfolio also includes project filtering, a mobile navigation menu, a
coordinate explorer, a spatial buffer demo, and keyboard-accessible GIS World
relationship details. The GIS Lab visuals are explicitly demo visualizations.

## Customizing
- **Colors/type**: all defined as CSS variables at the top of the `<style>` block
  (`:root { --bg, --accent, --earth, --forest, ... }`).
- **Add a project**: copy one `<article class="project">` block in the
  "Selected Work" section and edit its text/pipeline/tags; add a matching
  `buildLayerStack(...)` call near the bottom of the script if you want a custom
  layer-stack visual.
- **GIS World nodes**: edit the `currentSkills` / `exploring` arrays in the script.

## Accessibility & performance notes
- Respects `prefers-reduced-motion` (disables parallax/animation).
- Keyboard-focusable nav, buttons, and network nodes; visible focus states.
- No external JS libraries; total payload is a few KB besides the photo and fonts.
- Decorative SVG backgrounds are `aria-hidden`.
