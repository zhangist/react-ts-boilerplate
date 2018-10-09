import { Map, fromJS } from "immutable";
import { UPDATE_COUNTER } from "./actionTypes";
import counter from "./states/counter";
import friends from "./states/friends";
import hello from "./states/hello";
import profile from "./states/profile";

export type InitialState = Map<"counter" | "friends" | "hello" | "profile", any>;

export const initialState: InitialState = fromJS({
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
