import { Observable, of } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { httpClient } from '../common/http-client';

export const getUserInfoRequest = (): Observable<RxHttpRequestResponse<UserInfo>> =>
    httpClient.get(`${process.env.REACT_APP_BASE_URL}/api/user/me`);

export const getUsersRequest = (): Observable<RxHttpRequestResponse<User[]>> =>
    httpClient.get(`${process.env.REACT_APP_BASE_URL}/api/users`);
