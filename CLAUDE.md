# CLAUDE.md

## Project Overview

This repository contains a **single-page static HTML document** — a public policy memorandum (Memorándum de Política Pública) proposing regulatory reforms for Chile's alternative capital markets (Mercado de Capitales Alternativos). The document advocates for functional separation between investment management, fund administration, and custody in Chile's alternative asset management industry, modeled after international standards (Luxembourg AIFMD, US SEC).

- **Author**: Andrés Prats (15 years experience in private markets and alternative assets)
- **Date**: February 2026
- **Language**: Spanish (es)

## Repository Structure

```
politicamejoramercadoalternativos/
├── index.html    # The entire application — a self-contained HTML document (~1,576 lines)
├── CLAUDE.md     # This file
└── .git/         # Git metadata
```

This is intentionally a minimal repository. The entire project is a **single `index.html` file** with all CSS and JavaScript embedded inline. There are no build tools, package managers, or external dependencies beyond CDN-hosted fonts.

## Tech Stack

| Layer      | Technology                                                         |
| ---------- | ------------------------------------------------------------------ |
| Markup     | HTML5 with semantic elements (`<section>`, `<header>`, `<nav>`)    |
| Styling    | Embedded CSS (~1,000+ lines) with CSS custom properties (variables)|
| JavaScript | Vanilla JS (~25 lines) — Intersection Observer for scroll effects  |
| Fonts      | Google Fonts CDN: Playfair Display, IBM Plex Sans, IBM Plex Mono   |

### No Build System

There is no build step, no bundler (webpack, vite, etc.), no preprocessors, no `package.json`, and no `node_modules`. The file is served as-is. Open `index.html` directly in a browser to preview.

## Key Architecture Decisions

### Single-File Design

Everything (HTML, CSS, JS) lives in one file. This is deliberate — the document is meant to be easily shareable and self-contained. Do not split into separate files unless explicitly requested.

### CSS Custom Properties

The color scheme and design tokens are defined as CSS variables in `:root`:

```css
--ink: #0E1117;        /* Primary text */
--ink-soft: #2C3140;   /* Secondary text */
--ink-muted: #5A6070;  /* Muted/caption text */
--rule: #C8CAD0;       /* Borders */
--rule-light: #E8EAEE; /* Light borders */
--accent: #1A3A6B;     /* Primary accent (blue) */
--accent-mid: #2E5FAA; /* Mid-tone accent */
--accent-light: #D6E4F7; /* Light accent background */
--danger: #8B1A1A;     /* Warning/Chile deficit highlights */
--danger-light: #F5E6E6;
--gold: #8B6914;       /* Gold/highlight */
--gold-light: #F5EDD6;
--paper: #FAFAF8;      /* Page background */
--paper-warm: #F4F2ED; /* Warm background */
--white: #FFFFFF;
```

Always use these variables rather than hardcoding colors.

### Typography

- **Headings**: `'Playfair Display', serif`
- **Body text**: `'IBM Plex Sans', sans-serif`
- **Labels/data/monospace UI**: `'IBM Plex Mono', monospace`

### Responsive Design

The layout uses responsive breakpoints at:
- `1200px` — main content width adjustments
- `900px` — tablet layout changes
- `480px` — mobile layout

All responsive rules use `@media (max-width: ...)`.

### Print/PDF Optimization

The document includes print-specific CSS via `@media print` for clean PDF output. This is important for the document's purpose as a policy memo.

## Document Sections

The HTML body is organized into these major sections (in order):

1. **Cover** (`.cover`) — Full-viewport title page with document metadata
2. **Sticky Navigation** (`#stickyNav`) — Appears on scroll past the cover
3. **Executive Summary** — Key policy recommendations
4. **Content Sections** — Detailed policy analysis with data tables, comparison cards, and structured arguments
5. **Closing** (`.closing`) — Call to action and footer

### CSS Section Comments

CSS blocks are organized with comment headers like:
```css
/* ── COVER ── */
/* ── STICKY NAV ── */
/* ── SECTIONS / GENERAL ── */
/* ── CLOSING ── */
```

Follow this convention when adding new CSS sections.

## JavaScript

The JavaScript is minimal and placed at the bottom of `<body>`:

1. **Sticky nav observer** — Uses `IntersectionObserver` to toggle `.visible` class on the nav when the cover leaves the viewport
2. **Reveal on scroll** — Elements with class `.reveal` get `.visible` added when they enter the viewport

To make a new element animate on scroll, add the `reveal` class to it.

## Development Workflow

### Running Locally

No build step needed. Simply open `index.html` in a browser:
```bash
# Option 1: Direct file open
open index.html        # macOS
xdg-open index.html    # Linux

# Option 2: Local server (if needed for font loading)
python3 -m http.server 8000
# Then visit http://localhost:8000
```

### Making Changes

1. Edit `index.html` directly
2. Refresh the browser to see changes
3. Test at multiple viewport widths (desktop, tablet, mobile)
4. Test print/PDF output if modifying layout

### No Testing Framework

There are no automated tests. Validate changes visually in a browser. Check:
- Responsive behavior at all breakpoints
- Print layout (`Ctrl+P` / `Cmd+P`)
- Scroll animations (`.reveal` elements)
- Sticky navigation behavior

### No Linting/Formatting

There are no linters or formatters configured. Follow the existing code style:
- 2-space indentation for CSS and JS
- HTML indentation varies but generally 2 spaces for nested elements
- CSS properties on separate lines within rule blocks

## Git Conventions

### Branch Strategy

- `main` — Primary branch (remote default)
- Feature/session branches branch off `main`

### Commit Messages

Commit messages are written in **Spanish**, reflecting the project language. Examples from history:
- "Mejora memorandum"
- "Mejora de diseño y contenido del Memorándum"
- "Carga de Memorándum Política Pública 2026"

Follow this convention: use Spanish for commit messages, describing the nature of the change concisely.

## Conventions for AI Assistants

1. **Preserve the single-file architecture** — Do not split HTML/CSS/JS into separate files unless explicitly asked
2. **Use CSS custom properties** — Never hardcode colors; use the `:root` variables
3. **Maintain typography hierarchy** — Playfair Display for headings, IBM Plex Sans for body, IBM Plex Mono for data/labels
4. **Keep JavaScript minimal** — Vanilla JS only; no frameworks or libraries
5. **Content is in Spanish** — All visible text, comments in HTML content, and commit messages should be in Spanish
6. **Respect the document's professional tone** — This is a formal policy memorandum; maintain formal register in any content additions
7. **Test responsive behavior** — Any layout changes should work at desktop (>1200px), tablet (900px), and mobile (480px)
8. **Maintain print compatibility** — Check that `@media print` styles still work after layout changes
9. **Follow existing CSS comment patterns** — Use `/* ── SECTION NAME ── */` format for major CSS sections
10. **No external dependencies** — Beyond Google Fonts CDN, do not introduce external libraries or frameworks
