# Rails API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`

### Session

- `POST /api/session`
- `DELETE /api/session`

### Notes

- `GET /api/notes`
- `POST /api/notes`
- `GET /api/notes/:id`
- `PATCH /api/notes/:id`
- `DELETE /api/notes/:id`

### Notebooks

- `GET /api/notebooks`
- `POST /api/notebooks`
- `GET /api/notebooks/:id`
- `DELETE /api/notebooks/:id`
- `GET /api/notebooks/:id/notes`

### Tags

- A note's tags will be included in the note show template
- `GET /api/tags`
- `POST /api/notes/:note_id/tags/:tag_name`: add tag to note by name
  - if tag doesn't already exist, it will be created
- `DELETE /api/notes/:note_id/tags/:tag_name`: remove tag from note by name
