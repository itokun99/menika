import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import id from './translations/en.json';
import { findBestLanguageTag } from 'react-native-localize';

export const setupLanguageTranslation = () => {
  const resources = {
    id: {
      translation: id,
    },
    en: {
      translation: en,
    },
  };

  const bestLanguage = findBestLanguageTag(Object.keys(resources));

  i18next.use(initReactI18next).init({
    resources,
    lng: bestLanguage?.languageTag || 'en',
    fallbackLng: 'en',
    compatibilityJSON: 'v4',
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    react: {
      useSuspense: false, // Disable suspense to avoid issues with React Native
    },
  });
};
