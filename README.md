<div align="center">

# zmy15 — Personal Homepage

**A single-page personal site built with Vite · React · Tailwind CSS, in the Tokyo Night palette.**

[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev)
[![React](https://img.shields.io/badge/React-18-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev)
[![Tailwind](https://img.shields.io/badge/Tailwind-3-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)
[![Cloudflare Pages](https://img.shields.io/badge/Cloudflare-Pages-F38020?style=flat-square&logo=cloudflare&logoColor=white)](https://pages.cloudflare.com)

</div>

---

## Quick start

```bash
pnpm install
pnpm dev          # http://localhost:5173
pnpm build        # → dist/
pnpm preview      # preview the production build
```

Requires **Node 18+** (tested on Node 20/24). `pnpm`, `npm`, or `yarn` all work.

---

## Editing content

**All text lives in one file: [`src/data.js`](src/data.js).** You do not need to touch any
component to update the site.

| Export | Controls |
|---|---|
| `profile` | Name, avatar, tagline, intro lines, rotating hero words |
| `socials` | Contact links (GitHub, email, releases) |
| `stats` | The four numbers in the hero strip |
| `projects` | The three featured project cards — highlights, stack, badges |
| `techGroups` | Tech-stack chips, grouped by category |
| `otherProjects` | The compact "More on GitHub" grid |
| `navItems` | Top navigation links |

Example — adding a project highlight:

```js
// src/data.js
{
  name: 'Interview Agent',
  highlights: [
    'Dual mode — practice as the interviewer, or as the candidate',
    'Your new highlight goes here',
  ],
  // ...
}
```

---

## Project structure

```
├── index.html              # HTML shell, fonts, SEO + Open Graph meta
├── src/
│   ├── main.jsx            # React entry
│   ├── App.jsx             # Section composition
│   ├── data.js             # ★ All site content
│   ├── index.css           # Tailwind layers + component classes
│   └── components/
│       ├── Navbar.jsx      # Sticky nav with mobile menu
│       ├── Hero.jsx        # Typewriter intro, stats strip
│       ├── Projects.jsx    # Featured project cards
│       ├── Stack.jsx       # Tech stack + other projects
│       ├── About.jsx       # Bio, terminal card, contact, footer
│       └── Icon.jsx        # Inline SVG icons (no icon library)
├── public/404.html         # Cloudflare Pages 404 page
├── tailwind.config.js      # ★ Tokyo Night palette tokens
└── wrangler.jsonc          # Cloudflare config
```

---

## Deploying to Cloudflare Pages

### Option A — Git integration (recommended)

Push this repo to GitHub, then in the Cloudflare dashboard:

1. **Workers & Pages → Create → Pages → Connect to Git**
2. Select the repository
3. Build settings:

   | Setting | Value |
   |---|---|
   | Framework preset | `Vite` |
   | Build command | `pnpm build` (or `npm run build`) |
   | Build output directory | `dist` |
   | Node version | `20` (set `NODE_VERSION` env var if needed) |

4. **Save and Deploy** — every push to `main` redeploys automatically.

### Option B — Direct upload with Wrangler

```bash
pnpm build
npx wrangler pages deploy dist --project-name=zmy15-homepage
```

### Custom domain

In the Pages project: **Custom domains → Set up a domain**. If your DNS is already on
Cloudflare, the CNAME is created for you.

---

## Design notes

- **Tokyo Night palette** — the `tk.*` color tokens in
  [`tailwind.config.js`](tailwind.config.js) mirror the theme used on the GitHub profile
  cards, so the site and the profile README stay visually consistent.
- **No component library** — icons are hand-written inline SVG, so the bundle stays small
  (~54 KB gzipped JS, ~5 KB gzipped CSS).
- **Accessibility** — semantic landmarks, `aria-label` on icon-only controls,
  visible focus states, and a `prefers-reduced-motion` block that disables animation.
- **Responsive** — single-column below `lg`, two-column project grid at `lg` and above,
  with the first project spanning full width.

---

## License

MIT © zmy15