/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // TCM brand blue palette (DESIGN V2 — extended)
        brand: {
          900: '#0a2540',
          800: '#0c2f55',
          700: '#0b3d91',
          600: '#1565d8',
          500: '#2f80ed',
          400: '#4f9cf6',
          300: '#6fb1fc',
          200: '#a9d1ff',
        },
        // deep indigo-navy canvas for dark sections
        canvas: {
          950: '#050b1a',
          900: '#0a1326',
          850: '#0e1a33',
        },
        // electric accent (blue -> cyan -> teal)
        accent: {
          blue: '#2f80ed',
          cyan: '#38bdf8',
          teal: '#5eead4',
        },
        // faithful real-logo marks
        tcm: {
          navy: '#2a2a7a',
          grey: '#6b7488',
        },
        ink: '#0f172a',
        muted: '#64748b',
      },
      fontFamily: {
        sans: ['Inter', 'IBM Plex Sans Thai', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        thai: ['IBM Plex Sans Thai', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        container: '1200px',
      },
      fontSize: {
        // refined display scale (tighter rhythm, bigger headings)
        'display-sm': ['2.5rem', { lineHeight: '1.08', letterSpacing: '-0.02em' }],
        'display': ['3.25rem', { lineHeight: '1.05', letterSpacing: '-0.025em' }],
        'display-lg': ['4.25rem', { lineHeight: '1.02', letterSpacing: '-0.03em' }],
        'display-xl': ['5.25rem', { lineHeight: '0.98', letterSpacing: '-0.035em' }],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2f80ed, #6fb1fc)',
        'accent-gradient': 'linear-gradient(120deg, #2f80ed 0%, #38bdf8 55%, #5eead4 100%)',
        'accent-gradient-soft': 'linear-gradient(120deg, #2f80ed 0%, #38bdf8 100%)',
        'text-gradient': 'linear-gradient(100deg, #ffffff 0%, #a9d1ff 38%, #38bdf8 100%)',
        'text-gradient-ink': 'linear-gradient(100deg, #0a2540 0%, #1565d8 55%, #2f80ed 100%)',
        // faint grid + dot textures for dark sections
        'grid-dark':
          'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
        'dot-dark':
          'radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)',
      },
      backgroundSize: {
        grid: '56px 56px',
        dot: '22px 22px',
      },
      boxShadow: {
        card: 'var(--shadow-card)',
        'card-hover': 'var(--shadow-card-hover)',
        glow: 'var(--shadow-glow)',
        'glow-cyan': '0 0 40px -8px rgba(56,189,248,0.55)',
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
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        aurora: {
          '0%, 100%': { transform: 'translate3d(0,0,0) scale(1)' },
          '33%': { transform: 'translate3d(4%,-3%,0) scale(1.08)' },
          '66%': { transform: 'translate3d(-3%,3%,0) scale(0.95)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'glow-pulse': {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s cubic-bezier(0.16,1,0.3,1) both',
        'fade-in': 'fade-in 0.8s ease-out both',
        'scale-in': 'scale-in 0.6s cubic-bezier(0.16,1,0.3,1) both',
        marquee: 'marquee 38s linear infinite',
        aurora: 'aurora 18s ease-in-out infinite',
        float: 'float 6s ease-in-out infinite',
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
