'use strict';

require('dotenv').config();

module.exports = (req, res, next) => {
  console.log('inside model finder');
  let db = process.env.DATABASE;
//  let modelName = req.params.model.replace(/[^a-z0-9-_]/gi, '');
//  let modelName = req.params.model;
//  console.log('model finder', modelName);
//  req.model = require(`../models/${db}models/${modelName}/${modelName}-model.js`);
  req.model = require(`../models/${db}models/books/book-model.js`);

  next();
}