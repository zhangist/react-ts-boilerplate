import { State } from "./reducer";

export const RESET_STATE = "APP_RESET_STATE";
export interface ResetStateAction {
  type: typeof RESET_STATE;
  payload?: State;
}

export const UPDATE_STATE = "APP_UPDATE_STATE";
export interface UpdateStateAction {
  type: typeof UPDATE_STATE;
  payload: Partial<State>;
}

export type ActionTypes = ResetStateAction | UpdateStateAction;
