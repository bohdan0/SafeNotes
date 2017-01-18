import * as TagApiUtil from '../util/tags_api_util';

import { receiveErrors } from './session_actions';

export const REMOVE_TAG = 'REMOVE_TAG';
export const RECEIVE_TAGGING = 'RECEIVE_TAGGING';
export const REMOVE_TAGGING = 'REMOVE_TAGGING';

export const removeTag = tag => ({
  type: REMOVE_TAG,
  tag
});

export const receiveTagging = (noteId, tag) => ({
  type: RECEIVE_TAGGING,
  data: { tag, noteId }
});

export const removeTagging = (noteId, tag) => ({
  type: REMOVE_TAGGING,
  data: { tag, noteId }
});

export const deleteTag = id => dispatch => (
  TagApiUtil.deleteTag(id)
    .then(tag => dispatch(removeTag(tag)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const tagNote = (noteId, tagName) => dispatch => (
  TagApiUtil.tagNote(noteId, tagName)
    .then(tag => dispatch(receiveTagging(noteId, tag)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);

export const untagNote = (noteId, tagName) => dispatch => (
  TagApiUtil.untagNote(noteId, tagName)
    .then(tag => dispatch(removeTagging(noteId, tag)))
    .fail(err => dispatch(receiveErrors(err.responseJSON)))
);
