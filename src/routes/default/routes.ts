import DefaultLoader from "./DefaultLoader";

export default (store: any) => ({
  path: "/",
  component: DefaultLoader(store),
});
