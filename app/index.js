'use strict';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import path from 'path';
import db from './db';

const app = express();
const PORT = 1337;

app.get('/', (req, res) => res.send('lets start!'))

db.sync() // if you update your db schemas, make sure you drop the tables first and then recreate them
.then(() => {
  console.log('db synced');
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// //static middleware
// app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api')); // include our routes!
app.get('/', (req, res) => res.send('lets start!'))

// app.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname, '../public/index.html'));
// });

// //error handling middleware
// app.use((err, req, res, next) => {
//   console.error(err.stack);
//   res.status(err.status || 500).send(err.message || 'Internal server error');
// });

// module.exports = app;