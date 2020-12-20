import { AppState } from '../../../../store';
import { fetchUsersAction } from '../../store/user.actions';

export interface UsersListPropsType {
  users: User[];
  fetchUsers: () => Action;
}

interface UsersListStoreState {
  users: User[];
}

export const mapStoreStateToProps = ({ userState }: AppState): UsersListStoreState => ({
  users: userState.users,
});

export const mapStoreDispatchToProps = ({
  fetchUsers: fetchUsersAction
});

export const methods = {
  componentDidMount(props: UsersListPropsType): void {
    props.fetchUsers();
  }
};
