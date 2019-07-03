import { call, put, all, takeLatest } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { FETCH_AUTHENTICATED_USER_REQUEST, LOGOUT_REQUEST } from './constants';
import authService from '../../services/api-services/AuthService';
import {
  setAuthenticatedUser,
  fetchAuthenticatedUserFailure,
  logoutSuccess,
  fetchAuthenticatedUserSuccess,
} from './actions';
import { HOME_PAGE_PATH } from '../../pagePaths';

export function* logoutSaga() {
  yield call(authService.logout);

  yield put(logoutSuccess());
}

export function* fetchAuthenticatedUserSaga(action) { // eslint-disable-line
  try {
    const user = yield call(authService.me);

    yield put(setAuthenticatedUser(user));
    yield put(fetchAuthenticatedUserSuccess());
    yield put(push(HOME_PAGE_PATH));
  } catch (error) {
    yield put(fetchAuthenticatedUserFailure());
  }
}

export default function* appSaga() {
  yield all([
    takeLatest(FETCH_AUTHENTICATED_USER_REQUEST, fetchAuthenticatedUserSaga),
    takeLatest(LOGOUT_REQUEST, logoutSaga),
  ]);
}
