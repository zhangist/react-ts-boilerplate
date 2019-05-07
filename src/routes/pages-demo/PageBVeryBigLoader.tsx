import * as React from "react";
import Loading from "../../components/Loading";

const Component = React.lazy(() => import("./PageBVeryBig"));

export default class Loader extends React.Component {
  public render() {
    return (
      <React.Suspense fallback={<Loading />}>
        <Component />
      </React.Suspense>
    );
  }
}
