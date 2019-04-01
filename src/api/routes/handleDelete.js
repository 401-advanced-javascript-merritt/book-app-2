'use strict';

const errorHandler = require('./../../middleware/500.js');
/**
 * Delete a value from the database
 * @param  {} request
 * @param  {} response
 * @param  {} =>{let_id=request.params.id;request.model.delete(_id
 * @param  {} .then(response.redirect('/'
 * @param  {} .catch(errorHandler
 */
module.exports = (request, response) => {
  let _id = request.params.id;
  request.model.delete(_id)
    .then(response.redirect('/'))
    .catch(errorHandler);
}
