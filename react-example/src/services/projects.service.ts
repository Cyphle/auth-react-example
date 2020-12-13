import { Observable } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { httpClient } from '../common/http-client';

export const getProjectsRequest = (): Observable<RxHttpRequestResponse<Project[]>> =>
  httpClient.get(`${process.env.REACT_APP_BASE_URL}/projects`);
