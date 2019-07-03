import { createSelector } from 'reselect';

const selectGlobal = state => state.get('global');
const selectRoute = state => state.get('route');

const makeSelectLocation = () =>
  createSelector(selectRoute, routeState => routeState.get('location').toJS());

const makeSelectAuthenticatedUser = () =>
  createSelector(selectGlobal, globalState => globalState.get('user'));

const makeSelectIsFetchingUser = () =>
  createSelector(selectGlobal, globalState =>
    globalState.get('isFetchingUser'),
  );

const makeSelectAuthStatus = () =>
  createSelector(selectGlobal, globalState => !!globalState.get('user'));

const makeSelectIsLoggingOut = () =>
  createSelector(
    selectGlobal,
    globalState => !!globalState.get('isLoggingOut'),
  );

export {
  makeSelectLocation,
  makeSelectAuthenticatedUser,
  makeSelectIsFetchingUser,
  makeSelectAuthStatus,
  makeSelectIsLoggingOut,
};
