import { cold, hot } from 'jest-marbles';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { GlobalActionTypes, loadUserInfoAction } from './global.actions';
import { loadUserInfoEpic } from './global.epics';
import { Subject } from 'rxjs';
import { AppState } from '../../store';
import { UserInitialState } from '../../modules/user/store/user.state';
import { ClientInitialState } from '../../modules/client/store/client.state';

describe('GlobalEpics', () => {
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
        code: '',
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

  it('should dispatch load user info success action', () => {
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(userInfo) } });
    const action$ = new ActionsObservable(cold('-a', { a: loadUserInfoAction() }));

    const expectedAction$ = loadUserInfoEpic(mockGetRequest)(action$, state$);

    expect(expectedAction$).toBeObservable(cold('--a', {
      a: {
        type: GlobalActionTypes.LOAD_USER_INFO_SUCCESS,
        payload: userInfo
      }
    }));
  });

  it('should dispatch fetch users failure action', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: loadUserInfoAction() }));

    const expectedAction$ = loadUserInfoEpic(mockGetRequest)(action$, state$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: GlobalActionTypes.LOAD_USER_INFO_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });
});
