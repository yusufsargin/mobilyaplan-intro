export const MARKETING_URL = {
  tr: 'https://www.mobilyaplan.com/',
  en: 'https://www.furnituredraw.com/',
} as const;

export const PRODUCT_URL = {
  tr: 'https://prod.mobilyaplan.app/',
  en: 'https://apps.furnituredraw.com/',
} as const;

export function getProductUrl(lang: 'tr' | 'en') {
  return PRODUCT_URL[lang];
}
