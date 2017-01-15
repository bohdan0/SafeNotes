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

export const createNotebook = title => (
  $.ajax({
    url: `/api/notebooks`,
    method: 'POST',
    data: { notebook: { title } }
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

