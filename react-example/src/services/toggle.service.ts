import { httpClient } from '../common/http-client';
import { Observable } from 'rxjs';

export const getGroupsRequest = (env: string): Observable<any> =>
  httpClient.get(`${process.env.REACT_APP_BASE_URL}/groups/${env}`);

export const getTogglesRequest = (group: string, env: string): Observable<any> =>
  httpClient.get(`${process.env.REACT_APP_BASE_URL}/toggles/${group}/${env}`);

export const postEnableToggleRequest = (id: string, env: string): Observable<any> =>
  httpClient.post(`${process.env.REACT_APP_BASE_URL}/toggles/enable/${id}/${env}`, {});

export const postDisableToggleRequest = (id: string, env: string): Observable<any> =>
  httpClient.post(`${process.env.REACT_APP_BASE_URL}/toggles/disable/${id}/${env}`, {});

export const deleteToggleRequest = (id: string, env: string): Observable<any> =>
  httpClient.delete(`${process.env.REACT_APP_BASE_URL}/toggles/${id}/${env}`);
