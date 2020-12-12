CREATE DATABASE todo_db;

CREATE TABLE tasks(
    id serial PRIMARY KEY,
    value text NOT NULL CHECK(value !~ '^\s.$'),
    deadline timestamp NOT NULL CHECK(deadline >= CURRENT_TIMESTAMP),
    is_done BOOLEAN NOT NULL,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at timestamp DEFAULT NULL
);
