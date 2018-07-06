import HomeLoader from "./PageLoader";

export default (store: any) => [
  {
    path: "/page",
    component: HomeLoader(store),
  },
  {
    path: "/page/:id",
    component: HomeLoader(store),
  },
];
