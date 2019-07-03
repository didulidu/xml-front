import {
  SET_AUTHENTICATED_USER,
  FETCH_AUTHENTICATED_USER_REQUEST,
  FETCH_AUTHENTICATED_USER_SUCCESS,
  FETCH_AUTHENTICATED_USER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from './constants';

export function setAuthenticatedUser(payload) {
  return { type: SET_AUTHENTICATED_USER, payload };
}

export function fetchAuthenticatedUserRequest() {
  return { type: FETCH_AUTHENTICATED_USER_REQUEST };
}

export function fetchAuthenticatedUserSuccess() {
  return { type: FETCH_AUTHENTICATED_USER_SUCCESS };
}

export function fetchAuthenticatedUserFailure() {
  return { type: FETCH_AUTHENTICATED_USER_FAILURE };
}

export function logoutRequest() {
  return { type: LOGOUT_REQUEST };
}

export function logoutSuccess() {
  return { type: LOGOUT_SUCCESS };
}
