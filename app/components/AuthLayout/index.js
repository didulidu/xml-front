/**
 *
 * AuthLayout
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';
import Navbar from '../../containers/Navbar';

const AuthLayout = ({ title, classes, children }) => ( // eslint-disable-line
  <div className={classes.authLayoutWrapper}>
    <Navbar className={classes.authLayoutNavbar} title={title} />

    <div className={classes.authLayoutMainContent}>{children}</div>
  </div>
);

AuthLayout.propTypes = {
  title: PropTypes.string.isRequired,
  classes: PropTypes.object,
};

export default withStyles(styles)(AuthLayout);
