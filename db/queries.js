const { Client } = require('pg');
const { Pool } = require('pg');
const pool = new Pool({
  user: process.env.DATABASE_USERNAME,
  host: process.env.DATABASE_HOST,
  database: process.env.DATABASE_NAME,
  password: process.env.DATABASE_PASSWORD,
  port: 5432,
  ssl: { rejectUnauthorized: false }
})
// var client;
// class DbManager {
//     constructor(){
//         // client = new Client({
//         //     connectionString: process.env.DATABASE_URL,
//         //     ssl: {
//         //       rejectUnauthorized: false
//         //     }
//         // });
//     }

    

    
// }

async function getSeason(season){
    const {rows, fields} = await pool.query("SELECT * FROM Seasons WHERE Name='"+season+"'");

    return rows;
}

async function insertSeason(season){
    const {rows, fields} = await pool.query("INSERT INTO Seasons (Name) VALUES ('" + season + "') ");

    return rows;
}


//module.exports = DbManager;
module.exports = {
    getSeason,
    insertSeason
  }