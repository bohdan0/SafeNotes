# Component Hierarchy

### App
- AuthFormContainer
- NewNoteContainer
- NewNotebookContainer
- NewTagContainer
- HomeContainer

### AuthFormContainer
- AuthForm

### NewNoteContainer
- NewNote

### NewNotebookContainer
- NewNotebook

### NewTagContainer
- NewTag

### HomeContainer
- Sidebar
- Home

### Home
- NoteIndexContainer
- NotebookIndexContainer
- TagIndexContainer

### NoteIndexContainer
- Notes Header
- NoteIndex

### NoteIndex
- NoteIndexItem
- TextEditorContainer

### TextEditorContainer
- TextEditor

### TextEditor
- MenuLine
- TextArea

### NotebookIndexContainer
- NotebookIndex

### NotebookIndex
- NotebookIndexItem

### NotebookIndexItem
- NotebookHeader
- NoteIndex

### TagIndexContainer
- TagIndex

### TagIndex
- TagIndexItem

### TagIndexItem
- TagHeader
- NoteIndex

# Routes
|Path   | Component   |
|-------|-------------|
| "/" | "App" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/home" | "HomeContainer" |
| "/home/notes/:noteId" | "NoteIndexContainer" |
| "/home/notebooks/:notebookId/notes/:noteId" | "NotebookIndexContainer" |
| "/home/tags/:tagId/notes/:notedId" | "TagIndexContainer" |
| "/new-note" | "NewNoteContainer" |
| "/new-notebook" | "NewNotebook" |
| "/new-tag" | "NewTag" |
