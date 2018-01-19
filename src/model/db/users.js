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
      id, email, name, current_city, join_date, img_url
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
      id, email, name, current_city, join_date, img_url
    FROM
      users
    WHERE
      email = $1`
      , [email])
    .then((user) => {
      return user[0]
    })
}

const findUserByName = (name) => {
  return db.query(`
    SELECT
      id, email, name, current_city, join_date, img_url
    FROM
      users
    WHERE
      name = $1`
      , [name])
    .then((user) => {
      return user[0]
    })
}

const findUserById = (id) => {
  return db.query(`
    SELECT
      id, email, name, current_city, join_date, img_url
    FROM
      users
    WHERE
      id = $1`
      , [id])
    .then((user) => {
      return user[0]
    })
}

const updateProfile = (id, name, current_city, img_url) => {
  return db.query(`
    UPDATE
      users
    SET
      name = $2,
      current_city = $3,
      img_url = $4
    WHERE
      id = $1
    RETURNING
      id, name, current_city, img_url;
  `, [id, name, current_city, img_url])
  .then((user) => {
    return user[0]
  })
}

module.exports = {
  newUser,
  logInUser,
  findUserByEmail,
  findUserById,
  updateProfile,
  findUserByName
}
