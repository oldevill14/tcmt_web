// TCM Technology — canonical company data (BUILD-BRIEF §6).
// Single source of truth for company facts used across components/pages/SEO.
// These mirror the file-editable values exposed in the CMS (public/admin/config.yml).

import type { Lang } from '../i18n/ui';

export const site = {
  // Legal / display name
  name: {
    th: 'บริษัท ทีซีเอ็ม เทคโนโลยี จำกัด',
    en: 'TCM Technology Co., Ltd.',
  },
  // Short brand wordmark used in the header/footer logo
  wordmark: 'TCM TECHNOLOGY',
  shortName: 'TCM Technology',
  founded: 1998, // พ.ศ. 2541
  slogan: 'Where Your Potential Unleashed',
  values: 'Professional & Friendly',

  address: {
    th: 'ชั้น 22 อาคาร CTI Tower, 191/40 ถนนรัชดาภิเษก แขวงคลองเตย เขตคลองเตย กรุงเทพฯ 10110',
    en: '22nd Floor, CTI Tower, 191/40 Ratchadaphisek Road, Khlong Toei, Bangkok 10110, Thailand',
  },

  phone: '02-661-8884',
  phoneIntl: '+6626618884',
  email: 'tcmtech@tcmtech.co.th',

  // Google Maps embed for CTI Tower (Ratchadaphisek). Embeddable iframe src.
  mapEmbed:
    'https://www.google.com/maps?q=CTI+Tower+Ratchadaphisek+Bangkok&output=embed',
  mapLink: 'https://maps.google.com/?q=CTI+Tower+Ratchadaphisek+Bangkok',

  // Geo for LocalBusiness JSON-LD (CTI Tower approx.)
  geo: {
    latitude: 13.7233,
    longitude: 100.5707,
  },

  socials: {
    facebook: '',
    linkedin: '',
    line: '',
  } as Record<string, string>,

  copyright: {
    // © range from old site
    startYear: 2017,
    endYear: 2026,
  },
} as const;

/** Convenience: localized company name. */
export function companyName(lang: Lang): string {
  return site.name[lang];
}

/** Convenience: localized address. */
export function companyAddress(lang: Lang): string {
  return site.address[lang];
}

/** Pre-formatted copyright line, e.g. "© 2017–2026 TCM Technology Co., Ltd." */
export function copyrightLine(lang: Lang): string {
  return `© ${site.copyright.startYear}–${site.copyright.endYear} ${site.name[lang]}`;
}

// --- Services list (slugs + bilingual labels), BUILD-BRIEF §6 ---
// Order matters: drives the homepage preview grid and services overview.
export interface ServiceMeta {
  slug: string;
  icon: string; // simple key the ServiceCard maps to an inline SVG
  title: { th: string; en: string };
  summary: { th: string; en: string };
}

export const services: ServiceMeta[] = [
  {
    slug: 'networking',
    icon: 'network',
    title: { th: 'ระบบเครือข่าย', en: 'Networking & Consulting' },
    summary: {
      th: 'ออกแบบ วางระบบ และให้คำปรึกษาเครือข่ายองค์กรที่มั่นคงและปลอดภัย',
      en: 'Design, deployment and consulting for robust, secure enterprise networks.',
    },
  },
  {
    slug: 'data-center',
    icon: 'server',
    title: { th: 'ดาต้าเซ็นเตอร์', en: 'Data Center' },
    summary: {
      th: 'วางระบบศูนย์ข้อมูลครบวงจร เสถียร ปลอดภัย พร้อมรองรับการเติบโต',
      en: 'End-to-end data center solutions — reliable, secure and ready to scale.',
    },
  },
  {
    slug: 'security',
    icon: 'shield',
    title: { th: 'ความปลอดภัยระบบสารสนเทศ', en: 'IT Security / Protection' },
    summary: {
      th: 'ปกป้องระบบและข้อมูลขององค์กรด้วยโซลูชันความปลอดภัยที่ครอบคลุม',
      en: 'Protect your systems and data with comprehensive security solutions.',
    },
  },
  {
    slug: 'isp',
    icon: 'globe',
    title: { th: 'อินเทอร์เน็ตความเร็วสูง (ISP)', en: 'High-speed Internet (ISP)' },
    summary: {
      th: 'บริการอินเทอร์เน็ตความเร็วสูงที่เสถียร สำหรับองค์กรทุกขนาด',
      en: 'Reliable high-speed internet connectivity for organizations of every size.',
    },
  },
  {
    slug: 'it-infrastructure',
    icon: 'layers',
    title: {
      th: 'โครงสร้างพื้นฐานไอที (LAN/Server)',
      en: 'IT Infrastructure (LAN/Server)',
    },
    summary: {
      th: 'ออกแบบและติดตั้งโครงสร้างพื้นฐานไอที LAN และเซิร์ฟเวอร์อย่างมืออาชีพ',
      en: 'Professional design and installation of LAN and server infrastructure.',
    },
  },
  {
    slug: 'av-videowall',
    icon: 'monitor',
    title: { th: 'ระบบจอแสดงผล / Video Wall', en: 'Video Wall & Display Systems' },
    summary: {
      th: 'ระบบจอแสดงผลและ Video Wall สำหรับศูนย์ควบคุมและพื้นที่จัดแสดง',
      en: 'Video wall and display systems for control rooms and showcase spaces.',
    },
  },
  {
    slug: 'hvac',
    icon: 'wind',
    title: { th: 'ระบบปรับอากาศ', en: 'Air Conditioning (HVAC) Systems' },
    summary: {
      th: 'ออกแบบและติดตั้งระบบปรับอากาศสำหรับห้องเซิร์ฟเวอร์และอาคารสำนักงาน',
      en: 'Design and installation of HVAC systems for server rooms and offices.',
    },
  },
  {
    slug: 'software-development',
    icon: 'code',
    title: { th: 'ซอฟต์แวร์และการพัฒนาเว็บ', en: 'Software & Web Development' },
    summary: {
      th: 'พัฒนาซอฟต์แวร์ เว็บแอปพลิเคชัน และระบบบูรณาการตามความต้องการขององค์กร',
      en: 'Custom software, web applications and system integration tailored to your organization.',
    },
  },
];

