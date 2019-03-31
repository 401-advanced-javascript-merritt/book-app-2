'use strict';

module.exports = (request, response) => {
  let id = [request.params.id];
  request.model.get(id)
    .then(result => {
      response.render('pages/books/show', { book: result.rows[0], bookshelves: request.model.shelves.rows })
      })
    .catch(err => handleError(err, response));
}