import { createSelector } from 'reselect';

export interface GlobalState {
  userInfo: UserInfo;
  currentOrganization: Organization;
}

export const globalInitialState: GlobalState = {
  userInfo: {
    username: '',
    firstName: '',
    lastName: '',
    authorities: []
  },
  currentOrganization: {
    code: '',
    name: '',
    logo: '',
    type: 'TERTIARY',
    applications: [],
    authorizedProperties: []
  }
};

export interface LoadUserInfoAction extends Action {
}

export interface LoadUserInfoSuccessAction extends Action {
  payload: UserInfo;
}

export interface LoadUserInfoFailureAction extends Action {
}

export interface UpdateCurrentOrganizationAction extends Action {
  payload: string;
}

const globalState = (state: GlobalState): GlobalState => state;

export const selectUserInfo = createSelector(
    globalState,
    (state: GlobalState): UserInfo => state.userInfo
);

export const selectCurrentOrganization = createSelector(
    globalState,
    (state: GlobalState): Organization => state.currentOrganization
);
