import { cold, hot } from 'jest-marbles';
import { ActionsObservable } from 'redux-observable';
import { ClientActionTypes, createClientAction, fetchClientsAction } from './client.actions';
import { createClientEpic, fetchClientsEpic } from './client.epics';

describe('Client Epics', () => {
  let mockGetRequest: any;
  let mockCreateRequest: any;
  const CSRF_TOKEN = 'csrf-token';
  const clients: Client[] = [{
    name: 'client one',
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    scopes: ['write_scope'],
    grantFlows: ['CODE'],
    autoApprove: true,
    redirectUris: ['redirecturi.fr']
  }];

  it('should dispatch fetch clients success action', () => {
    mockGetRequest = () => cold('-a', { a: { body: JSON.stringify({ data: clients, errors: [] }) } });
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

  it('should dispatch create client success action', () => {
    mockCreateRequest = () => cold('-a', { a: { body: JSON.stringify({ data: clients, errors: [] }) } });
    const action$ = new ActionsObservable(cold('-a', { a: createClientAction(clients[0], CSRF_TOKEN) }));

    const expectedAction$ = createClientEpic(mockCreateRequest)(action$);

    expect(expectedAction$).toBeObservable(cold('--a', {
      a: {
        type: ClientActionTypes.CREATE_CLIENT_SUCCESS,
        payload: clients
      }
    }));
  });

  it('should dispatch create client failure action', () => {
    mockCreateRequest = () => cold('--#', null, { statusText: 'Error' });
    const action$ = new ActionsObservable(hot('-a', { a: createClientAction(clients[0], CSRF_TOKEN) }));

    const expectedAction$ = createClientEpic(mockCreateRequest)(action$);

    expect(expectedAction$).toBeObservable(hot('---a', {
      a: {
        type: ClientActionTypes.CREATE_CLIENT_FAILURE,
        payload: { statusText: 'Error' }
      }
    }));
  });
});
