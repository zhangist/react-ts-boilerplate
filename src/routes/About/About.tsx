import * as React from "react";
import * as Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./components/About"),
  loading: () => null,
});

export default class About extends React.Component {
  public render() {
    return <LoadableComponent />;
  }
}
