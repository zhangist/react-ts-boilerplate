export interface IReducerState {}

const initialState: IReducerState = {};

const ACTION_HANDLERS = {};

export default function reducer(state = initialState, action: any) {
  const handler = ACTION_HANDLERS[action.type];
  return handler ? handler(state, action) : state;
}
