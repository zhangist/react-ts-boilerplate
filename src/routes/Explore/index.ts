import Explore from "./Explore";

export default (store: any) => ({
  path: "/explore",
  component: Explore(store),
});
