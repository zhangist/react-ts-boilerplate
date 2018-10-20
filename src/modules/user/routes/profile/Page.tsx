import * as React from "react";
import * as App from "../../../../components/app";

export default class Page extends React.Component {
  public render() {
    return (
      <App.Content>
        <App.PageTitle>User Profile</App.PageTitle>
        <div>User profile content.</div>
      </App.Content>
    );
  }
}
