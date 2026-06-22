# TCM Website — TANGERINE-STYLE restyle brief (V4)

The client saw v3 (dark premium-tech) and asked for a style like **tangerine.co.th**
(ref: tangerine.co.th/partner/google-cloud). DECISION (confirmed by Keng): adopt **Tangerine's
LIGHT / warm / flat-illustrated layout** but keep **TCM brand BLUE** as the single accent (NOT orange).

Reference screenshots: `docs/design-reference/ref-tangerine-home.png` + `ref-tangerine-partner.png`. STUDY THEM.

## The Tangerine look to replicate (with TCM blue instead of orange)
- **Light & airy**: white base + **warm off-white / soft cream section backgrounds** (e.g. #FBFAF7 / #F6F8FC), lots of whitespace. NO dark-navy page background. (Dark may be used ONLY for footer or one CTA band.)
- **Single strong accent = TCM blue** (`#1565d8`/`#2f80ed`). Use blue for: eyebrows (small UPPERCASE kicker like "ABOUT US"/"WHAT WE DO"), active pill tabs, primary buttons, links, CTA band, icon accents. Headings = dark navy/ink `#0f1f3d`.
- **Flat & friendly**: minimal/soft shadows, **rounded corners** (cards rounded-2xl, buttons & tabs = **rounded-full pills**), flat cards on white/cream, light hairline borders. NOT glassy, NOT glowing, NOT aurora.
- **Flat vector illustrations** (Tangerine's signature): friendly flat tech/people illustrations. CREATE clean flat SVG illustrations in-house in the TCM blue palette (+ warm amber/teal secondary tints) — hero illustration + 2–4 spot illustrations (e.g. team+servers+cloud, dashboard, network/security). Geometric, flat, modern-editorial; NOT photo-real, NOT clip-art. Put in `public/illustrations/` or as Astro components. Keep file sizes lean.
- **Pill tabs**: the Solutions-by-Sector tabs → Tangerine-style rounded-full pills (active = blue filled white text, inactive = white w/ light border). Keep ARIA/keyboard/no-JS behavior.
- **Flat line icons** for services in a clean **3-column grid** ("We provide a wide range of IT services" vibe) — simple stroke icons, blue accent.
- **Bold navy headings**, comfortable body, generous line-height. Thai = IBM Plex Sans Thai; Latin = Inter (keep) — or a slightly rounded geometric sans if cleaner.
- **CTA band**: solid TCM-blue (or blue gradient) background, white heading + **white rounded-full pill** button (like Tangerine's orange "Contact Us" band, but blue).
- **Header**: white, clean, TCM logo left, simple nav, TH/EN, **blue rounded-full "ติดต่อเรา / Contact Sales"** pill button.
- Client logo row + partner logos on white (keep real logos).

## Section flow (keep content, restyle to light/flat)
Hero (light, text-left + flat illustration-right, blue eyebrow) → trust/clients logo row → "What we do" services 3-col grid → Solutions by Sector (pill tabs) → capabilities/why-us → projects (case cards) → partners (authorized) → CTA band (blue) → footer.

## HARD KEEPS (do not regress)
- Static Astro, GitHub Pages base `/tcmt_web` (withBase/localizePath), **bilingual th/en parity**, build green.
- All copy via ui.ts/content (no hardcoded display strings). SVG icons only (no emoji).
- a11y: focus-visible rings, cursor-pointer on clickables, **44px touch targets**, **light-mode text contrast ≥4.5:1** (this matters MORE now on light bg — eyebrows/muted text must pass), prefers-reduced-motion, alt text, labels. Responsive 375/768/1024/1440.
- Keep: real TCM logo, real partner logos, Trust band, Solutions-by-Sector, Contact-Sales-primary, 8 services, 6 project cases, all pages.
- Accent stays BLUE — do NOT introduce orange as primary (warm tints OK as minor secondary in illustrations only). Still NO purple/pink.
