import { EXPLORE } from "./actionTypes";

export type ReducerState = {
  value: string;
};

const ACTION_HANDLERS = {
  [EXPLORE]: (state: any, action: any) => ({ value: action.payload }),
};

const initialState: ReducerState = {
  value: "",
};

export default function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
