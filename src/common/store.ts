import { Store as ReduxStore } from "redux";
import createStore from "./createStore";

export interface Store extends ReduxStore {
  asyncReducers?: { [key: string]: any };
}

const store: Store = createStore();

export default store;
