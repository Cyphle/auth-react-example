import {
  FetchUsersAction,
  FetchUsersFailureAction,
  FetchUsersSuccessAction
} from './user.state';

export const UserActionTypes = {
  FETCH_USERS: 'FETCH_USERS',
  FETCH_USERS_SUCCESS: 'FETCH_USERS_SUCCESS',
  FETCH_USERS_FAILURE: 'FETCH_USERS_FAILURE'
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
