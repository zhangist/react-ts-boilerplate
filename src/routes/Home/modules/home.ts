// ------------------------------------
// Constants
// ------------------------------------
export const COUNTER_INCREMENT = "COUNTER_INCREMENT";

// ------------------------------------
// Actions
// ------------------------------------
export function increment(value = 1) {
  return {
    type: COUNTER_INCREMENT,
    payload: value,
  };
}

export const actions = {
  increment,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [COUNTER_INCREMENT]: (state: any, action: any) => ({ counter: state.counter + action.payload }),
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = { counter: 0 };
export function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
