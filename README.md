# Beyond3D — project website

Project page for **Long Time No See: Benchmarking VLMs for Out-of-Sight
Spatiotemporal Reasoning in Egocentric Videos**.

Beyond3D is a VQA benchmark that isolates _out-of-sight spatiotemporal
reasoning_ in dynamic egocentric video: every query targets an object that has
been relocated and has since left the field of view. It comprises 9,000
questions in eight types over 135 videos from nine participants, built on
[HD-EPIC](https://hd-epic.github.io/site/) annotations.

This repository holds the [website](https://beyond3d-bench.github.io/website/), not the benchmark generation code. It
serves two pages:

| Route                | Contents                                                                                                          |
| -------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `/website/`          | Authors, teaser figure, abstract, the eight question types, construction pipeline, results, failure modes, BibTeX |
| `/website/questions` | Interactive question viewer — video, trajectory JSON, and a 3D kitchen scene per query anchor                     |

---

## Requirements

- Node.js (>= 18 recommended)
- npm (comes with Node)

---

## Installation

```bash
npm install
```

## Running the project

```bash
npm run dev
```

Then open the local URL shown in the terminal (typically
`http://localhost:5173`).

## Build for production

```bash
npm run build     # runs `tsc -b` first, so it is also the type check
npm run preview   # serve the production build locally
npm run lint
```

---

## Project structure

```
.
├── public/                      # Served at the site root, verbatim
│   ├── _redirects               # SPA fallback (/* /index.html 200)
│   ├── logos/                   # Institution logos
│   ├── teaser.jpg / .png        # Figure 1, display and full-size copies
│   ├── og-image.jpg             # Link-preview image (1200x624)
│   ├── Camera/                  # Chunked framewise tracking data
│   └── models/                  # Kitchen scene .glb files
├── src/
│   ├── Components/
│   │   ├── Camera/              # Per-video device calibration + tracking loader
│   │   ├── Json/                # Benchmark question data (see below)
│   │   ├── Layout/              # Header
│   │   ├── Results/             # Results transcribed from the paper
│   │   └── Sections/            # Page sections and charts
│   ├── Lib/                     # Theme, animation and player helpers
│   ├── pages/                   # Homepage, QuestionView, NotFound
│   ├── Layout.tsx               # Header + scroll container
│   ├── App.tsx                  # Routes (code-split via React.lazy)
│   └── index.css                # Tailwind entry, chart palette, reduced-motion
├── scripts/
│   ├── build-question-data.mjs  # Generates the question data (see below)
│   └── split-framewise-jsonl.mjs
└── index.html                   # Head: meta tags, theme bootstrap
```

---

## Adding benchmark content

**Questions.** The files under `src/Components/Json/PXX/` are generated, not
written by hand:

```bash
npm run build-questions
```

That reads the VQA export and writes one `PXX-YYYYMMDD-HHMMSS.tsx` per video,
exporting a `VIDEO: VideoEntry`. Its output is committed, so a fresh clone runs
the viewer with no external data. See `scripts/README.md` for what it selects.

The result is auto-discovered — nothing to register. `src/Components/Json/Users.tsx`
globs `./P*/**/*.tsx` eagerly and builds `USERS`, keeping participants P01
through P10. A video also needs a room model and camera tracks (below), plus its
two YouTube URLs in the script's `VIDEO_META`.

**Camera trajectories.** Put `framewise_info.jsonl` and
`device_calibration.json` under `src/Components/Camera/PXX/<video-id>/`, then:

```bash
npm run split-framewise
```

That walks the Camera tree and writes chunked output into `public/Camera/`,
splitting at 20 MiB to stay under Cloudflare's 25 MiB per-file limit. Re-run it
whenever a `.jsonl` changes. Room models go in `public/models/` as
`PXX_final.glb`.

Only `device_calibration.json` is committed there, since it is imported
directly. The `.jsonl` files are not — the app fetches their chunked output from
`public/Camera/`, so committing both duplicated half a gigabyte. To re-split an
existing video, copy its `.jsonl` back from
`hd-epic-annotations/Intermediate_data/PXX/<video-id>/` first.

**Results.** Every number in the landing page's results section is transcribed
from the paper into `src/Components/Results/Data.tsx`, with the source table or
figure named in a comment.

---

## Deployment

The build output is `dist/`, a static site. Because the app uses
`BrowserRouter`, the host must serve `index.html` for every path or deep links
will 404. `public/_redirects` covers Cloudflare Pages and Netlify; other hosts
need their own equivalent.

Routes are code-split, so the landing page does not carry the question
viewer's three.js scene or its trajectory data.

---

## Theming

Dark mode follows a `theme` key in `localStorage`, falling back to the system
`prefers-color-scheme`. The class is stamped on `<html>` by an inline script in
`index.html` before first paint — mirrored by `src/Lib/Theme.tsx`, which the
header's toggle uses. Keep the two in sync.

Favicons switch on system theme via media queries on the `<link rel="icon">`
tags, using `public/Logo-sm-light.png` and `public/Logo-sm-dark.png`.

---

## Technologies

React · Vite · Tailwind CSS · React Router · three.js / react-three-fiber ·
Framer Motion

---

## Author

Casa-del-Dev
