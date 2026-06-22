# TCM Technology — Corporate Website

Bilingual (Thai default / English) static corporate website for **TCM Technology Co., Ltd.**
Built with **Astro 5** + **Tailwind**, content via **Astro Content Collections**, editable
through **Decap CMS**, and deployed to **GitHub Pages** via **GitHub Actions**.

- **Live (project Pages):** https://oldevill14.github.io/tcmt_web/
- **Repo:** `oldevill14/tcmt_web`
- Full architecture: [`docs/BUILD-BRIEF.md`](docs/BUILD-BRIEF.md)

## Stack

| Concern        | Choice                                              |
| -------------- | --------------------------------------------------- |
| Framework      | Astro 5 (static output)                             |
| Styling        | Tailwind 3 (`@astrojs/tailwind`), tokens in CSS     |
| Content        | Astro Content Collections (`services`, `projects`)  |
| i18n           | Astro native — `th` default at `/`, `en` at `/en/`  |
| CMS            | Decap CMS (`/admin`), GitHub backend                |
| Contact form   | Web3Forms (static POST, honeypot anti-spam)         |
| Deploy         | GitHub Actions → GitHub Pages                       |
| Node           | 22 (see `.nvmrc`) · package manager: npm            |

## Getting started

```bash
nvm use            # Node 22
npm install
npm run dev        # http://localhost:4321/tcmt_web/
```

Other scripts:

```bash
npm run build      # static build to dist/
npm run preview    # serve the built dist/ locally
```

### Environment

Copy `.env.example` to `.env` and fill in the Web3Forms key:

```bash
cp .env.example .env
# PUBLIC_WEB3FORMS_KEY=...
```

## Project layout

```
src/
  components/      shared Astro components (Header, Footer, Seo, cards, ...)
  content/         content collections (services/, projects/) — <slug>.<locale>.md
  data/site.ts     company facts, services, clients, partners, stats
  i18n/ui.ts       UI string table (th + en) + helpers (t, getLang, withBase, ...)
  layouts/         BaseLayout.astro
  pages/           routes — th at root, en under /en/
  styles/          tokens.css + global.css
public/
  admin/           Decap CMS (index.html + config.yml)
  robots.txt, favicon.svg
.github/workflows/ deploy.yml (build + deploy to Pages)
oauth-worker/      Cloudflare Worker for Decap GitHub OAuth (optional)
```

## i18n / routing

- Thai (`th`) is the **default** locale → served at the root (no prefix).
- English (`en`) → served under `/en/`.
- Every internal link goes through helpers in `src/i18n/ui.ts` so the base path
  is always respected (never hardcode `/...` root links).

Add a new bilingual page:

| Locale | File                              | URL (project base) |
| ------ | --------------------------------- | ------------------ |
| Thai   | `src/pages/about.astro`           | `/tcmt_web/about`  |
| Eng    | `src/pages/en/about.astro`        | `/tcmt_web/en/about` |

Each page sets `<BaseLayout lang=... path="/about" title=... description=... />`.

## Content (CMS-editable)

Content lives in `src/content/<collection>/<slug>.<locale>.md` (e.g.
`services/networking.th.md`). Schemas are in `src/content/config.ts`.

## Deploying to GitHub Pages

1. Push to `main`. The `Deploy to GitHub Pages` workflow builds and deploys.
2. In **repo Settings → Pages**, set **Source = GitHub Actions** (one time).
3. Site is served at `https://oldevill14.github.io/tcmt_web/`.

### Switching to the custom domain `tcmtech.co.th`

1. Set the base to root: in the workflow's **Build** step add `SITE_BASE: '/'`
   (env), or build locally with `SITE_BASE=/ npm run build`.
2. Add `public/CNAME` containing `tcmtech.co.th`.
3. Update `public/admin/config.yml` `public_folder` from `/tcmt_web/uploads` to
   `/uploads`, and `robots.txt` sitemap URL to the new domain.
4. Point DNS at GitHub Pages and set the custom domain in repo Settings → Pages.

## CMS (Decap)

Visit `/admin` to edit content. Login requires the OAuth worker
([`oauth-worker/README.md`](oauth-worker/README.md)) — the **site builds/deploys
without it**; it only activates CMS login. For local editing without OAuth, run
`npx decap-server` (config has `local_backend: true`).

## Contact form (Web3Forms)

The contact form posts to Web3Forms (no backend). Get a free access key at
<https://web3forms.com>, set `PUBLIC_WEB3FORMS_KEY` in `.env` (and as a build env
in CI/Pages if needed). A honeypot field guards against spam.

## License

© 2017–2026 TCM Technology Co., Ltd. All rights reserved.
