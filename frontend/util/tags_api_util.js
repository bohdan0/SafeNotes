export const fetchAllTags = () => (
  $.ajax({
    url: `/api/tags`,
    method: 'GET'
  })
);

export const tagNote = (noteId, tagName) => (
  $.ajax({
    url: `/api/notes/${noteId}/tags/${tagName}`,
    method: `POST`
  })
);

export const untagNote = (noteId, tagName) => (
  $.ajax({
    url: `/api/notes/${noteId}/tags/${tagName}`,
    method: `DELETE`
  })
);

export const createTag = name => (
  $.ajax({
    url: `/api/tags`,
    method: `POST`,
    data: { tag: { name } }
  })
);