import * as TagApiUtil from '../util/tags_api_util';

import { receiveErrors } from './session_actions';

export const REMOVE_TAG = 'REMOVE_TAG';

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id)
    .then(tag => dispatch(removeTag(tag)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
