import * as React from "react";
import * as Loadable from "react-loadable";
import { injectReducer } from "../../store/reducers";
import { reducer } from "./modules/home";

export default (store: any) => {
  // inject reducer
  injectReducer(store, { key: "home", reducer });

  const LoadableComponent = Loadable({
    loader: () =>
      import(/* webpackChunkName: "home" */ "./containers/HomeContainer"),
    loading: () => null,
  });

  class Home extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return Home;
};
