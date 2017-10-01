const pg = require('pg-promise')()
const config = require('../../config/config.js').getConfig();

<<<<<<< HEAD
const connectionString = process.env.DATABASE_URL
=======
const connectionString = (config.get("db").get("url")) || process.env.DATABASE_URL
>>>>>>> 5a9bc936083d6728dfad5869c1b03719d9923fcf

const db = pg(connectionString)

module.exports = db
