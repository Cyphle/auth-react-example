import { userInitialState, UserState } from './user.state';
import { UserActionTypes } from './user.actions';

export const userReducers = (state = userInitialState, { type, payload }: Action): UserState => {
  switch (type) {
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        ...state,
        users: payload
      };
    case UserActionTypes.FETCH_USERS_FAILURE:
      return {
        ...state,
        users: []
      };
    case UserActionTypes.FETCH_ME_SUCCESS:
      return {
        ...state,
        userInfo: payload,
        initialized: ++state.initialized
      }
    default:
      return state;
  }
};
