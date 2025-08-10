import i18next, { LanguageDetectorAsyncModule } from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './translations/en.json';
import id from './translations/id.json';
import { findBestLanguageTag } from 'react-native-localize';
import { appStorageAction } from '../storage';

// lang resources
const resources = {
  id: {
    translation: id,
  },
  en: {
    translation: en,
  },
};

// language detector
const languageDetector: LanguageDetectorAsyncModule = {
  type: 'languageDetector',
  async: true,
  init: () => {},
  detect: (callback: (lng: string) => void) => {
    const storedLanguage = appStorageAction.getLanguage();
    if (storedLanguage) {
      return callback(storedLanguage);
    }
    const bestLanguage = findBestLanguageTag(Object.keys(resources));
    callback(bestLanguage?.languageTag || 'en'); // Fallback ke 'en'
  },
  cacheUserLanguage: appStorageAction.setLanguage,
};

// setup multilang
export const setupLanguageTranslation = () => {
  i18next
    .use(languageDetector)
    .use(initReactI18next)
    .init({
      resources,
      fallbackLng: 'id',
      compatibilityJSON: 'v4',
      interpolation: {
        escapeValue: false,
      },
      react: {
        useSuspense: false,
      },
    });
};
