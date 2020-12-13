import { userReducers } from './user.reducers';
import { UserState } from './user.state';
import { UserActionTypes } from './user.actions';

describe('User Reducers', () => {
  const reducers = userReducers;
  const users: User[] = [{
    username: 'JohnDoe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@dodo.fr'
  }];
  let initialState: UserState;
  let anotherInitialState: UserState;

  beforeEach(() => {
    initialState = {
      users: []
    };
    anotherInitialState = {
      users
    };
  });
  
  it('should initialize state', () => {
    const state = reducers(undefined, {
      type: 'UNKNOWN'
    });

    expect(state).toEqual(initialState);
  });

  it('should update state when fetch users success action', () => {
    const action = {
      type: UserActionTypes.FETCH_USERS_SUCCESS,
      payload: users
    };

    const state = reducers(initialState, action);

    expect(state).toEqual(anotherInitialState);
  });

  it('should update state when fetch users failure action', () => {
    const action = {
      type: UserActionTypes.FETCH_USERS_FAILURE,
      payload: 'Error'
    };

    const state = reducers(anotherInitialState, action);

    expect(state).toEqual(initialState);
  });
});
