import { cold, hot } from 'jest-marbles';
import { ActionsObservable } from 'redux-observable';
import { fetchUsersAction, UserActionTypes } from './user.actions';
import { fetchUsersEpic } from './user.epics';

describe('User Epics', () => {
  let mockGetRequest: any;

  it('should dispatch fetch user success action', () => {
    const users: User[] = [{
      username: 'JohnDoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@dodo.fr'
    }];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(users) } });
    const action$ = new ActionsObservable(cold('-a', { a: fetchUsersAction() }));

    const expectedAction$ = fetchUsersEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(cold('--a', {
      a: {
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: users
      }
    }));
  });

  it('should dispatch fetch users failure action', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: fetchUsersAction() }));

    const expectedAction$ = fetchUsersEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: UserActionTypes.FETCH_USERS_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });
});
