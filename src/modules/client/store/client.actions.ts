import { FetchClientsAction, FetchClientsFailureAction, FetchClientsSuccessAction } from './client.state';

export const ClientActionTypes = {
  FETCH_CLIENTS: 'FETCH_CLIENTS',
  FETCH_CLIENTS_SUCCESS: 'FETCH_CLIENTS_SUCCESS',
  FETCH_CLIENTS_FAILURE: 'FETCH_CLIENTS_FAILURE'
};

export const fetchClientsAction = (): FetchClientsAction => ({
  type: ClientActionTypes.FETCH_CLIENTS
});

export const fetchClientsSuccessAction = (clients: Client[]): FetchClientsSuccessAction => ({
  type: ClientActionTypes.FETCH_CLIENTS_SUCCESS,
  payload: clients
});

export const fetchClientsFailureAction = (error: string): FetchClientsFailureAction => ({
  type: ClientActionTypes.FETCH_CLIENTS_FAILURE,
  payload: error
});
