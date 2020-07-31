/* eslint-disable strict */
// require('dotenv').config();
// const { DB_URL } = require('./config');
// const knex = require('knex');

const DatalogsService = {
//GETS ALL THE DATALOGS
  getAllDatalogs(db) {
    return db
      .from('my_baby_log_events')
      .select('*');
  },

  //GETS ONLY DATALOGS OF SPECIFIED EVENT CATEGORY
  getDatalogsByEventCategory(db, event) {
    return db
      .from('my_baby_log_events')
      .select('*')
      .where('event_category', 'ILIKE', `%${event}%`);
  },

};


module.exports = DatalogsService;




/*
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

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
*/

/*
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////           SETTING UP MY ENDPOINTS           //////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//GET HOME ROUTE
app.get('/', (req, res) => {
res.send('Hello, Mommies and Daddies!');
});

//GET FEED BABY DATA LOGS
//filter by currently logged-in USER ID
app.get('/feedbabydata', (req, res) => {
res.send('This will be the Feed Baby Log endpoint');
});

//GET CHANGE DIAPER DATA LOGS
//filter by currently logged-in USER ID
app.get('/changediaperdata', (req, res) => {
res.send('This will be the Change Diaper Log endpoint');
});

//GET BATH TIME DATA LOGS
//filter by currently logged-in USER ID
app.get('/bathtimedata', (req, res) => {
res.send('This will be the Bath Time Log endpoint');
});

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//POST LOG TO DATABASE ----------------------------------<<<<<<<<<<<<<<<<<<<<<<<<<<<
//what does the code for POST look like????
//sends the current triggered EVENT, CURRENT DATE, CURRENT TIME, USER ID to the database

//AL SUGGESTED 6 ENDPOINTS 3 GET 3 POST (2 for each log)
//add data to a single database table


/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
*/