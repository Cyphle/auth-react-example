import { Observable, of } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { ActionsObservable } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FetchUsersAction } from './user.state';
import { fetchUsersFailureAction, fetchUsersSuccessAction, UserActionTypes } from './user.actions';

export const fetchUsersEpic = (getUsersRequest: () => Observable<RxHttpRequestResponse<User[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchUsersAction>(UserActionTypes.FETCH_USERS)
      .pipe(
        mergeMap((_: FetchUsersAction) =>
            getUsersRequest().pipe(
            map((response: any) => fetchUsersSuccessAction(JSON.parse(response.body).map((a: User) => ({ ...a })))),
            catchError((error: string) => of(fetchUsersFailureAction(error)))
          )
        )
      );
