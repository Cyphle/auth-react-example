export const ActionTypes = {
  MOCK_INIT_DATA: '[Portfolio] Init mock data',
  MOCK_ADD_PROJECT: '[Portfolio] Add project'
};

export interface MockAction {
  type: string;
  payload: any;
}
