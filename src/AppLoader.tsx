import * as React from "react";
import * as Loadable from "react-loadable";
import i18n from "./common/i18n";
import Loading from "./components/Loading";

export default () => {
  const LoadableComponent = Loadable.Map({
    loader: {
      Component: () => import(/* webpackChunkName: "app" */ "./containers/App"),
      i18n: () =>
        fetch("/i18n/app/" + i18n.language.toLowerCase() + ".json").then(res =>
          res.json(),
        ),
    },
    loading: (props: Loadable.LoadingComponentProps) => {
      if (props.error) {
        return (
          <div>
            Error! <button onClick={props.retry}>Retry</button>
          </div>
        );
      } else {
        return props.pastDelay ? <Loading /> : null;
      }
    },
    render: (loaded, props) => {
      // add i18n resources
      const i18nResources = loaded.i18n;

      const Component = loaded.Component.default;
      return <Component {...props} i18nResources={i18nResources} />;
    },
  });

  class Component extends React.Component {
    public render() {
      return <LoadableComponent />;
    }
  }

  return Component;
};
