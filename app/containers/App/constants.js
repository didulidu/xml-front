/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const APP_NAME = 'Vivify React Boilerplate';

export const SET_AUTHENTICATED_USER = 'app/App/SET_AUTHENTICATED_USER';
export const FETCH_AUTHENTICATED_USER_REQUEST =
  'app/App/FETCH_AUTHENTICATED_USER_REQUEST';
export const FETCH_AUTHENTICATED_USER_SUCCESS =
  'app/App/FETCH_AUTHENTICATED_USER_SUCCESS';
export const FETCH_AUTHENTICATED_USER_FAILURE =
  'app/App/FETCH_AUTHENTICATED_USER_FAILURE';
export const LOGOUT_REQUEST = 'app/App/LOGOUT_REQUEST';
export const LOGOUT_SUCCESS = 'app/App/LOGOUT_SUCCESS';
