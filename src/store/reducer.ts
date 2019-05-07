import { ActionTypes } from "../enum/actionTypes";
import { Actions } from "./actions";

export interface State {
  title: string;
}
export const initialState: State = {
  title: "React-ts-boilerplate",
};

export function reducer(state = initialState, action: Actions): State {
  switch (action.type) {
    case ActionTypes.App_ResetState: {
      return action.payload || initialState;
    }
    case ActionTypes.App_UpdateState: {
      return Object.assign({}, state, { ...action.payload });
    }
    default: {
      return state;
    }
  }
}
