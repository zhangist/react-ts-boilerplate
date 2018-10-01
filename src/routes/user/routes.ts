import DefaultLoader from "./DefaultLoader";

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
