import * as React from "react";
import * as Loadable from "react-loadable";

export default (store: any) => {
  const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ "./components/About"),
    loading: () => null,
  });

  class About extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return About;
};
