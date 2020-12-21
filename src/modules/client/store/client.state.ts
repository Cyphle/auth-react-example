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
