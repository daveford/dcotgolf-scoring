const bodyParser = require('body-parser');
const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: '.' });
const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

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
app.use('/', express.static(__dirname + '/static'));
app.use(bodyParser({uploadDir:__dirname, keepExtensions:true}));

app.get("/api", function(req, res, next){
    res.send("Hello World");
});

app.post('/api/scores/upload', upload.single('file'), function(req, res, next){
//app.post('/api/scores/upload', function(req, res, next){
    console.log(req.body.csv);
    console.log("Files: " + req.files);
    console.log("File: " + req.file);
    let buff = Buffer.from(req.body.csv, 'base64');
    let text = buff.toString('utf-8');
    console.log(text);
});

app.post('/api/players/upload', function(req, res, next){});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));
