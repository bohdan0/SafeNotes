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

school = Notebook.create(title: "school", author: guest)

  ruby = Note.create(author: guest, notebook: school, title: "Ruby is...", body: "A dynamic, open source programming language with a focus on simplicity and productivity. It has an elegant syntax that is natural to read and easy to write.")
  rails = Note.create(author: guest, notebook: school, title: "What is Ruby on the Rails?", body: "Rails is a web application development framework written in the Ruby language. It is designed to make programming web applications easier by making assumptions about what every developer needs to get started. It allows you to write less code while accomplishing more than many other languages and frameworks.")
  sql = Note.create(author: guest, notebook: school, title: "Structured Query Language", body: "SQL (pronounced 'ess-que-el') stands for Structured Query Language. SQL is used to communicate with a database. According to ANSI (American National Standards Institute), it is the standard language for relational database management systems.")
  js = Note.create(author: guest, notebook: school, title: "JavaScript", body: "JavaScript is an object-oriented dynamic language with types and operators, standard built-in objects, and methods. Its syntax is based on the Java and C languages — so many structures from those languages apply to JavaScript as well. One of the key differences is that JavaScript does not have classes; instead, the class functionality is accomplished by object prototypes (see more about ES2015 Classes).The other main difference is that functions are objects, giving functions the capacity to hold executable code and be passed around like any other object.")
  react = Note.create(author: guest, notebook: school, title: "React", body: "React (sometimes styled React.js or ReactJS) is an open-source JavaScript library providing a view for data rendered as HTML. React views are typically rendered using components that contain additional components specified as custom HTML tags.")

  school = Tag.create(name: 'school', author: guest)
  rubyland = Tag.create(name: 'rubyland', author: guest)
  cool = Tag.create(name: 'cool', author: guest)
  useful = Tag.create(name: 'useful', author: guest)
  closures = Tag.create(name: 'closures', author: guest)
  callbacks = Tag.create(name: 'callbacks', author: guest)
  facebook = Tag.create(name: 'facebook', author: guest)
  components = Tag.create(name: 'components', author: guest)

  Tagging.create(tag: school, note: ruby)
  Tagging.create(tag: rubyland, note: ruby)
  Tagging.create(tag: rubyland, note: rails)
  Tagging.create(tag: useful, note: rails)
  Tagging.create(tag: school, note: rails)
  Tagging.create(tag: cool, note: rails)
  Tagging.create(tag: school, note: sql)
  Tagging.create(tag: useful, note: sql)
  Tagging.create(tag: cool, note: js)
  Tagging.create(tag: callbacks, note: js)
  Tagging.create(tag: closures, note: js)
  Tagging.create(tag: school, note: react)
  Tagging.create(tag: cool, note: react)
  Tagging.create(tag: facebook, note: react)
  Tagging.create(tag: components, note: react)

recipes = Notebook.create(title: "recipes", author: guest)
  bread_pudding = Note.create(author: guest, notebook: recipes, title: "Bread Pudding", body: "Ingredients, 3 cups bread cubes, 4 cups scalded milk, 3/4 cup white sugar, 1 tablespoon butter, 1/2 teaspoon salt, 4 eggs, lightly beaten , 1 teaspoon vanilla extract, 1 cup white sugar, 1/2 cup butter, 1/2 cup heavy cream, 1 teaspoon vanilla extract DirectionsPreheat oven to 350 degrees F (175 degrees C).Butter an 8x8 inch glass baking dish. Soak bread in hot milk for five minutes. Stir in 3/4 cup sugar, 1 tablespoon butter, salt, eggs, and 1 teaspoon vanilla. Pour into the baking dish.Line a roasting pan with a damp kitchen towel. Place baking dish on towel inside roasting pan, and place roasting pan on oven rack. Fill roasting pan with boiling water to reach halfway up the sides of the baking dish. Bake for 60 minutes. Cool on wire rack.While pudding cools, combine 1 cup sugar, 1/2 cup butter, cream, and 1 teaspoon vanilla in a large saucepan. While stirring, bring to a boil. Reduce heat to low, and stir 3 minutes more. Spoon over warm bread pudding.")
  best_hamburger = Note.create(author: guest, notebook: recipes, title: "Best Hamburger", body: "Ingredients 1 pound ground beef, 2 cloves garlic, minced, 2 tablespoons extra virgin olive oil, 1 1/2 teaspoons salt, 1 teaspoon freshly ground black pepper, 1/2 teaspoon dried basil leaves, 4 hamburger buns, split. Directions Preheat an outdoor grill for high heat. Mix together the ground beef, garlic, olive oil, salt, pepper, and basil. Divide into four balls, and flatten into patties. Cook the patties for about 3 to 5 minutes on each side, or to desired doneness. The internal temperature should be at least 160 degrees F (70 degrees C). Remove from grill and place onto hamburger buns. Top with desired toppings and condiments.")
  sweet_potato_fries = Note.create(author: guest, notebook: recipes, title: "Sweet Potato Fries", body: "Ingredients 3 tablespoons olive oil, 1 tablespoon minced fresh rosemary, 1 garlic clove, minced, 1 teaspoon cornstarch, 3/4 teaspoon salt, 1/8 teaspoon pepper, 3 large sweet potatoes, peeled and cut into 1/4-inch julienned strips (about 2-1/4 pounds) Directions Preheat oven to 425°. In a large resealable plastic bag, combine the first six ingredients. Add sweet potatoes; shake to coat. arrange in a single layer on two 15x10x1-in. baking pans coated with cooking spray. Bake, uncovered, 30-35 minutes or until tender and lightly browned, turning occasionally.")
  green_salad = Note.create(author: guest, notebook: recipes, title: "Green Salad", body: "Ingredients 2 cups romaine lettuce - torn, washed and dried, 1 cup torn escarole, 1 cup torn radicchio, 1 cup torn red leaf lettuce, 1/4 cup chopped green onions, 1/2 red bell pepper, sliced into rings, 1/2 green bell pepper, sliced in rings 12 cherry tomatoes, 1/4 cup grapeseed oil, 2 tablespoons chopped fresh basil, 1/4 cup balsamic vinegar, 2 tablespoons lemon juice, salt and pepper to taste, Directions, In a large bowl, combine the romaine, escarole, radicchio, red-leaf, scallions, red pepper, green pepper and cherry tomatoes., Whisk together the grapeseed oil, basil, vinegar, lemon juice and salt and pepper. Pour over salad, toss and serve immediately.")

  delicious = Tag.create(name: 'delicious', author: guest)
  desert = Tag.create(name: 'desert', author: guest)
  healthy = Tag.create(name: 'healthy', author: guest)
  meat = Tag.create(name: 'meat', author: guest)
  vegeterian = Tag.create(name: 'vegeterian', author: guest)
  gluten_free = Tag.create(name: 'gluten free', author: guest)

  Tagging.create(tag: delicious, note: bread_pudding)
  Tagging.create(tag: delicious, note: sweet_potato_fries)
  Tagging.create(tag: desert, note: bread_pudding)
  Tagging.create(tag: healthy, note: green_salad)
  Tagging.create(tag: meat, note: best_hamburger)
  Tagging.create(tag: vegeterian, note: green_salad)
  Tagging.create(tag: vegeterian, note: bread_pudding)
  Tagging.create(tag: vegeterian, note: sweet_potato_fries)
  Tagging.create(tag: gluten_free, note: green_salad)