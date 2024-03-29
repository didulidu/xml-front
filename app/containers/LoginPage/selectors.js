import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the loginPage state domain
 */

const selectLoginPageDomain = state => state.get('loginPage', initialState);

/**
 * Other specific selectors
 */

/**
 * Default selector used by LoginPage
 */

const makeSelectLoginPage = () =>
  createSelector(selectLoginPageDomain, substate => substate.toJS());

const makeSelectIsSending = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('isSending'));

const makeSelectErrors = () =>
  createSelector(selectLoginPageDomain, substate => substate.get('errors'));

export default makeSelectLoginPage;
export { selectLoginPageDomain, makeSelectIsSending, makeSelectErrors };
