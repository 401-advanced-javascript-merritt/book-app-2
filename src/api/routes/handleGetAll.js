'use strict';

const errorHandler = require(`../../middleware/500.js`);

module.exports = (request, response) => {
  console.log('inside get books2 function.')
  request.model.get()
    .then(results => {
      if (results.rows.rowCount === 0) {
        response.render('pages/searches/new');
      } else {
        response.render('pages/index', { books: results.rows })
      }
    })
    .catch(errorHandler);
}