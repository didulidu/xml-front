import httpService from '../HttpService';

class BaseApiService {
  constructor() {
    this.http = httpService;
    this.apiClient = httpService.client;

    this.http.attachHeaders({ clientId: process.env.API_CLIENT_ID });
  }
}

export default BaseApiService;
