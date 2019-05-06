import i18next from "i18next";
import * as LanguageDetector from "i18next-browser-languagedetector";

const i18n = i18next.use(LanguageDetector);
i18n.init({
  debug: process.env.NODE_ENV === "development",
  detection: { lookupCookie: "lng" },
  fallbackLng: "en",
  ns: ["app"],
  defaultNS: "app",
  resources: {},
});

export class I18nService {
  /**
   * i18n
   */
  public static i18n = i18n;

  /**
   * add resource bundle
   * @param path string
   * @param ns string
   */
  public static addResourceBundle(path: string, ns: string) {
    return new Promise<any>(async (resolve, reject) => {
      try {
        const all = await Promise.all([
          import("../components/Empty"),
          fetch("/i18n/" + path + "/" + this.i18n.language.toLowerCase() + ".json").then(res => res.json()),
        ]);
        this.i18n.addResourceBundle(this.i18n.language, ns, all[1]);
        resolve(all[0]);
      } catch (error) {
        reject(error);
      }
    });
  }

  /**
   * has resource bundle
   * @param key string
   */
  public static hasResourceBundle(ns: string) {
    return this.i18n.hasResourceBundle(this.i18n.language, ns);
  }
}
