import { combineReducers } from "redux";
import reducer from "../store/reducer";

export default function createRootReducer(asyncReducers: any) {
  return combineReducers({
    location: reducer,
    ...asyncReducers,
  });
}
