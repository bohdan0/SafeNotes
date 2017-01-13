const tagsSelector = notes => {
  let tags = {};
  Object.keys(notes).forEach(id => {
    notes[id].tag_ids.forEach(tagId => {
      tags[tagId] = notes[id].tags[tagId];
    });
  });

  return tags;
};

export default tagsSelector;