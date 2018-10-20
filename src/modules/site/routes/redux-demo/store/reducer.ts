import { Map, fromJS } from "immutable";
import { UPDATE_COUNTER } from "./actionTypes";
import { counter, Counter } from "./states/counter";
import { friends, Friends } from "./states/friends";
import { hello, Hello } from "./states/hello";
import { profile, Profile } from "./states/profile";

export type InitialState = {
  counter: Counter;
  friends: Friends;
  hello: Hello;
  profile: Profile;
};
export const initialState: InitialState = {
  counter,
  friends,
  hello,
  profile,
}

export type $$InitialState = Map<keyof InitialState, any>;
export const $$initialState: $$InitialState = fromJS(initialState);

const ACTION_HANDLERS = {
  [UPDATE_COUNTER]: (state: any, action: any) => state.set("counter", action.payload),
};

export default function reducer(state = $$initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
