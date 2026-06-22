# TCM Technology (tcmtech.co.th) — วิเคราะห์เว็บเดิม + แผนพัฒนาระบบใหม่

> จัดทำ 2026-06-22 · วิเคราะห์จากเว็บ live (source code ต้นฉบับหาย) · oldevill Oracle
> วิธีเก็บข้อมูล: crawl HTML จริง + WebFetch + ตรวจ HTTP ทุก path (ไม่ได้เดา stack — verified)

---

## สรุปผู้บริหาร (Executive Summary)

เว็บ `tcmtech.co.th` ปัจจุบันเป็น **เว็บหน้าเดียว (single-page) ที่สร้างจาก template Bootstrap 3 สำเร็จรูปเมื่อปี 2017** — เก่า ~9 ปี, ใช้ jQuery/Bootstrap รุ่นเก่า, มี **โค้ดรองรับ IE6-8** (html5shiv, respond.js, CSS3 PIE), **ไม่มีระบบหลังบ้าน (CMS)**, และ **เนื้อหาส่วนใหญ่เป็น placeholder** (เช่นพอร์ตงานเขียนว่า "Category / Project Name" ซ้ำ 5 อัน, และมีเนื้อหาค้างของบริษัทอื่น "ABI Solution — LED/LCD TV Chonburi" ที่ลืมลบ).

**ข้อสรุปเชิงกลยุทธ์:** การที่ source หายไม่ใช่ปัญหาใหญ่ เพราะของเดิมแทบไม่มีอะไรให้เสียดาย — มันคือ "โครงเปล่า" ของ template. การ rebuild ใหม่ทั้งหมดจึงเป็น **โอกาส** ไม่ใช่แค่การกู้คืน. สิ่งที่ต้องกู้คือ **เนื้อหาธุรกิจจริง** (ซึ่งมีอยู่เพียงส่วน "เกี่ยวกับเรา" + วิสัยทัศน์ + ที่อยู่ติดต่อ) — ที่เหลือสร้างใหม่หมด.

---

# PART A — การวิเคราะห์เว็บเดิม (อย่างละเอียด)

## A1. ข้อมูลบริษัท (จากเนื้อหาเว็บ)

| หัวข้อ | รายละเอียด |
|---|---|
| ชื่อ | บริษัท ทีซีเอ็ม เทคโนโลยี จำกัด (TCM Technology Co., LTD) |
| ก่อตั้ง | พ.ศ. 2541 (1998) — ประสบการณ์ 20+ ปี |
| ธุรกิจ | System Integrator (SI) — ที่ปรึกษา + วางระบบ IT ครบวงจร ("ผู้รับเหมาระบบไอทีแบบครบวงจร") |
| บริการ | Networking, Data Center, ISP (อินเทอร์เน็ตความเร็วสูง), LAN, Server, Security/Protection, IT Infrastructure design+install, อบรม, บำรุงรักษา |
| ลูกค้า | ภาครัฐ + สถาบันการศึกษา + เอกชนชั้นนำ |
| Slogan | "Where Your Potential Unleashed" / แนวทาง "Professional & Friendly" |
| Vision | ก้าวสู่บริษัทชั้นนำด้านระบบไอทีครบวงจร + พัฒนานวัตกรรมเพื่ออนาคต |
| ที่อยู่ | ชั้น 22 อาคาร CTI Tower, 191/40 ถ.รัชดาภิเษก คลองเตย กรุงเทพฯ 10110 |
| โทร | 02-661-8884 |
| อีเมล | (obfuscated ผ่าน Cloudflare) + webmail.tcmtech.co.th |
| ลิขสิทธิ์ | © 2017-2026 |

## A2. Tech Stack เดิม (verified จาก HTML จริง)

