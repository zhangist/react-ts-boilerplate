import { State } from "./reducer";

export const RESET_STATE = "REDUX_DEMO_RESET_STATE";
export interface ResetStateAction {
  type: typeof RESET_STATE;
  payload?: State;
}

export const UPDATE_STATE = "REDUX_DEMO__UPDATE_STATE";
export interface UpdateStateAction {
  type: typeof UPDATE_STATE;
  payload: Partial<State>;
}

export const UPDATE_COUNTER = "REDUX_DEMO_UPDATE_COUNTER";
export interface UpdateCounterAction {
  type: typeof UPDATE_COUNTER;
  payload: number;
}

export type ActionTypes = ResetStateAction | UpdateStateAction | UpdateCounterAction;
