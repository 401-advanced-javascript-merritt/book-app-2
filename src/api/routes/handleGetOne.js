'use strict';

module.exports = (request, response) => {
  let id = [request.params.id];
  request.model.get(id)
    .then(result => {
      //console.log('handle get one result:', result[0])
      response.render('pages/books/show', { book: result[0], bookshelves: result})
      //response.render('pages/books/show', { book: result.rows[0], bookshelves: request.model.shelves.rows })
      })
    .catch(err => handleError(err, response));
}