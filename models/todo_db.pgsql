CREATE DATABASE todo_db;

CREATE TABLE tasks(
    id serial PRIMARY KEY,
    value text NOT NULL CHECK(value !~ '^\s.$'),
    deadline timestamp NOT NULL CHECK(deadline >= CURRENT_TIMESTAMP),
    isDone BOOLEAN NOT NULL,
    createdAt timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updatedAt timestamp DEFAULT NULL
);