import { Component } from 'react';
import { loadUserInfoAction } from '../global/global.actions';
import { AppState } from '../../store';
import { selectIsAuth, selectUserInfo } from '../global/global.state';

export interface ProtectedRoutePropsType {
  component: Component;
  userInfo: UserInfo;
  isAuth: AUTH_STATUS;
  fetchUserInfo: () => Action;
}

interface UserListStatePropsType {
  userInfo: UserInfo;
  isAuth: AUTH_STATUS;
}

export const mapStoreStateToProps = ({ globalState }: AppState): UserListStatePropsType => ({
  userInfo: selectUserInfo(globalState),
  isAuth: selectIsAuth(globalState)
});

export const mapStoreDispatchToProps = ({
  fetchUserInfo: loadUserInfoAction
});

export const methods = {
  componentDidMount(props: ProtectedRoutePropsType): void {
    props.fetchUserInfo();
  }
};
