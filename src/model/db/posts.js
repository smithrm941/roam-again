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

module.exports = {
  findPostsByAuthor
}
