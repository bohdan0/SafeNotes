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

export const createNote = note => (
  $.ajax({
    url: `/api/notes`,
    method: 'POST',
    data: { note }
  })
);

export const updateNote = note => (
  $.ajax({
    url: `/api/notes/${note.id}`,
    method: 'PATCH',
    data: { note }
  })
);

export const removeNote = id => (
  $.ajax({
    url: `/api/notes/${ id }`,
    method: 'DELETE'
  })
);
