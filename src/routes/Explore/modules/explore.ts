// ------------------------------------
// Constants
// ------------------------------------
export const EXPLORE = "EXPLORE";

// ------------------------------------
// Actions
// ------------------------------------
export function explore(value = "explore") {
  return {
    type: EXPLORE,
    payload: value,
  };
}

export const actions = {
  explore,
};

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [EXPLORE]: (state: any, action: any) => action.payload,
};

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = "";
export function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];

  return handler ? handler(state, action) : state;
}
