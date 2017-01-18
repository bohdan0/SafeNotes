import merge from 'lodash/merge';

import { RECEIVE_ERRORS } from '../actions/session_actions';
import { RECEIVE_CURRENT_USER,
         LOGOUT } from '../actions/session_actions';

const _nullUser = ({
  id: null,
  username: null,
  errors: []
});

const SessionReducer = (state = _nullUser, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return action.currentUser || _nullUser;
    case RECEIVE_ERRORS:
      newState.errors = action.errors || [];
      return newState;
    case LOGOUT:
      return _nullUser;
    default:
      newState.errors = [];
      return newState;
  }
};

export default SessionReducer;
