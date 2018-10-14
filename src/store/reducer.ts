import { Map, fromJS } from "immutable";

export type InitialStateType = {};
export type InitialState = Map<keyof InitialStateType, any>;

const initialState: InitialState = fromJS({});
export { initialState };

const ACTION_HANDLERS = {};

export default function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
