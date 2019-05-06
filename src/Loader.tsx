import * as React from "react";
import Loading from "./components/Loading";

const Component = React.lazy(() => import("./Page"));

export default class Loader extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Loading text="Loading page..." />}>
        <Component />
      </React.Suspense>
    );
  }
}
