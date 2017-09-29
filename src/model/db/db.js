const pg = require('pg-promise')()
const config = require('../../config/config.js').getConfig();

const connectionString = process.env.DATABASE_URL

const db = pg(connectionString)

module.exports = db
