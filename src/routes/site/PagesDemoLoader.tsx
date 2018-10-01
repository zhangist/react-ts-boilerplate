import * as React from "react";
import * as Loadable from "react-loadable";
import createLoadableLoading from "../../common/createLoadableLoading";

const LoadableComponent = Loadable({
  loader: () => import(/* webpackChunkName: "site_pages-demo" */ "./pages-demo/Page"),
  loading: createLoadableLoading,
});

export default class Loader extends React.Component {
  public render() {
    return <LoadableComponent />;
  }
}
