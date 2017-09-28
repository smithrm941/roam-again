const pg = require('pg-promise')()
const config = require('../../config/config.js').getConfig();

const connectionString = config.get("db").get("url")

const db = pg(connectionString)

module.exports = db
