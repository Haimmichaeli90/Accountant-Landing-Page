import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from '../locales/en/translation.json';
import translationHE from '../locales/he/translation.json';
import translationAR from '../locales/ar/translation.json';
import translationRU from '../locales/ru/translation.json';

const resources = {
  en: { translation: translationEN },
  he: { translation: translationHE },
  ar: { translation: translationAR },
  ru: { translation: translationRU }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'he', // שפה ברירת מחדל בהתחלה
    fallbackLng: 'en',
    interpolation: { escapeValue: false }
  });

export default i18n;
