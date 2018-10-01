import DefaultLoader from "./DefaultLoader";
import PagesDemoLoader from "./PagesDemoLoader";
import ReduxDemoLoader from "./ReduxDemoLoader";
import UrlParamsDemoLoader from "./UrlParamsDemoLoader";
import I18nDemoLoader from "./I18nDemoLoader";

export default [
  {
    path: "/",
    component: DefaultLoader,
  },
  {
    path: "/i18n-demo",
    component: I18nDemoLoader,
  },
  {
    path: "/pages-demo",
    component: PagesDemoLoader,
  },
  {
    path: "/pages-demo/:pageId",
    component: PagesDemoLoader,
  },
  {
    path: "/redux-demo",
    component: ReduxDemoLoader,
  },
  {
    path: "/url-params-demo",
    component: UrlParamsDemoLoader,
  },
  {
    path: "/url-params-demo/:param",
    component: UrlParamsDemoLoader,
  },
];
