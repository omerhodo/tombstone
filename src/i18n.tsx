import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import translationEN from './locales/en/translation.json';
import generalEN from './locales/en/general.json';

import translationTR from './locales/tr/translation.json';
import generalTR from './locales/tr/general.json';

const resources = {
  en: {
    translation: translationEN,
    general: generalEN,
  },
  tr: {
    translation: translationTR,
    general: generalTR,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'tr',
  keySeparator: false,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
