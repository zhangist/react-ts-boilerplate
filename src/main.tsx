import * as React from "react";
import * as ReactDOM from "react-dom";
import AppLoader from "./AppLoader";

let App = AppLoader();
const MOUNT_NODE: any = document.getElementById("root");
const render = () => {
  ReactDOM.render(<App />, MOUNT_NODE);
};

if ((module as any).hot) {
  (module as any).hot.accept("./AppLoader", () => {
    const NextAppLoader = require("./AppLoader").default;
    App = NextAppLoader();
    setImmediate(() => {
      ReactDOM.unmountComponentAtNode(MOUNT_NODE);
      render();
    });
  });
}

render();
