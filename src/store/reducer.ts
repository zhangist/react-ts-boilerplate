export interface State {}
export const state: State = {};

const ACTION_HANDLERS = {};

export default function reducer(s = state, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(s, action) : s;
}
