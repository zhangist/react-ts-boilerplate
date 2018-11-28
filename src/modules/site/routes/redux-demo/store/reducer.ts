import { Map, fromJS } from "immutable";
import { UPDATE_COUNTER } from "./actionTypes";
import { counter, Counter } from "./states/counter";
import { friends, Friends } from "./states/friends";
import { hello, Hello } from "./states/hello";
import { profile, Profile } from "./states/profile";

export interface State {
  counter: Counter;
  friends: Friends;
  hello: Hello;
  profile: Profile;
}
export const state: State = {
  counter,
  friends,
  hello,
  profile,
};

export type $$State = Map<keyof State, any>;
export const $$state: $$State = fromJS(state);

const ACTION_HANDLERS = {
  [UPDATE_COUNTER]: ($$s: $$State, action: any) => $$s.set("counter", action.payload),
};

export default function reducer($$s = $$state, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler($$s, action) : $$s;
}
