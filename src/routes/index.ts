import HomeRoute from "./Home/index";
import ExploreRoute from "./Explore/index";
import AboutRoute from "./About/index";

const createRoutes = (store: any) => {
  return [HomeRoute(store), ExploreRoute(store), AboutRoute(store)];
};

export default createRoutes;
