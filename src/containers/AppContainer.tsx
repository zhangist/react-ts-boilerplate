import * as React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// import createBrowserHistory from "history/createBrowserHistory";
import { Provider } from "react-redux";
import createRoutes from "../routes";
import createStore from "../common/createStore";
import Header from "../components/Header";
import "../components/Styled/GlobalStyle";

const initialState = (window as any).__INITIAL_STATE__;
const store = createStore(initialState);
const routes = createRoutes(store);
// const history = createBrowserHistory();

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

export default class AppContainer extends React.Component<any, any> {
  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Header />
            {routes.map((route: any, index: number) => (
              <RouteWithSubRoutes key={index} {...route} />
            ))}
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}
