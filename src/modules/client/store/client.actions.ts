import {
  CreateClientAction,
  CreateClientFailureAction,
  CreateClientSuccessAction,
  FetchClientsAction,
  FetchClientsFailureAction,
  FetchClientsSuccessAction
} from './client.state';

export const ClientActionTypes = {
  FETCH_CLIENTS: 'FETCH_CLIENTS',
  FETCH_CLIENTS_SUCCESS: 'FETCH_CLIENTS_SUCCESS',
  FETCH_CLIENTS_FAILURE: 'FETCH_CLIENTS_FAILURE',
  CREATE_CLIENT: 'CREATE_CLIENT',
  CREATE_CLIENT_SUCCESS: 'CREATE_CLIENT_SUCCESS',
  CREATE_CLIENT_FAILURE: 'CREATE_CLIENT_FAILURE'
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

export const createClientAction = (client: Client, csrfToken: string): CreateClientAction => ({
  type: ClientActionTypes.CREATE_CLIENT,
  payload: { client, csrfToken }
});

export const createClientSuccessAction = (result: TreatmentResult): CreateClientSuccessAction => ({
  type: ClientActionTypes.CREATE_CLIENT_SUCCESS,
  payload: result
});

export const createClientFailureAction = (error: string): CreateClientFailureAction => ({
  type: ClientActionTypes.CREATE_CLIENT_FAILURE,
  payload: error
});
