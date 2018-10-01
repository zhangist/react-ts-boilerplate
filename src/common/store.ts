import { Store as ReduxStore } from "redux";
import createStore from "./createStore";

export interface Store extends ReduxStore {
  asyncReducers?: { [key: string]: any };
}

const initialState = (window as any).__INITIAL_STATE__;
const store: Store = createStore(initialState);

export default store;
