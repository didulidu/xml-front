import axios from 'axios';
import foreach from 'lodash/each';

class HttpService {
  constructor(clientConfig = {}) {
    this.client = axios.create(clientConfig);

    this.responseInterceptors = [];
    this.badResponseInterceptors = [];

    this.initializeResponseInterceptors();
  }

  attachHeaders = (headers = {}) => {
    Object.assign(this.client.defaults.headers, headers);
  };

  removeHeaders = (headers = []) => {
    headers.forEach(key => delete this.client.defaults.headers[key]);
  };

  attachResponseInterceptor = callback => {
    this.responseInterceptors.push(callback);
  };

  attachBadResponseInterceptor = callback => {
    this.badResponseInterceptors.push(callback);
  };

  initializeResponseInterceptors = () => {
    this.client.interceptors.response.use(
      response => {
        foreach(this.responseInterceptors, i => {
          i(response);
        });

        return response;
      },
      error => {
        if (error.response && error.response.status) {
          foreach(this.badResponseInterceptors, i => {
            i(error);
          });
        }

        return Promise.reject(error);
      },
    );
  };
}

const clientConfig = {
  baseURL: process.env.API_BASE_URL,
};

export default new HttpService(clientConfig);
