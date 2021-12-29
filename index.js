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

app.get("/api", function(req, res, next){
    res.send("Hello World");
});

app.post('/api/scores/upload', upload.single('file'), function(req, res, next){});

app.listen(PORT, () => console.log(`Listening on ${ PORT }`));