import * as React from "react";
import * as Loadable from "react-loadable";
import { injectReducer } from "../../store/reducers";
import { reducer } from "./modules/explore";

export default (store: any) => {
  // inject reducer
  injectReducer(store, { key: "explore", reducer });

  const LoadableComponent = Loadable({
    loader: () =>
      import(/* webpackChunkName: "explore" */ "./components/Explore"),
    loading: () => null,
  });

  class Explore extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return Explore;
};
