const pg = require('pg-promise')()
const connectionString = process.env.DATABASE_URL || 'postgres://localhost:5432/roam'

const db = pg(connectionString)

module.exports = db
