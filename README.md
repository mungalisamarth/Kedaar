# kedaar.ca

A playful, responsive single-page bio site for Kedaar Mungali — a five-year-old
Canadian author and the maker of *From Aurora to Zamboni: An ABC Journey Through Canada*.

## What's inside

```
site/
├── index.html            # The whole site, one page, four sections
├── styles.css            # Playful cartoon theme + responsive layout
├── script.js             # Scroll-reveal animations & subtle parallax
├── README.md
└── assets/
    ├── favicon.svg
    └── images/           # Optimized JPGs (~1.9 MB total)
```

## Sections

1. **Hero** — Big welcome, Kedaar's name, portrait with the book, primary CTA
2. **About Kedaar** — Four polaroid/circle cards covering his roots, hobbies, maker-spirit and Canadian-winter-kid energy, plus a fun-facts row
3. **The Book** — Cover art, blurb, six interior-page mini-spreads, and a candid reading photo
4. **Free Book Program & Press** — How the program works, how to sponsor, and a press list

A **floating "Buy the Book" button** is pinned to the bottom-right on every section
and links to the Maple Beaver product page. It auto-hides near the footer.

## Behaviour

- **Snap-scroll on desktop** (≥900px) — each section snaps into place like flipping pages
- **Free, smooth scroll on mobile** — with fade/slide-in reveals as elements enter the viewport
- **Reduced-motion respected** — animations soften for users with that preference set
- **Pure vanilla** — no build step, no bundler, no framework. Just open `index.html`.

## Deploying to GitHub Pages

1. Create a new repository (e.g. `kedaar-site`)
2. Upload the **contents** of this `site/` folder to the repo root
3. Settings → Pages → Source: `main` branch, root (`/`)
4. Point the `kedaar.ca` DNS at `<username>.github.io` and add a `CNAME` file
   containing `kedaar.ca`

That's it — no build step needed.

## Image credits

All photos provided by the family for use on this site. The book cover and
interior spreads are from *From Aurora to Zamboni* by Kedaar Mungali, published
via [Maple Beaver](https://maplebeaver.ca/products/canada-abc-book).

## Fonts

Loaded from Google Fonts: **Fredoka** (body & headings), **Patrick Hand**
(handwritten accents), **Caveat** (signature flourishes).
