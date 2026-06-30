// Połączenie z bazą danych PostgreSQL
// Pool = pula połączeń — serwer utrzymuje kilka gotowych połączeń zamiast tworzyć nowe przy każdym zapytaniu
const { Pool } = require('pg')
require('dotenv').config()

const pool = new Pool({
  host:     process.env.DB_HOST,
  port:     process.env.DB_PORT,
  database: process.env.DB_NAME,
  user:     process.env.DB_USER,
  password: process.env.DB_PASSWORD,
})

module.exports = pool
