# TCM Technology — Corporate Website BUILD BRIEF (authoritative)

This is the single source of truth for the build. Every agent reads this. Do NOT deviate from the
architecture or routing without reason. Design reference images are in `docs/design-reference/`
(figma-overview.png = all frames, figma-service-cards.png = service card style). Full analysis in
`docs/analysis-and-plan.md`.

---

## 0. Hard constraints (non-negotiable)

- **Deploy target = GitHub Pages** → output MUST be 100% static (no SSR, no server runtime, no API routes).
- **Admin-editable content** → company admins edit content after launch via a **Git-based CMS (Decap CMS)** at `/admin` (commits Markdown to the repo → Actions rebuild → Pages redeploy). No database.
- **Bilingual TH + EN** from day one. Thai (`th`) is the DEFAULT locale; English (`en`) is secondary. Every page exists in both.
- **Private repo** (`oldevill14/tcmt_web`).
- Contact form has **no backend** → use **Web3Forms** (static POST, free) with honeypot anti-spam. Access key via `PUBLIC_WEB3FORMS_KEY` env (placeholder ok; document it).

## 1. Stack

- **Astro 5** (static, `output` default static) + **@astrojs/tailwind** (Tailwind 3) + **@astrojs/sitemap**.
- **TypeScript**, content via **Astro Content Collections** (Markdown/MDX, zod schemas).
- **i18n**: Astro native i18n. Config: `defaultLocale: 'th'`, `locales: ['th','en']`, `routing: { prefixDefaultLocale: false }` → Thai at `/`, English at `/en/`. UI strings in `src/i18n/ui.ts`.
- **CMS**: Decap CMS (`public/admin/index.html` + `public/admin/config.yml`), GitHub backend, branch `main`. OAuth via a Cloudflare Worker (scaffold in `oauth-worker/`, documented in README — site builds/deploys without it; CMS login activates once worker + GitHub OAuth app are set).
- **Package manager**: npm. **Node 22** (`.nvmrc` = `22`).
- **No** React/Vue/Svelte islands unless strictly needed (keep it static + fast). Plain Astro components.

## 2. Repo / site / base-path config

- Owner/repo: `oldevill14/tcmt_web`. Initial Pages URL: `https://oldevill14.github.io/tcmt_web/`.
- `astro.config.mjs`: `site: 'https://oldevill14.github.io'`, `base: '/tcmt_web'`.
  - Make base overridable: `base: process.env.SITE_BASE ?? '/tcmt_web'` so switching to custom domain `tcmtech.co.th` later = set `SITE_BASE=/` + add `public/CNAME`. Document this in README.
