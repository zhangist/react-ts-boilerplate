import * as React from "react";
import { NavLink, Switch, Route } from "react-router-dom";
import styles from "./styles.less";
import DefaultLoader from "./routes/default/Loader";

export interface PageProps {}
export interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>
          <NavLink
            to="/url-params-demo"
            exact={true}
            activeClassName={styles.active}
          >
            Default
          </NavLink>
          <span> / </span>
          <NavLink
            to="/url-params-demo/1"
            exact={true}
            activeClassName={styles.active}
          >
            Param 1
          </NavLink>
          <span> / </span>
          <NavLink
            to="/url-params-demo/2"
            exact={true}
            activeClassName={styles.active}
          >
            Param 2
          </NavLink>
        </div>
        <Switch>
          <Route
            path="/url-params-demo/:param"
            exact={true}
            component={DefaultLoader}
          />
          <Route
            path="/url-params-demo"
            exact={true}
            component={DefaultLoader}
          />
        </Switch>
      </div>
    );
  }
}

export default Page;
