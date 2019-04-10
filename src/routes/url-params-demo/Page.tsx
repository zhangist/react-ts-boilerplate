import * as React from "react";
import { Link, Switch, Route } from "react-router-dom";
import DefaultLoader from "./routes/default/Loader";

export interface PageProps {}
export interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>Url Params Demo</div>
        <div style={{ padding: "10px 8px" }}>
          <Link to="/url-params-demo">default</Link>
          &nbsp;
          <Link to="/url-params-demo/1">param-1</Link>
          &nbsp;
          <Link to="/url-params-demo/2">param-2</Link>
        </div>
        <Switch>
          <Route path="/url-params-demo/:param" exact={true} component={DefaultLoader} />
          <Route path="/url-params-demo" exact={true} component={DefaultLoader} />
        </Switch>
      </div>
    );
  }
}

export default Page;
