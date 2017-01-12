# DB Schema

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
session_token   | string    | not null, indexed, unique
password_digest | string    | not null

## notebooks
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
author_id   | integer   | not null, foreign key (references users), indexed

## notes
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
title       | string    | not null
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
notebook_id | integer   | not null, foreign key (references notebooks), indexed

## tags
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
author_id   | integer   | not null, foreign key (references users), indexed
name        | string    | not null

## taggings
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
tag_id      | integer   | not null, foreign key (references tags), indexed
note_id     | integer   | not null, foreign key (references notes), indexed, unique [tag_id]
