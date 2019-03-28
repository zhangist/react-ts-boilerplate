import { UPDATE_COUNTER } from "./actionTypes";

/**
 * update counter
 * @param value number
 */
export function updateCounter(value: number) {
  return {
    type: UPDATE_COUNTER,
    payload: value,
  };
}
