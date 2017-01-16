import { connect } from 'react-redux';

import { selectByNotebookId,
         selectByTagId } from '../../selectors/note_selectors';
import NoteIndex from './note_index';

const mapStateToProps = ({ notes }, { params }) => {
  if (params.notebookId) {
    return ({
      notes: selectByNotebookId(notes, params.notebookId)
    });
  } else {
    return ({
      notes: selectByTagId(notes, params.tagId)
    });
  }
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);