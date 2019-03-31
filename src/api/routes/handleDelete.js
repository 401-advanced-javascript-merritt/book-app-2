'use strict';

const errorHandler = require(`../../middleware/500.js`);

module.exports = (request, response) => {
  let id = request.params.id;
  console.log(id);
  request.model.delete(id)  
    .then(response.redirect('/'))
    .catch(errorHandler);
}