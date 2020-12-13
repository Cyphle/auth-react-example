import { Observable } from 'rxjs';
import { httpClient } from '../common/http-client';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';

export const getArgumentsRequest = (): Observable<RxHttpRequestResponse<Argument[]>> =>
  httpClient.get(`${process.env.REACT_APP_BASE_URL}/arguments`);

export const getInfosRequest = (): Observable<RxHttpRequestResponse<Info[]>> =>
  httpClient.get(`${process.env.REACT_APP_BASE_URL}/infos`);

export const getTrainingsRequest = (): Observable<RxHttpRequestResponse<Training[]>> =>
  httpClient.get(`${process.env.REACT_APP_BASE_URL}/trainings`);

export const getSkillsRequest = (): Observable<RxHttpRequestResponse<Skill[]>> =>
  httpClient.get(`${process.env.REACT_APP_BASE_URL}/skills`);
