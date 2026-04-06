import { getRequestConfig } from 'next-intl/server';

export const locales = ['en', 'de', 'in', 'ng', 'us', 'gb', 'ca', 'sg', 'ae', 'au', 'za'];

// i18n.ts
export const localeToCountry: Record<string, string> = {
  en: "United States",
  in: "India",          // ✅ add this
  en_GB: "United Kingdom",
  de: "Germany",
};

export const countryToLocale: Record<string, 'en' | 'de' | 'in'> = {
  India: 'in',
  Germany: 'de',

  Nigeria: 'en',
  'United States': 'en',
  'United Kingdom': 'en',
  Canada: 'en',
  Singapore: 'en',
  UAE: 'en',
  Australia: 'en',
  'South Africa': 'en',
};


// Translation loader
const loadTranslations = async (locale: string) => {
  try {
    const messages = await import(`../locales/${locale}.json`);
    return messages.default;
  } catch  {
    // Fallback to English
    const fallback = await import('../locales/en.json');
    return fallback.default;
  }
};

export default getRequestConfig(async ({ locale }) => ({
  messages: await loadTranslations(locale || 'en'),
  locale: locale || 'en',
}));
