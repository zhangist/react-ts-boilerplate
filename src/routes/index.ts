import defaultRoutes from "./default/routes";
import pageRoutes from "./page/routes";
import exploreRoutes from "./explore/routes";
import aboutRoutes from "./about/routes";

const createRoutes = (store: any) => {
  return [
    defaultRoutes(store),
    ...pageRoutes(store),
    exploreRoutes(store),
    aboutRoutes(store),
  ];
};

export default createRoutes;
