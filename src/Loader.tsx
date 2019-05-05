import * as React from "react";
import { I18nService } from "./services/i18n";
import LazyLoading from "./components/LazyLoading";

const I18nResource = React.lazy(() => I18nService.importI18nResources("app", "app"));
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
