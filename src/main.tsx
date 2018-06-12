import * as React from "react";
import * as ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";

const MOUNT_NODE: any = document.getElementById("root");
const render = () => {
  ReactDOM.render(<AppContainer />, MOUNT_NODE);
};

if (process.env.NODE_ENV === "development") {
  if ((module as any).hot) {
    (module as any).hot.accept("./containers/AppContainer", () => {
      setImmediate(() => {
        ReactDOM.unmountComponentAtNode(MOUNT_NODE);
        render();
      });
    });
  }
}

render();
