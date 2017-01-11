import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import FormsReducer from './forms_reducer';

const RootReducer = combineReducers({
  currentUser: SessionReducer,
  forms: FormsReducer
});

export default RootReducer;
