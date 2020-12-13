import {
  FetchMeAction, FetchMeFailureAction,
  FetchMeSuccessAction,
  FetchUsersAction,
  FetchUsersFailureAction,
  FetchUsersSuccessAction
} from './user.state';

export const UserActionTypes = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE',
  FETCH_ME: 'FETCH_ME',
  FETCH_ME_SUCCESS: 'FETCH_ME_SUCCESS',
  FETCH_ME_FAILURE: 'FETCH_ME_FAILURE',
};

export const fetchUsersAction = (): FetchUsersAction => ({
  type: UserActionTypes.FETCH_USERS
});

export const fetchUsersSuccessAction = (users: User[]): FetchUsersSuccessAction => ({
  type: UserActionTypes.FETCH_USERS_SUCCESS,
  payload: users
});

export const fetchUsersFailureAction = (error: string): FetchUsersFailureAction => ({
  type: UserActionTypes.FETCH_USERS_FAILURE,
  payload: error
});

export const fetchMeAction = (): FetchMeAction => ({
  type: UserActionTypes.FETCH_ME
});

export const fetchMeSuccessAction = (userInfo: UserInfo): FetchMeSuccessAction => ({
  type: UserActionTypes.FETCH_ME_SUCCESS,
  payload: userInfo
});

export const fetchMeFailureAction = (error: string): FetchMeFailureAction => ({
  type: UserActionTypes.FETCH_ME_FAILURE,
  payload: error
});
