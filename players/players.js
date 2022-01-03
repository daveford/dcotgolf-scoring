const fs = require('fs');
var parse = require('csv-parse');

const Players = class{
    readPlayersCsv(filepath){
        fs.readFile(filepath, function (err, fileData) {
            parse(fileData, {columns: false, trim: true}, function(err, rows) {
              // Your CSV data is in an array of arrys passed to this callback as rows.
              console.log(fileData);
            })
        })
    }
}

module.exports = Players();