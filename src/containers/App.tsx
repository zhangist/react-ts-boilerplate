import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import routes from "../routes";
import store from "../common/store";
import i18n from "../common/i18n";
import "../components/globalStyle";

const RouteWithSubRoutes = (route: any) => (
  <Route
    path={route.path}
    exact
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export interface AppProps {
  i18nResources: any;
}

export default class AppContainer extends React.Component<AppProps, any> {
  constructor(props: AppProps) {
    super(props);

    const { i18nResources } = props;
    i18n.addResources(i18n.language, "app", i18nResources);
  }

  public render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <BrowserRouter>
            <div className="app">
              {routes.map((route: any, index: number) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))}
            </div>
          </BrowserRouter>
        </Provider>
      </I18nextProvider>
    );
  }
}
