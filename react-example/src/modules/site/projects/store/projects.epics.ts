import { Observable, of } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { ActionsObservable } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FetchProjectsAction } from './projects.state';
import { fetchProjectsFailureAction, fetchProjectsSuccessAction, ProjectsActionTypes } from './projects.actions';

export const fetchProjectsEpic = (getProjectsRequest: () => Observable<RxHttpRequestResponse<Project[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchProjectsAction>(ProjectsActionTypes.FETCH_PROJECTS)
      .pipe(
        mergeMap((action: FetchProjectsAction) =>
          getProjectsRequest().pipe(
            map((response: any) => fetchProjectsSuccessAction(JSON.parse(response.body).map((a: Project) => ({ ...a })))),
            catchError((error: string) => of(fetchProjectsFailureAction(error)))
          )
        )
      );