- **Frontend:** HTML static + **Bootstrap 3.3.6** (ปี ~2015) + **jQuery 2.2.0**
- **Template:** ธีมสำเร็จรูป `/template/blue/` (ตระกูล "Creative" + skin "blue") — owl.carousel, wow.js, animate.css, cbpAnimatedHeader, classie, modernizr, fittext, easing
- **Legacy/IE support:** html5shiv, respond.js 1.4.2, PIE_IE678.js → **ออกแบบมารองรับ IE6-8** (ล้าสมัยมาก)
- **Fonts:** Google Fonts — Merriweather + Open Sans (ผ่าน CDN, ไม่มี Thai webfont โหลด → ฟอนต์ไทยใช้ระบบ)
- **Icons:** Font Awesome 4.0.3
- **Backend/CMS:** **ไม่มี** — เป็น static/PHP รุ่นเก่า (เดาจาก path `//template/...` ที่มี double-slash = bug การต่อ base path แบบ PHP), ฟอร์มติดต่อน่าจะยิง PHP mail
- **Infra:** Cloudflare (proxy + email protection) อยู่หน้าเว็บ
- **ขนาด:** หน้าแรก HTML ~39 KB, รูปภาพ 33 รูป (จาก `/images/`)

## A3. โครงสร้าง / Information Architecture เดิม

**เป็น single-page** — เมนูทั้งหมดเป็น anchor ลิงก์ในหน้าเดียว (ยืนยันแล้ว: `/about`, `/services`, `/contact`, `/portfolio` ฯลฯ ตอบ **404** หมด):

```
หน้าเดียว (#) ─┬─ #home      (Hero carousel)
               ├─ #about     (เกี่ยวกับเรา / ปรัชญา / วิสัยทัศน์)
               ├─ #services  (บริการ: Networking / Data Center / ISP)
               ├─ #portfolio (ผลงาน — placeholder)
               ├─ #customer  (ลูกค้า — โลโก้)
               ├─ #partner   (พาร์ตเนอร์ — โลโก้)
               └─ #contact   (ฟอร์มติดต่อ + ที่อยู่)

แยกหน้า: /privacy-policy (HTTP 200, ~27 KB static)  ·  webmail.tcmtech.co.th (อีเมลพนักงาน)
```

## A4. Content Inventory — มีจริง vs placeholder

| ส่วน | สถานะเนื้อหา | หมายเหตุ |
|---|---|---|
| Hero carousel | ⚠️ **ผิด/ค้าง** | สไลด์แรกเป็น "ABI SOLUTION — LED/LCD TV Chonburi" = เนื้อหาบริษัทอื่นที่ลืมลบ |
| บริการ (cards) | ◻️ มีบางส่วน | Networking, Protection, LAN, Server, Data Center, ISP — ข้อความสั้น ซ้ำ (carousel clone) |
| เกี่ยวกับเรา | ✅ **ของจริง ดี** | ย่อหน้าบริษัท + Vision + Mission ครบ — ส่วนที่ใช้ได้จริงที่สุด |
| ผลงาน (portfolio) | ❌ **placeholder** | เขียน "Category / Project Name" ซ้ำ 5 อัน — ไม่มีงานจริง |
| ลูกค้า | ◻️ โลโก้อย่างเดียว | ไม่มีรายชื่อ/คำบรรยาย |
| พาร์ตเนอร์ | ◻️ โลโก้อย่างเดียว | (Cisco/Dell/Oracle ฯลฯ ตามที่เห็น) |
| ฟอร์มติดต่อ | ◻️ มี UI | name/email/phone/message — backend ไม่ชัด |
| รูปภาพ | 33 รูป | datacenter, fiber, net1-4, hacking, itinfrastructure, operator, logotcm.png — บางรูปคุณภาพพอใช้ซ้ำได้ |

## A5. ปัญหา/ข้อบกพร่องที่พบ (เหตุผลรองรับการ rebuild)

