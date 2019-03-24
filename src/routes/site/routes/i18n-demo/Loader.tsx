import * as React from "react";
import importI18nResources from "../../../../common/importI18nResource";

const Component = React.lazy(() => import("./Page"));
const I18nResource = React.lazy(() => importI18nResources("site/i18n-demo", "i18nDemo"));

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
