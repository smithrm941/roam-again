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

const logInUser = (email, password) => {
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

const findUserByEmail = (email) => {
  return db.query(`
    SELECT
      *
    FROM
      users
    WHERE
      email = $1`
      , [email])
    .then((user) => {
      return user[0]
    })
}

const findUserById = (id) => {
  return db.query(`
    SELECT
      *
    FROM
      users
    WHERE
      id = $1`
      , [id])
    .then((user) => {
      return user[0]
    })
}

const updateProfile = (id, name, current_city) => {
  return db.query(`
    UPDATE
      users
    SET
      name = $2,
      current_city = $3
    WHERE
      id = $1
    RETURNING
      *;
  `, [id, name, current_city])
  .then((user) => {
    return user[0]
  })
}

module.exports = {
  newUser,
  logInUser,
  findUserByEmail,
  findUserById,
  updateProfile
}
