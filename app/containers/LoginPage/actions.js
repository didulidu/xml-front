/*
 *
 * LoginPage actions
 *
 */

import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export function loginRequest(payload) {
  return { type: LOGIN_REQUEST, payload };
}

export function loginSuccess() {
  return { type: LOGIN_SUCCESS };
}

export function loginFailure(payload) {
  return { type: LOGIN_FAILURE, payload };
}
