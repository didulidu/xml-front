import { call, takeLatest, put } from 'redux-saga/effects';
import { push } from 'react-router-redux';
import { LOGIN_REQUEST } from './constants';
import authService from '../../services/api-services/AuthService';
import { setAuthenticatedUser } from '../App/actions';
import { loginSuccess, loginFailure } from './actions';
import { HOME_PAGE_PATH } from '../../pagePaths';

export function* handleLoginSaga(action) {
  try {
    yield call(authService.login, action.payload);

    const user = yield call(authService.me);

    yield put(loginSuccess());
    yield put(setAuthenticatedUser(user));
    yield put(push(HOME_PAGE_PATH));
  } catch (error) {
    const { response } = error;

    if (response && response.status) {
      const { status, data } = response;

      if (data && [401, 422].indexOf(status) !== -1 && data.errors) {
        const { errors } = data;

        yield put(loginFailure(errors));
      }

      if (!data.errors && status === 401) {
        const AUTH_FAILED_MESSAGE =
          'These credentials do not match our records';
        const errors = {
          email: [AUTH_FAILED_MESSAGE],
          password: [AUTH_FAILED_MESSAGE],
        };

        yield put(loginFailure(errors));
      }
    } else {
      // TODO: update with error handling implementation
    }
  }
}

export default function* loginPageSaga() {
  yield takeLatest(LOGIN_REQUEST, handleLoginSaga);
}
