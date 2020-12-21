import { UserInitialState, UserState } from './user.state';
import { UserActionTypes } from './user.actions';

export const userReducers = (state = UserInitialState, { type, payload }: Action): UserState => {
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
    default:
      return state;
  }
};
