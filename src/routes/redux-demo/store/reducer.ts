import { RESET_STATE, UPDATE_STATE, UPDATE_COUNTER, ActionTypes } from "./actionTypes";
import { counter, Counter } from "./states/counter";
import { friends, Friends } from "./states/friends";
import { hello, Hello } from "./states/hello";
import { profile, Profile } from "./states/profile";

export const REDUCER_KEY = "site_reduxDemo";

export interface State {
  counter: Counter;
  friends: Friends;
  hello: Hello;
  profile: Profile;
}
export const initialState: State = {
  counter,
  friends,
  hello,
  profile,
};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case RESET_STATE:
      return action.payload || initialState;
    case UPDATE_STATE:
      return Object.assign({}, state, { ...action.payload });
    case UPDATE_COUNTER:
      return Object.assign({}, state, { counter: action.payload });
    default:
      return state;
  }
}
