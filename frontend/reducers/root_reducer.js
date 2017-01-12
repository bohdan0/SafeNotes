import { combineReducers } from 'redux';

import NotebooksReducer from './notebooks_reducer';
import SessionReducer from './session_reducer';
import FormsReducer from './forms_reducer';

const RootReducer = combineReducers({
  currentNotebook: NotebooksReducer,
  currentUser: SessionReducer,
  forms: FormsReducer
});

export default RootReducer;
