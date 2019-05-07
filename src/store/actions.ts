import { ActionTypes } from "../enum/actionTypes";
import { State } from "./reducer";

export interface ResetStateAction {
  type: ActionTypes.App_ResetState;
  payload?: State;
}

export interface UpdateStateAction {
  type: ActionTypes.App_UpdateState;
  payload: Partial<State>;
}

export type Actions = ResetStateAction | UpdateStateAction;

/**
 * reset state
 * @param state State
 */
export function resetState(state?: State): ResetStateAction {
  return {
    type: ActionTypes.App_ResetState,
    payload: state,
  };
}

/**
 * update state
 * @param state Partial<State>
 */
export function updateState(state: Partial<State>): UpdateStateAction {
  return {
    type: ActionTypes.App_UpdateState,
    payload: state,
  };
}
