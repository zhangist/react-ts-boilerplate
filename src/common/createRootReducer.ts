import { combineReducers } from "redux-immutable";
import reducer from "../store/reducer";

export default function createRootReducer(asyncReducers: any) {
  return combineReducers({
    app: reducer,
    ...asyncReducers,
  });
}
