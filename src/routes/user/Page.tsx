import * as React from "react";
import { Route, Link, Switch } from "react-router-dom";
import DefaultLoader from "./routes/default/Loader";
import ProfileLoader from "./routes/profile/Loader";
import SettingsLoader from "./routes/settings/Loader";

export default class Page extends React.Component {
  public render() {
    return (
      <div className="__user">
        <div style={{ padding: "10px 8px" }}>User Page</div>
        <div style={{ padding: "10px 8px" }}>
          <Link to="/user">Default</Link>
          &nbsp;
          <Link to="/user/profile">Profile</Link>
          &nbsp;
          <Link to="/user/settings">settings</Link>
        </div>
        <div>
          <Switch>
            <Route path="/user" exact={true} component={DefaultLoader} />
            <Route path="/user/profile" component={ProfileLoader} />
            <Route path="/user/settings" component={SettingsLoader} />
          </Switch>
        </div>
      </div>
    );
  }
}
