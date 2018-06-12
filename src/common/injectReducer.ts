import createRootReducer from "./createRootReducer";

export default function injectReducer(store: any, { key, reducer }: any) {
  if (!store.asyncReducers) {
    store.asyncReducers = {};
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(createRootReducer(store.asyncReducers));
}
