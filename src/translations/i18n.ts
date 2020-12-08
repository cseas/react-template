import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import deTranslation from "src/translations/locales/de/translation.json";
import enTranslation from "src/translations/locales/en/translation.json";

const resources = {
  de: { translation: deTranslation },
  en: { translation: enTranslation },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en",
  keySeparator: ".",
  interpolation: {
    escapeValue: false,
  },
  debug: false,
});

export default i18n;
