/**
 *
 * LoginPage
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import {
  Paper,
  Typography,
  FormGroup,
  TextField,
  Button,
  CircularProgress,
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import { makeSelectIsSending, makeSelectErrors } from './selectors';
import { loginRequest } from './actions';
import reducer from './reducer';
import saga from './saga';
import messages from './messages';
import styles from './styles';

/* eslint-disable react/prefer-stateless-function */
export class LoginPage extends React.PureComponent {
  state = {email: '', password: '', remember: false }; // eslint-disable-line

  onInputChange = field => event => {
    this.setState({
      [field]: event.target.value,
    });
  };

  onFormSubmit = event => {
    event.preventDefault();

    if (this.props.isSending) {
      return;
    }

    this.props.login({
      email: this.state.email,
      password: this.state.password,
      remember: this.state.remember,
    });
  };

  render() {
    const { classes } = this.props; // eslint-disable-line

    return (
      <div className={classes.loginFormContainer}>
        <Paper className={classes.paper}>
          <div className={classes.formTitle}>
            <Typography variant="title" align="center">
              <FormattedMessage {...messages.formTitle} />
            </Typography>
          </div>

          <form onSubmit={this.onFormSubmit}>
            <FormGroup row>
              <FormattedMessage {...messages.usernamePlaceholder}>
                {placeholder => (
                  <TextField
                    type="email"
                    fullWidth
                    placeholder={placeholder}
                    onChange={this.onInputChange('email')}
                    error={!!this.props.errors.email}
                    helperText={this.props.errors.email}
                  />
                )}
              </FormattedMessage>
            </FormGroup>

            <FormGroup row>
              <FormattedMessage {...messages.passwordPlaceholder}>
                {placeholder => (
                  <TextField
                    type="password"
                    fullWidth
                    placeholder={placeholder}
                    onChange={this.onInputChange('password')}
                    error={!!this.props.errors.password}
                    helperText={this.props.errors.password}
                  />
                )}
              </FormattedMessage>
            </FormGroup>

            <FormGroup row className={classes.submitButtonContainer}>
              <Button
                disabled={this.props.isSending}
                color="primary"
                variant="contained"
                type="submit"
              >
                {this.props.isSending ? (
                  <CircularProgress className={classes.submitProgress} />
                ) : (
                  <FormattedMessage {...messages.submitButtonText} />
                )}
              </Button>
            </FormGroup>
          </form>
        </Paper>
      </div>
    );
  }
}

LoginPage.propTypes = {
  isSending: PropTypes.bool.isRequired,
  errors: PropTypes.object,
  login: PropTypes.func.isRequired,
};

const mapStateToProps = createStructuredSelector({
  isSending: makeSelectIsSending(),
  errors: makeSelectErrors(),
});

function mapDispatchToProps(dispatch) {
  return {
    login: payload => dispatch(loginRequest(payload)),
  };
}

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

const withReducer = injectReducer({ key: 'loginPage', reducer });
const withSaga = injectSaga({ key: 'loginPage', saga });

export default withStyles(styles)(
  compose(
    withReducer,
    withSaga,
    withConnect,
  )(LoginPage),
);
