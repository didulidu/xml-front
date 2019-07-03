import Token from './Token';

class User {
  constructor(userData) {
    this.id = userData.id;
    this.email = userData.email;
    this.token = userData.token ? new Token(userData.token) : null;
  }

  getAccessToken() {
    return this.token.value;
  }
}

export default User;
