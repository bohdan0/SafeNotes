import merge from 'lodash/merge';

import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { REMOVE_TAG } from '../actions/tag_actions';
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
    case REMOVE_TAG:
      Object.keys(newState).map(noteId => {
        let tags = newState[noteId].tags;
        let tagIds = newState[noteId].tag_ids;

        if (tags[action.tag.id]) {
          delete tags[action.tag.id];
          newState[noteId].tags = tags;
          
          const idToDelete = tagIds.indexOf(action.tag.id);
          tagIds.splice(idToDelete, 1);
          newState[noteId].tag_ids = tagIds;
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
