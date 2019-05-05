import i18next from "i18next";
import * as LanguageDetector from "i18next-browser-languagedetector";

const i18n = i18next.use(LanguageDetector);
i18n.init({
  detection: { lookupCookie: "lng" },
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

export class I18nService {
  /**
   * i18n
   */
  public static i18n = i18n;

  /**
   * import i18n resources
   * @param path string
   * @param key string
   */
  public static importI18nResources(path: string, key: string) {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const all = await Promise.all([
          import("../components/Empty"),
          fetch("/i18n/" + path + "/" + i18n.language.toLowerCase() + ".json").then(res => res.json()),
        ]);
        i18n.addResources(i18n.language, key, all[1]);
        resolve(all[0]);
      } catch (error) {
        reject(error);
      }
    });
  }
}
