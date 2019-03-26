var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

const defaultPort = 3000;

var app = express();

app.use(function(req, res, next) {
   console.log();
   console.log("Starting express chain");
   res.end();
});

/*
app.use(cors({
   exposedHeaders: ["Location"],
   credentials: true,
   origin: true
}));
*/

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

// No further processing needed for options calls.
app.options("/*", function(req, res) {
   res.status(200).end();
});

// Static path to index.html and all clientside js
// Parse all request bodies using JSON
app.use(bodyParser.json());
app.use(function(req, res, next) {
   console.log("body: " + JSON.stringify(req.body));
   old = res.json;
   res.json = function(rsp) {
      console.log(rsp);
      return old.apply(this, arguments);
   }

   next();
});


// Check general login.  If OK, add Validator to |req| and continue processing,
// otherwise respond immediately with 401 and noLogin error tag.
app.use(function(req, res, next) {
   console.log(req.path);
   res.status(401).end();
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
