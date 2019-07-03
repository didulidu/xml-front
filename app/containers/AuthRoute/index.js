import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectAuthStatus,
  makeSelectLocation,
  makeSelectAuthenticatedUser,
} from '../App/selectors';
import { LOGIN_PAGE_PATH } from '../../pagePaths';

class AuthRoute extends React.PureComponent {
  renderRouteComponent = props => {
    const { component: Component, authStatus, location } = this.props;

    if (!authStatus && location.pathname !== LOGIN_PAGE_PATH) {
      return <Redirect to={LOGIN_PAGE_PATH} />;
    }

    return <Component {...props} />;
  };

  render() {
    const { authStatus, component, ...rest } = this.props;

    return <Route {...rest} render={this.renderRouteComponent} />;
  }
}

AuthRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authStatus: PropTypes.bool.isRequired,
  location: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    user: makeSelectAuthenticatedUser(),
    authStatus: makeSelectAuthStatus(),
    location: makeSelectLocation(),
  }),
)(AuthRoute);
