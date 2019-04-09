import {
  ResetStateAction,
  RESET_STATE,
  UpdateStateAction,
  UPDATE_STATE,
  UpdateCounterAction,
  UPDATE_COUNTER,
} from "./actionTypes";
import { State } from "./reducer";

/**
 * reset state
 * @param state State
 */
export function resetState(state?: State): ResetStateAction {
  return {
    type: RESET_STATE,
    payload: state,
  };
}

/**
 * update state
 * @param state Partial<State>
 */
export function updateRedirectUrl(state: Partial<State>): UpdateStateAction {
  return {
    type: UPDATE_STATE,
    payload: state,
  };
}

/**
 * update counter
 * @param value number
 */
export function updateCounter(value: number): UpdateCounterAction {
  return {
    type: UPDATE_COUNTER,
    payload: value,
  };
}
