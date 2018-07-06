import * as React from "react";
import { Route, Link } from "react-router-dom";
import PageA from "../PageALoader";
import PageB from "../PageBLoader";

export default () => (
  <div>
    <h3>sub-page test:</h3>
    <Link to="/page/a">Page A</Link>
    &nbsp;
    <Link to="/page/b">Page B</Link>
    <Route path="/page/a" exact component={PageA()} />
    <Route path="/page/b" exact component={PageB()} />
  </div>
);
