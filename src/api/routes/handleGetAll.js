'use strict';
require('dotenv').config();
let db = process.env.DATABASE;

const errorHandler = require('./../../middleware/500.js');

/**
 * Get all values from the database.
 * @param  {} request
 * @param  {} response
 * @param  {} =>{console.log('insidegetallfunction.'
 * @param  {} request.model.get(
 * @param  {} .then(results=>{console.log('gotresults'
 * @param  {} results
 * @param  {} ;if(db==='pg'
 * @param  {} {console.log('inhandlegetall
 * @param  {} results[0]
 * @param  {} ;if(results.rows.rowCount===0
 * @param  {} {response.render('pages/searches/new'
 * @param  {} ;}else{response.render('pages/index'
 * @param  {results.rows}} {books
 */
module.exports = (request, response) => {
  console.log('inside get all function.')
  request.model.get()
    .then(results => {
      console.log('got results', results);
      if(db === 'pg'){
        console.log('in handlegetall: ', results[0]);
        if (results.rows.rowCount === 0) {
          response.render('pages/searches/new');
        } else {
          response.render('pages/index', { books: results.rows })
        }
      }
      else{
        if(results.length === 0){
          response.render('pages/searches/new');
        } else {
          response.render('pages/index', {books: results})
        }
      }
    })
    .catch(errorHandler);
}
