import AboutLoader from "./AboutLoader";

export default (store: any) => ({
  path: "/about",
  component: AboutLoader(store),
});
