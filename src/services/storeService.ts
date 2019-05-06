import { Reducer, createStore, compose, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";

const store = createStore(() => ({}), {}, compose(applyMiddleware(thunk)));
const reducers = {};

export class StoreService {
  /**
   * store
   */
  public static store = store;

  /**
   * inject reducer
   * @param key string
   * @param reducer Reducer
   */
  public static injectReducer(key: string, reducer: Reducer) {
    this.reducers[key] = reducer;
    this.store.replaceReducer(combineReducers(this.reducers));
  }

  /**
   * delete reducer
   * @param key string
   */
  public static deleteReducer(key: string) {
    if (typeof this.reducers[key] !== "undefined") {
      delete this.reducers[key];
      this.store.replaceReducer(combineReducers(this.reducers));
    }
  }

  private static reducers = reducers;
  private constructor() {}
}
