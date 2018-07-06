import { COUNTER_INCREMENT } from "./actionTypes";

export interface ReducerState {
  counter: number;
}

const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state: any, action: any) => ({
    counter: state.counter + action.payload,
  }),
};

const initialState: ReducerState = { counter: 0 };

export default function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
