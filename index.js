const fs = require('fs');
const multer = require('multer');
const upload = multer({ dest: 'tmp/csv/' });
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
app.use(express.bodyParser({uploadDir:__dirname +'/static/tmp', keepExtensions:true}));

app.get("/api", function(req, res, next){
    res.send("Hello World");
});

//app.post('/api/scores/upload', upload.single('file'), function(req, res, next){});
app.post('/api/scores/upload', function(req, res, next){
    fs.readdir(dirname, function(err, files) {
        if (err) {
           // some sort of error
        } else {
           if (!files.length) {
               // directory appears to be empty
           }
           files.foreach(element => {
            console.log(element);
          })
        }
    });
});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));