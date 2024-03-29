import { Observable, of } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { ActionsObservable, StateObservable } from 'redux-observable';
import { LoadUserInfoAction } from './global.state';
import { GlobalActionTypes, loadUserInfoFailureAction, loadUserInfoSuccessAction } from './global.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AppState } from '../../store';

export const loadUserInfoEpic = (getUserInfoRequest: () => Observable<RxHttpRequestResponse<UserInfo>>) =>
    (action$: ActionsObservable<Action>, state$: StateObservable<AppState>): any =>
        action$
            .ofType<LoadUserInfoAction>(GlobalActionTypes.LOAD_USER_INFO)
            .pipe(
                mergeMap((action: LoadUserInfoAction) =>
                    getUserInfoRequest().pipe(
                        map((response: any) => {
                          return response.body.length > 0
                              ? loadUserInfoSuccessAction(JSON.parse(response.body))
                              : loadUserInfoSuccessAction({
                                username: '',
                                firstName: '',
                                lastName: '',
                                authorities: []
                              })
                        }),
                        catchError((error: string) => of(loadUserInfoFailureAction(error)))
                    )
                )
            );
