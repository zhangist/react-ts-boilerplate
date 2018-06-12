import homeRoutes from "./home/routes";
import exploreRoutes from "./explore/routes";
import aboutRoutes from "./about/routes";

const createRoutes = (store: any) => {
  return [...homeRoutes(store), exploreRoutes(store), aboutRoutes(store)];
};

export default createRoutes;
