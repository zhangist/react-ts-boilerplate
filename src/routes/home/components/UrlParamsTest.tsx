import * as React from "react";
import { Link } from "react-router-dom";

export interface UrlParamsTestProps {
  id: number;
}

export default ({ id }: UrlParamsTestProps) => (
  <div>
    <h3>url params test:</h3>
    <Link to="/home/1">Id-1</Link>
    &nbsp;
    <Link to="/home/2">Id-2</Link>
    <div>id: {id}</div>
  </div>
);
