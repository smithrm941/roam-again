const db = require('./db')

const newUser = (email, password) => {
  return db.query(`
    INSERT INTO
      users (email, password)
    VALUES
      ($1, $2)
    RETURNING
      *
    `, [email, password])
    .then((user) => {
      return user[0]
    })
}

const logIn = (email, password) => {
  return db.query(`
    SELECT
      *
    FROM
      users
    WHERE
      email = $1 AND password = $2
      `, [email, password])
    .then((user) => {
      return user[0]
    })
}

const findUser = (email) => {
  return db.query(`
    SELECT
      email
    FROM
      users
    WHERE
      email = $1`
      , [email])
    .then((user) => {
      return user[0]
    })
}

module.exports = {
  newUser,
  logIn,
  findUser
}
