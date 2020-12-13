import {
  LoadUserInfoAction,
  LoadUserInfoFailureAction,
  LoadUserInfoSuccessAction,
  UpdateCurrentOrganizationAction
} from "./global.state";

export const GlobalActionTypes = {
  LOAD_USER_INFO: 'LOAD_USER_INFO',
  LOAD_USER_INFO_SUCCESS: 'LOAD_USER_INFO_SUCCESS',
  LOAD_USER_INFO_FAILURE: 'LOAD_USER_INFO_FAILURE',
  UPDATE_CURRENT_ORGANIZATION: 'UPDATE_CURRENT_ORGANIZATION'
};

export const loadUserInfoAction = (): LoadUserInfoAction => ({
  type: GlobalActionTypes.LOAD_USER_INFO
});

export const loadUserInfoSuccessAction = (userInfo: UserInfo): LoadUserInfoSuccessAction => ({
  type: GlobalActionTypes.LOAD_USER_INFO_SUCCESS,
  payload: userInfo
});

export const loadUserInfoFailureAction = (error: string): LoadUserInfoFailureAction => ({
  type: GlobalActionTypes.LOAD_USER_INFO_FAILURE,
  payload: error
});

export const updateCurrentOrganizationAction = (organizationCode: string): UpdateCurrentOrganizationAction => ({
  type: GlobalActionTypes.UPDATE_CURRENT_ORGANIZATION,
  payload: organizationCode
});
