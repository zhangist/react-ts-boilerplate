import * as React from "react";
import importI18nResource from "./common/importI18nResource";

const Component = React.lazy(() => import("./Page"));
const I18nResource = React.lazy(() => importI18nResource("app", "app"));

export default class Loader extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component />
        <I18nResource />
      </React.Suspense>
    );
  }
}
