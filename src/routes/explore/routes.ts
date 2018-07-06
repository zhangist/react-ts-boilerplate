import ExploreLoader from "./ExploreLoader";

export default (store: any) => ({
  path: "/explore",
  component: ExploreLoader(store),
});
