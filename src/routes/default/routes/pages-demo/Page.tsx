import * as React from "react";
import { Route, Link } from "react-router-dom";
import * as App from "../../../../components/app";
import PageA from "./PageA";
import PageBVeryBigLoader from "./PageBVeryBigLoader";

export default class Page extends React.Component {
  public render() {
    return (
      <div>
        <App.Header />
        <App.Content>
          <App.PageTitle>Pages Demo</App.PageTitle>
          <div>
            <Link to="/pages-demo/a">Page A</Link>
            <br />
            <Link to="/pages-demo/b">Page B</Link>
          </div>
          <div>
            <Route path="/pages-demo/a" exact={true} component={PageA} />
            <Route path="/pages-demo/b" exact={true} component={PageBVeryBigLoader} />
          </div>
        </App.Content>
      </div>
    );
  }
}
