const fs = require('fs');
const path = require('path');
const csv = require('fast-csv');
const parse = require('csv-parse');

const Players = class{
    async readPlayersCsv(filepath){
        fs.createReadStream(path.resolve(filepath))
            .pipe(csv.parse({ headers: false }))
            .on('error', error => console.error(error))
            .on('data', row => console.log(row))
        // await fs.readFile(filepath, function (err, fileData) {
        //     parse(fileData, {columns: false, trim: true}, function(err, rows) {
        //       // Your CSV data is in an array of arrys passed to this callback as rows.
        //       console.log(rows);
        //     })
        // })
    }
}

module.exports = new Players();