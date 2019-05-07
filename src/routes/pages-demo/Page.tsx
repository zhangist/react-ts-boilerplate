import * as React from "react";
import { Route, Link } from "react-router-dom";
import PageA from "./PageA";
import PageBVeryBigLoader from "./PageBVeryBigLoader";

export default class Page extends React.Component {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>Pages Demo</div>
        <div style={{ padding: "10px 8px" }}>
          <Link to="/pages-demo/a">Page A</Link>
          &nbsp;
          <Link to="/pages-demo/b">Page B</Link>
        </div>
        <div style={{ padding: "10px 8px" }}>
          <Route path="/pages-demo/a" exact={true} component={PageA} />
          <Route
            path="/pages-demo/b"
            exact={true}
            component={PageBVeryBigLoader}
          />
        </div>
      </div>
    );
  }
}
