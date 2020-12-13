import { ActionsObservable } from 'redux-observable';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { FetchArgumentsAction, FetchInfosAction, FetchSkillsAction, FetchTrainingsAction } from './home.state';
import {
  fetchArgumentsFailureAction,
  fetchArgumentsSuccessAction,
  fetchInfosFailureAction,
  fetchInfosSuccessAction,
  fetchSkillsFailureAction,
  fetchSkillsSuccessAction,
  fetchTrainingsFailureAction,
  fetchTrainingsSuccessAction,
  HomeActionTypes
} from './home.actions';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';

export const fetchArgumentsEpic = (getArgumentsRequest: () => Observable<RxHttpRequestResponse<Argument[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchArgumentsAction>(HomeActionTypes.FETCH_ARGUMENTS)
      .pipe(
        mergeMap((action: FetchArgumentsAction) =>
          getArgumentsRequest().pipe(
            map((response: any) => fetchArgumentsSuccessAction(JSON.parse(response.body).map((a: Argument) => ({ ...a })))),
            catchError((error: string) => of(fetchArgumentsFailureAction(error)))
          )
        )
      );

export const fetchInfosEpic = (getInfosRequest: () => Observable<RxHttpRequestResponse<Info[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchInfosAction>(HomeActionTypes.FETCH_INFOS)
      .pipe(
        mergeMap((action: FetchInfosAction) =>
          getInfosRequest().pipe(
            map((response: any) => fetchInfosSuccessAction(JSON.parse(response.body).map((a: Info) => ({ ...a })))),
            catchError((error: string) => of(fetchInfosFailureAction(error)))
          )
        )
      );

export const fetchTrainingsEpic = (getTrainingsRequest: () => Observable<RxHttpRequestResponse<Training[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchTrainingsAction>(HomeActionTypes.FETCH_TRAININGS)
      .pipe(
        mergeMap((action: FetchTrainingsAction) =>
          getTrainingsRequest().pipe(
            map((response: any) => fetchTrainingsSuccessAction(JSON.parse(response.body).map((a: Training) => ({ ...a })))),
            catchError((error: string) => of(fetchTrainingsFailureAction(error)))
          )
        )
      );

export const fetchSkillsEpic = (getSkillsRequest: () => Observable<RxHttpRequestResponse<Skill[]>>) =>
  (action$: ActionsObservable<Action>): any =>
    action$
      .ofType<FetchSkillsAction>(HomeActionTypes.FETCH_SKILLS)
      .pipe(
        mergeMap((action: FetchSkillsAction) =>
          getSkillsRequest().pipe(
            map((response: any) => fetchSkillsSuccessAction(JSON.parse(response.body).map((a: Skill) => ({ ...a })))),
            catchError((error: string) => of(fetchSkillsFailureAction(error)))
          )
        )
      );
