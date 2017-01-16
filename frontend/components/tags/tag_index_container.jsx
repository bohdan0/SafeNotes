import { connect } from 'react-redux';

import TagIndex from './tag_index';
import tagsSelector from '../../selectors/tags_selector';
import { countByTagId } from '../../selectors/note_selectors';
import * as TagApiUtil from '../../util/tags_api_util';

const mapStateToProps = ({ notes }, { params }) => {
  const tagId = params.tagId;
  const tags = tagsSelector(notes);
  const notesPerTag = countByTagId(notes);

  if (tagId === 'all') {
    return {
      notes: notesPerTag,
      tags
    };
  } else {
    return {
      notes: notesPerTag,
      tags: { [tagId]: tags[tagId] }
    };
  }
};

const mapDispatchToProps = dispatch => ({
  fetchAllTags: () => TagApiUtil.fetchAllTags()
});

export default connect(mapStateToProps, mapDispatchToProps)(TagIndex);