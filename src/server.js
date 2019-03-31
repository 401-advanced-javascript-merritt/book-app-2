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
app.set('view engine', 'ejs');
app.use(express.static('public'));

const PORT = process.env.PORT;

let start = (port = process.env.Port) => {
  app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
}
// middleware
app.use(cors());
app.use(morgan('dev'));

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//all routes in here
app.use(apiRoutes);
app.use(routes);

//Catch problems
app.use(notFound);
app.use(errorHandler);


module.exports = {app, start}