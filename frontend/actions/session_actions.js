import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_AUTH_ERRORS = "RECEIVE_AUTH_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveAuthErrors = errors => ({
  type: RECEIVE_AUTH_ERRORS,
  errors
});

export const signup = data => dispatch => (
  SessionApiUtil.signup(data)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveAuthErrors(err.responseJSON)))
);

export const login = data => dispatch => (
  SessionApiUtil.login(data)
    .then(user => dispatch(receiveCurrentUser(user)))
    .fail(err => dispatch(receiveAuthErrors(err.responseJSON)))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout()
    .then(user => dispatch(receiveCurrentUser(null)))
    .fail(err => dispatch(receiveAuthErrors(err.responseJSON)))
);
