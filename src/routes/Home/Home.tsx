import * as React from "react";
import * as Loadable from "react-loadable";
import { injectReducer } from "../../store/reducers";
import homeReducer from "./modules/homeReducer";

export default (store: any) => {
  const LoadableComponent = Loadable({
    loader: () => import(/* webpackChunkName: "home" */ "./containers/HomeContainer"),
    loading: () => null,
    render: (loaded, props) => {
      // inject reducer
      injectReducer(store, { key: "home", reducer: homeReducer });

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
