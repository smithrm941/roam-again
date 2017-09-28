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

module.exports = {
  findPostsByAuthor,
  findPostById,
  findPostAuthor,
  findPostCity
}
