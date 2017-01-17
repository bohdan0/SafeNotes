import { connect } from 'react-redux';

import TextEditor from './text_editor';
import { updateNote,
         createNote } from '../../actions/note_actions';

const mapStateToProps = (store, { note, notebookId }) => ({
  notebookId,
  note
});

const mapDispatchToProps = dispatch => ({
  updateNote: data => dispatch(updateNote(data)),
  createNote: data => dispatch(createNote(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);