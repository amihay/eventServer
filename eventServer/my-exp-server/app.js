var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var events = require('./routes/events');
var health = require('./routes/health');

var app = express();

var dbServer = 'localhost';
var dbPort  = 27017;
var dbName = 'test';
var connectionString = 'mongodb://'+dbServer+':'+dbPort+'/'+dbName;

var appServerPort = 3000;

mongoose.connect(connectionString);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('we are connected to the DB');
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use('/api', events);
app.use('/health', health);

module.exports = app;

app.listen(appServerPort, function () {
  console.log('Example app listening on port ' + appServerPort);
});
