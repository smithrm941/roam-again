const db = require('./db')

const findPostsByAuthor = (id) => {
  return db.query(`
    SELECT
      *
    FROM
      posts
    WHERE
      id = $1
    `, [id])
    .then((posts) => {
      console.log(posts)
      return posts
    })
}

module.exports = {
  findPostsByAuthor
}
