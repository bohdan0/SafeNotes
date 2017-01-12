import { connect } from 'react-redux';

import NoteIndex from './note_index';
import { getAllNotes } from '../../actions/note_actions';

const mapStateToProps = ({ notes }) => ({
  notes
});

const mapDispatchToProps = dispatch => ({
  getAllNotes: () => dispatch(getAllNotes())
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);