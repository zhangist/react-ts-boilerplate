import { ActionTypes, RESET_STATE, UPDATE_STATE } from "./actionTypes";

export interface State {}
export const initialState: State = {};

export function reducer(state = initialState, action: ActionTypes): State {
  switch (action.type) {
    case RESET_STATE:
      return action.payload || initialState;
    case UPDATE_STATE:
      return Object.assign({}, state, { ...action.payload });
    default:
      return state;
  }
}
