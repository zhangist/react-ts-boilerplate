import DefaultLoader from "./default/Loader";
import PagesDemoLoader from "./pages-demo/Loader";
import ReduxDemoLoader from "./redux-demo/Loader";
import UrlParamsDemoLoader from "./url-params-demo/Loader";
import I18nDemoLoader from "./i18n-demo/Loader";

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
