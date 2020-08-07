/* eslint-disable strict */

const express = require('express');
const DatalogsService = require('./datalogs-service');
const DatalogsRouter = express.Router();

/////////////////////////////////////////////////////////////////////////////
//////////////              MY ENDPOINTS                   //////////////////
/////////////////////////////////////////////////////////////////////////////


///////////////////////////////////////////////////////////////
////////////////// FEED BABY DATA LOGS ////////////////////////

//GET FEED BABY DATA LOGS 
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
  })

  //POST NEW FEED BABY DATALOG TO DATABASE
  .post(express.json(), (req, res, next) => {

    const {event_category} = req.body;
    let newEvent = {event_category};

    DatalogsService.insertNewDatalog(
      req.app.get('db'),
      newEvent
    )
      .then(datalog => {
        res.json(datalog);
      })
      .catch(next);
  });

////////////////////////////////////////////////////////////////
////////////////// CHANGE DIAPER DATA LOGS /////////////////////

//GET CHANGE DIAPER DATA LOGS 
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
  })

//POST NEW CHANGE DIAPER DATALOG TO DATABASE
  .post(express.json(), (req, res, next) => {

    const {event_category} = req.body;
    let newEvent = {event_category};
  
    DatalogsService.insertNewDatalog(
      req.app.get('db'),
      newEvent
    )
      .then(datalog => {
        res.json(datalog);
      })
      .catch(next);
  });


////////////////////////////////////////////////////////////
////////////////// BATH TIME DATA LOGS /////////////////////

//GET BATH TIME DATA LOGS 
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
  })

//POST NEW BATH TIME DATALOG TO DATABASE
  .post(express.json(), (req, res, next) => {

    const {event_category} = req.body;
    let newEvent = {event_category};
    
    DatalogsService.insertNewDatalog(
      req.app.get('db'),
      newEvent
    )
      .then(datalog => {
        res.json(datalog);
      })
      .catch(next);
  });


module.exports = DatalogsRouter;



