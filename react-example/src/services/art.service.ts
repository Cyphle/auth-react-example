import { Observable } from 'rxjs';
import { RxHttpRequestResponse } from '@akanass/rx-http-request';
import { httpClient } from '../common/http-client';

export const getMediasRequest = (): Observable<RxHttpRequestResponse<Media[]>> =>
  httpClient.get(`${process.env.REACT_APP_BASE_URL}/medias`);
