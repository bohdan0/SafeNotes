# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Notebook.destroy_all
Note.destroy_all
Tag.destroy_all
Tagging.destroy_all

guest = User.create(username: 'Guest', password: 'password')

school = Notebook.create(title: "school", author_id: guest.id)

  ruby = Note.create(title: "Ruby is...", body: "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.", author_id: guest.id, notebook_id: school.id)
  rails = Note.create(title: "What is Ruby on the Rails?", body: "Rails is a web application development framework written in the Ruby language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks.", author_id: guest.id, notebook_id: school.id)
  sql = Note.create(title: "Structured Query Language", body: "SQL (pronounced 'ess-que-el') stands for Structured Query Language. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems.", author_id: guest.id, notebook_id: school.id)
  js = Note.create(title: "JavaScript", body: "JavaScript is an object-oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — so many structures from those languages apply to JavaScript as well. One of the key differences is that JavaScript does not have classes; instead, the class functionality is accomplished by object prototypes (see more about ES2015 Classes).The other main difference is that functions are objects, giving functions the capacity to hold executable code and be passed around like any other object.", author_id: guest.id, notebook_id: school.id)
  react = Note.create(title: "React", body: "React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags.", author_id: guest.id, notebook_id: school.id)

  school = Tag.create(name: 'school', author_id: guest.id)
  rubyland = Tag.create(name: 'rubyland', author_id: guest.id)
  cool = Tag.create(name: 'cool', author_id: guest.id)
  useful = Tag.create(name: 'useful', author_id: guest.id)
  closures = Tag.create(name: 'closures', author_id: guest.id)
  callbacks = Tag.create(name: 'callbacks', author_id: guest.id)
  facebook = Tag.create(name: 'facebook', author_id: guest.id)
  components = Tag.create(name: 'components', author_id: guest.id)

  Tagging.create(tag_id: school.id, note_id: ruby.id)
  Tagging.create(tag_id: rubyland.id, note_id: ruby.id)
  Tagging.create(tag_id: rubyland.id, note_id: rails.id)
  Tagging.create(tag_id: useful.id, note_id: rails.id)
  Tagging.create(tag_id: school.id, note_id: rails.id)
  Tagging.create(tag_id: cool.id, note_id: rails.id)
  Tagging.create(tag_id: school.id, note_id: sql.id)
  Tagging.create(tag_id: useful.id, note_id: sql.id)
  Tagging.create(tag_id: cool.id, note_id: js.id)
  Tagging.create(tag_id: callbacks.id, note_id: js.id)
  Tagging.create(tag_id: closures.id, note_id: js.id)
  Tagging.create(tag_id: school.id, note_id: react.id)
  Tagging.create(tag_id: cool.id, note_id: react.id)
  Tagging.create(tag_id: facebook.id, note_id: react.id)
  Tagging.create(tag_id: components.id, note_id: react.id)