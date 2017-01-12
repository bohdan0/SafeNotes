import merge from 'lodash/merge';

import { RECEIVE_ALL_NOTEBOOKS,
         RECEIVE_NOTEBOOK,
         REMOVE_NOTEBOOK } from '../actions/notebook_actions';

const _nullNotebook = ({
  id: null,
  title: null
});

// const _nullNotebooks = {};

const NotebooksRecuder = (state = _nullNotebook, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_NOTEBOOK:
      return action.notebook;
    case REMOVE_NOTEBOOK:
      return _nullNotebook;
    default:
      return state;
  }
};

export default NotebooksRecuder;