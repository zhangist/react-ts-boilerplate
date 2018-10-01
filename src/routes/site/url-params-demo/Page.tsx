import * as React from "react";
import { Link, RouteComponentProps, withRouter } from "react-router-dom";
import * as App from "../../../components/app";

interface OwnProps extends RouteComponentProps<{ param?: string }> {}
interface PageProps extends OwnProps {}
interface PageState {}

class Page extends React.Component<PageProps, PageState> {
  public render() {
    return (
      <div>
        <App.Header />
        <App.Content>
          <App.PageTitle>Url Params Demo</App.PageTitle>
          <section>
            <Link to="/url-params-demo/1">param-1</Link>
            <br />
            <Link to="/url-params-demo/2">param-2</Link>
          </section>
          <section>
            <div>current param: {this.props.match.params.param}</div>
          </section>
        </App.Content>
      </div>
    );
  }
}

export default withRouter(Page);
