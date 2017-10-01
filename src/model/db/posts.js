const db = require('./db')

const findPostsByAuthor = (author) => {
  return db.query(`
    SELECT
      *
    FROM
      posts
    WHERE
      author = $1
    `, [author])
    .then((posts) => {
      return posts
    })
}

const findPostById = (id) => {
  return db.query(`
    SELECT
      *
    FROM
      posts
    WHERE
      id = $1
    `, [id])
    .then((post) => {
      return post[0]
    })
}

const findPostAuthor = (id) => {
  return db.query(`
    SELECT
      users.name
    FROM
      posts, users
    WHERE
      author = users.id
    AND
      posts.id = $1;
    `, [id])
    .then((name) => {
      return name[0].name
    })
}

const findPostCity = (id) => {
  return db.query(`
    SELECT
      cities.name
    FROM
      posts, cities
    WHERE
      city = cities.id
    AND
      posts.id = $1;
    `, [id])
    .then((name) => {
      return name[0].name
    })
}

const findPostsByCity = (city) => {
  return db.query(`
    SELECT
      posts.*, cities.name
    FROM
      posts, cities
    WHERE
      city = cities.id
    AND
      city = $1;
    `, [city])
    .then((posts) => {
      return posts
    })
}

const updatePost = (id, title, content) => {
  return db.query(`
    UPDATE
      posts
    SET
      title = $2,
      content = $3
    WHERE
      id = $1
    RETURNING
      *;
  `, [id, title, content])
  .then((post) => {
    return post[0]
  })
}

const createPost = (title, author, content, city) => {
  return db.query(`
    INSERT INTO
      posts(title, author, content, city)
    VALUES
      ($1, $2, $3, $4)
    RETURNING
      *;
    `, [title, author, content, city])
    .then((post) => {
      return post[0]
    })
}

module.exports = {
  findPostsByAuthor,
  findPostById,
  findPostAuthor,
  findPostCity,
  findPostsByCity,
  updatePost,
  createPost
}
