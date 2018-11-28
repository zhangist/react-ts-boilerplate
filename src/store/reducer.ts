import { Map, fromJS } from "immutable";

export interface State {}
export const state: State = {};

export type $$State = Map<keyof State, any>;
export const $$state: $$State = fromJS(state);

const ACTION_HANDLERS = {};

export default function reducer($$s = $$state, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler($$s, action) : $$s;
}
