'use strict';
require('dotenv').config();
let db = process.env.DATABASE;

const errorHandler = require('./../../middleware/500.js');

/**
 * Update an existing value in the database.
 * @param  {} request
 * @param  {} response
 * @param  {} =>{if(db==='pg'
 * @param  {} {request.model.put(request
 * @param  {} .then(response.redirect(`/books/${request.params.id}`
 * @param  {} .catch(errorHandler
 * @param  {} ;}else{request.model.put(request.params.id
 * @param  {} request.body
 * @param  {} .then(response.redirect(`/books/${request.params.id}`
 * @param  {} .catch(errorHandler
 */
module.exports =(request, response) => {
  if(db === 'pg'){
    request.model.put(request)
      .then(response.redirect(`/books/${request.params.id}`))
      .catch(errorHandler);
  }
  else{
    request.model.put(request.params.id, request.body)
      .then(response.redirect(`/books/${request.params.id}`))
      .catch(errorHandler);
  }
}
