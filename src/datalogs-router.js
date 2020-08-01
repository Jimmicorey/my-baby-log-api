/* eslint-disable strict */

const express = require('express');
const DatalogsService = require('./datalogs-service');

/////////////////////////////////////////////////////////////////////////////
//////////////           SETTING UP MY ENDPOINTS           //////////////////
/////////////////////////////////////////////////////////////////////////////

/** Capstone-TA: "AL" 
 * SUGGESTED 6 ENDPOINTS < 3 GET 3 POST > (2 for each log page) 
 * to access data in a single database table
*/

const DatalogsRouter = express.Router();


//GET PRIMARY PATH ---------------------------------------WORKS !!!
DatalogsRouter
  .route('/')
  .get((req, res, next) => {
    res.send('Hello, Mommies & Daddies!');
    DatalogsService.getAllDatalogs(req.app.get('db'))
    //   .then(datalogs => {
    //     res.json(datalogs);
    //   })
      .catch(next);
  });


//GET ALL THE DATA LOGS ---------------------------------------WORKS !!!
DatalogsRouter
  .route('/allthedata')
  .get((req, res, next) => {
    DatalogsService.getAllDatalogs(req.app.get('db'))
      .then(datalogs => {
        res.json(datalogs);
      })
      .catch(next);
  });
  

//GET FEED BABY DATA LOGS ---------------------------------------WORKS !!!
DatalogsRouter
  .route('/feedbabydata')
  .get((req, res, next) => {
    DatalogsService.getDatalogsByEventCategory(
      req.app.get('db'), 
      'Feed'//<------- set the "event" here!!!!
    )
      .then(datalogs => {
        res.json(datalogs);
      })
      .catch(next);
  });


//GET CHANGE DIAPER DATA LOGS ---------------------------------------WORKS !!!
DatalogsRouter
  .route('/changediaperdata')
  .get((req, res, next) => {
    DatalogsService.getDatalogsByEventCategory(
      req.app.get('db'), 
      'Diaper'//<------- set the "event" here!!!!
    )
      .then(datalogs => {
        res.json(datalogs);
      })
      .catch(next);
  });


//GET BATH TIME DATA LOGS ---------------------------------------WORKS !!!
DatalogsRouter
  .route('/bathtimedata')
  .get((req, res, next) => {
    DatalogsService.getDatalogsByEventCategory(
      req.app.get('db'), 
      'Bath'//<------- set the "event" here!!!!
    )
      .then(datalogs => {
        res.json(datalogs);
      })
      .catch(next);
  });





//POST LOG TO DATABASE ----------------------------------<<<<<<<<<<<<<<<<<<<<<<<<<<< !!!!!
//what does the code for POST look like????
//sends the current triggered EVENT, CURRENT DATE, CURRENT TIME, USER ID to the database


module.exports = DatalogsRouter;






////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
/* WORKING CODE NOTES DELETE WHEN THIS PUPPY STARTS WORKING!!!!!! */
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////


//this SELECTS SPECIFIC datalog(s) per 'searchTerm' in the database
//converted to a FUNCTION for REUSABILITY
/*
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
*/

////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////