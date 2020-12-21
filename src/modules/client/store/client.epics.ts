import { Observable, of } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { ActionsObservable } from 'redux-observable';
import { CreateClientAction, FetchClientsAction } from './client.state';
import {
  ClientActionTypes,
  createClientFailureAction,
  createClientSuccessAction,
  fetchClientsFailureAction,
  fetchClientsSuccessAction
} from './client.actions';
import { catchError, map, mergeMap } from 'rxjs/operators';

export const fetchClientsEpic = (getClientsRequest: () => Observable<RxHttpRequestResponse<Client[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchClientsAction>(ClientActionTypes.FETCH_CLIENTS)
      .pipe(
        mergeMap((_: FetchClientsAction) =>
            getClientsRequest().pipe(
            map((response: any) => fetchClientsSuccessAction(JSON.parse(response.body).data.map((a: Client) => ({ ...a })))),
            catchError((error: string) => of(fetchClientsFailureAction(error)))
          )
        )
      );

// TODO to be tested
export const createClientEpic = (createClientsRequest: (client: Client) => Observable<RxHttpRequestResponse<TreatmentResult>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<CreateClientAction>(ClientActionTypes.CREATE_CLIENT)
      .pipe(
        mergeMap((action: CreateClientAction) =>
            createClientsRequest(action.payload).pipe(
            map((response: any) => createClientSuccessAction(JSON.parse(response.body).data.map((a: Client) => ({ ...a })))),
            catchError((error: string) => of(createClientFailureAction(error)))
          )
        )
      );
