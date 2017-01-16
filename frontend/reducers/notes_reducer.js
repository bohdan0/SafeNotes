import merge from 'lodash/merge';

import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { RECEIVE_ALL_NOTES,
         RECEIVE_NOTE,
         REMOVE_NOTE } from '../actions/note_actions';

const _nullNotes = {};

const NotesRecuder = (state = _nullNotes, action) => {
  Object.freeze(state);
  let newState = merge({}, state);

  switch(action.type) {
    case RECEIVE_ALL_NOTES:
      return action.notes;
    case RECEIVE_NOTE:
      newState[action.note.id] = action.note;
      return newState;
    case REMOVE_NOTEBOOK:
      Object.keys(newState).map(noteId => {
        if (state[noteId].notebook_id === action.notebook.id) {
          delete newState[noteId];
        }
      });

      return newState;
    case REMOVE_NOTE:
      delete newState[action.note.id];
      return newState;
    default:
      return state;
  }
};

 export default NotesRecuder;
