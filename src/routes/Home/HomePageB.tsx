import * as React from "react";
import * as Loadable from "react-loadable";
import Loading from "../../components/Loading";

export default () => {
  const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "homePageB" */ "./components/HomePageB"),
    loading: () => <Loading />,
  });

  class HomePageB extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return HomePageB;
};
