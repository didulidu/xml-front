import BaseApiService from './BaseApiService';
import User from '../../models/User';
import Token from '../../models/Token';

const ENDPOINTS = {
  LOGIN: '/auth/login',
  ME: '/users/show',
  FORGOT_PASSWORD: '/auth/forgot-password',
  RESET_PASSWORD: '/auth/reset-password',
};

class AuthService extends BaseApiService {
  constructor(props) {
    super(props);

    const token = this.getToken();

    if (token) {
      this.attachAuthHeader(token.value);
    }
  }

  login = async loginData => {
    const loginResponse = await this.apiClient.post(ENDPOINTS.LOGIN, loginData);
    const token = new Token(loginResponse.data);

    this.createSession(token);

    return token;
  };

  logout = async () => {
    this.destroySession();

    return new Promise(resolve => setTimeout(resolve, 1000));
  };

  me = async () => {
    const response = await this.apiClient.get(ENDPOINTS.ME);

    const user = new User(response.data);

    return user;
  };

  requirePasswordResetLink = async forgotPasswordData => {
    const linkRequestResponse = await this.apiClient.post(
      ENDPOINTS.FORGOT_PASSWORD,
      forgotPasswordData,
    );

    return linkRequestResponse;
  };

  resetPassword = async resetPasswordData => {
    const resetPasswordResponse = await this.apiClient.put(
      ENDPOINTS.RESET_PASSWORD,
      resetPasswordData,
    );

    return resetPasswordResponse;
  };

  createSession = token => {
    localStorage.setItem('token', JSON.stringify(token));

    this.attachAuthHeader(token.value);
  };

  destroySession = () => {
    localStorage.removeItem('token');

    this.removeAuthHeader();
  };

  attachAuthHeader = token => {
    this.http.attachHeaders({
      Authorization: `Bearer ${token}`,
    });
  };

  removeAuthHeader = () => {
    this.http.removeHeaders(['Authorization']);
  };

  getToken = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    return token ? new Token(token) : null;
  };

  check = () => !!localStorage.getItem('token');
}

export default new AuthService();
