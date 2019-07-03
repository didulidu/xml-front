/**
 *
 * AppLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  makeSelectAuthStatus,
  makeSelectIsFetchingUser,
} from '../App/selectors';
import { fetchAuthenticatedUserRequest } from '../App/actions';
import { APP_NAME } from '../App/constants';
import AppLoader from './AppLoader';
import GuestLayout from '../../components/GuestLayout';
import AuthLayout from '../../components/AuthLayout';

/* eslint-disable react/prefer-stateless-function */
class AppLayout extends React.Component {
  render() {
    const { authStatus, isFetchingUser, children } = this.props; // eslint-disable-line

    if (isFetchingUser) {
      return (
        <GuestLayout>
          <AppLoader />
        </GuestLayout>
      );
    }

    return authStatus ? (
      <AuthLayout title={APP_NAME}>{children}</AuthLayout>
    ) : (
      <GuestLayout>{children}</GuestLayout>
    );
  }
}

AppLayout.propTypes = {
  authStatus: PropTypes.bool.isRequired,
  isFetchingUser: PropTypes.bool.isRequired,
};

const mapStateToProps = createStructuredSelector({
  authStatus: makeSelectAuthStatus(),
  isFetchingUser: makeSelectIsFetchingUser(),
});

function mapDispatchToProps(dispatch) {
  return {
    fetchUser: () => dispatch(fetchAuthenticatedUserRequest()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AppLayout);
