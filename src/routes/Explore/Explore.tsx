import * as React from "react";
import * as Loadable from "react-loadable";

const LoadableComponent = Loadable({
  loader: () => import("./components/Explore"),
  loading: () => null,
});

export default class Explore extends React.Component {
  public render() {
    return <LoadableComponent />;
  }
}
