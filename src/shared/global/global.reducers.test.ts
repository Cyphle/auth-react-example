import { globalReducers } from './global.reducers';
import { GlobalState } from './global.state';
import { GlobalActionTypes } from './global.actions';

describe('GlobalReducer', () => {
  const reducers = globalReducers;
  const userInfo: UserInfo = {
    username: 'JohnDoe',
    firstName: 'John',
    lastName: 'Doe',
    authorities: []
  };
  let initialState: GlobalState;
  let anotherInitialState: GlobalState;

  beforeEach(() => {
    initialState = {
      userInfo: {
        username: '',
        firstName: '',
        lastName: '',
        authorities: []
      },
      currentOrganization: {
        code: '',
        name: '',
        logo: '',
        type: 'TERTIARY',
        applications: [],
        authorizedProperties: []
      },
      authStatus: 'PENDING'
    };
    anotherInitialState = {
      userInfo,
      currentOrganization: {
        code: '',
        name: '',
        logo: '',
        type: 'TERTIARY',
        applications: [],
        authorizedProperties: []
      },
      authStatus: 'AUTH'
    };
  });

  it('should initialize state', () => {
    const state = reducers(undefined, {
      type: 'UNKNOWN'
    });

    expect(state).toEqual(initialState);
  });

  it('should update state when load user info successs', () => {
    const action = {
      type: GlobalActionTypes.LOAD_USER_INFO_SUCCESS,
      payload: userInfo
    };

    const state = reducers(initialState, action);

    expect(state).toEqual({
      ...initialState,
      userInfo,
      authStatus: 'AUTH'
    });
  });
});
