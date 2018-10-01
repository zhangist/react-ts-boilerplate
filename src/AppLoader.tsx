import * as React from "react";
import * as Loadable from "react-loadable";
import i18n from "./common/i18n";
import createLoadableLoading from "./common/createLoadableLoading";

export default () => {
    const LoadableComponent = Loadable.Map({
        loader: {
            Component: () => import(/* webpackChunkName: "app" */ "./containers/App"),
            i18n: () => fetch("/i18n/app/" + i18n.language.toLowerCase() + ".json").then(res => res.json()),
        },
        loading: createLoadableLoading,
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
