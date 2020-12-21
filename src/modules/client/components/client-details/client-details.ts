import { AppState } from '../../../../store';
import { selectClients } from '../../store/client.state';

export interface ClientDetailsPropsType {
  clients: Client[];
}

interface ClientDetailsStoreState {
  clients: Client[];
}

export const mapStoreStateToProps = ({ clientState }: AppState): ClientDetailsStoreState => ({
  clients: selectClients(clientState),
});

export const mapStoreDispatchToProps = ({
});

export const methods = {
  componentDidMount(props: ClientDetailsPropsType): void {
  }
};
