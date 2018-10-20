import { UPDATE_COUNTER } from "./actionTypes";

/**
 * update counter
 * @param value number
 */
export function updateCounter(value = 0) {
  return {
    type: UPDATE_COUNTER,
    payload: value,
  };
}
