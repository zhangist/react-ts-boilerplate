import * as React from "react";
import * as App from "../../../../components/app";

export default class Page extends React.Component {
  public render() {
    return (
      <App.Content>
        <App.PageTitle>User Settings</App.PageTitle>
        <div>User settings content.</div>
      </App.Content>
    );
  }
}
