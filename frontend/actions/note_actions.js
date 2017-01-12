import * as NotesApiUtil from '../util/notes_api_util';

export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';
export const REMOVE_NOTE = 'REMOVE_NOTE';

export const receiveAllNotes = notes => ({
  type: RECEIVE_ALL_NOTES,
  notes
});

export const receiveNote = note => ({
  type: RECEIVE_NOTE,
  note
});

export const removeNote = note => ({
  type: REMOVE_NOTE,
  note
});

export const getAllNotes = () => dispatch => (
  NotesApiUtil.fetchAllNotes()
    .then(notes => dispatch(receiveAllNotes(notes)))
    .fail(err => console.log(err))
);

export const getNote = id => dispatch => (
  NotesApiUtil.fetchNote(id)
    .then(note => dispatch(receiveNote(note)))
    .fail(err => console.log(err))
);

export const deleteNote = id => dispatch => (
  NotesApiUtil.removeNote(id)
    .then(note => dispatch(removeNote(note)))
    .fail(err => console.log(err))
);

export const createNote = data => dispatch => (
  NotesApiUtil.createNote(data)
  .then(note => dispatch(receiveNote(note)))
  .fail(err => console.log(err))
);

export const updateNote = data => dispatch => (
  NotesApiUtil.updateNote(data)
    .then(note => dispatch(receiveNote(note)))
    .fail(err => console.log(err))
);
