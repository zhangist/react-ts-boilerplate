import { LOCATION_CHANGE } from "./actionTypes";

export function locationChange(location = "/") {
  return {
    type: LOCATION_CHANGE,
    payload: location,
  };
}
