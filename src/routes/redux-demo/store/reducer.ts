import { ActionTypes } from "../../../enum/actionTypes";
import { Profile } from "../interfaces/profile";
import { Actions } from "./actions";
import { counter } from "./states/counter";
import { friends } from "./states/friends";
import { hello } from "./states/hello";
import { profile } from "./states/profile";

export interface State {
  counter: number;
  hello: string;
  friends: string[];
  profile: Profile;
}
export const initialState: State = {
  counter,
  friends,
  hello,
  profile,
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.ReduxDemo_ResetState: {
      return action.payload || initialState;
    }
    case ActionTypes.ReduxDemo_UpdateState: {
      return Object.assign({}, state, { ...action.payload });
    }
    case ActionTypes.ReduxDemo_UpdateCounter: {
      return Object.assign({}, state, { counter: action.payload });
    }
    default: {
      return state;
    }
  }
}
