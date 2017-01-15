import { connect } from 'react-redux';

import NewForm from './new_form';
import { createNotebook } from '../../actions/notebook_actions';
import { createTag } from '../../util/tags_api_util';

const mapStateToProps = store => ({

});

const mapDispatchToProps  = (dispatch, ownProps) => ({
    notebook: data => dispatch(createNotebook(data)),
    tag: data => createTag(data)
});

export default connect(mapStateToProps, mapDispatchToProps)(NewForm);