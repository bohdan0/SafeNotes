export const countByTagId = notes => {
  let result = {};
  Object.keys(notes).forEach(noteId => {
    notes[noteId].tag_ids.forEach(tagId => {
      result[tagId] = (result[tagId] || 0) + 1;
    });
  });

  // { tagId: amountOfNotes }
  return result;
};

export const selectByNotebookId = (notes, notebookId) => {
  if (notebookId === 'all') return notes;

  let result = {};

  Object.keys(notes).map(noteId => {
    if (notes[noteId].notebook_id == notebookId) {
      result[noteId] = notes[noteId];
    }
  });

  return result;
};

export const selectByTagId = (notes, tagId) => {
  let result = {};

  Object.keys(notes).map(noteId => {
    if (notes[noteId].tags[tagId]) result[noteId] = notes[noteId];
  });

  return result;
};