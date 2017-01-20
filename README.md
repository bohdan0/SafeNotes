# SafeNotes 

## Take a note on [SafeNotes](http://www.safenotes.io/ "SafeNotes")

![screenshot](http://res.cloudinary.com/safenotes/image/upload/v1484940592/Screen_Shot_2017-01-20_at_11.28.20_AM_p3o0bd.png "main_page")

[SafeNotes](http://www.safenotes.io/ "SafeNotes") is web application inspired by Evernote. It is built with Ruby on Rails backend, PostgreSQL database and React.js frontend framework with Redux architecture.

## Features

SafeNotes has 5 main features:

  1. User accounts with secure authentication
  2. Notes, that can be created, edited, autosaved, deleted
  3. Notebooks for organizing notes
  4. Tags for connecting notes, that aren't necessarily included in the same notebook
  5. Rich text editor for styling notes ( [repo](https://github.com/zenoamaro/react-quill "React-quill") )

  ## Authentication

  * User authentication based on hashed password (BCrypt) for high level database security.
  * Unique session token (SecureRandom) for each user during each session protects user's data, so no one has access to anyone's notes but their own

  ```ruby
    # User model

    # saving password digest instead of raw password
    def password=(password)
      @password = password
      self.password_digest = BCrypt::Password.create(password)
    end

    def password?(password)
      BCrypt::Password.new(self.password_digest).is_password?(password)
    end

    # session token is being reset for each session
    def reset_session_token
      self.session_token = User.generate_session_token
      self.save
      self.session_token
    end

    def self.generate_session_token
      SecureRandom.urlsafe_base64(128)
    end
  ```

  ## Note

  To create note you have to type title, pick notebook and start typing text. Autosave will update your note after half second after you stop typing. Note can be tagged with any amount unique tags. To untag note just click on tag name in text editor

  ![screenshot](http://res.cloudinary.com/safenotes/image/upload/v1484943274/Screen_Shot_2017-01-20_at_12.13.51_PM_k5audw.png "new_note")

  Notes are rendered within NotesIndex component. Header shows type of sorting (notebook/tag) and amount of notes. Each NoteItem component is shown with title, time from last update and at most three lines of text body. Note can be deleted by clicking on trash can icon

   ![screenshot](http://res.cloudinary.com/safenotes/image/upload/v1484948623/Screen_Shot_2017-01-20_at_1.43.22_PM_blvuik.png "note_index")

   ## Notebook

   Notebooks are used for organizing notes. Notebook can be created, updated and deleted. Each NotebookItem shows notebook title and amount of notes inside. Notes can be sorted by notebook

   ![screenshot](http://res.cloudinary.com/safenotes/image/upload/v1484950427/Screen_Shot_2017-01-20_at_1.52.26_PM_hskghm.png "notebooks")

   ## Tags

   Tags allow user create additional relations between notes, even if they are not in same notebook. Tag can be added to note and removed as well

   ![screenshot](http://res.cloudinary.com/safenotes/image/upload/v1484951047/Screen_Shot_2017-01-20_at_2.19.38_PM_ya3gbo.png "tags")

   ### Tagging

   There are two options for creating tags: by itself or for given note. To avoid storing tags with same name, for tagging might be used tag with same name that already exists

   ```ruby
    # Tags Controller
   
    def create
      # to avoid saving tags with same name looking for tag name first
      @tag = Tag.find_by_name(params[:tag_name]) ||
        # if tag doesn't exist create new tag
        Tag.create(name: params[:tag_name], author: current_user)

      if params[:note_id]
        # Tagging connects tag and note
        tagging = Tagging.new(tag: @tag, note_id: params[:note_id])

        if tagging.save
          render :show
        else
          render json: tagging.errors.full_messages, status: 422
        end
      else
        render :show
      end
    end
   ```

   ## Text Editing

   Rich text editor was provided by the Quill.js library. It includes font, font-weight, align, text and background color, links, lists, highlighting, etc.



## Technologies used

  * Ruby on Rails
  * PostgreSQL
  * React.js
  * Redux

## Future implementations

  * Multi Sessions
  * Sharing Notes
  * Infinite Scroll
  * Search
