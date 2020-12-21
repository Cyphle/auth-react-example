import { Observable, of } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { catchError, map, mergeMap, tap, withLatestFrom } from 'rxjs/operators';
import { FetchUsersAction } from './user.state';
import { fetchUsersFailureAction, fetchUsersSuccessAction, UserActionTypes } from './user.actions';
import { AppState } from '../../../store';
import { selectCurrentOrganization } from '../../../shared/global/global.state';

export const fetchUsersEpic = (getUsersRequest: (organizationCode: string) => Observable<RxHttpRequestResponse<User[]>>) =>
    (action$: ActionsObservable<Action>, state$: StateObservable<AppState>): any =>
        action$
            .ofType<FetchUsersAction>(UserActionTypes.FETCH_USERS)
            .pipe(
                mergeMap((_: FetchUsersAction) => {
                      const currentOrganization = selectCurrentOrganization(state$.value.globalState);
                      return getUsersRequest(currentOrganization.code).pipe(
                          map((response: any) => fetchUsersSuccessAction(JSON.parse(response.body).map((a: User) => ({ ...a })))),
                          catchError((error: string) => of(fetchUsersFailureAction(error)))
                      );
                    }
                )
            );
