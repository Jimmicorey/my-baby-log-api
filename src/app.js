/* eslint-disable strict */
// require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const helmet = require('helmet');
const { NODE_ENV } = require('./config');

const app = express();

app.use(morgan((NODE_ENV === 'production') ? 'tiny' : 'common'));
app.use(cors());
app.use(helmet());



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