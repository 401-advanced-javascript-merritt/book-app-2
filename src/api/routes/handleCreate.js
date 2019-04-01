'use strict';
require('dotenv').config();
let db = process.env.DATABASE;

const errorHandler = require('./../../middleware/500.js');


/**
 * Create a new value in the database.
 * @param  {} request
 * @param  {} response
 * @param  {} =>{if(db==='pg'
 * @param  {} {request.model.createShelf(request.body
 * @param  {} .then(result=>{console.log('ln86shelf
 * @param  {} result
 * @param  {} ;request.model.post(request.body
 * @param  {} result
 * @param  {} .then(res=>response.redirect(`/books/${res.rows[0].id}`
 * @param  {} }
 * @param  {} .catch(errorHandler
 * @param  {} ;}else{request.model.post(request.body
 * @param  {} .then(response.redirect('/'
 * @param  {} .catch(errorHandler
 */
module.exports = (request, response) => {
  if(db === 'pg'){
    request.model.createShelf(request.body)
      .then(result => {

        console.log('ln 86 shelf: ', result);
        request.model.post(request.body, result)
          .then(res => response.redirect(`/books/${res.rows[0].id}`))
      })
      .catch(errorHandler);
  }
  else{
    request.model.post(request.body)
      .then(response.redirect('/'))
      .catch(errorHandler);
  }
}
