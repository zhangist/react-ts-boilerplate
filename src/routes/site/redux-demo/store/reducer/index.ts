import { Map, fromJS } from "immutable";
import { UPDATE_COUNTER } from "../actionTypes";
import counter, { Counter } from "./counter";
import friends, { Friends } from "./friends";
import hello, { Hello } from "./hello";
import profile, { Profile } from "./profile";

export interface IReduxState {
  counter: Counter;
  friends: Friends;
  hello: Hello;
  profile: Profile;
}

export type ReduxState = Map<keyof IReduxState, IReduxState[keyof IReduxState]>;

export const initialState: ReduxState = fromJS({
  counter,
  friends,
  hello,
  profile,
});

const ACTION_HANDLERS = {
  [UPDATE_COUNTER]: (state: any, action: any) => state.set("counter", action.payload),
};

export default function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
