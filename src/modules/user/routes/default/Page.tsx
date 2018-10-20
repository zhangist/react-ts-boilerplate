import * as React from "react";
import { Route, Link } from "react-router-dom";
import * as App from "../../../../components/app";
import ProfileLoader from "../ProfileLoader";
import SettingsLoader from "../SettingsLoader";

export default class Page extends React.Component {
  public render() {
    return (
      <div>
        <App.Header />
        <div>
          <App.Content>
            <App.PageTitle>User Page</App.PageTitle>
            <div>
              <Link to="/user/profile">Profile</Link>
              &nbsp;
              <Link to="/user/settings">settings</Link>
            </div>
          </App.Content>
          <div>
            <Route path="/user/profile" exact component={ProfileLoader} />
            <Route path="/user/settings" exact component={SettingsLoader} />
          </div>
        </div>
      </div>
    );
  }
}
