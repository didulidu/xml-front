import React from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles';

const AppLoader = ({ classes }) => (
  <div className={classes.appLoaderContainer}>
    <CircularProgress className={classes.appLoader} size={50} />
  </div>
);

AppLoader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(AppLoader);
