'use strict';
require('dotenv').config();
let db = process.env.DATABASE;

const errorHandler = require('./../../middleware/500.js');

/**
 * Get a single value from the database.
 * @param  {} request
 * @param  {} response
 * @param  {} =>{letid=[request.params.id];request.model.get(id
 * @param  {} .then(result=>{if(db==='pg'
 * @param  {} {response.render('pages/books/show'
 * @param  {} {book
 * @param  {} bookshelves
 */
module.exports = (request, response) => {
  let id = [request.params.id];
  request.model.get(id)
    .then(result => {
      if(db === 'pg'){
        response.render('pages/books/show', { book: result.rows[0], bookshelves: request.model.shelves.rows })
      }
      else{
        response.render('pages/books/show', { book: result[0], bookshelves: result})
      }
    })
    .catch(errorHandler);
}
