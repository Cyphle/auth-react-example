import { AppState } from '../../../../store';
import { UserState } from '../../store/user.state';
import { fetchMeAction, fetchUsersAction } from '../../store/user.actions';
import { Component } from 'react';

export interface UsersListPropsType {
  component: Component;
  otherParam: string;
  users: User[];
  userInfo: UserInfo;
  fetchUsers: () => Action;
  getMe: () => Action;
}

export const mapStoreStateToProps = ({ userState }: AppState): UserState => ({
  users: userState.users,
  userInfo: userState.userInfo,
  initialized: userState.initialized
});

export const mapStoreDispatchToProps = ({
  fetchUsers: fetchUsersAction,
  getMe: fetchMeAction
});

export const methods = {
  componentDidMount(props: UsersListPropsType): void {
    console.log('did mount');
    props.getMe();
  }
};
