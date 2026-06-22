// TCM Technology — i18n UI string table + helpers.
// Thai (`th`) is the default locale (served at `/`); English (`en`) is at `/en/`.
// ALL static UI copy lives here. Components must read strings via `t(lang, key)`
// and must NOT hardcode display strings.

export const defaultLang = 'th' as const;
export const locales = ['th', 'en'] as const;

export type Lang = (typeof locales)[number];

/**
 * The UI string dictionary.
 * Keys are flat, dot-namespaced strings. Both locales MUST define the same keys.
 */
export const ui = {
  th: {
    // --- nav ---
    'nav.home': 'หน้าแรก',
    'nav.about': 'เกี่ยวกับเรา',
    'nav.services': 'บริการ',
    'nav.projects': 'ผลงาน',
    'nav.clients': 'ลูกค้าและพันธมิตร',
    'nav.contact': 'ติดต่อเรา',

    // --- common buttons ---
    'btn.learnMore': 'ดูเพิ่มเติม',
    'btn.contactUs': 'ติดต่อเรา',
    'btn.viewAll': 'ดูทั้งหมด',
    'btn.sendMessage': 'ส่งข้อความ',
    'btn.getQuote': 'ขอใบเสนอราคา',
    'btn.viewServices': 'ดูบริการทั้งหมด',
    'btn.backHome': 'กลับสู่หน้าแรก',

    // --- home ---
    'home.hero.eyebrow': 'System Integrator ครบวงจร',
    'home.hero.title': 'TCM TECHNOLOGY',
    'home.hero.subtitle':
      'ที่ปรึกษา ออกแบบ ติดตั้ง และบำรุงรักษาระบบไอทีแบบครบวงจร — ไว้วางใจโดยหน่วยงานภาครัฐ สถาบันการศึกษา และองค์กรเอกชนชั้นนำ มากกว่า 25 ปี',
    'home.hero.cta': 'ปรึกษาโครงการของคุณ',
    'home.hero.ctaSecondary': 'ดูบริการของเรา',
    'home.services.title': 'บริการของเรา',
    'home.services.subtitle':
      'โซลูชันไอทีและระบบงานครบวงจร ตั้งแต่ออกแบบจนถึงบำรุงรักษา',
    'home.clients.title': 'ลูกค้าที่ไว้วางใจเรา',
    'home.clients.subtitle': 'หน่วยงานภาครัฐและองค์กรชั้นนำเลือกใช้บริการของเรา',
    'home.partners.title': 'พันธมิตรทางเทคโนโลยี',
    'home.partners.subtitle': 'ทำงานร่วมกับแบรนด์เทคโนโลยีระดับโลก',
    'home.stats.title': 'ตัวเลขที่บอกความน่าเชื่อถือ',
    'home.cta.title': 'พร้อมยกระดับระบบไอทีขององค์กรคุณแล้วหรือยัง?',
    'home.cta.subtitle':
      'ปรึกษาทีมผู้เชี่ยวชาญของเราวันนี้ เพื่อออกแบบโซลูชันที่เหมาะกับองค์กรของคุณ',

    // --- stats (labels) ---
    'stats.years': 'ปีของประสบการณ์',
    'stats.govClients': 'หน่วยงานภาครัฐ',
    'stats.projects': 'โครงการที่ส่งมอบ',
    'stats.support': 'ดูแลหลังการขาย',

    // --- about ---
    'about.title': 'เกี่ยวกับเรา',
    'about.subtitle': 'ผู้เชี่ยวชาญด้านระบบไอทีครบวงจร ตั้งแต่ปี 2541',
    'about.intro':
      'บริษัท ทีซีเอ็ม เทคโนโลยี จำกัด และบริษัทในเครือ ให้บริการตั้งแต่ปี 2541 ในฐานะ System Integrator (SI) ให้คำปรึกษาและวางระบบไอทีครบวงจร ทั้งการออกแบบและติดตั้งระบบคอมพิวเตอร์ ระบบเครือข่าย และระบบโปรแกรมประยุกต์ ได้รับความไว้วางใจจากลูกค้าภาครัฐ สถาบันการศึกษา และเอกชนชั้นนำ ด้วยทีมงานที่มีประสบการณ์และความเชี่ยวชาญมากกว่า 25 ปี',
    'about.vision.title': 'วิสัยทัศน์',
    'about.vision.body':
      'ก้าวสู่การเป็นบริษัทชั้นนำด้านระบบไอทีแบบครบวงจร และมุ่งพัฒนานวัตกรรมเพื่ออนาคต',
    'about.mission.title': 'พันธกิจ',
    'about.mission.body':
      'สร้างความพึงพอใจด้วยสินค้าและบริการที่ดีให้ลูกค้า · พัฒนาบุคลากรให้มีศักยภาพต่อเนื่อง · สร้างผลตอบแทนที่คุ้มค่าแก่ผู้ถือหุ้น · คืนกำไรสู่สังคม',
    'about.slogan': 'Where Your Potential Unleashed',
    'about.values': 'Professional & Friendly',
    'about.whyUs.title': 'ทำไมต้องเลือกเรา',

    // --- services ---
    'services.title': 'บริการของเรา',
    'services.subtitle':
      'โซลูชันไอทีและระบบงานครบวงจร ตั้งแต่ออกแบบ ติดตั้ง อบรม จนถึงบำรุงรักษา',

    // --- projects ---
    'projects.title': 'ผลงานของเรา',
    'projects.subtitle': 'โครงการที่เราภาคภูมิใจ ส่งมอบให้หน่วยงานชั้นนำ',
    'projects.empty': 'เนื้อหาผลงานกำลังจัดเตรียม กรุณากลับมาอีกครั้งเร็วๆ นี้',
    'projects.filter.all': 'ทั้งหมด',
    'projects.filter.gov': 'ภาครัฐ',
    'projects.filter.edu': 'การศึกษา',
    'projects.filter.private': 'เอกชน',
    'projects.client': 'ลูกค้า',
    'projects.year': 'ปี',
    'projects.sector': 'ภาคส่วน',

    // --- clients ---
    'clients.title': 'ลูกค้าและพันธมิตร',
    'clients.subtitle':
      'ได้รับความไว้วางใจจากหน่วยงานภาครัฐ สถาบันการศึกษา และองค์กรเอกชนชั้นนำ',
    'clients.gov.title': 'ลูกค้าภาครัฐ',
    'clients.partners.title': 'พันธมิตรทางเทคโนโลยี',

    // --- contact ---
    'contact.title': 'ติดต่อเรา',
    'contact.subtitle':
      'พร้อมให้คำปรึกษาและตอบทุกคำถามเกี่ยวกับโครงการของคุณ',
    'contact.form.name': 'ชื่อ-นามสกุล',
    'contact.form.email': 'อีเมล',
    'contact.form.phone': 'เบอร์โทรศัพท์',
    'contact.form.company': 'องค์กร/บริษัท',
    'contact.form.subject': 'หัวข้อ',
    'contact.form.message': 'ข้อความ',
    'contact.form.submit': 'ส่งข้อความ',
    'contact.form.success': 'ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุด',
    'contact.form.error': 'เกิดข้อผิดพลาดในการส่ง กรุณาลองอีกครั้ง',
    'contact.info.title': 'ข้อมูลติดต่อ',
    'contact.info.address': 'ที่อยู่',
    'contact.info.phone': 'โทรศัพท์',
    'contact.info.email': 'อีเมล',
    'contact.info.webmail': 'เว็บเมล',
    'contact.info.hours': 'เวลาทำการ',
    'contact.info.hoursValue': 'จันทร์–ศุกร์ 08:30–17:30 น.',

    // --- privacy policy ---
    'privacy.title': 'นโยบายความเป็นส่วนตัว',
    'privacy.subtitle': 'TCM Technology ให้ความสำคัญกับการปกป้องข้อมูลส่วนบุคคลของท่าน',

    // --- footer ---
    'footer.tagline': 'ผู้เชี่ยวชาญระบบไอทีครบวงจร ตั้งแต่ปี 2541',
    'footer.nav.title': 'เมนู',
    'footer.services.title': 'บริการ',
    'footer.contact.title': 'ติดต่อ',
    'footer.privacy': 'นโยบายความเป็นส่วนตัว',
    'footer.rights': 'สงวนลิขสิทธิ์',

    // --- 404 ---
    '404.title': 'ไม่พบหน้าที่คุณค้นหา',
    '404.subtitle': 'หน้าที่คุณต้องการอาจถูกย้ายหรือไม่มีอยู่แล้ว',

    // --- a11y / misc ---
    'a11y.skipToContent': 'ข้ามไปยังเนื้อหาหลัก',
    'a11y.langSwitch': 'เปลี่ยนภาษา',
    'a11y.openMenu': 'เปิดเมนู',
    'a11y.closeMenu': 'ปิดเมนู',
    'lang.current': 'ไทย',
    'lang.other': 'English',
  },

  en: {
    // --- nav ---
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.services': 'Services',
    'nav.projects': 'Projects',
    'nav.clients': 'Clients & Partners',
    'nav.contact': 'Contact',

    // --- common buttons ---
    'btn.learnMore': 'Learn more',
    'btn.contactUs': 'Contact us',
    'btn.viewAll': 'View all',
    'btn.sendMessage': 'Send message',
    'btn.getQuote': 'Get a quote',
    'btn.viewServices': 'View all services',
    'btn.backHome': 'Back to home',

    // --- home ---
    'home.hero.eyebrow': 'End-to-end System Integrator',
    'home.hero.title': 'TCM TECHNOLOGY',
    'home.hero.subtitle':
      'Consulting, design, installation and maintenance of end-to-end IT systems — trusted by government agencies, educational institutions and leading enterprises for over 25 years.',
    'home.hero.cta': 'Discuss your project',
    'home.hero.ctaSecondary': 'Explore our services',
    'home.services.title': 'Our Services',
    'home.services.subtitle':
      'End-to-end IT and systems solutions — from design to maintenance.',
    'home.clients.title': 'Trusted by Leading Organizations',
    'home.clients.subtitle':
      'Government agencies and leading institutions rely on our expertise.',
    'home.partners.title': 'Technology Partners',
    'home.partners.subtitle': 'Working with world-class technology brands.',
    'home.stats.title': 'A Track Record You Can Trust',
    'home.cta.title': 'Ready to elevate your IT infrastructure?',
    'home.cta.subtitle':
      'Talk to our specialists today and design a solution tailored to your organization.',

    // --- stats (labels) ---
    'stats.years': 'Years of experience',
    'stats.govClients': 'Government agencies',
    'stats.projects': 'Projects delivered',
    'stats.support': 'After-sales support',

    // --- about ---
    'about.title': 'About Us',
    'about.subtitle': 'End-to-end IT systems specialists since 1998',
    'about.intro':
      'TCM Technology Co., Ltd. and its affiliates have served clients since 1998 as a System Integrator (SI), providing consulting and end-to-end IT system delivery — from the design and installation of computer systems and networks to application software. We are trusted by government agencies, educational institutions and leading private enterprises, backed by a team with over 25 years of experience and expertise.',
    'about.vision.title': 'Vision',
    'about.vision.body':
      'To become a leading provider of end-to-end IT systems, driven by innovation for the future.',
    'about.mission.title': 'Mission',
    'about.mission.body':
      'Deliver satisfaction through quality products and services · continuously develop our people · create worthwhile returns for shareholders · give back to society.',
    'about.slogan': 'Where Your Potential Unleashed',
    'about.values': 'Professional & Friendly',
    'about.whyUs.title': 'Why Choose Us',

    // --- services ---
    'services.title': 'Our Services',
    'services.subtitle':
      'End-to-end IT and systems solutions — from design and installation to training and maintenance.',

    // --- projects ---
    'projects.title': 'Our Projects',
    'projects.subtitle':
      'Projects we are proud of, delivered for leading organizations.',
    'projects.empty': 'Project content is being prepared. Please check back soon.',
    'projects.filter.all': 'All',
    'projects.filter.gov': 'Government',
    'projects.filter.edu': 'Education',
    'projects.filter.private': 'Private',
    'projects.client': 'Client',
    'projects.year': 'Year',
    'projects.sector': 'Sector',

    // --- clients ---
    'clients.title': 'Clients & Partners',
    'clients.subtitle':
      'Trusted by government agencies, educational institutions and leading private enterprises.',
    'clients.gov.title': 'Government Clients',
    'clients.partners.title': 'Technology Partners',

    // --- contact ---
    'contact.title': 'Contact Us',
    'contact.subtitle':
      'We are ready to advise and answer any question about your project.',
    'contact.form.name': 'Full name',
    'contact.form.email': 'Email',
    'contact.form.phone': 'Phone',
    'contact.form.company': 'Company / Organization',
    'contact.form.subject': 'Subject',
    'contact.form.message': 'Message',
    'contact.form.submit': 'Send message',
    'contact.form.success':
      'Your message has been sent. We will get back to you as soon as possible.',
    'contact.form.error': 'Something went wrong while sending. Please try again.',
    'contact.info.title': 'Contact Information',
    'contact.info.address': 'Address',
    'contact.info.phone': 'Phone',
    'contact.info.email': 'Email',
    'contact.info.webmail': 'Webmail',
    'contact.info.hours': 'Business hours',
    'contact.info.hoursValue': 'Mon–Fri, 08:30–17:30',

    // --- privacy policy ---
    'privacy.title': 'Privacy Policy',
    'privacy.subtitle': 'TCM Technology is committed to protecting your personal data.',

    // --- footer ---
    'footer.tagline': 'End-to-end IT systems specialists since 1998',
    'footer.nav.title': 'Menu',
    'footer.services.title': 'Services',
    'footer.contact.title': 'Contact',
    'footer.privacy': 'Privacy Policy',
    'footer.rights': 'All rights reserved',

    // --- 404 ---
    '404.title': 'Page not found',
    '404.subtitle': 'The page you are looking for may have moved or no longer exists.',

    // --- a11y / misc ---
    'a11y.skipToContent': 'Skip to main content',
    'a11y.langSwitch': 'Switch language',
    'a11y.openMenu': 'Open menu',
    'a11y.closeMenu': 'Close menu',
    'lang.current': 'English',
    'lang.other': 'ไทย',
  },
} as const;

