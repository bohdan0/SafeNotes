import { combineReducers } from 'redux';

import NotebooksReducer from './notebooks_reducer';
import SessionReducer from './session_reducer';
import NotesRecuder from './notes_reducer';

const RootReducer = combineReducers({
  notebooks: NotebooksReducer,
  currentUser: SessionReducer,
  notes: NotesRecuder
});

export default RootReducer;
