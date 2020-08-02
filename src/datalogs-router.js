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
    // DatalogsService.getAllDatalogs(req.app.get('db'))
    //   .then(datalogs => {
    //     res.json(datalogs);
    //   })
    //   .catch(next);
  });


//GET ALL THE DATA LOGS ---------------------------------------WORKS !!!
DatalogsRouter
  .route('/allthedata')
  .get((req, res, next) => {
    // res.send('ALL THE DATA HERE');
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
    //res.send('FEED BABY DATALOGS HERE');
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
    //res.send('CHANGE DIAPER DATALOGS HERE');
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
    //res.send('BATH TIME DATALOGS HERE');
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