import * as React from "react";
import * as Loadable from "react-loadable";
import Loading from "../../components/Loading";

export default () => {
  const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "homePageA" */ "./components/HomePageA"),
    loading: () => <Loading />,
  });

  class HomePageA extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return HomePageA;
};
