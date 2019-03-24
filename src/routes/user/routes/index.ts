import DefaultLoader from "./default/Loader";

export default [
  {
    path: "/user",
    component: DefaultLoader,
  },
  {
    path: "/user/:any",
    component: DefaultLoader,
  },
];
