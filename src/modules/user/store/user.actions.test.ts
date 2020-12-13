import { fetchUsersAction, fetchUsersFailureAction, fetchUsersSuccessAction, UserActionTypes } from './user.actions';

describe('User Actions', () => {
  it('should generate fetch users action', () => {
    const action = fetchUsersAction();

    expect(action).toEqual({
      type: UserActionTypes.FETCH_USERS
    });
  });

  it('should generate fetch users success action', () => {
    const users = [{
      username: 'JohnDoe',
      firstName: 'John',
      lastName: 'Doe',
      email: 'john.doe@dodo.fr'
    }];

    const action = fetchUsersSuccessAction(users);

    expect(action).toEqual({
      type: UserActionTypes.FETCH_USERS_SUCCESS,
      payload: users
    })
  });

  it('should generate fetch users failure action', () => {
    const error = 'There is an error';

    const action = fetchUsersFailureAction(error);

    expect(action).toEqual({
      type: UserActionTypes.FETCH_USERS_FAILURE,
      payload: error
    })
  });
});
