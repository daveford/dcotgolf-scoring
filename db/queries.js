const { Client } = require('pg');
const Pool = require('pg').Pool
const pool = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
})
var client;
class DbManager {
    constructor(){
        client = new Client({
            connectionString: process.env.DATABASE_URL,
            ssl: {
              rejectUnauthorized: false
            }
        });
    }

    async getSeason(season){
        const {rows, fields} = await pool.query("SELECT * FROM Seasons WHERE Name='"+season+"'");

        return rows;
    }

    async insertSeason(season){

    }
}
// const client = new Client({
//   connectionString: process.env.DATABASE_URL,
//   ssl: {
//     rejectUnauthorized: false
//   }
// });


module.exports = DbManager;