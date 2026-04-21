# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev       # start dev server (http://localhost:5173)
npm run build     # production build → dist/
npm run preview   # preview production build locally
```

## Stack

React 18 + Vite 5 + Framer Motion 11. No TypeScript, no router, no backend.

## Architecture

Single-page portfolio. All data is hardcoded in `src/data/`. No API calls.

**Entry flow:** `main.jsx` → `App.jsx` → `Intro` (video splash) → renders all sections after intro exits.

**Key structure:**
- `src/styles/tokens.css` — all CSS custom properties (colors, shadows, spacing, fonts)
- `src/styles/global.css` — global resets, button classes (`.btn-primary`, `.btn-ghost`, `.btn-outline-white`), tag classes (`.tag--purple`, `.tag--neutral`, `.tag--dark`), section classes
- `src/utils/animations.js` — Framer Motion variants (fadeUp, slideInLeft, staggerContainer, scaleIn, etc.)
- `src/components/SectionWrapper.jsx` — wraps every section with scroll-triggered `whileInView` fadeUp animation
- `src/sections/` — one file per section (Intro, Home, About, Experience, Projects, Research, Skills, Contact)
- `src/data/` — experience.js, projects.js, skills.js (update these for content changes)

## Design System

Stripe-inspired. Design tokens live in `tokens.css`. Key values:
- Font: `Sora` (weight 300 for headings/body, 400 for UI/buttons)
- `font-feature-settings: "ss01"` on all text
- Heading color: `#061b31` (deep navy, never black)
- Purple: `#533afd`, hover: `#4434d4`
- Dark sections: `#1c1e54` background
- Shadows use blue-tinted rgba: `rgba(50,50,93,0.25)`
- Border radius: 4–8px only

## Content to update

| File | What to change |
|------|---------------|
| `src/data/projects.js` | Add real GitHub repos |
| `src/sections/Research.jsx` | Update publication href with real DOI |
| `public/resume.pdf` | Add resume PDF for download button |
| `src/assets/avatar.jpg` | Optional profile photo for About section |
