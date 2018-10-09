import { Store } from "./store";
import createRootReducer from "./createRootReducer";

export default function injectReducer(store: Store, { key, reducer }: any) {
  if (!store.asyncReducers) {
    store.asyncReducers = {};
  }
  if (!store.asyncReducers[key]) {
    store.asyncReducers[key] = reducer;
    store.replaceReducer(createRootReducer(store.asyncReducers));
  }
}
