import * as React from "react";
import { NavLink, Route, Switch } from "react-router-dom";
import NotFound from "../../components/NotFound";
import styles from "./styles.less";
import DefaultLoader from "./routes/default/Loader";
import ProfileLoader from "./routes/profile/Loader";
import SettingsLoader from "./routes/settings/Loader";

export default class Page extends React.Component {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>
          <NavLink to="/user" exact={true} activeClassName={styles.active}>
            Default
          </NavLink>
          <span> / </span>
          <NavLink
            to="/user/profile"
            exact={true}
            activeClassName={styles.active}
          >
            Profile
          </NavLink>
          <span> / </span>
          <NavLink
            to="/user/settings"
            exact={true}
            activeClassName={styles.active}
          >
            Settings
          </NavLink>
        </div>
        <div>
          <Switch>
            <Route path="/user" exact={true} component={DefaultLoader} />
            <Route
              path="/user/profile"
              exact={true}
              component={ProfileLoader}
            />
            <Route
              path="/user/settings"
              exact={true}
              component={SettingsLoader}
            />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    );
  }
}
