export const fetchAllNotebooks = () => (
  $.ajax({
    url: `/api/notebooks`,
    method: 'GET'
  })
);

export const fetchNotebook = id => (
  $.ajax({
    url: `/api/notebooks/${ id }`,
    method: 'GET'
  })
);

export const createNotebook = notebook => (
  $.ajax({
    url: `/api/notebooks`,
    method: 'POST',
    data: { notebook }
  })
);

export const removeNotebook = id => (
  $.ajax({
    url: `/api/notebooks/${ id }`,
    method: 'DELETE'
  })
);

export const fetchNoteInNotebook = id => (
  $.ajax({
    url: `/api/notebooks/${ id }/notes`,
    method: 'GET'
  })
);

