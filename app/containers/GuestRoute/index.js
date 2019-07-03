import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Route, Redirect } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { makeSelectAuthStatus, makeSelectLocation } from '../App/selectors';
import { HOME_PAGE_PATH } from '../../pagePaths';

class GuestRoute extends React.PureComponent {
  renderRouteComponent = props => {
    const { component: Component, authStatus, location } = this.props;

    if (authStatus && location.pathname !== HOME_PAGE_PATH) {
      return <Redirect to={HOME_PAGE_PATH} />;
    }

    return <Component {...props} />;
  };

  render() {
    const { authStatus, component, ...rest } = this.props;

    return <Route {...rest} render={this.renderRouteComponent} />;
  }
}

GuestRoute.propTypes = {
  component: PropTypes.func.isRequired,
  authStatus: PropTypes.bool.isRequired,
  location: PropTypes.object,
};

export default connect(
  createStructuredSelector({
    authStatus: makeSelectAuthStatus(),
    location: makeSelectLocation(),
  }),
)(GuestRoute);
