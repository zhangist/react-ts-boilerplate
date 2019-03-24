import * as React from "react";

const Component = React.lazy(() => import("./Page"));

export default class Loader extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<div>Loading...</div>}>
        <Component />
      </React.Suspense>
    );
  }
}
