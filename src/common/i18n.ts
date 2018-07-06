import * as i18n from "i18next";
import * as LanguageDetector from "i18next-browser-languagedetector";

const instance = i18n.use(LanguageDetector).init({
  // we init with resources
  resources: {
    en: {
      app: {
        "To get started, edit <1>src/App.js</1> and save to reload.":
          "To get started, edit <1>src/App.js</1> and save to reload.",
        "Welcome to React": "Welcome to React and react-i18next",
      },
      page: {},
    },
    "zh-CN": {
      app: {
        "To get started, edit <1>src/App.js</1> and save to reload.":
          "Starte in dem du, <1>src/App.js</1> editierst und speicherst.",
        "Welcome to React": "Willkommen bei React und react-i18next",
      },
      page: {},
    },
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

export default instance;
