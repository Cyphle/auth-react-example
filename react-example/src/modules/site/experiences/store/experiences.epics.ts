import { Observable, of } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { ActionsObservable } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FetchExperiencesAction } from './experiences.state';
import {
  ExperiencesActionTypes,
  fetchExperiencesFailureAction,
  fetchExperiencesSuccessAction
} from './experiences.actions';

export const fetchExperiencesEpic = (getExperiencesRequest: () => Observable<RxHttpRequestResponse<Experience[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchExperiencesAction>(ExperiencesActionTypes.FETCH_EXPERIENCES)
      .pipe(
        mergeMap((action: FetchExperiencesAction) =>
          getExperiencesRequest().pipe(
            map((response: any) => fetchExperiencesSuccessAction(JSON.parse(response.body).map((a: Experience) => ({
              ...a,
              startDate: new Date(a.startDate),
              endDate: new Date(a.endDate)
            })))),
            catchError((error: string) => of(fetchExperiencesFailureAction(error)))
          )
        )
      );
