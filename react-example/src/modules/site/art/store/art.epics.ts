import { Observable, of } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { ActionsObservable } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { FetchMediasAction } from './art.state';
import { ArtActionTypes, fetchMediasFailureAction, fetchMediasSuccessAction } from './art.actions';

export const fetchMediasEpic = (getMediasRequest: () => Observable<RxHttpRequestResponse<Media[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchMediasAction>(ArtActionTypes.FETCH_ART)
      .pipe(
        mergeMap((action: FetchMediasAction) =>
          getMediasRequest().pipe(
            map((response: any) => fetchMediasSuccessAction(JSON.parse(response.body).map((a: Media) => ({ ...a })))),
            catchError((error: string) => of(fetchMediasFailureAction(error)))
          )
        )
      );