// --- Government clients (BUILD-BRIEF §6) ---
export interface ClientMeta {
  name: { th: string; en: string };
  sector: 'gov' | 'edu' | 'private';
  logo?: string; // optional path under /public; placeholder if absent
  url?: string;
}

export const clients: ClientMeta[] = [
  {
    name: { th: 'กระทรวงแรงงาน', en: 'Ministry of Labour' },
    sector: 'gov',
    logo: '/logos/gov-mol.svg',
  },
  {
    name: { th: 'กรมการจัดหางาน', en: 'Department of Employment' },
    sector: 'gov',
    logo: '/logos/gov-doe.svg',
  },
  {
    name: { th: 'กรมพัฒนาฝีมือแรงงาน', en: 'Department of Skill Development' },
    sector: 'gov',
    logo: '/logos/gov-dsd.svg',
  },
  {
    name: { th: 'สำนักงานประกันสังคม', en: 'Social Security Office' },
    sector: 'gov',
    logo: '/logos/gov-sso.svg',
  },
  {
    name: {
      th: 'กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.)',
      en: 'Ministry of Higher Education, Science, Research and Innovation (MHESI)',
    },
    sector: 'gov',
    logo: '/logos/gov-mhesi.svg',
  },
  {
    name: {
      th: 'สำนักงานพัฒนาเทคโนโลยีอวกาศและภูมิสารสนเทศ (GISTDA)',
      en: 'Geo-Informatics and Space Technology Development Agency (GISTDA)',
    },
    sector: 'gov',
    logo: '/logos/gov-gistda.svg',
  },
];

// --- Technology partners (BUILD-BRIEF §6) ---
export interface PartnerMeta {
  name: string;
  logo?: string; // optional path under /public; placeholder if absent
  url?: string;
}

export const partners: PartnerMeta[] = [
  { name: 'Cisco', url: 'https://www.cisco.com' },
  { name: 'Dell', url: 'https://www.dell.com' },
  { name: 'Oracle', url: 'https://www.oracle.com' },
  { name: 'Acer', url: 'https://www.acer.com' },
  { name: 'ASUS', url: 'https://www.asus.com' },
  { name: 'Lenovo', url: 'https://www.lenovo.com' },
  { name: 'Fujitsu', url: 'https://www.fujitsu.com' },
  { name: 'Epson', url: 'https://www.epson.com' },
];

// --- Stats for the homepage trust strip ---
export interface StatMeta {
  value: string;
  labelKey:
    | 'stats.years'
    | 'stats.govClients'
    | 'stats.projects'
    | 'stats.support';
}

export const stats: StatMeta[] = [
  { value: '25+', labelKey: 'stats.years' },
  { value: '6+', labelKey: 'stats.govClients' },
  { value: '100+', labelKey: 'stats.projects' },
  { value: '24/7', labelKey: 'stats.support' },
];
