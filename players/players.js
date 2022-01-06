const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const parse = require('csv-parse');
const Roster = require('../models/league-roster.js');
const queries = require('../db/queries.js');

const Players = class{
    async readPlayersCsv(filepath){
        var roster = new Roster();
        //var db = new DbManager();
        fs.createReadStream(path.resolve(filepath))
            .pipe(csv.parse({ headers: false }))
            .on('error', error => console.error(error))
            .on('data', (row) => {
                //console.log(roster);
                if(row[0].toLowerCase() == "season") roster.season = row[1];
                else if(row[0].toLowerCase() == "name" || row[0] == "") ;
                else {
                    console.log(row);
                    console.log(row[0]);
                    roster.addPlayer(row[0], row[1], (row[2].toLowerCase() === 'true'));
                }
                //console.log(JSON.stringify(roster));
            })
            .on('end', async () => {
                var seasons = await queries.getSeason(roster.season);
                var result = await queries.insertSeason(roster.season);
                //console.log(roster.players);
                var playersArr = [];
                roster.players.map((player) => {
                    playersArr.push([player.name, player.handicap, player.isActive]);
                })
                var playersResult = await queries.batchInsertPlayers(playersArr);
                // if(seasons.length == 0){
                //     var result = await queries.insertSeason(roster.season);
                //     var playersResult = await queries.batchInsertPlayers(roster.players);
                //     console.log(result);
                // }
                console.log(seasons);
            })
            
    }
}

module.exports = new Players();