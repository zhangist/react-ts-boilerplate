import { ActionTypes } from "../../../enum/actionTypes";
import { State } from "./reducer";

export interface ResetStateAction {
  type: ActionTypes.ReduxDemo_ResetState;
  payload?: State;
}

export interface UpdateStateAction {
  type: ActionTypes.ReduxDemo_UpdateState;
  payload: Partial<State>;
}

export interface UpdateCounterAction {
  type: ActionTypes.ReduxDemo_UpdateCounter;
  payload: number;
}

export type Actions =
  | ResetStateAction
  | UpdateStateAction
  | UpdateCounterAction;

/**
 * reset state
 * @param state State
 */
export function resetState(state?: State): ResetStateAction {
  return {
    type: ActionTypes.ReduxDemo_ResetState,
    payload: state,
  };
}

/**
 * update state
 * @param state Partial<State>
 */
export function updateRedirectUrl(state: Partial<State>): UpdateStateAction {
  return {
    type: ActionTypes.ReduxDemo_UpdateState,
    payload: state,
  };
}

/**
 * update counter
 * @param value number
 */
export function updateCounter(value: number): UpdateCounterAction {
  return {
    type: ActionTypes.ReduxDemo_UpdateCounter,
    payload: value,
  };
}
