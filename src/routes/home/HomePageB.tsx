import * as React from "react";
import * as Loadable from "react-loadable";
import Loading from "../../components/Loading";

export default () => {
  const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "homePageB" */ "./components/HomePageB"),
    loading: (props) => props.pastDelay ? <Loading /> : null,
  });

  class Component extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return Component;
};
