import * as React from "react";
import * as ReactDOM from "react-dom";
import AppContainer from "./containers/AppContainer";
// import { Provider } from "react-redux";
// import createRoutes from "./routes";
// import createStore from "./store/createStore";

// const initialState = (window as any).__INITIAL_STATE__;
// const store = createStore(initialState);

// const routes = createRoutes(store);

const MOUNT_NODE: any = document.getElementById("root");
const render = () => {
  ReactDOM.render(
    // <Provider store={store}>
    <AppContainer />,
    // </Provider>
    MOUNT_NODE,
  );
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
