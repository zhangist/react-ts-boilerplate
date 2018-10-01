import * as i18next from "i18next";
import * as LanguageDetector from "i18next-browser-languagedetector";

const i18n = i18next.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {},
    "zh-CN": {},
  },
  fallbackLng: "en",
  debug: true,

  // have a common namespace used around the full app
  ns: ["app"],
  defaultNS: "app",

  keySeparator: false, // we use content as keys

  interpolation: {
    escapeValue: false, // not needed for react!!
    formatSeparator: ",",
  },

  react: {
    wait: true,
  },
});

export default i18n;
