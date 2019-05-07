import {
  Reducer,
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";

const store = createStore(() => ({}), {}, compose(applyMiddleware(thunk)));
const reducers = {};

/**
 * store service
 */
export class StoreService {
  /**
   * get store
   */
  public static getStore() {
    return this.store;
  }

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

  private static store = store;
  private static reducers = reducers;
  private constructor() {}
}
