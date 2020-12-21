import { AppState } from '../../../../store';
import { fetchClientsAction } from '../../store/client.actions';

export interface ClientsListPropsType {
  clients: Client[];
  fetchClients: () => Action;
}

interface ClientsListStoreState {
  clients: Client[];
}

export const mapStoreStateToProps = ({ clientState }: AppState): ClientsListStoreState => ({
  clients: clientState.clients,
});

export const mapStoreDispatchToProps = ({
  fetchClients: fetchClientsAction
});

export const methods = {
  componentDidMount(props: ClientsListPropsType): void {
    props.fetchClients();
  }
};
