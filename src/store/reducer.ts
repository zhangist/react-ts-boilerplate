import { ActionTypes, RESET_STATE, UPDATE_STATE } from "./actionTypes";

export const REDUCER_KEY = "app";

export interface State {
  title: string;
}
export const initialState: State = {
  title: "React-ts-boilerplate",
};

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
