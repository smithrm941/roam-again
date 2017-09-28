const db = require('./db')

const findCityById = (id) => {
  return db.query(`
    SELECT
      *
    FROM
      cities
    WHERE
      id = $1
    `, [id])
    .then((city) => {
      return city[0]
    })
}

module.exports = {
  findCityById
}
