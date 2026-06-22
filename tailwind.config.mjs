/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx,vue,svelte}'],
  theme: {
    extend: {
      colors: {
        // TCM brand blue palette (BUILD-BRIEF §3)
        brand: {
          900: '#0a2540',
          700: '#0b3d91',
          600: '#1565d8',
          500: '#2f80ed',
          300: '#6fb1fc',
        },
        ink: '#0f172a',
        muted: '#64748b',
      },
      fontFamily: {
        // IBM Plex Sans Thai covers Thai + Latin; Inter for Latin headings/body.
        sans: [
          'Inter',
          'IBM Plex Sans Thai',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
        thai: [
          'IBM Plex Sans Thai',
          'Inter',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      maxWidth: {
        container: '1200px',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(135deg, #2f80ed, #6fb1fc)',
      },
      boxShadow: {
        card: '0 1px 3px rgba(15,23,42,0.08), 0 8px 24px rgba(15,23,42,0.06)',
        'card-hover': '0 12px 32px rgba(21,101,216,0.18)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s ease-out both',
      },
    },
  },
  plugins: [],
};
