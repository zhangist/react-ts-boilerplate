import * as React from "react";
import Loading from "./components/Loading";

const Component = React.lazy(() =>
  import(/* webpackChunkName: "route" */ "./Page"),
);
const WhiteTheme = React.lazy(() =>
  import(/* webpackChunkName: "theme_white" */ "./components/themes/White"),
);
const BlackTheme = React.lazy(() =>
  import(/* webpackChunkName: "theme_black" */ "./components/themes/Black"),
);

export default class Loader extends React.Component {
  public render() {
    const theme = Math.random() > 0 ? <WhiteTheme /> : <BlackTheme />;
    return (
      <React.Suspense fallback={<Loading />}>
        {theme}
        <Component />
      </React.Suspense>
    );
  }
}
