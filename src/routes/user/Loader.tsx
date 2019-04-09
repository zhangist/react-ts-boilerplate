import * as React from "react";
import LazyLoading from "../../components/LazyLoading";

const Component = React.lazy(() => import("./Page"));

export default class Loader extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<LazyLoading />}>
        <Component />
      </React.Suspense>
    );
  }
}
