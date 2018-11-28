import { Reducer } from "redux";
import store from "./store";
import createRootReducer from "./createRootReducer";

export interface Params {
  key: string;
  reducer: Reducer;
}

export default function injectReducer({ key, reducer }: Params) {
  if (!store.asyncReducers) {
    store.asyncReducers = {};
  }

  if (!store.asyncReducers[key]) {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createRootReducer(store.asyncReducers));
  }
}
