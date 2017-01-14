import merge from 'lodash/merge';

import { RECEIVE_NOTEBOOK_ERRORS } from '../actions/notebook_actions';
import { RECEIVE_AUTH_ERRORS } from '../actions/session_actions';

const _nullForms = {
  auth: { errors: [] },
  new: { errors: [] }
};

const FormsRecucer = (state = _nullForms, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_AUTH_ERRORS:
      newState.auth.errors = action.errors || [];
      return newState;
    case RECEIVE_NOTEBOOK_ERRORS:
      newState.new.errors = action.errors || [];
      return newState;
    default:
      return state;
  }
};

export default FormsRecucer;
