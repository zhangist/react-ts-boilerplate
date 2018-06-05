import { EXPLORE } from "./actionTypes";

export type ReducerState = string;

const ACTION_HANDLERS = {
  [EXPLORE]: (state: any, action: any) => action.payload,
};

const initialState: ReducerState = "";

export default function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
