import merge from 'lodash/merge';

import { REMOVE_NOTEBOOK } from '../actions/notebook_actions';
import { REMOVE_TAG,
         RECEIVE_TAGGING,
         REMOVE_TAGGING } from '../actions/tag_actions';
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
          
          const idxToDelete = tagIds.indexOf(action.tag.id);
          tagIds.splice(idxToDelete, 1);
          newState[noteId].tag_ids = tagIds;
        }
      });

      return newState;
    case RECEIVE_TAGGING:
      var { noteId, tag } = action.data;

      newState[noteId].tags[tag.id] = tag;
      newState[noteId].tag_ids.push(tag.id);

      return newState;
    case REMOVE_TAGGING:
      var { noteId, tag } = action.data;
      let tagIds = newState[noteId].tag_ids;
      delete newState[noteId].tags[tag.id];
      const idxToDelete = tagIds.indexOf(tag.id);

      tagIds.splice(idxToDelete, 1);
      newState[noteId].tag_ids = tagIds;

      return newState;
    case REMOVE_NOTE:
      delete newState[action.note.id];
      return newState;
    default:
      return state;
  }
};

 export default NotesRecuder;
