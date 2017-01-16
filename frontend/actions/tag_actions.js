import * as TagApiUtil from '../util/tags_api_util';

export const REMOVE_TAG = 'REMOVE_TAG';

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id)
    .then(tag => dispatch(removeTag(tag)))
    .fail(err => console.log(err.responseJSON))
);
