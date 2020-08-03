/* eslint-disable strict */

const express = require('express');
const DatalogsService = require('./datalogs-service');
const DatalogsRouter = express.Router();

/////////////////////////////////////////////////////////////////////////////
//////////////           SETTING UP MY ENDPOINTS           //////////////////
/////////////////////////////////////////////////////////////////////////////
//GET PRIMARY PATH 
DatalogsRouter
  .route('/')
  .get((req, res, next) => {
    res.send('Hello, Mommies & Daddies!');
  });


//GET ALL THE DATA LOGS 
DatalogsRouter
  .route('/allthedata')
  .get((req, res, next) => {
    DatalogsService.getAllDatalogs(req.app.get('db'))
      .then(datalogs => {
        res.json(datalogs);
      })
      .catch(next);
  });
///////////////////////////////////////////////////////// 
/////////////////////////////////////////////////////////
/**
 * POST LOG TO DATABASE sends the current triggered 
 * EVENT (POST body {"event_category": "new event"}), 
 * CURRENT DATE (database does this), 
 * CURRENT TIME (database does this), 
 * USER ID (login-id... stretch goal!!!) 
 * to the database
**/
/////////////////////////////////////////////////////////

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
  //POST NEW FEED BABY DATALOG TO DATABASE ------------------- WORKING!!!!!
  .post(express.json(), (req, res, next) => {

    const {event_category} = req.body;
    let newEvent = {event_category};

    console.log(newEvent);

    DatalogsService.insertNewDatalog(
      req.app.get('db'),
      newEvent
    )
      .then(datalog => {
        res.json(datalog);
      })
      .catch(next);
  });




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
//POST NEW CHANGE DIAPER DATALOG TO DATABASE ------------------- WORKING!!!!!
  .post(express.json(), (req, res, next) => {

    const {event_category} = req.body;
    let newEvent = {event_category};
  
    console.log(newEvent);
  
    DatalogsService.insertNewDatalog(
      req.app.get('db'),
      newEvent
    )
      .then(datalog => {
        res.json(datalog);
      })
      .catch(next);
  });


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
//POST NEW BATH TIME DATALOG TO DATABASE ------------------- WORKING!!!!!
  .post(express.json(), (req, res, next) => {

    const {event_category} = req.body;
    let newEvent = {event_category};
  
    console.log(newEvent);
  
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