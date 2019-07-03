/*
 * LoginPage Messages
 *
 * This contains all the text for the LoginPage component.
 */

import { defineMessages } from 'react-intl';

export default defineMessages({
  formTitle: {
    id: 'app.containers.LoginPage.form.title',
    defaultMessage: 'Log in',
  },
  formText: {
    id: 'app.containers.LoginPage.form.text',
    defaultMessage: 'Sign In to your account',
  },
  usernamePlaceholder: {
    id: 'app.containers.LoginPage.placeholders.username',
    defaultMessage: 'Enter your username',
  },
  passwordPlaceholder: {
    id: 'app.containers.LoginPage.placeholders.password',
    defaultMessage: 'Enter your password',
  },
  remember: {
    id: 'app.containers.LoginPage.remember',
    defaultMessage: 'Remember me',
  },
  submitButtonText: {
    id: 'app.containers.LoginPage.submit.text',
    defaultMessage: 'Log in',
  },
  forgotPassword: {
    id: 'app.containers.LoginPage.forgotPassword',
    defaultMessage: 'Forgot password',
  },
});
