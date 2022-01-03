const { Client } = require('pg');

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

// const Pool = require('pg').Pool
// const pool = new Pool({
//   user: process.env.DATABASE_USERNAME,
//   host: 'localhost',
//   database: process.env.DATABASE_NAME,
//   password: process.env.DATABASE_PASSWORD,
//   port: 5432,
// })