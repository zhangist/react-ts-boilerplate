import * as React from "react";
import { Route, Link } from "react-router-dom";
import HomePageA from "../HomePageA";
import HomePageB from "../HomePageB";

export default () => (
  <div>
    <h3>sub-page test:</h3>
    <Link to="/home/page-a">Home Page A</Link>
    &nbsp;
    <Link to="/home/page-b">Home Page B</Link>
    <Route path="/home/page-a" exact component={HomePageA()} />
    <Route path="/home/page-b" exact component={HomePageB()} />
  </div>
);
