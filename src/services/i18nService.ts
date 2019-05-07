import i18next from "i18next";
import * as LanguageDetector from "i18next-browser-languagedetector";
import { FetchService } from "./fetchService";

const i18n = i18next.use(LanguageDetector);
i18n.init({
  debug: process.env.NODE_ENV === "development",
  detection: { lookupCookie: "lng" },
  fallbackLng: "en",
  ns: ["app"],
  defaultNS: "app",
  resources: {},
});

/**
 * i18n service
 */
export class I18nService {
  /**
   * get i18n
   */
  public static getI18n() {
    return this.i18n;
  }

  /**
   * add resource bundle
   * @param namespace string
   * @param path string
   */
  public static addResourceBundle(
    namespace: string,
    path?: string,
  ): Promise<void> {
    return new Promise<void>(async (resolve, reject) => {
      try {
        const resources = await FetchService.fetchJson(
          `/i18n/${path || namespace}/${this.i18n.language.toLowerCase()}.json`,
        );
        this.i18n.addResourceBundle(this.i18n.language, namespace, resources);
        return resolve();
      } catch (error) {
        return reject(error);
      }
    });
  }

  /**
   * has resource bundle
   * @param namespace string
   */
  public static hasResourceBundle(namespace: string): boolean {
    return this.i18n.hasResourceBundle(this.i18n.language, namespace);
  }

  private static i18n = i18n;
  private constructor() {}
}
