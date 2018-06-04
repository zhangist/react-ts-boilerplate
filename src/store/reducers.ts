import { combineReducers } from "redux";
import locationReducer from "./location";

export const makeRootReducer = (asyncReducers: any) => {
  return combineReducers({
    location: locationReducer,
    ...asyncReducers,
  });
};

export const injectReducer = (store: any, { key, reducer }: any) => {
  if (!store.asyncReducers) {
    store.asyncReducers = {};
  }
  store.asyncReducers[key] = reducer;
  store.replaceReducer(makeRootReducer(store.asyncReducers));
};

export default makeRootReducer;
