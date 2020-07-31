/* eslint-disable strict */

require('dotenv').config();

const knex = require('knex');
const app = require('./app');
const { PORT, DB_URL } = require('./config');


const db = knex({
  client: 'pg',
  connection: DB_URL,
});

app.set('db', db);


//console.log('knex and driver installed correctly');


app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});