/**
 *
 * GuestLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core';
import styles from './styles';

function GuestLayout({ classes, children }) { // eslint-disable-line
  return <div className={classes.guestLayoutWrapper}>{children}</div>;
}

GuestLayout.propTypes = {
  classes: PropTypes.object,
};

export default withStyles(styles)(GuestLayout);
