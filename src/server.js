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


////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

console.log('knex and driver installed correctly');

//this SELECTS SPECIFIC datalog(s) per 'searchTerm' in the database
//converted to a FUNCTION for REUSABILITY
function searchByEventCategory(searchTerm) {
  db.from('my_baby_log_events')
    .select('id', 'event_category', 'date_created')
    .from('my_baby_log_events')
    .where('event_category', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result);
    });
}
searchByEventCategory('Wet');

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});