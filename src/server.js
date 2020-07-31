/* eslint-disable strict */
require('dotenv').config();

const knex = require('knex');
const app = require('./app');
const { PORT, DB_URL } = require('./config');

// const DatalogsService = require('./datalogs-service');


const db = knex({
  client: 'pg',
  connection: DB_URL,
});

app.set('db', db);


// DatalogsService.getAllDatalogs(db)
//   //.then(datalogs => console.log(datalogs))
//   .then((event) => DatalogsService.getDatalogsByEventCategory(db, event));

  



console.log('knex and driver installed correctly');/////////////////////////////

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});