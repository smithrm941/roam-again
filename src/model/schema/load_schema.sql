DROP DATABASE IF EXISTS roam;
CREATE DATABASE roam;

\c roam

DROP TABLE IF EXISTS users;
CREATE TABLE users(
  id SERIAL PRIMARY KEY,
  email VARCHAR(255) NOT NULL,
  password VARCHAR(255) NOT NULL,
  name VARCHAR(255),
  current_city VARCHAR(255),
  join_date DATE DEFAULT current_date,
  img_url TEXT
);

DROP TABLE IF EXISTS cities;
CREATE TABLE cities(
  id SERIAL PRIMARY KEY,
  name VARCHAR(255),
  img_url TEXT
);

DROP TABLE IF EXISTS posts;
CREATE TABLE posts(
  id SERIAL PRIMARY KEY,
  title VARCHAR(255),
  author INTEGER REFERENCES users(id),
  content TEXT,
  city INTEGER REFERENCES cities(id),
  date_posted DATE DEFAULT current_date
);
