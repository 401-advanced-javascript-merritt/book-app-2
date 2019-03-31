'use strict';

const errorHandler = require(`../../middleware/500.js`);

module.exports = (request, response) => {
  request.model.createShelf(request.body)
     .then(result => {
       
       console.log('ln 86 shelf: ');
       request.model.post(request.body, result.rows[0].id)
       .then(result => response.redirect(`/books/${result.rows[0].id}`))
      })
      .catch(errorHandler);
}