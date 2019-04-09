import * as React from "react";
import importI18nResources from "../../common/importI18nResource";
import LazyLoading from "../../components/LazyLoading";

const I18nResource = React.lazy(() => importI18nResources("i18n-demo", "i18nDemo"));
const Component = React.lazy(() => import("./Page"));

export default class Loader extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<LazyLoading />}>
        <I18nResource />
        <Component />
      </React.Suspense>
    );
  }
}
