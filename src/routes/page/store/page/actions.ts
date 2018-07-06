import { COUNTER_INCREMENT } from "./actionTypes";

export function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value,
  };
}
