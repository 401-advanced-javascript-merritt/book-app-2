'use strict';

require('dotenv').config();

// Application Dependencies
const cwd = process.cwd();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

//middleware files
const errorHandler = require(`${cwd}/src/middleware/500.js`);
const notFound = require(`${cwd}/src/middleware/404.js`);
const routes = require(`${cwd}/src/api/routes.js`);
const apiRoutes = require(`${cwd}/src/api/api-routes.js`);

// Application Setup
const app = express();

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.set('view engine', 'ejs');
app.use(express.static('public'));

//all routes in here
  app.use(apiRoutes);
  app.use(routes);
  
  //Catch problems
  app.use(notFound);
  app.use(errorHandler);
  
  module.exports = {
    server: app,
    start: port => {
      let PORT = port || process.env.PORT || 8080;
      app.listen(PORT, () => console.log(`listening on port: ${PORT}`));
    },
  };
