import React from 'react';
import PropTypes from 'prop-types';
import { Menu, MenuItem, CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import { FormattedMessage } from 'react-intl';
import messages from './messages';
import styles from './styles';

class NavbarMenu extends React.PureComponent {
  render() {
    const { id, open, onClose, anchorEl, logout, isLoggingOut, classes } = this.props; // eslint-disable-line

    return (
      <Menu
        id={id}
        anchorEl={anchorEl}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        open={open}
        onClose={onClose}
      >
        <MenuItem onClick={logout} disabled={isLoggingOut}>
          {this.props.isLoggingOut ? (
            <CircularProgress className={classes.logoutProgress} />
          ) : (
            <FormattedMessage {...messages.logout} />
          )}
        </MenuItem>
      </Menu>
    );
  }
}

NavbarMenu.propTypes = {
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  isLoggingOut: PropTypes.bool.isRequired,
};

export default withStyles(styles)(NavbarMenu);
