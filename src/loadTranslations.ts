"use server";

export default async function loadTranslations(locale: string) {
  if (locale === 'en') {
    // Default locale doesn't need translations
    return {};
  }
  
  try {
    const translations = await import(`../public/_gt/${locale}.json`);
    return translations.default;
  } catch (error) {
    console.warn(`Could not load translations for locale: ${locale}`);
    return {};
  }
}