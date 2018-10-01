import { Map } from "immutable";
import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import createRootReducer from "./createRootReducer";

export default (initialState = Map({})) => {
  const middleware = [thunk];
  const enhancers: any = [];

  const store = createStore(
    createRootReducer({}),
    initialState,
    compose(
      applyMiddleware(...middleware),
      ...enhancers,
    ),
  );

  return store;
};
