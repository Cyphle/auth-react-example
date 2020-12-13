import { RxHR } from '@akanass/rx-http-request';

export const httpClient = (client => {
  return {
    get: (uri: string, options?: any) => {
      options = {
        ...options,
        //   headers: {
        //   'Authorization': 'token'
        // }
      };
      return client.get(`${uri}`, options);
    },
    post: (uri: string, body: any, options?: any) => {
      options = {
        ...options,
        headers: {
          'Accept': 'application/json'
        },
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
