import * as React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import { Provider } from "react-redux";
import store from "./common/store";
import i18n from "./common/i18n";
import GlobalStyle from "./components/GlobalStyle";
import Header from "./components/Header";
import NotFound from "./components/NotFound";
import DefaultLoader from "./routes/default/Loader";
import I18nDemoLoader from "./routes/i18n-demo/Loader";
import PagesDemoLoader from "./routes/pages-demo/Loader";
import ReduxDemoLoader from "./routes/redux-demo/Loader";
import UrlParamsDemoLoader from "./routes/url-params-demo/Loader";
import UserLoader from "./routes/user/Loader";

export interface AppProps {}
export interface AppState {}

export default class App extends React.Component<AppProps, AppState> {
  public render() {
    return (
      <I18nextProvider i18n={i18n}>
        <Provider store={store}>
          <BrowserRouter>
            <div className="app">
              <Header />
              <Switch>
                <Route path="/" exact={true} component={DefaultLoader} />
                <Route path="/i18n-demo" component={I18nDemoLoader} />
                <Route path="/pages-demo" component={PagesDemoLoader} />
                <Route path="/redux-demo" component={ReduxDemoLoader} />
                <Route path="/url-params-demo" component={UrlParamsDemoLoader} />
                <Route path="/user" component={UserLoader} />
                <Route component={NotFound} />
              </Switch>
              <GlobalStyle />
            </div>
          </BrowserRouter>
        </Provider>
      </I18nextProvider>
    );
  }
}