1. **Stack ตกยุค ~9 ปี** — Bootstrap 3 / jQuery 2 / รองรับ IE6-8 ที่ตายไปแล้ว → ช้า, ไม่ปลอดภัย, แก้ต่อยาก
2. **ไม่มี CMS** — ทีม TCM แก้เนื้อหาเองไม่ได้เลย ต้องแก้ HTML ดิบ (และตอนนี้ source หาย = แก้ไม่ได้ด้วยซ้ำ)
3. **เนื้อหา placeholder/ผิด** — "ABI Solution" ค้าง, ผลงานเป็น "Project Name" → ดูไม่โปร, เสียความน่าเชื่อถือต่อลูกค้าภาครัฐ/เอกชน
4. **พิมพ์ไทยผิดหลายจุด** — "รับษา"→รักษา, "เครื่อข่าย"→เครือข่าย, "โซลูชั้น"→โซลูชัน, "เกี่ยกับ"→เกี่ยวกับ
5. **SEO อ่อน** — `<meta description>` ว่าง, ไม่มี Open Graph, ไม่มี sitemap.xml ที่ใช้ได้, title แค่ "TCM Tech"
6. **Mixed content** — รูปบางส่วนเรียกผ่าน `http://` ปนกับ `https://` → เสี่ยง browser block + เสีย SEO/ความปลอดภัย
7. **ไม่มี English version จริง** — มีแค่ชื่อบริษัท/slogan EN ทั้งที่ลูกค้ามีต่างชาติ/องค์กร
8. **ไม่ responsive ยุคใหม่** — viewport มี แต่ layout เป็นกริด Bootstrap 3 เก่า
9. **ฟอร์มไม่มี anti-spam/validation ฝั่ง server ที่ชัด** — เสี่ยงสแปม
10. **Single-page** — ขยายเนื้อหา (ข่าว, ผลงานรายโปรเจกต์, รับสมัครงาน) ไม่ได้

## A6. สิ่งที่ "กู้/นำกลับมาใช้" ได้

- ✅ เนื้อหา "เกี่ยวกับเรา" + Vision/Mission (เกลาภาษาใหม่)
- ✅ ข้อมูลติดต่อ + ที่อยู่ + โลโก้ `logotcm.png`
- ✅ รูปประกอบบางส่วน (datacenter, fiber, infrastructure) — ถ้าความละเอียดพอ
- ❌ โค้ด/template — ทิ้งทั้งหมด (ไม่มีค่า + source หายอยู่แล้ว)

---

# PART B — แผนพัฒนาระบบเว็บใหม่

## B1. เป้าหมาย & หลักการออกแบบ

1. **ความน่าเชื่อถือระดับองค์กร** — TCM ขายงานภาครัฐ/เอกชนใหญ่ เว็บต้องดู enterprise, สะอาด, โหลดเร็ว
2. **แก้เนื้อหาเองได้** — ทีม TCM ต้องอัปเดตผลงาน/ข่าว/บริการได้โดยไม่ต้องแตะโค้ด → ต้องมี CMS
3. **สองภาษา TH/EN** — รองรับลูกค้า/พาร์ตเนอร์ต่างชาติ
4. **SEO + performance** — Lighthouse 90+, sitemap, OG, schema.org (Organization/LocalBusiness)
5. **ขยายได้** — รองรับเพิ่มหน้า: ผลงานรายโปรเจกต์, ข่าว/บทความ, รับสมัครงาน, ดาวน์โหลด

## B2. Tech Stack ที่แนะนำ

**ตัวเลือกหลัก (แนะนำ) — Next.js 15 (App Router) + Tailwind + shadcn/ui + Headless CMS**
- เหตุผล: เร็ว (SSG/ISR), SEO ดี, i18n ในตัว, **Keng ถนัด Next.js อยู่แล้ว** (storyallday ก็ Next.js), deploy ง่าย (Vercel / Cloudflare Pages)
- CMS: **Payload CMS** (self-host, ไทยได้, ฟรี) หรือ **Sanity** (cloud, free tier) — ให้ทีม TCM แก้เนื้อหาผ่าน admin UI
- ฟอร์มติดต่อ: API route + ส่งเมล (Resend/SMTP) + reCAPTCHA/Turnstile กันสแปม

