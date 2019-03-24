import i18n from "./i18n";

export default (path: string, key: string) =>
  new Promise<any>(async (resolve, reject) => {
    try {
      const all = await Promise.all([
        import("./Empty"),
        fetch("/i18n/" + path + "/" + i18n.language.toLowerCase() + ".json").then(res => res.json()),
      ]);
      i18n.addResources(i18n.language, key, all[1]);
      resolve(all[0]);
    } catch (error) {
      reject(error);
    }
  });
