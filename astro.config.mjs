// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

// Base path is overridable so we can switch to the custom domain later:
//   GitHub Pages (default): SITE_BASE unset  -> base '/tcmt_web'
//   Custom domain tcmtech.co.th: set SITE_BASE='/' + add public/CNAME
const base = process.env.SITE_BASE ?? '/tcmt_web';

export default defineConfig({
  site: 'https://oldevill14.github.io',
  base,
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'th',
    locales: ['th', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [
    tailwind({ applyBaseStyles: false }),
    sitemap({
      i18n: {
        defaultLocale: 'th',
        locales: {
          th: 'th-TH',
          en: 'en-US',
        },
      },
    }),
  ],
});
