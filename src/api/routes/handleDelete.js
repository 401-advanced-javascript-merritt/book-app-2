'use strict';

const errorHandler = require(`../../middleware/500.js`);

module.exports = (request, response) => {
  let _id = request.params.id;
  //console.log(_id);
  request.model.delete(_id)  
    .then(response.redirect('/'))
    .catch(errorHandler);
}