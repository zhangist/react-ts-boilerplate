import {
  Store,
  Action,
  Reducer,
  createStore,
  compose,
  applyMiddleware,
  combineReducers,
} from "redux";
import thunk from "redux-thunk";
import { ReducerKeys } from "../enum/reducerKeys";

/**
 * store service
 */
export class StoreService {
  /**
   * get store
   */
  public static getStore(): Store<{}, Action<any>> {
    if (!this.store) {
      this.store = createStore(() => ({}), {}, compose(applyMiddleware(thunk)));
    }
    return this.store;
  }

  /**
   * inject reducer
   * @param key ReducerKeys
   * @param reducer Reducer
   */
  public static injectReducer(key: ReducerKeys, reducer: Reducer): void {
    this.reducers[key] = reducer;
    this.store.replaceReducer(combineReducers(this.reducers));
  }

  /**
   * delete reducer
   * @param key ReducerKeys
   */
  public static deleteReducer(key: ReducerKeys): void {
    if (typeof this.reducers[key] !== "undefined") {
      delete this.reducers[key];
      this.store.replaceReducer(combineReducers(this.reducers));
    }
  }

  private static store: Store<{}, Action<any>>;
  private static reducers = {};
  private constructor() {}
}
