import { connect } from 'react-redux';

import TagIndex from './tag_index';
import tagsSelector from '../../selectors/tags_selector';
import notesSelector from '../../selectors/notes_selector';

const mapStateToProps = ({ notes }) => {
  const tags = tagsSelector(notes);
  const notesPerTag = notesSelector(notes);

  return {
    notes: notesPerTag,
    tags
  };
};

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);