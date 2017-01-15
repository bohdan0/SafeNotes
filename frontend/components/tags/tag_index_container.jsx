import { connect } from 'react-redux';

import TagIndex from './tag_index';
import tagsSelector from '../../selectors/tags_selector';
import { selectByTagId } from '../../selectors/note_selectors';
import * as TagApiUtil from '../../util/tags_api_util';

const mapStateToProps = ({ notes }) => {
  const tags = tagsSelector(notes);
  const notesPerTag = selectByTagId(notes);

  return {
    notes: notesPerTag,
    tags
  };
};

const mapDispatchToProps = dispatch => ({
  fetchAllTags: () => TagApiUtil.fetchAllTags()
});

export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);