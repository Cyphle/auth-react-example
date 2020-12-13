import { ActionTypes, MockAction } from './action-types.mock';

export const reducer = (state: any, action: MockAction): any  => {
  switch (action.type) {
    case ActionTypes.MOCK_INIT_DATA:
      return state[action.payload.type] = action.payload.data;
    default:
      return state;
  }
};
