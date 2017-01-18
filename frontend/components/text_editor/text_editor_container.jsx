import { connect } from 'react-redux';

import TextEditor from './text_editor';
import { updateNote,
         createNote } from '../../actions/note_actions';
import { tagNote,
         untagNote } from '../../actions/tag_actions';

const mapStateToProps = (store, { note, notebookId }) => ({
  notebookId,
  note
});

const mapDispatchToProps = dispatch => ({
  updateNote: data => dispatch(updateNote(data)),
  createNote: data => dispatch(createNote(data)),
  tagNote: (noteId, tagName) => dispatch(tagNote(noteId, tagName)),
  untagNote: (noteId, tagName) => dispatch(untagNote(noteId, tagName))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);