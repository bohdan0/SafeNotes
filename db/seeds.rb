# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(username: 'Guest', password: 'password')

user1 = User.create(username: 'user1', password: 'password')
user2 = User.create(username: 'user2', password: 'password')
user3 = User.create(username: 'user3', password: 'password')

3.times do |i|
  Notebook.create(title: "notebook #{i + 1}", author_id: i + 1)
end

(1..3).each do |idx|
  Note.create(title: "note 1", body: "body", author_id: idx, notebook_id: idx)
end

Tag.create(name: 'cool', author_id: 1)
Tag.create(name: 'ruby', author_id: 1)
Tag.create(name: 'nope', author_id: 2)
Tag.create(name: 'ok', author_id: 3)

Tagging.create(tag_id: 1, note_id: 1)
Tagging.create(tag_id: 2, note_id: 2)
Tagging.create(tag_id: 3, note_id: 3)