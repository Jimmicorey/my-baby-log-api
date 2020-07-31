/* eslint-disable strict */
// require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');
const DatalogsService = require('./datalogs-service');

const app = express();

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common'));
app.use(cors());
app.use(helmet());

/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////
//////////////           SETTING UP MY ENDPOINTS           //////////////////
/////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////

//GET ALL THE DATA LOGS ---------------------------------------WORKING!!!!!!!
app.get('/allthedata', (req, res, next) => {
  const db = req.app.get('db');
  DatalogsService.getAllDatalogs(db)
    .then(datalogs => {
      res.json(datalogs);
    })
    .catch(next);
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


app.use(function errorHandler(error, req, res, next) {
  let response;
  if (NODE_ENV === 'production') {
    response = { error: { message: 'server error' } };
  } else {
    console.error(error);
    response = { message: error.message, error };
  }
  res.status(500).json(response);
});


module.exports = app;