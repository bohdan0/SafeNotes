import { connect } from 'react-redux';

import NewForm from './new_form';
import { createNotebook } from '../../actions/notebook_actions';

const mapStateToProps = store => ({

});

const mapDispatchToProps  = dispatch => ({
  processForm: data => dispatch(createNotebook(data))
});

export default connect(mapStateToProps, mapDispatchToProps)(NewForm);