'use strict';

const errorHandler = require(`../../middleware/500.js`);

module.exports =(request, response) => {
  console.log(request);
  // request.model.put(request)
  //   .then(response.redirect(`/books/${request.params.id}`))
  //   .catch(errorHandler);
    request.model.put(request.params.id, request.body)
    .then(response.redirect(`/books/${request.params.id}`))
    .catch(errorHandler);
}