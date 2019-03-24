import * as React from "react";
import * as App from "../../../../components/app";

export default class Page extends React.Component {
  public render() {
    return (
      <div>
        <App.Header />
        <App.Content>
          <App.PageTitle>Default Page</App.PageTitle>
          <div>default page content.</div>
        </App.Content>
      </div>
    );
  }
}
