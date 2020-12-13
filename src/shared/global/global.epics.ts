import { Observable, of } from "rxjs";
import { RxHttpRequestResponse } from "@akanass/rx-http-request";
import { ActionsObservable, StateObservable } from 'redux-observable';
import { LoadUserInfoAction } from "./global.state";
import { GlobalActionTypes, loadUserInfoFailureAction, loadUserInfoSuccessAction } from "./global.actions";
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { AppState } from '../../store';

export const loadUserInfoEpic = (getUserInfoRequest: () => Observable<RxHttpRequestResponse<UserInfo>>) =>
    (action$: ActionsObservable<Action>, state$: StateObservable<AppState>): any =>
        action$
            .ofType<LoadUserInfoAction>(GlobalActionTypes.LOAD_USER_INFO)
            .pipe(
                tap(toto => console.log(state$.value.globalState)),
                mergeMap((action: LoadUserInfoAction) =>
                    getUserInfoRequest().pipe(
                        tap((res: any) => console.log(JSON.parse(res.body))),
                        map((response: any) => loadUserInfoSuccessAction(JSON.parse(response.body))),
                        catchError((error: string) => {
                          console.log('error');
                          console.log(error);
                          return of(loadUserInfoFailureAction(error));
                        })
                    )
                )
            );
