import { translations } from '../i18n/translations';
import { MARKETING_URL } from './urls';

export type Locale = 'tr' | 'en';

export const LOCALE_PATH: Record<Locale, string> = {
  tr: '/',
  en: '/en',
};

export const SEO = {
  tr: {
    locale: 'tr' as const,
    htmlLang: 'tr',
    ogLocale: 'tr_TR',
    ogLocaleAlternate: 'en_US',
    siteName: 'MobilyaPlan',
    brandName: 'MobilyaPlan',
    title: 'Mobilya Çizim Programı | 3D Dolap, Nesting ve CNC | MobilyaPlan',
    description:
      'Yeni nesil 3D mobilya çizim programı. Marangoz ve atölyeler için bulut tabanlı dolap tasarımı, akıllı nesting, CNC G-Code ve saniyeler içinde fotogerçekçi render. 3 gün ücretsiz deneyin.',
    canonical: MARKETING_URL.tr,
    path: LOCALE_PATH.tr,
  },
  en: {
    locale: 'en' as const,
    htmlLang: 'en',
    ogLocale: 'en_US',
    ogLocaleAlternate: 'tr_TR',
    siteName: 'FurnitureDraw',
    brandName: 'FurnitureDraw',
    title: 'Cloud Furniture CAD for Cabinets, Nesting & CNC | FurnitureDraw',
    description:
      'Next-gen 3D furniture design tool. Cloud cabinet CAD, smart nesting, CNC G-code export, and photorealistic renders in seconds. Start a 3-day free trial — no credit card.',
    canonical: MARKETING_URL.en,
    path: LOCALE_PATH.en,
  },
} as const;

export function getJsonLd(lang: Locale) {
  const seo = SEO[lang];
  const t = translations[lang];
  const softwareId = `${seo.canonical}#software`;
  const orgId = `${seo.canonical}#organization`;
  const websiteId = `${seo.canonical}#website`;
  const faqId = `${seo.canonical}#faq`;

  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        '@id': softwareId,
        name: seo.brandName,
        alternateName: lang === 'tr' ? 'Yeni Nesil Mobilya Çizim Programı' : 'Cloud Furniture CAD',
        url: seo.canonical,
        operatingSystem: 'Web Browser, Windows, macOS, Linux, iOS, Android',
        applicationCategory: 'DesignApplication',
        applicationSubCategory: 'CAD/CAM',
        inLanguage: seo.htmlLang,
        description: seo.description,
        offers: {
          '@type': 'Offer',
          name: lang === 'tr' ? '3 Gün Ücretsiz Deneme' : '3-Day Free Trial',
          price: '0',
          priceCurrency: lang === 'tr' ? 'TRY' : 'USD',
          description:
            lang === 'tr'
              ? '3 gün sınırsız ücretsiz deneme. Kredi kartı gerekmez.'
              : '3-day unlimited free trial. No credit card required.',
        },
        featureList: t.comparison.highlights.map((item) => item.title),
        publisher: { '@id': orgId },
      },
      {
        '@type': 'Organization',
        '@id': orgId,
        name: seo.brandName,
        url: seo.canonical,
        logo: `${seo.canonical.replace(/\/$/, '')}/logo.svg`,
        sameAs: [
          lang === 'tr' ? MARKETING_URL.en.replace(/\/$/, '') : MARKETING_URL.tr.replace(/\/$/, ''),
          'https://www.youtube.com/@mobilyaplan',
          'https://www.facebook.com/MobilyaPlan/',
        ],
        contactPoint: {
          '@type': 'ContactPoint',
          telephone: '+90-532-715-33-56',
          contactType: 'customer service',
          availableLanguage: ['Turkish', 'English'],
        },
      },
      {
        '@type': 'WebSite',
        '@id': websiteId,
        url: seo.canonical,
        name: seo.title,
        inLanguage: seo.htmlLang,
        publisher: { '@id': orgId },
      },
      {
        '@type': 'FAQPage',
        '@id': faqId,
        url: `${seo.canonical}#sss`,
        inLanguage: seo.htmlLang,
        mainEntity: t.faq.items.map((item) => ({
          '@type': 'Question',
          name: item.q,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.a,
          },
        })),
      },
    ],
  };
}
