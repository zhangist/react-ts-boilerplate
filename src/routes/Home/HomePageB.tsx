import * as React from "react";
import * as Loadable from "react-loadable";

export default () => {
  const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "homePageB" */ "./components/HomePageB"),
    loading: () => null,
  });

  class HomePageB extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return HomePageB;
};