- **All internal links/asset paths MUST respect `import.meta.env.BASE_URL`** (use a `withBase()` helper or Astro's built-in). Never hardcode `/` root links — they break on the project base path.

## 3. Design system (from Figma + brand)

- **Brand**: corporate **blue** (TCM "blue" theme). Palette:
  - `brand-900 #0a2540`, `brand-700 #0b3d91`, `brand-600 #1565d8`, `brand-500 #2f80ed`, `brand-300 #6fb1fc`, gradient hero/cards = `linear-gradient(135deg,#2f80ed,#6fb1fc)`.
  - neutrals: slate/grey scale; `bg #ffffff`, `ink #0f172a`, muted `#64748b`.
- **Hero**: dark navy background (`brand-900`) with "TCM TECHNOLOGY" wordmark, subtle tech imagery/gradient. Premium, enterprise feel.
- **Service cards**: rounded-2xl, blue gradient or white card w/ icon, hover lift. (See figma-service-cards.png.)
- **Fonts**: Thai = **IBM Plex Sans Thai** (or Noto Sans Thai); Latin = **Inter**. Load via fontsource or Google Fonts with `display=swap`. Headings semibold/bold.
- Layout: generous whitespace, max-w container ~1200px, mobile-first responsive, dark section dividers. WCAG AA contrast. Subtle scroll reveal ok (CSS only, no heavy JS).
- Reusable components: `Header` (sticky, logo + nav + LangSwitcher), `Footer`, `Button`, `Card`, `ServiceCard`, `SectionTitle`, `LogoGrid`, `LangSwitcher`, `Seo` (head: title/description/OG/hreflang/canonical/schema.org Organization).

## 4. Information Architecture (routes, ×2 locales)

Thai (no prefix) + English (`/en` prefix):
```
/                     Home
/about                About (history since 1998, vision, mission, why-us, stats)
/services             Services overview (grid)
/services/[slug]      Service detail (networking, data-center, security, isp, it-infrastructure, av-videowall, hvac)
/projects             Portfolio / works (filter by sector)
/projects/[slug]      Case page per client
/clients              Clients & Partners (logo grids + blurb)
/contact              Contact (Web3Forms form + address + map embed + phone/email)
/privacy-policy       Privacy policy (PDPA-aligned)
```
Plus `/en/...` equivalents. 404 page bilingual.

## 5. Content collections (CMS-editable) — `src/content/`

Define zod schemas in `src/content/config.ts`. Each entry has BOTH `th` and `en` (either separate files per locale, e.g. `services/networking.th.md` + `.en.md`, OR fields). **Use per-locale files** convention: `<collection>/<slug>.<locale>.md`.

- `services/` — title, slug, icon, summary, body, order
- `projects/` — title, client, sector (gov/edu/private), year, slug, cover image, summary, body, tags
- `clients/` — name, logo, url, sector  (data list; can be JSON in `src/data/`)
- `partners/` — name, logo, url
- `pages/` — singletons: home (hero copy, stats), about, contact info, site settings (company name, address, phone, email, socials)

## 6. REAL CONTENT (use this — do not invent company facts; fix old-site Thai typos; write professional EN)

**Company**: บริษัท ทีซีเอ็ม เทคโนโลยี จำกัด — TCM Technology Co., Ltd.
**Founded**: พ.ศ. 2541 (1998) — 25+ years.
**Business**: System Integrator (SI) — ที่ปรึกษา ออกแบบ ติดตั้ง อบรม และบำรุงรักษาระบบไอทีแบบครบวงจร ("ผู้รับเหมาระบบไอทีครบวงจร" / end-to-end IT solutions).
**Slogan**: "Where Your Potential Unleashed" · ค่านิยมทีม: "Professional & Friendly".
**Vision**: ก้าวสู่การเป็นบริษัทชั้นนำด้านระบบไอทีแบบครบวงจร และมุ่งพัฒนานวัตกรรมเพื่ออนาคต.
**Mission**: สร้างความพึงพอใจด้วยสินค้าและบริการที่ดีให้ลูกค้า · พัฒนาบุคลากรให้มีศักยภาพต่อเนื่อง · สร้างผลตอบแทนที่คุ้มค่าแก่ผู้ถือหุ้น · คืนกำไรสู่สังคม.
**About (clean Thai, fix typos)**: บริษัท ทีซีเอ็ม เทคโนโลยี จำกัด และบริษัทในเครือ ให้บริการตั้งแต่ปี 2541 ในฐานะ System Integrator (SI) ให้คำปรึกษาและวางระบบไอทีครบวงจร ทั้งการออกแบบและติดตั้งระบบคอมพิวเตอร์ ระบบเครือข่าย และระบบโปรแกรมประยุกต์ ได้รับความไว้วางใจจากลูกค้าภาครัฐ สถาบันการศึกษา และเอกชนชั้นนำ ด้วยทีมงานที่มีประสบการณ์และความเชี่ยวชาญมากกว่า 25 ปี.

**Services** (slug — TH — EN):
- networking — เน็ตเวิร์ก/ระบบเครือข่าย — Networking & Consulting
- data-center — ดาต้าเซ็นเตอร์ — Data Center
- security — ความปลอดภัยระบบสารสนเทศ — IT Security / Protection
- isp — อินเทอร์เน็ตความเร็วสูง (ISP) — High-speed Internet (ISP)
- it-infrastructure — โครงสร้างพื้นฐานไอที (LAN/Server) — IT Infrastructure (LAN/Server)
- av-videowall — ระบบจอแสดงผล/Video Wall — Video Wall & Display Systems
- hvac — ระบบปรับอากาศ — Air Conditioning (HVAC) Systems

**Clients (government — real, from Figma case pages)**: กระทรวงแรงงาน (Ministry of Labour) · กรมการจัดหางาน (Dept. of Employment) · กรมพัฒนาฝีมือแรงงาน (Dept. of Skill Development) · สำนักงานประกันสังคม (Social Security Office) · กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม / อว. (MHESI) · GISTDA (สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ). Also serves education + leading private firms. (Use neutral placeholder logos if real vector unavailable; mark TODO.)

**Partners (tech)**: Cisco, Dell, Oracle, Acer, ASUS, Lenovo, Fujitsu, Epson. (placeholder logos ok; TODO real.)

**Contact**: TCM Technology Co., Ltd. — ชั้น 22 อาคาร CTI Tower, 191/40 ถนนรัชดาภิเษก แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110 · โทร 02-661-8884 · อีเมล tcmtech@tcmtech.co.th · Webmail: https://webmail.tcmtech.co.th · Google Maps embed for CTI Tower.
**Footer**: © 2017–2026 TCM Technology Co., Ltd. All rights reserved.

## 7. SEO / quality bars

- `<title>`, meta description, canonical, OG/Twitter, **hreflang** th/en alternates, JSON-LD `Organization` + `LocalBusiness`.
- `@astrojs/sitemap`, `robots.txt`.
- Lighthouse target ≥ 95 perf/SEO/best-practices, ≥ 90 a11y. No layout shift. Images lazy + sized.
- All text from collections/i18n (no hardcoded copy in components).

## 8. CI/CD — `.github/workflows/deploy.yml`

GitHub Actions: on push to `main` → setup-node 22 → `npm ci` → `npm run build` → `actions/upload-pages-artifact` (dist) → `actions/deploy-pages`. Permissions: `pages: write`, `id-token: write`. Concurrency group. Document enabling Pages → Source = GitHub Actions in repo settings.

## 9. File-ownership rules for parallel agents (avoid collisions)

- ONLY the Foundation phase creates/edits: `package.json`, `astro.config.mjs`, `tailwind.config.*`, `tsconfig.json`, `.nvmrc`, `.gitignore`, `src/content/config.ts`, `src/i18n/**`, `src/layouts/**`, `src/styles/**`, `src/components/**` (base set), `public/admin/**`, `.github/**`, `oauth-worker/**`, `README.md`.
- Phase-2 agents create ONLY their assigned page/content files (disjoint paths). They MUST NOT add npm deps, edit config, or touch another agent's files. If a shared component is missing, note it for the verify phase — do not edit config.
- Run `npm install` / `npm run build` ONLY in the verify phase.
