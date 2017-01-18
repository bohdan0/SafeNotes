import { connect } from 'react-redux';
import { hashHistory } from 'react-router';

import notebooksSelector from '../../selectors/notebooks_selector';
import { deleteNotebook } from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mapStateToProps = ({ notebooks, notes }, { params }) => { 
  const notebookId = params.notebookId;

  if (notebookId === 'all') {
    return {
      notesPerNotebook: notebooksSelector(notes),
      notebooks
    };
  } else {
    return {
      notesPerNotebook: notebooksSelector(notes),
      notebooks: { [notebookId]: notebooks[notebookId] }
    };
  }
};

const mapDispatchToProps = dispatch => ({
  deleteNotebook: id => dispatch(deleteNotebook(id))
});

export default connect (mapStateToProps, mapDispatchToProps)(NotebookIndex);