import i18next from "i18next";
import * as LanguageDetector from "i18next-browser-languagedetector";
import { FetchService } from "./fetchService";
import { I18nNamespaces } from "../enum/i18nNamespaces";

/**
 * i18n service
 */
export class I18nService {
  /**
   * get i18n
   */
  public static getI18n(): i18next.i18n {
    if (!this.i18n) {
      this.i18n = i18next.use(LanguageDetector);
      this.i18n.init({
        debug: process.env.NODE_ENV === "development",
        detection: { lookupCookie: "lng" },
        fallbackLng: "en",
        ns: ["app"],
        defaultNS: "app",
        resources: {},
      });
    }
    return this.i18n;
  }

  /**
   * add resource bundle
   * @param namespace string
   * @param path string
   */
  public static addResourceBundle(
    namespace: I18nNamespaces,
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
   * @param namespace I18nNamespaces
   */
  public static hasResourceBundle(namespace: I18nNamespaces): boolean {
    return this.i18n.hasResourceBundle(this.i18n.language, namespace);
  }

  private static i18n: i18next.i18n;
  private constructor() {}
}
