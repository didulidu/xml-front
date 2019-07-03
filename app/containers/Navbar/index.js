/**
 *
 * Navbar
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import { withStyles } from '@material-ui/core/styles';
import { createStructuredSelector } from 'reselect';
import NavbarMenu from './NavbarMenu';
import {
  makeSelectAuthenticatedUser,
  makeSelectIsLoggingOut,
} from '../App/selectors';
import { logoutRequest } from '../App/actions';
import style from './styles';

/* eslint-disable react/prefer-stateless-function */
class Navbar extends React.PureComponent {
  state = {
    menuAnchorEl: null,
  };

  handleMenu = event => {
    this.setState({ menuAnchorEl: event.currentTarget });
  };

  handleMenuClose = () => {
    this.setState({ menuAnchorEl: null });
  };

  logout = () => {
    if (this.props.isLoggingOut) {
      return;
    }

    this.props.logout();
  };

  render() {
    const { menuAnchorEl } = this.state;
    const menuOpen = !!menuAnchorEl;
    const { title, classes, user, isLoggingOut, logout } = this.props;
    const menuId = 'auth-navbar-menu';

    return (
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography
            className={classes.navbarTitle}
            variant="title"
            color="inherit"
          >
            {title}
          </Typography>

          <div className={classes.navbarItems}>
            <Button
              aria-owns={menuOpen ? menuId : null}
              aria-haspopup="true"
              onClick={this.handleMenu}
              color="inherit"
            >
              {user.email}
              <KeyboardArrowDownIcon />
            </Button>

            <NavbarMenu
              id={menuId}
              open={menuOpen}
              isLoggingOut={isLoggingOut}
              logout={logout}
              onClose={this.handleMenuClose}
            />
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object,
  user: PropTypes.object.isRequired,
  isLoggingOut: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  user: makeSelectAuthenticatedUser(), // eslint-disable-line
  isLoggingOut: makeSelectIsLoggingOut(),
});

function mapDispatchToProps(dispatch) {
  return {
    logout: () => dispatch(logoutRequest()), // eslint-disable-line
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default withStyles(style)(compose(withConnect)(Navbar));
