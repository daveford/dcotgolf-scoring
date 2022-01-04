const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const parse = require('csv-parse');
const Roster = require('../models/league-roster');

const Players = class{
    async readPlayersCsv(filepath){
        var roster = new Roster();
        fs.createReadStream(path.resolve(filepath))
            .pipe(csv.parse({ headers: false }))
            .on('error', error => console.error(error))
            .on('data', (row) => {
                if(row[0].toLowerCase() == "season") roster.season( row[1]);
                else if(row[0].toLowerCase() == "name" || row[0] == "") ;
                else {
                    roster.addPlayer({
                        name: row[0],
                        handicap: row[1],
                        isActive: row[2]
                    });
                }
                console.log(JSON.stringify(roster));
            })
            
    }
}

module.exports = new Players();