import { Map, fromJS } from "immutable";
import { UPDATE_COUNTER } from "./actionTypes";
import counter, { CounterType } from "./states/counter";
import friends, { FriendsType } from "./states/friends";
import hello, { HelloType } from "./states/hello";
import profile, { ProfileType } from "./states/profile";

export type InitialStateType = {
  counter: CounterType;
  friends: FriendsType;
  hello: HelloType;
  profile: ProfileType;
};
export type InitialState = Map<keyof InitialStateType, any>;

const initialState: InitialState = fromJS({
  counter,
  friends,
  hello,
  profile,
});
export { initialState };

const ACTION_HANDLERS = {
  [UPDATE_COUNTER]: (state: any, action: any) => state.set("counter", action.payload),
};

export default function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
