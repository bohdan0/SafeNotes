export const fetchAllNotes = () => (
  $.ajax({
    url: `/api/notes`,
    method: 'GET'
  })
);

export const fetchNote = id => (
  $.ajax({
    url: `/api/notes/${ id }`,
    method: 'GET'
  })
);

export const createNotebook = note => (
  $.ajax({
    url: `/api/notes`,
    method: 'POST',
    data: { note }
  })
);

export const updateNotebook = note => (
  $.ajax({
    url: `/api/notes/${note.id}`,
    method: 'PATCH',
    data: { note }
  })
);

export const removeNotebook = id => (
  $.ajax({
    url: `/api/notes/${ id }`,
    method: 'DELETE'
  })
);
