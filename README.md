# Sushant Gurav — GIS Portfolio

A GitHub Pages-ready, evidence-led GIS portfolio built from the supplied portfolio HTML and academic/project reports.

## Portfolio positioning

**GIS Analyst | Remote Sensing | Environmental GIS | Forest & Wildlife GIS | Python/ArcPy Automation | Web GIS**

The redesign prioritizes real maps, measured results, professional GIS responsibilities and source reports. Academic work is labelled as academic/research work and is never presented as employment.

## Structure

```text
.
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── data/
│   └── projects.js
├── assets/
│   └── projects/
│       ├── landslide-ml/
│       ├── drought-tool/
│       ├── frequency-ratio/
│       ├── lulc-change/
│       ├── urban-heat-island/
│       ├── watershed/
│       └── drone/
├── documents/
│   └── project reports (.pdf)
└── SOURCE_NOTES.md
```

## Run locally

No build step is required. The site uses plain HTML, CSS and JavaScript.

For a local preview:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000/`.

## Deploy to GitHub Pages

1. Create a GitHub repository.
2. Upload the contents of this folder to the repository root.
3. In **Settings → Pages**, deploy from the main branch/root folder.
4. Wait for GitHub Pages to publish the site.

All site assets and documents use relative paths, so no path changes are required for normal project-site deployment.

## Updating projects

Most project content is defined in `data/projects.js`. Add or edit a project object there instead of duplicating HTML cards manually. The project library, filters, featured cards, case-study dialog, map gallery and skill links are generated from the data object.

Each project can define:

- title, type, year and categories
- study area, objective and summary
- data, tools, methods and skills
- result metrics and key findings
- hero image and gallery images
- before/after comparison
- source PDF report(s)
- evidence/confidentiality notes

## Public-data note

The professional Municipal Property Tax Web GIS item is included as work experience, but production/client maps and property data are deliberately not published. Add only material you are authorized to show.

## Missing assets intentionally omitted

The previously supplied HTML referenced a portrait, background video and CV file, but those files were not included with the supplied project package. They are intentionally not linked here so the final GitHub version has no broken local references. If you add them later, use relative paths and update `index.html` accordingly.


## Portfolio v3 personal assets

This build includes:

- `assets/images/sushant.jpg` — professional portrait
- `assets/video/background-video.mp4` — muted looping hero background animation
- `documents/Sushant-Gurav-CV.pdf` — current CV
- LinkedIn: `https://www.linkedin.com/in/sushant-gurav/`

The video uses `autoplay muted loop playsinline` and is disabled when the visitor requests reduced motion or has data-saver enabled.
