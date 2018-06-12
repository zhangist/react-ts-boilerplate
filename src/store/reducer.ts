import { LOCATION_CHANGE } from "./actionTypes";
import { locationChange } from "./actions";

export type ReducerState = string;

export function updateLocation({ dispatch }: any) {
  return (nextLocation: any) => dispatch(locationChange(nextLocation));
}

const initialState: ReducerState = "";

export default function reducer(state = initialState, action: any) {
  return action.type === LOCATION_CHANGE ? action.payload : state;
}
