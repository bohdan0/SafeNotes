import * as NotebookApiUtil from '../util/notebooks_api_util';

export const RECEIVE_ALL_NOTEBOOKS = 'RECEIVE_ALL_NOTEBOOKS';
export const RECEIVE_ERRORS = 'RECEIVE_NOTEBOOK_ERRORS';
export const RECEIVE_NOTEBOOK = 'RECEIVE_NOTEBOOK';
export const REMOVE_NOTEBOOK = 'REMOVE_NOTEBOOK';

export const receiveAllNotebooks = notebooks => ({
  type: RECEIVE_ALL_NOTEBOOKS,
  notebooks
});

export const receiveNotebook = notebook => ({
  type: RECEIVE_NOTEBOOK,
  notebook
});

export const removeNotebook = notebook => ({
  type: REMOVE_NOTEBOOK,
  notebook
});

export const receiveNotebookErrors = errors => ({
  type: RECEIVE_ERRORS,
  errors
});

export const getAllNotebooks = () => dispatch => (
  NotebookApiUtil.fetchAllNotebooks()
    .then(notebooks => dispatch(receiveAllNotebooks(notebooks)))
    .fail(err => console.log(err))
);

export const getNotebook = id => dispatch => (
  NotebookApiUtil.fetchNotebook(id)
    .then(notebook => dispatch(receiveNotebook(notebook)))
    .fail(err => console.log(err))
);

export const createNotebook = data => dispatch => (
  NotebookApiUtil.createNotebook(data)
    .then(notebook => dispatch(receiveNotebook(notebook)))
    .fail(err => dispatch(receiveNotebookErrors(err.responseJSON)))
);

export const deleteNotebook = id => dispatch => (
  NotebookApiUtil.removeNotebook(id)
    .then(notebook => dispatch(removeNotebook(notebook)))
    .fail(err => console.log(err))
);
