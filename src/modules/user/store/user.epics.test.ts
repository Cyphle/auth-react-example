import { cold, hot } from 'jest-marbles';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { fetchUsersAction, UserActionTypes } from './user.actions';
import { fetchUsersEpic } from './user.epics';
import { AppState } from '../../../store';
import { UserInitialState } from './user.state';
import { ClientInitialState } from '../../client/store/client.state';
import { Subject } from 'rxjs';

describe('User Epics', () => {
  let mockGetRequest: any;
  const userInfo: UserInfo = {
    username: 'john.doe@dodo.fr',
    firstName: 'John',
    lastName: 'Doe',
    authorities: []
  };
  const appInitialState: AppState = {
    globalState: {
      userInfo,
      currentOrganization: {
        code: 'ORGA',
        name: '',
        logo: '',
        type: 'TERTIARY',
        applications: [],
        authorizedProperties: []
      },
      authStatus: 'AUTH'
    },
    userState: UserInitialState,
    clientState: ClientInitialState
  };
  const state$ = new StateObservable(new Subject<AppState>(), appInitialState);

  it('should dispatch fetch user success action', () => {
    const users: User[] = [{
      account: {
        email: 'john.doe@dodo.fr',
        firstName: 'John',
        lastName: 'Doe'
      },
      authorities: []
    }];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(users) } });
    const action$ = new ActionsObservable(cold('-a', { a: fetchUsersAction() }));

    const expectedAction$ = fetchUsersEpic(mockGetRequest)(action$, state$);

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

    const expectedAction$ = fetchUsersEpic(mockGetRequest)(action$, state$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: UserActionTypes.FETCH_USERS_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });
});
