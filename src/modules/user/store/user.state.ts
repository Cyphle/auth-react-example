export interface UserState {
  users: User[];
}

export const UserInitialState: UserState = {
  users: []
};

export interface FetchUsersAction extends Action {
}

export interface FetchUsersSuccessAction extends Action {
  payload: User[];
}

export interface FetchUsersFailureAction extends Action {
  payload: string;
}
