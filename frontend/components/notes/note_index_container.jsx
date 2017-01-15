import { connect } from 'react-redux';

import { selectByNotebookId } from '../../selectors/note_selectors';
import NoteIndex from './note_index';

const mapStateToProps = ({ notes }, { params }) => ({ 
  notes: selectByNotebookId(notes, params.notebookId)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);