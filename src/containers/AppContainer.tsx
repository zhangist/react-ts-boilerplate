import * as React from "react";
import { HashRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import Header from "../components/Header";
import createRoutes from "../routes";
import createStore from "../store/createStore";

const initialState = (window as any).__INITIAL_STATE__;
const store = createStore(initialState);
const routes = createRoutes(store);

const RouteWithSubRoutes = (route: any) => (
  <Route
    path={route.path}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

export default class AppContainer extends React.Component<any, any> {
  public render() {
    return (
      <Provider store={store}>
        <HashRouter>
          <div>
            <Header />
            <div className="content">
              {routes.map((route: any, index: number) => (
                <RouteWithSubRoutes key={index} {...route} />
              ))}
            </div>
          </div>
        </HashRouter>
      </Provider>
    );
  }
}
