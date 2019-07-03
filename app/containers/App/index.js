/**
 *
 * App.js
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import AppLayout from '../AppLayout';
import GuestRoute from '../GuestRoute';
import AuthRoute from '../AuthRoute';
import HomePage from '../HomePage/Loadable';
import LoginPage from '../LoginPage/Loadable';
import NotFoundPage from '../NotFoundPage/Loadable';
import { HOME_PAGE_PATH, LOGIN_PAGE_PATH } from '../../pagePaths';
import saga from './saga';

const App = () => (
  <AppLayout>
    <Switch>
      <AuthRoute exact path={HOME_PAGE_PATH} component={HomePage} />

      <GuestRoute exact path={LOGIN_PAGE_PATH} component={LoginPage} />

      <Route component={NotFoundPage} />
    </Switch>
  </AppLayout>
);

const withSaga = injectSaga({ key: 'app', saga });

export default compose(withSaga)(App);
