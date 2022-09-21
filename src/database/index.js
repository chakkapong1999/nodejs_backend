const { Pool } = require('pg')

const pool = new Pool({
  user: 'root',
  host: 'localhost',
  database: 'game_adapter',
  password: 'root',
  port: 5432
})

module.exports = pool