const db = require('./db')

const newUser = (email, password) => {
  return db.query(`
    INSERT INTO
    users (email, password)
    VALUES
    ($1, $2)
    `, [email, password])
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
}

module.exports = {
  newUser,
  logIn
}
