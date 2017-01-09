# SafeNotes

[Heroku](https://dashboard.heroku.com "SafeNotes")

[Trello](https://trello.com/b/D7eB3HGy/safenotes "SafeNotes")

## Minimum Viable Product

SafeNotes is web application, clone of Evernote, built with Ruby on
Rails backend and React/Redux front-end. I plan make this app look like
original Evernote. My main goal is to get my features work without bugs.


## Features

- [ ] Hosting on [Heroku](https://dashboard.heroku.com "SafeNotes")
- [ ] Authentication
- [ ] Notes
- [ ] Tags
- [ ] Notebooks
- [ ] Rich-text editing
- [ ] Auto Save
- [ ] Production [README](./README.md)


## Bonus Features

- [ ] Infinite Scroll
- [ ] Search by(note title, notebook name)
- [ ] Multiple Sessions
- [ ] Sharing Notes


## Design Docs

* [View Wireframes](./wireframes/)
* [React Components](./component-hirerarchy.md)
* [Rails API Components](./api-endpoints.md)
* [DB Schema](./schema.md)
* [State Shape](./sample-state.md)


## Development Timeline

**Phase 1:** Backend setup and Front-End User Authentication
**Goal:** Rails app with front-end auth

**Phase 2:** Note, API, components
**Goal:** CRUD Note, belongs_to Notebook, has_many Tags

**Phase 3:** Tag, API
**Goal:** belongs_to Note, search by tag name

**Phase 4:** Notebook, API, components
**Goal:** CRUD Notebook, has_many Notes

**Phase 5:** Styling Notes
**Goal:** Allow rich text editing

**Phase 6:** Auto Save
**Goal:** Document autosave after each change
