export interface UserState {
  users: User[];
  userInfo: UserInfo;
  initialized: number;
}

export const userInitialState: UserState = {
  users: [],
  userInfo: {
    username: '',
    firstName: '',
    lastName: '',
    authorities: []
  },
  initialized: 0
};

export interface FetchUsersAction extends Action {
}

export interface FetchUsersSuccessAction extends Action {
  payload: User[];
}

export interface FetchUsersFailureAction extends Action {
  payload: string;
}

export interface FetchMeAction extends Action {
}

export interface FetchMeSuccessAction extends Action {
  payload: UserInfo;
}

export interface FetchMeFailureAction extends Action {
  payload: string;
}