**ตัวเลือกสำรอง ก — Astro + Tailwind + CMS** (เบาที่สุด, JS น้อย, เหมาะเว็บ content/บริษัทมากที่สุด, Lighthouse เต็ม) — ถ้าเน้น performance สุดและ interactivity ต่ำ

**ตัวเลือกสำรอง ข — WordPress** (ถ้าทีม TCM อยากแก้เองแบบ non-technical สุดๆ + มีคนดูแล WP) — แก้ง่ายสุดสำหรับ staff แต่ต้องดูแล security/อัปเดตปลั๊กอินตลอด

> **คำแนะนำ:** เริ่มที่ **Next.js + Payload** — ได้ทั้งความเร็ว, ความคุม, และ CMS ในโปรเจกต์เดียว เจ้าของแก้เนื้อหาเองได้ และตรงกับทักษะที่มี

## B3. IA / Sitemap ใหม่ (multi-page)

```
/                     หน้าแรก (hero + บริการเด่น + ตัวเลข + ลูกค้า + CTA)
/about                เกี่ยวกับเรา (ประวัติ, vision/mission, ทีม, timeline 1998→ปัจจุบัน)
/services             บริการ (ภาพรวม)
  /services/networking
  /services/data-center
  /services/security
  /services/isp
  /services/it-infrastructure
/solutions            โซลูชันตามอุตสาหกรรม (ภาครัฐ / การศึกษา / เอกชน) — optional
/projects             ผลงาน (กรองตามหมวด) → /projects/[slug] รายโปรเจกต์
/clients              ลูกค้า + พาร์ตเนอร์ (โลโก้ + คำรับรอง)
/news                 ข่าว/บทความ (blog) — optional เฟส 2
/careers              ร่วมงานกับเรา — optional
/contact              ติดต่อ (ฟอร์ม + แผนที่ + ที่อยู่ + ช่องทาง)
/privacy-policy       นโยบายความเป็นส่วนตัว (มีอยู่แล้ว — ย้าย+ปรับ PDPA)
ทั้งหมด × 2 ภาษา (th/en) ผ่าน i18n routing
```

## B4. ทิศทางดีไซน์

- โทนสี: ดึงจากโลโก้ TCM (เดิม "blue" theme) → ฟ้า/น้ำเงิน corporate + neutral grey + accent
- โมเดิร์น: เว้นวรรคเยอะ, การ์ดบริการแบบ icon+heading, hero มี subtle motion, dark section คั่น
- ฟอนต์ไทย: ใช้ Thai webfont จริง (เช่น IBM Plex Sans Thai / Noto Sans Thai / LINE Seed) — เดิมไม่มี
- Responsive mobile-first, accessibility (WCAG AA), dark mode (optional)
- ส่วนสำคัญ: ตัวเลขความน่าเชื่อถือ (25+ ปี, X โปรเจกต์, X ลูกค้า), โลโก้ลูกค้า/พาร์ตเนอร์จริง, case study

## B5. ฟีเจอร์

| ฟีเจอร์ | เฟส | หมายเหตุ |
|---|---|---|
| CMS แก้เนื้อหาเอง | 1 | บริการ/ผลงาน/ลูกค้า/ข่าว |
| ฟอร์มติดต่อ + อีเมล + กันสแปม | 1 | Turnstile/reCAPTCHA + เก็บลง DB/ส่งเมล |
| สองภาษา TH/EN | 1 | i18n |
| SEO (meta/OG/sitemap/schema) | 1 | + Google Analytics/Search Console |
| Portfolio รายโปรเจกต์ + filter | 1-2 | แทน placeholder เดิม |
| ข่าว/บทความ (blog) | 2 | content marketing |
| รับสมัครงาน | 2 | optional |
| Live chat / LINE OA | 2 | optional |

## B6. แผนเนื้อหา (Content) — สำคัญ เพราะของเดิมไม่มี

