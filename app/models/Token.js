class Token {
  constructor(tokenData) {
    this.value =
      tokenData.accessToken || tokenData.access_token || tokenData.value;

    this.refreshValue =
      tokenData.refreshToken ||
      tokenData.refresh_token ||
      tokenData.refreshValue;

    this.type = tokenData.type || tokenData.tokenType || tokenData.token_type;

    this.expiresIn = tokenData.expiresIn || tokenData.expires_in;
  }
}

export default Token;
