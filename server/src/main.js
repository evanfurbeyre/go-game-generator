var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

var genBoard = require('./boardGen.js');

const defaultPort = 3000;
const boardSize = 9;

var app = express();

app.use(function(req, res, next) {
   console.log();
   console.log(req.path);
   console.log("Starting express chain");
   next(); 
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
   console.log("\n" + req.method + " " + req.path);
   console.log("query:   " + JSON.stringify(req.query));
   console.log("params:  " + JSON.stringify(req.params));
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header("Access-Control-Allow-Credentials", true);
   res.header("Access-Control-Allow-Headers", "Content-Type");
   next();
});


app.get('/', function(req, res) {
   console.log("At root endpoint");
   res.status(200);
   res.end();
});

app.get('/board', function(req, res) {
   console.log("At board endpoint");
   let board = genBoard(boardSize);
   res.status(200).json(board);
   res.end();
});

app.use(cors({
   exposedHeaders: ["Location"],
   credentials: true,
   origin: true
}));

/*
app.use(express.static(path.join(__dirname, 'public')));

app.use(function(req, res, next) {
   console.log("\n" + req.method + " " + req.path);
   console.log("query:   " + JSON.stringify(req.query));
   console.log("params:  " + JSON.stringify(req.params));
   res.header("Access-Control-Allow-Origin", "http://localhost:3000");
   res.header("Access-Control-Allow-Credentials", true);
   res.header("Access-Control-Allow-Headers", "Content-Type");
   next();
});

// Handler of last resort. Print stacktrace to console and send a 500 response.
app.use(function(req, res) {
   res.status(404).end();
   req.cnn.release();
});

app.use(function(err, req, res, next) {
   //console.log(err.stack);
   res.status(500).json(err.stack);
   res.end();
   req.cnn && req.cnn.release();
});
*/

app.listen(defaultPort, function () {
   console.log('App Listening on port ' + (defaultPort));
});
