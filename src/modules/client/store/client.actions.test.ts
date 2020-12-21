import {
  ClientActionTypes,
  fetchClientsAction,
  fetchClientsFailureAction,
  fetchClientsSuccessAction
} from './client.actions';

describe('ClientActions', () => {
  it('should generate fetch clients action', () => {
    const action = fetchClientsAction();

    expect(action).toEqual({
      type: ClientActionTypes.FETCH_CLIENTS
    });
  });

  it('should generate fetch clients success action', () => {
    const clients: Client[] = [{
      name: 'client one',
      clientId: 'clientId',
      clientSecret: 'clientSecret',
      scopes: ['write_scope'],
      grantFlows: ['CODE'],
      autoApprove: true,
      redirectUris: ['redirecturi.fr']
    }];

    const action = fetchClientsSuccessAction(clients);

    expect(action).toEqual({
      type: ClientActionTypes.FETCH_CLIENTS_SUCCESS,
      payload: clients
    })
  });

  it('should generate fetch clients failure action', () => {
    const error = 'There is an error';

    const action = fetchClientsFailureAction(error);

    expect(action).toEqual({
      type: ClientActionTypes.FETCH_CLIENTS_FAILURE,
      payload: error
    })
  });
});
