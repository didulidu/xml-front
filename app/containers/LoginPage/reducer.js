/*
 *
 * LoginPage reducer
 *
 */

import { fromJS } from 'immutable';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from './constants';

export const initialState = fromJS({
  isSending: false,
  errors: {},
});

function loginPageReducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_REQUEST:
      return state.set('isSending', true);
    case LOGIN_SUCCESS:
      return state.set('errors', {}).set('isSending', false);
    case LOGIN_FAILURE:
      return state.set('errors', action.payload).set('isSending', false);
    default:
      return state;
  }
}

export default loginPageReducer;
