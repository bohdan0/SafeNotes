import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const receiveErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const signup = data => dispatch => (
  SessionApiUtil.signup(data)
    .then(user => dispatch(receiveCurrentUser(user)),
      err => console.log(err.responseJSON))
      // err => dispatch(receiveErrors(err.responseJSON)))
);

export const login = data => dispatch => (
  SessionApiUtil.login(data)
    .then(user => dispatch(receiveCurrentUser(user)),
      // err => dispatch(receiveErrors(err.responseJSON)))
      err => console.log(err.responseJSON))
);

export const logout = () => dispatch => (
  SessionApiUtil.logout().then(user => dispatch(receiveCurrentUser(null)))
);
