import { RxHR } from '@akanass/rx-http-request';

export const httpClient = (client => {
  return {
    get: (uri: string, options?: any) => {
      const headers = options !== undefined && options !== null
          ? { ...options.headers }
          : { };
      options = {
        ...options,
        headers
      };
      return client.get(`${ uri }`, options);
    },
    post: (uri: string, body: any, options?: any) => {
      const headers = options !== undefined && options !== null
          ? { ...options.headers, 'Accept': 'application/json' }
          : { 'Accept': 'application/json' };
      options = {
        ...options,
        headers,
        body,
        json: true
      };
      return client.post(uri, options);
    },
    delete: (uri: string, options?: any) => {
      options = {
        ...options
      };
      return client.delete(uri, options);
    }
  }
})(RxHR);
