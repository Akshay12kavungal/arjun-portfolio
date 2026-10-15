# Arjun K — Portfolio

Personal portfolio site for Arjun K, Operations In-Charge (Food & Beverage). A static single-page site built with React and Vite, with light and dark themes.

## Getting started

```bash
npm install
npm run dev       # start the dev server
npm run build     # production build into dist/
npm run preview   # serve the production build locally
npm run lint      # run oxlint
```

## Project structure

```
src/
├── main.jsx              # entry point; loads global styles and mounts <App />
├── App.jsx               # page layout: composes all sections
├── assets/               # images (profile photo)
├── data/
│   ├── portfolio.js      # ALL site content: profile, experience, skills, education…
│   └── nav.js            # navigation links / section ids
├── components/           # reusable UI pieces (each with its own .css)
│   ├── Header.jsx        # sticky nav, theme toggle, scroll progress bar
│   ├── Footer.jsx
│   ├── BackToTop.jsx
│   ├── SectionTitle.jsx  # numbered eyebrow + heading
│   ├── CountUp.jsx       # animated number for stats
│   ├── Icon.jsx          # inline SVG icon renderer
│   └── icons.jsx         # icon path definitions
├── sections/             # one file per page section (each with its own .css)
│   ├── Hero.jsx
│   ├── Marquee.jsx
│   ├── About.jsx
│   ├── Experience.jsx
│   ├── Skills.jsx
│   ├── Education.jsx
│   └── Contact.jsx
├── hooks/
│   ├── useReveal.js         # fade-in on scroll for .reveal elements
│   ├── useActiveSection.js  # highlights the current nav link
│   ├── useScroll.js         # scroll position + progress
│   └── useTheme.js          # light/dark theme with persistence
└── styles/
    ├── global.css        # design tokens (colors, fonts), dark theme, base reset
    └── shared.css        # container, buttons, cards, pills, reveal animation
```

## Editing content

All text lives in [`src/data/portfolio.js`](src/data/portfolio.js). Update it there; no component changes are needed to add a job, skill, language or education entry.

- To add a skill icon, use one of the names defined in [`src/components/icons.jsx`](src/components/icons.jsx).
- To replace the photo, swap [`src/assets/arjun.jpg`](src/assets/arjun.jpg).
- Colors and fonts are CSS variables at the top of [`src/styles/global.css`](src/styles/global.css).

## Deploying

`npm run build` outputs plain static files to `dist/`, which can be hosted on GitHub Pages, Netlify, Vercel or Cloudflare Pages.
