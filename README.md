# kedaar.ca

A playful, responsive single-page bio site for Kedaar Mungali — a five-year-old
Canadian author and the maker of *From Aurora to Zamboni: An ABC Journey Through Canada*.

## What's inside

```
site/
├── index.html            # The whole site, one page, four sections
├── styles.css            # Playful cartoon theme + responsive layout
├── script.js             # Scroll-reveal animations & subtle parallax
├── robots.txt            # SEO — points crawlers at the sitemap
├── sitemap.xml           # SEO — single-URL sitemap
├── README.md
└── assets/
    ├── favicon.svg
    └── images/           # Optimized JPGs + OG card (~1.9 MB total)
        └── og-image.jpg  # 1200×630 social preview card
```

## SEO & social sharing

The site ships with:

- **Open Graph** tags (`og:title`, `og:description`, `og:image` 1200×630, `og:locale en_CA`) so WhatsApp / Facebook / LinkedIn / Slack render a rich preview
- **Twitter Card** (`summary_large_image`) for the same preview on Twitter/X
- **JSON-LD structured data** with three linked nodes: `WebSite`, `Person` (Kedaar), and `Book` (From Aurora to Zamboni with offer link to Maple Beaver) — helps Google understand the site is an author bio for a published children's book
- **Canonical URL**, `robots.txt`, and `sitemap.xml` for clean indexing
- **Descriptive alt text** on every image

After deploying, test the previews with:
- WhatsApp: just share the URL in any chat
- Facebook: https://developers.facebook.com/tools/debug/?q=https://kedaar.ca/
- Twitter/X: https://cards-dev.twitter.com/validator
- LinkedIn: https://www.linkedin.com/post-inspector/
- Google Rich Results: https://search.google.com/test/rich-results?url=https://kedaar.ca/

If WhatsApp still shows no preview after deploying, clear its cache by adding
`?v=2` to the URL once — WhatsApp caches OG data aggressively.

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
