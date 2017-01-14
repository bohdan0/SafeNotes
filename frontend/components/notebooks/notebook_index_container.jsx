import { connect } from 'react-redux';

import notebooksSelector from '../../selectors/notebooks_selector';
import { getAllNotebooks } from '../../actions/notebook_actions';
import NotebookIndex from './notebook_index';

const mapStateToProps = ({ notebooks, notes }) => ({ 
  notesPerNotebook: notebooksSelector(notes),
  notebooks
});

const mapDispatchToProps = dispatch => ({
  getAllNotebooks: () => dispatch(getAllNotebooks())
});

export default connect (mapStateToProps, mapDispatchToProps)(NotebookIndex);