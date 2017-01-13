import { connect } from 'react-redux';

import NotebookIndex from './notebook_index';
import { getAllNotebooks } from '../../actions/notebook_actions';

const mapStateToProps = ({ notebooks }) => ({
  notebooks
});

const mapDispatchToProps = dispatch => ({
  getAllNotebooks: () => dispatch(getAllNotebooks())
});

export default connect (mapStateToProps, mapDispatchToProps)(NotebookIndex);