const tagsSelector = notes => {
  let tags = {};
  Object.keys(notes).forEach(noteId => {
    notes[noteId].tag_ids.forEach(tagId => {
      const currTag = notes[noteId].tags[tagId];
      const tagFirstLttr = currTag.name[0].toUpperCase();
      const prevTags = tags[tagFirstLttr] || [];

      if (unique(prevTags, currTag)) {
        tags[tagFirstLttr] = [...prevTags, currTag];
      }
    });
  });

  return tags;
};

const unique = (all, curr) => {
  let result = true;
  all.forEach(tag => {
    if (tag.id === curr.id) result = false;
  });

  return result;
};

export default tagsSelector;