import * as React from "react";
import * as Loadable from "react-loadable";
import { injectReducer } from "../../store/reducers";
import reducer from "./modules/explore/reducer";
import Loading from "../../components/Loading";

export default (store: any) => {
  const LoadableComponent = Loadable({
    loader: () =>
      import(/* webpackChunkName: "explore" */ "./containers/ExploreContainer"),
    loading: () => <Loading />,
    render: (loaded, props) => {
      // inject reducer
      injectReducer(store, { key: "explore", reducer });

      const Component = loaded.default;
      return <Component {...props} />;
    },
  });

  class Explore extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return Explore;
};
