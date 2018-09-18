'use strict';

var db = require('./db');
var app = require('./server');
var PORT = 1337;

app.get('/', function (req, res) {
  return res.send('Hello World!');
});

app.listen(PORT, function () {
  return console.log('Example app listening on port ' + PORT + '!');
});

// db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
// .then(() => {
//   console.log('db synced');
//   app.listen(PORT, () => console.log(`studiously serving silly sounds on port ${PORT}`));
// });