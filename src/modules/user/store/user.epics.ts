import { Observable, of } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { ActionsObservable } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FetchMeAction, FetchUsersAction } from './user.state';
import {
  fetchMeFailureAction,
  fetchMeSuccessAction,
  fetchUsersFailureAction,
  fetchUsersSuccessAction,
  UserActionTypes
} from './user.actions';

export const fetchUsersEpic = (getUsersRequest: () => Observable<RxHttpRequestResponse<User[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchUsersAction>(UserActionTypes.FETCH_USERS)
      .pipe(
        mergeMap((action: FetchUsersAction) =>
            getUsersRequest().pipe(
            map((response: any) => fetchUsersSuccessAction(JSON.parse(response.body).map((a: User) => ({ ...a })))),
            catchError((error: string) => of(fetchUsersFailureAction(error)))
          )
        )
      );

export const fetchMeEpic = (getMeRequest: () => Observable<RxHttpRequestResponse<UserInfo>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchUsersAction>(UserActionTypes.FETCH_ME)
      .pipe(
        mergeMap((action: FetchMeAction) =>
            getMeRequest().pipe(
            map((response: any) => fetchMeSuccessAction(JSON.parse(response.body))),
            catchError((error: string) => of(fetchMeFailureAction(error)))
          )
        )
      );
