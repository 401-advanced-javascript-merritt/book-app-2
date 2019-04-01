'use strict';

const errorHandler = require(`../../middleware/500.js`);

module.exports = (request, response) => {
  console.log('inside get all function.')
  request.model.get()
    .then(results => {
      console.log('got results', results);
      // console.log('in handlegetall: ', results[0]);
      // if (results.rows.rowCount === 0) {
      //   response.render('pages/searches/new');
      // } else {
      //   response.render('pages/index', { books: results.rows })
      // }
      if(results.length === 0){
        response.render('pages/searches/new');
      } else {
        response.render('pages/index', {books: results})
      }
    })
    .catch(errorHandler);
}