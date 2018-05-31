import * as React from "react";
import * as Loadable from "react-loadable";

export default () => {
  const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "homePageA" */ "./components/HomePageA"),
    loading: () => null,
  });

  class HomePageA extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return HomePageA;
};
