import { cold, hot } from 'jest-marbles';
import { ActionsObservable } from 'redux-observable';
import { ClientActionTypes, fetchClientsAction } from './client.actions';
import { fetchClientsEpic } from './client.epics';

describe('Client Epics', () => {
  let mockGetRequest: any;

  it('should dispatch fetch clients success action', () => {
    const clients: Client[] = [{
      name: 'client one',
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      scopes: ['write_scope'],
      grantFlows: ['CODE'],
      autoApprove: true,
      redirectUris: ['redirecturi.fr']
    }];
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify(clients) } });
    const action$ = new ActionsObservable(cold('-a', { a: fetchClientsAction() }));

    const expectedAction$ = fetchClientsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(cold('--a', {
      a: {
        type: ClientActionTypes.FETCH_CLIENTS_SUCCESS,
        payload: clients
      }
    }));
  });

  it('should dispatch fetch clients failure action', () => {
    mockGetRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: fetchClientsAction() }));

    const expectedAction$ = fetchClientsEpic(mockGetRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: ClientActionTypes.FETCH_CLIENTS_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });
});
