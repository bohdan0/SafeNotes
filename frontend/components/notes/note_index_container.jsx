import { connect } from 'react-redux';

import { selectByNotebookId,
         selectByTagId } from '../../selectors/note_selectors';
import { deleteNote } from '../../actions/note_actions';
import NoteIndex from './note_index';

const mapStateToProps = ({ notes, notebooks }, { params }) => {
  if (params.notebookId) {
    const notebook = notebooks[params.notebookId];

    return ({
      notes: selectByNotebookId(notes, params.notebookId),
      headerName: notebook ? `NOTEBOOK: ${ notebooks[params.notebookId].title }` : null
    });
  } else {
    const selectedNotes = selectByTagId(notes, params.tagId);
    let tagName = null;
    Object.keys(selectedNotes).map(noteId => {
      const tag = selectedNotes[noteId].tags[params.tagId];
      if (!tagName && tag) tagName = tag.name;
    });

    return ({
      notes: selectedNotes,
      headerName: `TAG: ${ tagName }`
    });
  }
};

const mapDispatchToProps = dispatch => ({
  deleteNote: id => dispatch(deleteNote(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(NoteIndex);