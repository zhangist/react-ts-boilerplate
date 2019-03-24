import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import routes from "./routes";
import store from "./common/store";
import i18n from "./common/i18n";
import GlobalStyle from "./components/GlobalStyle";

const RouteWithSubRoutes = (route: any) => (
  <Route
    path={route.path}
    exact={true}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export interface AppProps {}
export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  public render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <BrowserRouter>
            <div className="app">
              {routes.map((route: any, index: number) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))}
              <GlobalStyle />
            </div>
          </BrowserRouter>
        </Provider>
      </I18nextProvider>
    );
  }
}
