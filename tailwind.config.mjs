/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // TCM brand blue palette (DESIGN V4 — the single accent)
        brand: {
          900: '#0a2540',
          800: '#0c2f55',
          700: '#0b3d91',
          600: '#1565d8',
          500: '#2f80ed',
          400: '#4f9cf6',
          300: '#6fb1fc',
          200: '#a9d1ff',
          100: '#d7e6ff',
          50: '#eef5ff',
        },
        // Dark navy surfaces. In DESIGN V4 the page is LIGHT, so these are used
        // only on the intentional dark accents (footer / one CTA band) and on the
        // legacy dark sections phase-2 still owns (About/Services/Clients heroes)
        // until those internals are restyled to light. On-brand deep navy — NOT
        // the old near-black indigo, and never the page background.
        canvas: {
          950: '#0f1f3d', // deep navy (hero/dark band base)
          900: '#16264a', // raised dark surface
          850: '#1d3157', // dark card surface
        },
        // soft section backgrounds (so `bg-bg-soft` / `bg-bg-cream` resolve cleanly)
        bg: {
          soft: '#f6f8fc',
          cream: '#fbfaf7',
        },
        // the ONE allowed true-dark surface (footer / one CTA band)
        navy: {
          deep: '#0f1f3d',
          800: '#16264a',
          700: '#1d3157',
        },
        // accent names kept; cyan/sky now point at brand blue, teal/amber = tints
        accent: {
          blue: '#1565d8',
          cyan: '#2f80ed', // re-pointed to brand blue (no more electric cyan)
          teal: '#2bb6a3', // illustration tint only
          amber: '#f5a524', // illustration tint only
        },
        // faithful real-logo marks
        tcm: {
          navy: '#2a2a7a',
          grey: '#6b7488',
        },
        ink: '#0f1f3d', // navy ink for headings / strong text
        // muted body text — slate-600-ish, AA-safe on white + cream + soft.
        muted: '#51607a',
        line: '#e6ebf3',
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans Thai', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        thai: ['IBM Plex Sans Thai', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      fontSize: {
        // display scale (calmer tracking for the friendlier light look)
        'display-sm': ['2.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'display': ['3.25rem', { lineHeight: '1.06', letterSpacing: '-0.022em' }],
        'display-lg': ['4rem', { lineHeight: '1.04', letterSpacing: '-0.025em' }],
        'display-xl': ['4.75rem', { lineHeight: '1.0', letterSpacing: '-0.03em' }],
      },
      backgroundImage: {
        // FLATTENED — solid / same-hue blue ramps only (no cyan/teal mesh)
        'brand-gradient': 'linear-gradient(135deg, #1565d8, #2f80ed)',
        'accent-gradient': 'linear-gradient(135deg, #1565d8 0%, #2f80ed 100%)',
        'accent-gradient-soft': 'linear-gradient(135deg, #1565d8 0%, #2f80ed 100%)',
        // headline gradient -> flat navy->blue ink
        'text-gradient': 'linear-gradient(100deg, #0f1f3d 0%, #1565d8 100%)',
        'text-gradient-ink': 'linear-gradient(100deg, #0f1f3d 0%, #1565d8 100%)',
        // blue CTA band wash
        'cta-blue': 'linear-gradient(135deg, #0b3d91 0%, #1565d8 55%, #2f80ed 100%)',
        // faint hairline grid + dot textures — LIGHT (navy ink at low opacity)
        'grid-light':
          'linear-gradient(to right, rgba(15,31,61,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(15,31,61,0.05) 1px, transparent 1px)',
        'dot-light':
          'radial-gradient(rgba(15,31,61,0.06) 1px, transparent 1px)',
        // dark-surface textures (for the single navy footer/CTA band only)
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'dot-dark':
          'radial-gradient(rgba(255,255,255,0.08) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
        dot: '22px 22px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        glow: 'var(--shadow-glow)', // kept name; now a soft blue lift
        'glow-cyan': 'var(--shadow-glow)',
        pill: 'var(--shadow-pill)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(18px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'scale-in': {
          '0%': { opacity: '0', transform: 'scale(0.97)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        // kept names (referenced by legacy markup) — gentle, no aurora drift
        'glow-pulse': {
          '0%, 100%': { opacity: '0.7' },
          '50%': { opacity: '1' },
        },
        aurora: {
          '0%, 100%': { transform: 'none' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.7s ease-out both',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 38s linear infinite',
        float: 'float 7s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        aurora: 'none', // disabled in the light system
      },
    },
  },
  plugins: [],
};
