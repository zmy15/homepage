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
├── public/404.html         # Custom 404 page (served via not_found_handling)
├── tailwind.config.js      # ★ Tokyo Night palette tokens
├── docs/CLOUDFLARE.md      # Deployment details + gotchas
└── wrangler.jsonc          # Cloudflare Workers config (assets.directory)
```

---

## Deploying to Cloudflare

This deploys as a **Cloudflare Worker with static assets**. The output directory is configured
in [`wrangler.jsonc`](wrangler.jsonc), **not** in the dashboard.

Connect the repo at **Workers & Pages → Create → Connect to Git**, then use:

| Setting | Value |
|---|---|
| Project name | `zmy15` |
| Build command | `pnpm run build` |
| Deploy command | `npx wrangler deploy` |
| Preview command | `npx wrangler preview` |

Every push to `main` redeploys automatically.

### Verify locally first

`wrangler dev` reproduces production behaviour, including the custom 404 page:

```bash
pnpm build
npx wrangler dev        # http://127.0.0.1:8788
```

### Manual deploy

```bash
pnpm build
npx wrangler deploy
```

### Custom domain

Workers project → **Settings → Domains & Routes → Add → Custom domain**.

**Full details and gotchas: [`docs/CLOUDFLARE.md`](docs/CLOUDFLARE.md)**

> ⚠️ `assets.directory` in `wrangler.jsonc` is the Workers equivalent of Pages'
> `pages_build_output_dir`. Using the Pages field name here would deploy an empty site.

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