/** Union of every valid UI key (both locales share the same keys). */
export type UIKey = keyof (typeof ui)['th'];

/**
 * Resolve the active language from a URL.
 * `/en` or `/en/...` -> 'en'; anything else (incl. the base path) -> 'th' (default).
 * Works regardless of the configured `base` path.
 */
export function getLang(url: URL): Lang {
  const segments = url.pathname.split('/').filter(Boolean);
  // segments may start with the base-path chunk (e.g. 'tcmt_web'); scan for a locale.
  for (const seg of segments) {
    if (seg === 'en') return 'en';
    if (seg === 'th') return 'th';
  }
  return defaultLang;
}

/** Translate a key for a given language. Falls back to the default locale, then the key itself. */
export function t(lang: Lang, key: UIKey): string {
  return ui[lang]?.[key] ?? ui[defaultLang][key] ?? key;
}

/**
 * Prefix an internal path with the site base path (import.meta.env.BASE_URL).
 * Always pass app-absolute paths beginning with '/', e.g. withBase('/about').
 * Returns a clean path with no duplicate slashes and no trailing slash (except root).
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  const joined = `${normalizedBase}${normalizedPath}`.replace(/\/{2,}/g, '/');
  if (joined.length > 1 && joined.endsWith('/')) return joined.slice(0, -1);
  return joined || '/';
}

/**
 * Build a localized internal path then prefix it with the base path.
 * localizePath('/about', 'en') -> '<base>/en/about'
 * localizePath('/about', 'th') -> '<base>/about'
 * localizePath('/', 'en')      -> '<base>/en'
 */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  if (lang === defaultLang) return withBase(clean);
  const localized = clean === '/' ? '/en' : `/en${clean}`;
  return withBase(localized);
}

/**
 * Given the current URL, return the equivalent path in the *other* language,
 * preserving the rest of the path. Used by LangSwitcher.
 */
export function switchLangPath(url: URL, targetLang: Lang): string {
  const base = import.meta.env.BASE_URL ?? '/';
  const normalizedBase = base.endsWith('/') ? base.slice(0, -1) : base;

  // Strip the base path from the front of the pathname, if present.
  let rest = url.pathname;
  if (normalizedBase && rest.startsWith(normalizedBase)) {
    rest = rest.slice(normalizedBase.length);
  }
  if (!rest.startsWith('/')) rest = `/${rest}`;

  // Strip a leading locale segment to get the language-agnostic path.
  const segments = rest.split('/').filter(Boolean);
  if (segments[0] === 'en' || segments[0] === 'th') segments.shift();
  const bare = `/${segments.join('/')}`;

  return localizePath(bare === '/' ? '/' : bare, targetLang);
}
