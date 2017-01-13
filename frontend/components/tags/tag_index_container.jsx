import { connect } from 'react-redux';

import TagIndex from './tag_index';
import tagsSelector from '../../selectors/tags_selector';

const mapStateToProps = ({ notes }) => ({
  tags: tagsSelector(notes)
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);