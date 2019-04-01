'use strict';

require('dotenv').config();

/**
 * Tell the server which database model to use.
 * @param  {} req
 * @param  {} res
 * @param  {} next
 * @param  {} =>{letdb=process.env.DATABASE;req.model=require(`../models/${db}models/books/book-model.js`
 * @param  {} ;next(
 */
module.exports = (req, res, next) => {
  let db = process.env.DATABASE;
  req.model = require(`../models/${db}models/books/book-model.js`);

  next();
}
