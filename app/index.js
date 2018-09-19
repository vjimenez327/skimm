'use strict';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import db from './db';

const app = express();
const PORT = 1337;

app.get('/', (req, res) => res.send('lets start!'))

db.sync() 
.then(() => {
  console.log('db synced');
  app.listen(PORT, () => console.log(`App listening on port ${PORT}`));
});

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', require('./api'));
app.get('/', (req, res) => res.send('No Excuses!'))
