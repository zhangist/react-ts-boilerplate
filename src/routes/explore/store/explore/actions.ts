import { EXPLORE } from "./actionTypes";

export function explore(value = "explore") {
  return {
    type: EXPLORE,
    payload: value,
  };
}
