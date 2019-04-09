import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";

export interface PageProps extends RouteComponentProps<{ param?: string }> {}
export interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  public render() {
    return (
      <div>
        <div style={{ padding: "10px 8px" }}>Url Params Demo</div>
        <div style={{ padding: "10px 8px" }}>
          <Link to="/url-params-demo/1">param-1</Link>
          <br />
          <Link to="/url-params-demo/2">param-2</Link>
        </div>
        <div style={{ padding: "10px 8px" }}>
          <div>current param: {this.props.match.params.param}</div>
        </div>
      </div>
    );
  }
}

export default withRouter(Page);