1. **เขียน copy ใหม่ทั้งหมด** (เกลาภาษาไทย + แปล EN) — about, บริการแต่ละตัว, CTA
2. **เก็บผลงานจริง** จาก TCM — ชื่อโปรเจกต์, ลูกค้า, ปี, ขอบเขต, รูป (แทน "Project Name")
3. **โลโก้ลูกค้า/พาร์ตเนอร์จริง** + ขออนุญาตใช้
4. **รูปคุณภาพสูง** — datacenter/ทีม/ออฟฟิศ (ถ่ายใหม่หรือ stock คุณภาพ)
5. **PDPA** — ปรับ privacy policy ให้ตรงกฎหมายไทยปัจจุบัน

## B7. Roadmap (เฟส + ประมาณการ)

| เฟส | งาน | ระยะ (โดยประมาณ) |
|---|---|---|
| 0. Discovery | เก็บ requirement, brand asset, เนื้อหาจริง, ผลงาน, สิทธิ์โลโก้ | 3-5 วัน |
| 1. Design | Wireframe → UI design (หน้าแรก + 4-5 template) → approve | 1-2 สัปดาห์ |
| 2. Build | scaffold Next.js+CMS, สร้าง component, หน้าทั้งหมด, ฟอร์ม, i18n | 2-3 สัปดาห์ |
| 3. Content | ใส่เนื้อหาจริง TH/EN, ผลงาน, SEO, รูป | 1 สัปดาห์ (คู่ขนาน) |
| 4. QA + Launch | ทดสอบ cross-browser/mobile, Lighthouse, redirect, DNS, go-live | 3-5 วัน |
| **รวม** | | **~5-7 สัปดาห์** (ขึ้นกับความพร้อมเนื้อหาจากลูกค้า — มักเป็นคอขวด) |

## B8. Hosting / Deploy / Migration

- **Deploy:** Vercel หรือ Cloudflare Pages (เว็บอยู่หลัง Cloudflare อยู่แล้ว → Pages ลื่น)
- **DNS:** ชี้ผ่าน Cloudflare เดิม, เก็บ `webmail.tcmtech.co.th` (อีเมลพนักงาน) ไว้ไม่แตะ
- **SEO migration:** ทำ 301 redirect จาก anchor/old paths, submit sitemap ใหม่, รักษา title/URL หลัก
- **Backup:** เก็บ snapshot เว็บเดิม (HTML+images) ไว้เป็น reference ก่อน go-live (ผมดึง HTML หน้าแรกไว้แล้วที่ `/tmp/tcm_home.html` — ควร archive ถาวร)

## B9. ความเสี่ยง

| ความเสี่ยง | ผลกระทบ | ลด |
|---|---|---|
| ลูกค้าส่งเนื้อหา/ผลงานช้า | ดีเลย์ทั้งโปรเจกต์ | เริ่มเก็บตั้งแต่เฟส 0, มี template ให้กรอก |
| ไม่มีสิทธิ์ใช้โลโก้ลูกค้า | ต้องตัดออก | ขออนุญาตเป็นลายลักษณ์อักษร |
| รูปเดิมความละเอียดต่ำ | ดูไม่โปร | ถ่าย/จัดหาใหม่ |
| ไม่มี source เดิม | กู้ดีไซน์ไม่ได้ | ไม่จำเป็น — ออกแบบใหม่ดีกว่าอยู่แล้ว |

---

## ❓ การตัดสินใจที่ต้องขอจาก Keng / TCM ก่อนเริ่ม

1. **ใครจะแก้เนื้อหาหลัง launch?** (Keng/ทีมพัฒนา = MDX ก็พอ · ทีม TCM เอง = ต้องมี CMS เต็ม)
2. **ต้องสองภาษา TH/EN ตั้งแต่แรกไหม?** (กระทบ scope + เวลาแปล)
3. **ขอบเขตเฟสแรก** = brochure 1 หน้าโมเดิร์น หรือ multi-page เต็มเลย?
4. **งบ/ไทม์ไลน์** มี deadline ทางธุรกิจไหม
5. มี **brand guideline/โลโก้ vector** ไหม หรือผมต้อง trace จากโลโก้ raster เดิม

---

---

# PART C — ดีไซน์ใหม่ที่วางแผนไว้แล้ว (Figma)

