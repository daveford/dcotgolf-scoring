const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: '.' });
const express = require('express');
const fileUpload = require('express-fileupload');
const path = require('path');
const PORT = process.env.PORT || 5000;
const players = require('./players/players.js');
const players = require('./players/players.js');

var app = module.exports = express();

// app.use('/api', function(req, res, next){
//     var key = req.query['api-key'];
  
//     // key isn't present
//     if (!key) return next(error(400, 'api key required'));
  
//     // key is invalid
//     if (!~apiKeys.indexOf(key)) return next(error(401, 'invalid api key'));
  
//     // all good, store req.key for route access
//     req.key = key;
//     next();
//   });
app.use('/', express.static(__dirname + '/uploads'));
// app.use(bodyParser({uploadDir:__dirname, keepExtensions:true}));
// app.use(multer({dest:__dirname + '/uploads/'}));
app.use(fileUpload());
app.get("/api", function(req, res, next){
    res.send("Hello World");
});

//app.post('/api/scores/upload', upload.single('file'), function(req, res, next){
app.post('/api/scores/upload', function(req, res, next){
    // console.log("Files: " + req.files);
    // console.log("File: " + req.file);
    // The name of the input field (i.e. "sampleFile") is used to retrieve the uploaded file
    let csv = req.files.csv;

    // Use the mv() method to place the file somewhere on your server
    csv.mv(__dirname + '/' + csv.name, function(err) {
        if (err)
        return res.status(500).send(err);

        res.send('File uploaded!');
    });
    //console.log(text);
});

app.post('/api/players/upload', function(req, res, next){
    let csv = req.files.csv;

    // Use the mv() method to place the file somewhere on your server
    csv.mv(__dirname + "/" + csv.name, async function(err) {
        if (err){
            console.log(err);
            return res.status(500).send(err);
        } 

        await players.readPlayersCsv(__dirname + "/" + csv.name);

        res.send('File uploaded!');
    });
});

app.post('/api/players', async function(req, res, next){
    var playersList = await players.getPlayers(); 
    res.send(JSON.stringify(playersList));
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
