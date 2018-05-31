import * as React from "react";
import * as Loadable from "react-loadable";
import { injectReducer } from "../../store/reducers";
import { reducer } from "./modules/home";

export default (store: any) => {
  const LoadableComponent = Loadable({
    loader: () =>
      import(/* webpackChunkName: "home" */ "./containers/HomeContainer"),
    loading: () => null,
    render: (loaded, props) => {
      // inject reducer
      injectReducer(store, { key: "home", reducer });

      const Component = loaded.default;
      return <Component {...props} />;
    },
  });

  class Home extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return Home;
};