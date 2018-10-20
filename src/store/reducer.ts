import { Map, fromJS } from "immutable";

export type InitialState = {};
export const initialState: InitialState = {};

export type $$InitialState = Map<keyof InitialState, any>;
export const $$initialState: $$InitialState = fromJS(initialState);

const ACTION_HANDLERS = {};

export default function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
