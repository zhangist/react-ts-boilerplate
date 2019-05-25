import * as React from "react";
import { Switch, Route, NavLink } from "react-router-dom";
import styles from "./styles.less";
import DefaultLoader from "./routes/default/Loader";
import ALoader from "./routes/a/Loader";
import BLoader from "./routes/b/Loader";

export default class Page extends React.Component {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>
          <NavLink
            to="/pages-demo"
            exact={true}
            activeClassName={styles.active}
          >
            Default
          </NavLink>
          <span> / </span>
          <NavLink
            to="/pages-demo/a"
            exact={true}
            activeClassName={styles.active}
          >
            Page A
          </NavLink>
          <span> / </span>
          <NavLink
            to="/pages-demo/b"
            exact={true}
            activeClassName={styles.active}
          >
            Page B
          </NavLink>
        </div>
        <div style={{ padding: "10px 8px" }}>
          <Switch>
            <Route path="/pages-demo" exact={true} component={DefaultLoader} />
            <Route path="/pages-demo/a" exact={true} component={ALoader} />
            <Route path="/pages-demo/b" exact={true} component={BLoader} />
            <Route
              path="/pages-demo/:any"
              component={() => <div>Not Found.</div>}
            />
          </Switch>
        </div>
      </div>
    );
  }
}