import { AppState } from '../../../../store';
import { createClientAction } from '../../store/client.actions';

export interface CreateClientPropsType {
  createClient: (client: Client) => Action;
}

export interface CreateClientStateType {
  name: string;
  clientId: string;
  clientSecret: string;
  scopes: string[];
  grantFlows: string[];
  autoApprove: boolean;
  redirectUris: string[];
}

interface CreateClientStoreState {
}

export const mapStoreStateToProps = ({ clientState }: AppState): CreateClientStoreState => ({
});

export const mapStoreDispatchToProps = ({
  createClient: createClientAction
});