> ลิงก์: `figma.com/design/jV3XSVmI0wSw6dCXp4Okfg/website` — เข้าได้ (view-only, anonymous viewer พอดูได้).
> Verified ผ่าน playwright (screenshot + ดึงชื่อ frame จาก DOM).

มีการ **วางดีไซน์ใหม่ไว้ใน Figma แล้ว** (ไฟล์ชื่อ "website") — ทิศทางตรงกับแผน Part B มาก. โครงที่เห็น:

**Frames หลัก:**
- **Homepage** (×2 variation) — hero มืดพรีเมียม "TCM TECHNOLOGY" บนพื้น dark + การ์ดบริการ gradient ฟ้า, แถบโลโก้พาร์ตเนอร์ (acer, asus, lenovo, fujitsu, epson), ส่วนทีม/ลูกค้า
- **ผลงาน (Portfolio)** — หน้ารวมผลงาน
- **ติดต่อ (Contact)** — หน้าติดต่อแยก (tcmtech@tcmtech.co.th, 026-618884)
- **หน้าผลงานรายลูกค้า (case pages)** — มีหน้าเฉพาะต่อหน่วยงานรัฐ:
  - กระทรวงแรงงาน · กรมการจัดหางาน · กรมพัฒนาฝีมือแรงงาน · ประกันสังคม
  - กระทรวงการอุดมศึกษา วิทยาศาสตร์ วิจัยและนวัตกรรม (อว.) · GISTDA

**ข้อมูลใหม่ที่ได้จากดีไซน์ (ที่เว็บเดิมไม่บอก):**
1. **ลูกค้าจริงคือหน่วยงานรัฐใหญ่** (กระทรวงแรงงานและกรมในสังกัด, ประกันสังคม, อว., GISTDA) → เป็น credibility ชั้นดี ควรเป็นพระเอกของหน้า Portfolio/Clients
2. **บริการกว้างกว่าที่เว็บเดิมโชว์** — ในการ์ดดีไซน์มี **Video Wall, ระบบปรับอากาศ (HVAC), ระบบจอแสดงผล** เพิ่มจาก IT/Networking เดิม → TCM ทำงาน AV/ระบบอาคารด้วย ไม่ใช่แค่ไอที
3. ทิศทางภาพ: hero dark + การ์ด gradient ฟ้า — โทน corporate ฟ้า/น้ำเงิน ตรงกับ brand เดิม

**สรุปการเชื่อมโยง:** ดีไซน์ Figma = multi-page (Homepage / Portfolio / Contact / case รายลูกค้า) — **สอดคล้องกับ IA ใน Part B3** ที่เสนอ `/projects/[slug]` ต่อโปรเจกต์. แปลว่าแผน rebuild กับดีไซน์ที่วางไว้ไปทางเดียวกัน → ขั้นต่อไปคือเอา Figma นี้มาเป็น **design source of truth** แล้ว implement เป็นโค้ดจริง (Next.js + CMS) ตาม Part B.

**สิ่งที่ดีไซน์ Figma ยังไม่ครอบ (ต้องเติมตอน build):** ระบบหลังบ้าน/CMS, i18n EN, ฟอร์ม + กันสแปม, SEO/schema, responsive breakpoints, การเก็บรายละเอียดผลงานจริงแต่ละหน่วยงาน.

---

## ภาคผนวก — หลักฐาน (verified)

- Stack: `bootstrap/3.3.6`, `jquery-2.2.0`, `owl.carousel`, template `/template/blue/`, IE shims (html5shiv/respond/PIE) — จาก HTML จริง
- โครงสร้าง single-page: `/about /services /contact /portfolio /products /news /en /th` → **404 ทุกอัน**; `/privacy-policy` → 200
- รูป 33 รูปจาก `/images/`; มี mixed http/https; โลโก้ `logotcm.png`
- เนื้อหาค้าง: hero slide = "ABI SOLUTION ... LED/LCD TV Chonburi"
- © 2017-2026 → เว็บอายุ ~9 ปี
