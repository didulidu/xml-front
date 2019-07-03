import { fromJS } from 'immutable';
import {
  SET_AUTHENTICATED_USER,
  FETCH_AUTHENTICATED_USER_REQUEST,
  FETCH_AUTHENTICATED_USER_SUCCESS,
  FETCH_AUTHENTICATED_USER_FAILURE,
  LOGOUT_REQUEST,
  LOGOUT_SUCCESS,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  user: null,
  isFetchingUser: false,
  isLoggingOut: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case SET_AUTHENTICATED_USER:
      return state.set('user', action.payload);
    case FETCH_AUTHENTICATED_USER_REQUEST:
      return state.set('isFetchingUser', true);
    case FETCH_AUTHENTICATED_USER_SUCCESS:
      return state.set('isFetchingUser', false);
    case FETCH_AUTHENTICATED_USER_FAILURE:
      return state.set('user', null).set('isFetchingUser', false);
    case LOGOUT_REQUEST:
      return state.set('isLoggingOut', true);
    case LOGOUT_SUCCESS:
      return state.set('user', null).set('isLoggingOut', false);
    default:
      return state;
  }
}

export default appReducer;
