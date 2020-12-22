import { ClientInitialState, ClientState } from './client.state';
import { ClientActionTypes } from './client.actions';

export const clientReducers = (state = ClientInitialState, { type, payload }: Action): ClientState => {
  switch (type) {
    case ClientActionTypes.FETCH_CLIENTS_SUCCESS:
      return {
        ...state,
        clients: payload
      };
    case ClientActionTypes.FETCH_CLIENTS_FAILURE:
      return {
        ...state,
        clients: []
      };
    case ClientActionTypes.CREATE_CLIENT_SUCCESS:
      return {
        ...state,
        clients: payload.data
      }
    default:
      return state;
  }
};
