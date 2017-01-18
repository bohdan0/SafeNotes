export const fetchAllTags = () => (
  $.ajax({
    url: `/api/tags`,
    method: 'GET'
  })
);

export const tagNote = (noteId, tag_name) => (
  $.ajax({
    url: `/api/notes/${noteId}/tags`,
    method: `POST`,
    data: { tag_name }
  })
);

export const untagNote = (noteId, tagName) => (
  $.ajax({
    url: `/api/notes/${noteId}/tags/${tagName}`,
    method: `DELETE`
  })
);

export const createTag = tag_name => (
  $.ajax({
    url: `/api/tags`,
    method: `POST`,
    data: { tag_name }
  })
);

export const deleteTag = id => (
  $.ajax({
    url: `/api/tags/${ id }`,
    method: `DELETE`
  })
);