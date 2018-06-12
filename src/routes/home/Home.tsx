import * as React from "react";
import * as Loadable from "react-loadable";
import injectReducer from "../../common/injectReducer";
import Loading from "../../components/Loading";

export default (store: any) => {
  const LoadableComponent = Loadable({
    loader: () =>
      import(/* webpackChunkName: "home" */ "./containers/HomeContainer"),
    loading: (props) => props.pastDelay ? <Loading /> : null,
    render: (loaded, props) => {
      // inject reducer
      if (!store.asyncReducers || !store.asyncReducers["home"]) {
        const reducer = loaded.reducer;
        injectReducer(store, { key: "home", reducer });
      }
      const Component = loaded.default;
      return <Component {...props} />;
    },
  });

  class Component extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return Component;
};
