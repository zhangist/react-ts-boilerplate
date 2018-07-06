import * as React from "react";
import * as Loadable from "react-loadable";
import Loading from "../../components/Loading";

export default (store: any) => {
  const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "about" */ "./containers/About"),
    loading: props => (props.pastDelay ? <Loading /> : null),
  });

  class Component extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return Component;
};
