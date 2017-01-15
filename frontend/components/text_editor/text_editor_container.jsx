import { connect } from 'react-redux';

import TextEditor from './text_editor';
import { updateNote } from '../../actions/note_actions';

const mapStateToProps = (store, { note }) => ({
  note
});

const mapDispatchToProps = dispatch => ({
  updateNote: data => dispatch(updateNote(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(TextEditor);