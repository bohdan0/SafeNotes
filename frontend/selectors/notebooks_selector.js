const notebooksSelector = notes => {
  let result = {};
  const noteIds = Object.keys(notes);

  noteIds.forEach(noteId => {
    const notebookId = notes[noteId].notebook_id;
    result[notebookId] = (result[notebookId] || 0) + 1;
  });

  // { notebookId: amountOfNotes }
  return result;
};

export default notebooksSelector;