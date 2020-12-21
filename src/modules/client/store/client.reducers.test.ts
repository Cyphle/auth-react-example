import { clientReducers } from './client.reducers';
import { ClientState } from './client.state';
import { ClientActionTypes } from './client.actions';

describe('ClientReducers', () => {
  const reducers = clientReducers;
  const clients: Client[] = [{
    name: 'client one',
    clientId: 'clientId',
    clientSecret: 'clientSecret',
    scopes: ['write_scope'],
    grantFlows: ['CODE'],
    autoApprove: true,
    redirectUris: ['redirecturi.fr']
  }];
  let initialState: ClientState;
  let anotherInitialState: ClientState;

  beforeEach(() => {
    initialState = {
      clients: []
    };
    anotherInitialState = {
      clients
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
      type: ClientActionTypes.FETCH_CLIENTS_SUCCESS,
      payload: clients
    };

    const state = reducers(initialState, action);

    expect(state).toEqual(anotherInitialState);
  });

  it('should update state when fetch users failure action', () => {
    const action = {
      type: ClientActionTypes.FETCH_CLIENTS_FAILURE,
      payload: 'Error'
    };

    const state = reducers(anotherInitialState, action);

    expect(state).toEqual(initialState);
  });
});
