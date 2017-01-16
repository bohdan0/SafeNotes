import { connect } from 'react-redux';

import notebooksSelector from '../../selectors/notebooks_selector';
import { getAllNotebooks } from '../../actions/notebook_actions';
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
  getAllNotebooks: () => dispatch(getAllNotebooks())
});

export default connect (mapStateToProps, mapDispatchToProps)(NotebookIndex);