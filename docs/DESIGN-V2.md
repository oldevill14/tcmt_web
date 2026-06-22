# TCM Website — DESIGN V2 (modern upgrade) brief

Goal: make the site look **cutting-edge / ล้ำสมัย**, fitting a company that **sells hardware
(IT infrastructure vendor & system integrator) AND develops software/websites**. Keep it static
(Astro), bilingual (th/en), fast, accessible. Do NOT break i18n routing or the GitHub Pages base path
(`/tcmt_web`, always via `withBase`/`localizePath`).

## Positioning to convey
TCM is BOTH:
1. **Hardware & Infrastructure** — networking, data center, servers, security, ISP, Video Wall, HVAC; authorized partner of global brands (Cisco, Dell, Oracle, Acer, ASUS, Lenovo, Fujitsu, Epson).
2. **Software & Web/Application Development** — make this visible (add a "Software & Web Development" service + reflect it in hero/about positioning). Company also resells/supplies hardware.

## Modern visual language (apply throughout)
- **Premium tech aesthetic**: deep navy (`brand-900 #0a2540`) base + **electric blue→cyan gradient** accent (`#2f80ed → #38bdf8`), subtle glow. Optional faint circuit/grid/dot texture in dark sections.
- **Hero**: bold, modern — animated/gradient-mesh or aurora background (CSS only, no heavy JS), large gradient-text headline conveying hardware+software, dual CTA, optional floating product/tech motif. Premium, not templatey.
- **Bento grid** for services/capabilities (asymmetric, modern) instead of plain equal cards.
- **Glassmorphism / elevated cards**: rounded-2xl, soft layered shadows, subtle gradient borders, hover lift + glow.
- **Micro-interactions**: CSS scroll-reveal, hover transitions, gradient-text, animated stat counters (CSS or tiny inline JS, progressive-enhanced).
- **Partner logos = real**: use `/logos/{cisco,dell,oracle,acer,asus,lenovo,fujitsu,epson}.svg` (already placed, real brand marks). Present as a clean **marquee / infinite strip**, **monochrome (grayscale + opacity) → full-color on hover**. Uniform sizing.
- **Company logo**: real TCM logo reference at `docs/design-reference/logo-tcm-real.png` (navy "TCM" + grey "TECHNOLOGY", small ®). Recreate a crisp **`public/logo-tcm.svg`** faithful to it (navy `#1c3f94`-ish + grey), use in Header + Footer (replace the plain text wordmark). Provide a light/inverse variant for dark footer if needed.
- **Type**: keep IBM Plex Sans Thai + Inter; tighten the scale, bigger headings, better rhythm.
- Refined spacing, dark premium section dividers, modern footer.

## REQUIRED FIXES (P0 — user-reported)
1. **Duplicate partners heading**: in `HomeSections.astro` the partners `SectionTitle` uses
   `eyebrow={t(lang,'clients.partners.title')}` AND `title={t(lang,'home.partners.title')}` — BOTH equal
   "พันธมิตรทางเทคโนโลยี". Fix so the eyebrow is a DISTINCT kicker (add a new `home.partners.eyebrow`
   string, e.g. TH "ความร่วมมือ" / EN "Partnership"). No section may show the same text as both eyebrow and title — audit ALL sections for this.
2. **Real logos in place** of placeholders — partners (above) + company logo SVG.

## Guardrails
- Build must stay green (`npm run build` exit 0), all th+en routes intact, Lighthouse ≥90.
- All copy via `ui.ts` / content collections — no hardcoded strings in components.
- Don't fabricate specific client metrics; keep claims credible.
