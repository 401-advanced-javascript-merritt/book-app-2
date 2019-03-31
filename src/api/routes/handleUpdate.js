'use strict';

const errorHandler = require(`../../middleware/500.js`);

module.exports =(request, response) => {
  request.model.put(request)
    .then(response.redirect(`/books/${request.params.id}`))
    .catch(errorHandler);
}