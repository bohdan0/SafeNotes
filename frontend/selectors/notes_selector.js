const notesSelector = notes => {
  const result = {};
  Object.keys(notes).forEach(noteId => {
    notes[noteId].tag_ids.forEach(tagId => {
      result[tagId] = (result[tagId] || 0) + 1;
    });
  });

  return result;
};

export default notesSelector;