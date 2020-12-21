import { createSelector } from 'reselect';

export interface ClientState {
  clients: Client[];
}

export const ClientInitialState: ClientState = {
  clients: []
};

export interface FetchClientsAction extends Action {
}

export interface FetchClientsSuccessAction extends Action {
  payload: Client[];
}

export interface FetchClientsFailureAction extends Action {
  payload: string;
}

export interface CreateClientAction extends Action {
  payload: Client;
}

export interface CreateClientSuccessAction extends Action {
  payload: TreatmentResult;
}

export interface CreateClientFailureAction extends Action {
  payload: string;
}

const clientState = (state: ClientState): ClientState => state;

export const selectClients = createSelector(
    clientState,
    (state: ClientState): Client[] => state.clients
);
