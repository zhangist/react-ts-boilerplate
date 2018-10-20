import { Store as ReduxStore } from "redux";
import createStore from "./createStore";

export type Store = ReduxStore & {
  asyncReducers?: { [key: string]: any };
};

const store: Store = createStore();

export default store;
